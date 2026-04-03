// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    ssr: {
      external: ['node:crypto', 'node:stream', 'node:fs']
    }
  }
});
