import { ProductItemProps } from 'components/molecules/ProductItem';
import circle from './circle.jpg';
import kandinsky from './kandinsky.jpg';
import lilypad from './lilypad.jpg';
import lines from './lines.jpg';
import mandarin from './mandarin.jpg';
import rings from './rings.jpg';
import star from './shooting-star.jpg';
import square from './square.jpg';
import tempered from './tempered.jpg';
import tetris from './tetris.jpg';
import triad from './triad.jpg';
import triangle from './triangle.jpg';

interface Data extends Array<ProductItemProps> {}

const products: Data = [
  {
    alt: 'An orange svg that shaped like a mandarin',
    price: 1.99,
    productName: 'Mandarin',
    src: mandarin,
  },
  {
    alt: 'A light green svg shaped like a lilypad',
    price: 1.99,
    productName: 'Lilypad',
    src: lilypad,
  },
  {
    alt: 'A yellow svg shaped like a star',
    price: 1.99,
    productName: 'Star',
    src: star,
  },
  {
    alt: 'A purple circle svg',
    price: 1.99,
    productName: 'Circle',
    src: circle,
  },
  {
    alt: 'A pink square svg',
    price: 1.99,
    productName: 'Square',
    src: square,
  },
  {
    alt: 'A torquoise svg',
    price: 3.99,
    productName: 'Triangle',
    src: triangle,
  },
  {
    alt: '3 lines perpendicular to each other',
    price: 2.99,
    productName: 'Lines',
    src: lines,
  },
  {
    alt: '3 squares slightly overlapping each other',
    price: 1.99,
    productName: 'Tempered',
    src: tempered,
  },
  {
    alt: 'An svg that sort of resembles a Wassily Kandinsky painting',
    price: 24.99,
    productName: 'Kandinsky',
    src: kandinsky,
  },
  {
    alt: 'Hollowed dots with colored shapes around them',
    price: 14.99,
    productName: 'Tetris',
    src: tetris,
  },
  {
    alt: '3 triangles slightly overlapping each other, pointing upwards',
    price: 4.99,
    productName: 'Triad',
    src: triad,
  },
  {
    alt: '2 circles slightly overlapping each other',
    price: 4.99,
    productName: 'Rings',
    src: rings,
  },
];

export default products;
