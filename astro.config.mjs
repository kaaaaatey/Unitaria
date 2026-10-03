// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Static output for now. Add @astrojs/vercel when we connect a repo to Vercel.
export default defineConfig({
  site: 'https://unitaria.example', // placeholder until a domain exists
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});
