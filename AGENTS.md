# dravanessa-site — Project Journal

Persistence anchor for this workspace's agent memory. The agent maintains this file:
append notable decisions, changes, and session notes so they survive across chats and
sessions. Newest entries on top. `get_project_briefing` reads the sections below.

## About

_(Replace this with one or two sentences: what this workspace is and what it's for. This is the durable orientation shown to every session.)_

## Recent Changes

- **2026-09-15**: Refinamento de acabamento da IDV brasileira (branch `idv-brasileira`). Diagnóstico: `border: 2px solid var(--rio-coffee)` + sombra sólida deslocada estava aplicada em 11 tipos de elemento, o que reintroduzia encaixotamento e anulava a hierarquia. Introduzida escala de elevação por papel (nível 0 ar / nível 1 fio `--rio-rule` / nível 2 serigrafia `--rio-ink-press`, limitado ao CTA primário e à foto âncora). Sete movimentos: botão primário sem moldura com hover que afunda; hierarquia entre os quatro botões; sublinhado animado como assinatura (link de rolagem, menu, rodapé, barra de anúncio); eyebrows com anatomia única de fio de 18px (`.rio-eyebrow-light` não tinha CSS nenhum); `✦` como marcador único no lugar do quadrado terracota; fotos com chapa de papel deslocada no lugar de moldura, com sangria no desktop; 8 tokens novos de acabamento e movimento. Corrigidos também: `:focus-visible` ausente em todo o site, `transition: all` trocado por propriedades explícitas, e `backdrop-filter` do nav que não tinha efeito por causa do fundo opaco. Nenhuma mudança de estrutura ou de conteúdo — só acabamento.
- **2026-09-12**: Criada a página `src/pages/home-rio.astro` com reconstrução completa da Home sob a nova Identidade Visual Brasileira (sem bento boxes, color blocking, tipografia Fraunces, anúncio da expansão para Barra da Tijuca - RJ e integração estratégica de 5 novas fotos da Dra. Vanessa Silveira).
- **2026-09-12**: Criada a branch `idv-brasileira` para o redesign visual da Dra. Vanessa Silveira. Definida estética brasileira fundamentada na raiz carioca praiana vintage (tons solares, linho/areia, terracota, turquesa mar aberto, café torrado e granulado analógico leve). Criados `src/styles/idv-brasileira.css` e página de laboratório visual `src/pages/idv-brasileira.astro`.
- **2026-09-12**: Atualizado favicon do site com versões 96x96 e 16x16 PNG em alta definição no `Layout.astro` e `site.webmanifest`.

## Session Memory

_(none yet)_
