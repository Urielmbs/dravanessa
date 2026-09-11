// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dravanessazsilveira.com.br',
  build: {
    // 'auto': o Astro inlina só as folhas de estilo pequenas e extrai as
    // maiores para um arquivo .css externo cacheável — com 22 páginas e
    // navegação interna frequente, isso evita rebaixar ~45KB de CSS a
    // cada clique no menu.
    inlineStylesheets: 'auto'
  },
  server: {
    open: true
  }
});
