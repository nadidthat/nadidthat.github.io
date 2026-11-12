// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update this to the real production domain before deploying — it powers
// canonical URLs, Open Graph tags, and the generated sitemap.
export default defineConfig({
  site: 'https://nadidthat.github.io',
  integrations: [icon(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
