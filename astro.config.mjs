// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import maplibreAssets from './scripts/vendor-maplibre.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atlastanzania.com',
  integrations: [maplibreAssets(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});