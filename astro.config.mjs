// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import maplibreAssets from './scripts/vendor-maplibre.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [maplibreAssets()],
  vite: {
    plugins: [tailwindcss()]
  }
});