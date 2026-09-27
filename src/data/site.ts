// Dados institucionais centralizados — única fonte de verdade para
// contato, endereço e redes sociais usados em vários componentes/páginas.
export const siteConfig = {
  name: 'Dra. Vanessa Silveira',
  role: 'Cirurgiã Bucomaxilofacial',
  cro: 'CRO-MG 52.491',
  url: 'https://dravanessazsilveira.com.br',

  phone: {
    display: '(32) 3212-8916',
    href: 'tel:+553232128916',
  },
  whatsapp: {
    display: '(32) 99851-3101',
    number: '5532998513101',
    href: 'https://wa.me/5532998513101',
  },
  email: 'contato@dravanessazsilveira.com.br',

  address: {
    clinic: 'SINPLA Odontologia',
    street: 'Av. Presidente Itamar Franco, 1545, Sala 1',
    cityLine: 'Centro, Juiz de Fora - MG',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.410218612151!2d-43.3486767!3d-21.764378999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69114eb777782f23%3A0x770d8b475353570a!2sVanessa%20Zaidan%20Silveira%20%7C%20Bucomaxilo%20%26%20DTM!5e0!3m2!1spt-BR!2sbr!4v1775234261310!5m2!1spt-BR!2sbr',
  },

  // Unidade Barra da Tijuca (RJ) — atendimento a partir de 10/10/2026.
  // O WhatsApp dedicado da unidade ainda será cadastrado; por enquanto
  // reaproveita o mesmo contato de Juiz de Fora para não perder leads.
  barraDaTijuca: {
    clinic: 'Dra. Vanessa Silveira — Barra da Tijuca',
    street: 'Av. das Américas, 3333 - Sl 503',
    cityLine: 'Barra da Tijuca, Rio de Janeiro - RJ, 22631-003',
    mapEmbedUrl:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('Av. das Américas, 3333 - Sl 503 - Barra da Tijuca, Rio de Janeiro - RJ, 22631-003') +
      '&output=embed',
    whatsapp: {
      display: '(32) 99851-3101',
      number: '5532998513101',
      href: 'https://wa.me/5532998513101',
    },
  },

  reviews: {
    google: {
      url: 'https://share.google/b7YaoFE5ZBsY1rLTI',
      rating: '5.0',
      count: 76,
    },
    doctoralia: {
      url: 'https://www.doctoralia.com.br/vanessa-zaidan-silveira/cirurgiao-buco-maxilo-facial/juiz-de-fora',
      rating: '5.0',
      count: 44,
    },
  },

  lattes: 'http://lattes.cnpq.br/7604292937964480',

  social: {
    instagram: 'https://www.instagram.com/dra.vanessasilveira/',
    linkedin: 'https://www.linkedin.com/in/vanessa-silveira/',
    youtube: 'https://www.youtube.com/@dra.vanessasilveira',
  },
};

/**
 * Monta um link do WhatsApp com mensagem pré-preenchida, usando sempre o
 * mesmo contato centralizado em `siteConfig` (ou o contato explícito
 * passado, ex: `siteConfig.barraDaTijuca.whatsapp`).
 */
export function waLink(
  message?: string,
  whatsapp: { href: string } = siteConfig.whatsapp
): string {
  return message ? `${whatsapp.href}?text=${encodeURIComponent(message)}` : whatsapp.href;
}
