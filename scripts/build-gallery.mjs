// Pre-renders the gallery's photographs as small WebP files.
//
// The site's photographs live in public/, which Astro serves untouched, and
// several are 2–8 MB originals. The gallery shows dozens at once, so each is
// rendered once here at three widths — two for the grid's srcset, one for the
// lightbox — and the page never loads an original.
//
// Run after changing scripts/gallery-sources.json or replacing a photograph:
//   node scripts/build-gallery.mjs
// Output: public/images/gallery/*.webp and src/data/gallery.json (committed).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const images = path.join(root, "public/images");
const outDir = path.join(images, "gallery");
const GRID = [480, 960];
const FULL = 1600;

const sources = JSON.parse(await readFile(path.join(root, "scripts/gallery-sources.json"), "utf8"));

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const entries = [];
for (const { src, alt, group } of sources) {
  const base = src.replace(/\.[a-z]+$/i, "").replaceAll("/", "-");
  const input = sharp(path.join(images, src)).rotate();
  const { width, height } = await input.metadata();

  const render = async (target, quality) => {
    const w = Math.min(target, width);
    const file = `${base}-${w}.webp`;
    await input.clone().resize({ width: w }).webp({ quality, effort: 6 }).toFile(path.join(outDir, file));
    return { w, url: `/images/gallery/${file}` };
  };

  const grid = [];
  for (const w of GRID) grid.push(await render(w, 72));
  const full = await render(FULL, 74);

  // A 16px-wide blur of the photo, inlined as the tile's background so the
  // grid shows colour before the thumbnail arrives.
  const placeholder = await input.clone().resize({ width: 16 }).webp({ quality: 40 }).toBuffer();

  entries.push({
    group,
    alt,
    width: grid[0].w,
    height: Math.round((grid[0].w * height) / width),
    src: grid[0].url,
    srcset: [...new Map(grid.map((g) => [g.w, `${g.url} ${g.w}w`])).values()].join(", "),
    full: full.url,
    placeholder: `data:image/webp;base64,${placeholder.toString("base64")}`,
  });
  console.log(`✓ ${src}`);
}

await writeFile(path.join(root, "src/data/gallery.json"), JSON.stringify(entries, null, 2) + "\n");
console.log(`${entries.length} photographs → public/images/gallery`);
