// MapLibre v6 is ESM-only and loads its web worker with
// `new URL("./maplibre-gl-worker.mjs", import.meta.url)`. Vite does not emit
// that sibling module when it bundles the library, so the worker 404s and the
// map never paints. Serving the worker (and the chunk it imports) as static
// assets lets `setWorkerUrl` point at a copy whose relative imports resolve;
// see src/components/journey/RouteMap.astro.
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FROM = join(ROOT, "node_modules/maplibre-gl/dist");
export const VENDOR_DIR = join(ROOT, "public/vendor/maplibre");

// The worker, plus the shared chunk it imports.
const FILES = ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"];

export async function vendorMaplibre() {
  await mkdir(VENDOR_DIR, { recursive: true });
  await Promise.all(FILES.map((f) => copyFile(join(FROM, f), join(VENDOR_DIR, f))));
}

/** Astro integration so the copy runs for `astro dev` and `astro build` alike. */
export default function maplibreAssets() {
  return {
    name: "vendor-maplibre",
    hooks: {
      "astro:config:setup": () => vendorMaplibre(),
    },
  };
}
