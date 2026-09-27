# dravanessa-site — Project Journal

Persistence anchor for this workspace's agent memory. The agent maintains this file:
append notable decisions, changes, and session notes so they survive across chats and
sessions. Newest entries on top. `get_project_briefing` reads the sections below.

## About

_(Replace this with one or two sentences: what this workspace is and what it's for. This is the durable orientation shown to every session.)_

## Recent Changes

- **2026-09-27 (2)**: Botões de WhatsApp sem mensagem (Hero, Sobre, Resgate, rodapé, Contato, Política de Privacidade) agora usam `data-wa-origin` e recebem via script (em `WhatsAppFloat.astro`) mensagem com página + botão de origem. Auto-diagnóstico (`Dores.astro`) anexa os sintomas marcados, contagem e nível à mensagem; botão "Quero entender mais" rola para `#contato`.
- **2026-09-27**: Implementadas melhorias da auditoria de UX/conversão: CTAs das 12 páginas de sintomas/procedimentos agora abrem o WhatsApp direto com mensagem contextual; nova página `/barra-da-tijuca` (unidade RJ, usa por ora o mesmo WhatsApp de JF); CTA de auto-diagnóstico (`DiagnosticoCTA`) nas páginas de sintomas; avaliações Google 76 / Doctoralia 44; WhatsApp centralizado em `site.ts` (`waLink`, `barraDaTijuca`); linha "Atendimento particular" junto aos CTAs; e-mail alterado para contato@dravanessazsilveira.com.br; botão flutuante e contato com mensagem dinâmica por página; endereço do RJ no rodapé. Método Rearticular™ segue OCULTO de propósito (notas internas em `Metodo.astro`, `index.astro`, `Sobre.astro`).
- **2026-09-25**: Arquivada a branch de testes de identidade visual (`archive/idv-brasileira`) salva remotamente no GitHub. A branch contém todo o trabalho de experimentação (propostas de layout, Home-Rio, tokens de design, tipografias e fotos). O ambiente principal segue ativo na `main` sem interferências.
- **2026-09-12**: Atualizado favicon do site com versões 96x96 e 16x16 PNG em alta definição no `Layout.astro` e `site.webmanifest`.

## Session Memory

_(none yet)_
