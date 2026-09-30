// Pre-renders a small local thumbnail of every lodge's hero photo.
//
// Lodge galleries are hot-linked originals — often 300 KB to 1 MB each — and
// the accommodations page shows every hero at once. Here each hero is fetched
// once and saved as a 600px WebP; the page shows the thumbnail and the
// lightbox still opens the originals.
//
// Run after adding a lodge or changing its first photo:
//   node scripts/build-lodge-thumbs.mjs
// Output: public/images/lodges/*.webp and src/data/lodge-thumbs.json (committed).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public/images/lodges");
const sources = ["src/data/accommodation.ts", "src/data/zanzibar-accommodation.ts"];

// The first URL of each lodge(...) call is its hero.
const heroes = new Set();
for (const file of sources) {
  const text = await readFile(path.join(root, file), "utf8");
  for (const [, url] of text.matchAll(/lodge\("[^"]+",\s*\[\s*"([^"]+)"/g)) heroes.add(url);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const thumbs = {};
for (const url of heroes) {
  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`✗ ${response.status} ${url}`);
    continue;
  }
  const name = `${createHash("sha1").update(url).digest("hex").slice(0, 12)}.webp`;
  await sharp(Buffer.from(await response.arrayBuffer()))
    .rotate()
    .resize({ width: 600, height: 400, fit: "cover" })
    .webp({ quality: 72, effort: 6 })
    .toFile(path.join(outDir, name));
  thumbs[url] = `/images/lodges/${name}`;
  console.log(`✓ ${url.split("/").pop()}`);
}

await writeFile(path.join(root, "src/data/lodge-thumbs.json"), JSON.stringify(thumbs, null, 2) + "\n");
console.log(`${Object.keys(thumbs).length} of ${heroes.size} heroes → public/images/lodges`);
