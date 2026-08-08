// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dravanessazsilveira.com.br',
  build: {
    inlineStylesheets: 'always'
  },
  server: {
    open: true
  }
});
