# dravanessa-site — Project Journal

Persistence anchor for this workspace's agent memory. The agent maintains this file:
append notable decisions, changes, and session notes so they survive across chats and
sessions. Newest entries on top. `get_project_briefing` reads the sections below.

## About

_(Replace this with one or two sentences: what this workspace is and what it's for. This is the durable orientation shown to every session.)_

## Recent Changes

- **2026-09-27 (6)**: Nova landing page de Google Ads `/lp-dtm-bruxismo` (DTM e bruxismo, Juiz de Fora), a partir do roteiro `copy-landing-dtm-bruxismo.md`. Página isolada: `noindex`, fora do menu/sitemap, sem Nav/Footer do site (cabeçalho e rodapé mínimos), sem botão flutuante. Os 3 CTAs usam exatamente o link de WhatsApp do roteiro (não usar `waLink`/`data-wa-origin`) e enviam `lp_whatsapp_click` ao dataLayer (`lp_name`, `cta_position`: hero/sintomas/cta-final) — usar esse evento como gatilho da conversão no GTM. Foto usa por ora `dra-vanessa-sobre.jpg` (marcada com `<!-- TODO: foto -->`). Variante Barra da Tijuca (a partir de 10/10/2026) ainda não criada: trocar `local` para `siteConfig.barraDaTijuca` no bloco 8.
- **2026-09-27 (5)**: Adicionada foto do edifício Blue Chip (fachada, Av. das Américas, 3333) na página `/barra-da-tijuca`, logo após o texto de abertura. Otimizada em build pelo Astro (`astro:assets`, webp, 900px, quality 75): de 3,2MB para ~100KB.
- **2026-09-27 (4)**: Criada a página de link da bio do Instagram `/links` (mobile first, paleta azul, `noindex`, fora do menu e do sitemap, sem botão flutuante). Avaliações (Google/Doctoralia) e link do Lattes centralizados em `site.ts`; `Layout.astro` ganhou props `noindex` e `showWhatsAppFloat`. `/barra-da-tijuca` incluída no `public/sitemap.xml` (mantido à mão).
- **2026-09-27 (3)**: Auto-diagnóstico: botão de WhatsApp agora ativa com 1 sintoma. Hero da home reescrito (título "Dor na mandíbula que ninguém explica? Tem causa e tem tratamento.", subtítulo com sintomas, pílula com as localidades JF/RJ; título mais largo/menor no desktop). Corrigido estouro horizontal no mobile: `box-sizing: border-box` global (Nav/Footer ficam fora de `.vs-section`), grids com `minmax(0, 1fr)`, `overflow-wrap` global, e-mail quebrável, títulos menores/hifenizados em ≤600px.
- **2026-09-27 (2)**: Botões de WhatsApp sem mensagem (Hero, Sobre, Resgate, rodapé, Contato, Política de Privacidade) agora usam `data-wa-origin` e recebem via script (em `WhatsAppFloat.astro`) mensagem com página + botão de origem. Auto-diagnóstico (`Dores.astro`) anexa os sintomas marcados, contagem e nível à mensagem; botão "Quero entender mais" rola para `#contato`.
- **2026-09-27**: Implementadas melhorias da auditoria de UX/conversão: CTAs das 12 páginas de sintomas/procedimentos agora abrem o WhatsApp direto com mensagem contextual; nova página `/barra-da-tijuca` (unidade RJ, usa por ora o mesmo WhatsApp de JF); CTA de auto-diagnóstico (`DiagnosticoCTA`) nas páginas de sintomas; avaliações Google 76 / Doctoralia 44; WhatsApp centralizado em `site.ts` (`waLink`, `barraDaTijuca`); linha "Atendimento particular" junto aos CTAs; e-mail alterado para contato@dravanessazsilveira.com.br; botão flutuante e contato com mensagem dinâmica por página; endereço do RJ no rodapé. Método Rearticular™ segue OCULTO de propósito (notas internas em `Metodo.astro`, `index.astro`, `Sobre.astro`).
- **2026-09-25**: Arquivada a branch de testes de identidade visual (`archive/idv-brasileira`) salva remotamente no GitHub. A branch contém todo o trabalho de experimentação (propostas de layout, Home-Rio, tokens de design, tipografias e fotos). O ambiente principal segue ativo na `main` sem interferências.
- **2026-09-12**: Atualizado favicon do site com versões 96x96 e 16x16 PNG em alta definição no `Layout.astro` e `site.webmanifest`.

## Session Memory

_(none yet)_
