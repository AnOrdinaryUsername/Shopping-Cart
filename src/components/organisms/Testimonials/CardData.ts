import janeDoeSrc from 'assets/images/testimonial-1.jpg';
import randomStartupDudeSrc from 'assets/images/testimonial-2.jpg';
import neighborSrc from 'assets/images/testimonial-3.jpg';

export interface CardData {
  src: string;
  description: string;
  name: string;
  jobTitle: string;
}

interface CardStorage extends Array<CardData> {}

const Cards: CardStorage = [
  {
    src: janeDoeSrc,
    description:
      'The SVGs are beautifully handcrafted with a fine attention to detail. ' +
      'Every developer needs quality SVGs like these and I highly recommend them.',
    name: 'Jane Doe',
    jobTitle: 'Freelance Developer',
  },
  {
    src: randomStartupDudeSrc,
    description:
      'As a frontend developer, creating visually pleasing svgs is a hard and laborious ' +
      'task that takes up too much development time. The Elements provide a ' +
      'much needed solution for background design.',
    name: 'Random Startup Dude',
    jobTitle: 'Frontend Developer',
  },
  {
    src: neighborSrc,
    description: 'My wife left me.',
    name: 'My neighbor',
    jobTitle: 'Neighbor',
  },
];

export default Cards;
