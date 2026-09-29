// Depoimentos de pacientes — fonte única para a home e as landing pages.
export interface Depoimento {
  texto: string;
  nome: string;
  iniciais: string;
  meta: string;
  // Assunto do relato, para cada landing page exibir só os pertinentes
  // (ex.: a LP de cirurgia não mostra relatos de DTM).
  tema: 'dtm' | 'sisos' | 'geral';
  // Link público da avaliação original (ex.: perfil do autor no Google).
  link?: string;
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
    tema: 'dtm',
  },
  {
    texto:
      'Profissionalismo e humanidade. A Dra. Vanessa escuta de verdade. Me senti acolhido desde a primeira consulta, e o tratamento mudou completamente a minha qualidade de vida.',
    nome: 'José A.',
    iniciais: 'JA',
    meta: 'Paciente há 1 ano',
    tema: 'geral',
  },
  {
    texto:
      'Depois de passar por vários especialistas sem resultado, encontrei a Dra. Vanessa. O Método Rearticular™ fez toda a diferença — finalmente consigo dormir sem dor.',
    nome: 'Lucia S.',
    iniciais: 'LS',
    meta: 'Paciente há 3 anos',
    tema: 'dtm',
    citaMetodo: true,
  },

  // Avaliações 5 estrelas no Google de pacientes de extração de sisos,
  // transcritas sem edição.
  {
    texto:
      'Simplesmente a melhor de JF! Estava com 2 sisos para extrair, sendo que 1 deles era incluso, sentindo muita dor porém com muito medo de remover por conta de uma outra pessima experiência, mas a Dra Vanessa foi maravilhosa e atenciosa em cada detalhe, a cirurgia foi extremamente tranquila e também foi rápida, e o pós operatório foi mil vezes melhor do que eu esperava que seria, sem dor, sem inchaço, sei que tudo isso só se deu pela profissional de excelência que ela é! Só tenho a agradecer! 🤍',
    nome: 'Camila Batista',
    iniciais: 'CB',
    meta: 'Extração de 2 sisos · Google',
    tema: 'sisos',
    link: 'https://www.google.com/maps/contrib/108389948604256775881/reviews?hl=pt-BR',
  },
  {
    texto:
      'Dra. Vanessa é maravilhosa, foi a melhor dentista em que ja me consultei! Fiz a extração de quatro sisos com ela. Extremamente zelosa e empática, recomendo a todos de olhos fechados! Já fiz propaganda para todo mundo, rs. Muito bom ser atendida por alguém com tanta humildade e amor pela profissão.',
    nome: 'Maria Eduarda',
    iniciais: 'ME',
    meta: 'Extração de 4 sisos · Google',
    tema: 'sisos',
    link: 'https://www.google.com/maps/contrib/110926501765989060482/reviews?hl=pt-BR',
  },
  {
    texto:
      'Sempre tive medo de dentista , mas a Dra desde do início sempre teve calma ao explicar o procedimento , me deixando mais tranquila , e no dia também , foi super tranquilo o procedimento de extração , não senti dor , incomodo , a recuperação também foi super tranquila, me orientou sobre os medicamentos e cuidados . Faz toda diferença encontrar uma profissional igual a ela . Indicarei sempre !!!',
    nome: 'Thais Hagle',
    iniciais: 'TH',
    meta: 'Extração de siso · Google',
    tema: 'sisos',
    link: 'https://www.google.com/maps/contrib/117106556003254605798/reviews?hl=pt-BR',
  },
  {
    texto:
      'Excelente experiência, Dra. Vanessa é maravilhosa, super atenciosa e paciente, fiz uma extração do siso, e não senti absolutamente nenhuma dor. Se pudesse dar mais estrelas com certeza daria.',
    nome: 'Larissa Seglin',
    iniciais: 'LS',
    meta: 'Extração de siso · Google',
    tema: 'sisos',
    link: 'https://www.google.com/maps/contrib/114827167891909616350/reviews?hl=pt-BR',
  },
];
