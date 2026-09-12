"""Verify built itinerary pages preserve all source text and only the current catalogue.

Run after npm run build. Pass --source-dir to additionally verify the original DOCX files.
"""
import argparse
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from zipfile import ZipFile
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.source_depth = 0
        self.source_text = []
        self.ids = set()
        self.links = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
        if 'data-source-content' in attrs:
            self.source_depth = 1
        elif self.source_depth:
            self.source_depth += 1

    def handle_endtag(self, tag):
        if self.source_depth:
            self.source_depth -= 1
            self.source_text.append(' ')

    def handle_data(self, data):
        if self.source_depth:
            self.source_text.append(data)


def normalize(text):
    return re.sub(r'\s+', ' ', text).strip()


def docx_text(path):
    ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    with ZipFile(path) as archive:
        root = ET.fromstring(archive.read('word/document.xml'))
    paragraphs = []
    for p in root.iter(ns + 'p'):
        parts = []
        for node in p.iter():
            if node.tag == ns + 't':
                parts.append(node.text or '')
            elif node.tag in (ns + 'br', ns + 'tab'):
                parts.append(' ')
        paragraphs.append(''.join(parts))
    return normalize(' '.join(paragraphs))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source-dir', type=Path)
    args = parser.parse_args()
    entries = json.loads((ROOT / 'src/data/itinerary-documents.json').read_text())
    assert len(entries) == 17
    assert sum(e['activity'] != 'guide' for e in entries) == 15
    assert len({e['slug'] for e in entries}) == len(entries)
    dist = ROOT / 'dist'
    pages = {p: Page(p.read_text()) for p in dist.rglob('*.html')}
    for entry in entries:
        original = normalize(' '.join(b['text'] for b in entry['blocks']))
        page = pages[dist / 'journeys' / entry['slug'] / 'index.html']
        rendered = normalize(''.join(page.source_text))
        assert rendered == original, f'Copy differs: {entry["slug"]}'
        if args.source_dir:
            source = args.source_dir / entry['sourceFile']
            assert hashlib.sha256(source.read_bytes()).hexdigest() == entry['sourceSha256'], f'Source file changed: {source.name}'
            assert docx_text(source) == original, f'DOCX extraction differs: {source.name}'
        assert (ROOT / 'public' / entry['image'].lstrip('/')).is_file()
    actual = {p.parent.name for p in pages if p.parent.parent == dist / 'journeys'}
    assert actual == {entry['slug'] for entry in entries}, 'Stale or missing itinerary routes'
    links = 0
    for path, page in pages.items():
        for href in page.links:
            # Other pages are checked only for links into the replaced catalogue.
            if dist / 'journeys' not in path.parents and not href.startswith('/journeys'):
                continue
            if not href.startswith(('/', '#')) or href.startswith('//'):
                continue
            link = urlsplit(href)
            target = dist / link.path.strip('/') / 'index.html' if link.path else path
            assert target in pages, f'Broken local route: {path}: {href}'
            if link.fragment:
                assert link.fragment in pages[target].ids, f'Broken anchor: {path}: {href}'
            links += 1
    print(f'PASS: 17 documents, 15 itineraries, exact source copy, no stale routes, {links} catalogue links.')

if __name__ == '__main__':
    main()
