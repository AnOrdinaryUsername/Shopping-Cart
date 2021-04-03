interface FooterLinks {
  name: string;
  route: string;
}

export interface Columns {
  heading: string;
  links: Array<FooterLinks>;
}

interface Data extends Array<Columns> {}

const columnData: Data = [
  {
    heading: 'Company',
    links: [
      {
        name: 'About us',
        route: '/about',
      },
      {
        name: 'Terms of service',
        route: '/terms-of-service',
      },
      {
        name: 'Privacy policy',
        route: '/privacy-policy',
      },
      {
        name: 'Contact us',
        route: '/contact',
      },
    ],
  },
  {
    heading: 'Support',
    links: [
      {
        name: 'FAQ',
        route: '/faq',
      },
      {
        name: 'Feature requests',
        route: '/feature-requests',
      },
      {
        name: 'Get support',
        route: '/support',
      },
    ],
  },
];

export default columnData;
