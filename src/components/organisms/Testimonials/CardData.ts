import janeDoeSrc from 'assets/images/testimonial-1.jpg';
import randomStartupDudeSrc from 'assets/images/testimonial-2.jpg';
import neighborSrc from 'assets/images/testimonial-3.jpg';

export interface CardData {
  src: string;
  description: string;
  name: string;
  jobTitle: string;
  shadowColor: string;
}

interface CardStorage extends Array<CardData> {}

const Cards: CardStorage = [
  {
    src: janeDoeSrc,
    description:
      'The SVGs are beautifully handcrafted with fine attention to detail. ' +
      'Every developer needs high-quality SVGs like these, and I highly recommend them.',
    name: 'Jane Doe',
    jobTitle: 'Freelance Developer',
    shadowColor: 'hsl(49, 84%, 68%)',
  },
  {
    src: randomStartupDudeSrc,
    description:
      'As a frontend developer, creating visually pleasing svgs is a hard and laborious ' +
      'task that takes up too much development time. The Elements provides a ' +
      'much-needed solution for background design.',
    name: 'Random Startup Dude',
    jobTitle: 'Frontend Developer',
    shadowColor: 'hsl(0, 0%, 25%)',
  },
  {
    src: neighborSrc,
    description: 'My wife left me.',
    name: 'My neighbor',
    jobTitle: 'Neighbor',
    shadowColor: 'hsl(239, 22%, 29%)',
  },
];

export default Cards;
