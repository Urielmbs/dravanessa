// Depoimentos de pacientes — fonte única para a home e as landing pages.
export interface Depoimento {
  texto: string;
  nome: string;
  iniciais: string;
  meta: string;
  // Cita o Método Rearticular™, que está oculto do site (ver nota em Sobre.astro):
  // landing pages não exibem esses depoimentos, pois não há contexto para o método.
  citaMetodo?: boolean;
}

export const depoimentos: Depoimento[] = [
  {
    texto:
      'Sofri com dores na mandíbula por anos. A Dra. Vanessa foi a primeira profissional que realmente descobriu a causa e me tratou de forma completa. Hoje vivo sem dor.',
    nome: 'Maria C.',
    iniciais: 'MC',
    meta: 'Paciente há 2 anos',
  },
  {
    texto:
      'Profissionalismo e humanidade. A Dra. Vanessa escuta de verdade. Me senti acolhido desde a primeira consulta, e o tratamento mudou completamente a minha qualidade de vida.',
    nome: 'José A.',
    iniciais: 'JA',
    meta: 'Paciente há 1 ano',
  },
  {
    texto:
      'Depois de passar por vários especialistas sem resultado, encontrei a Dra. Vanessa. O Método Rearticular™ fez toda a diferença — finalmente consigo dormir sem dor.',
    nome: 'Lucia S.',
    iniciais: 'LS',
    meta: 'Paciente há 3 anos',
    citaMetodo: true,
  },
];
