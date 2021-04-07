import { ProductItemProps } from 'components/molecules/ProductItem';
import mandarinSvg from './mandarin.jpg';

interface Data extends Array<ProductItemProps> {}

const products: Data = [
  {
    alt: 'An orange svg that shaped like a mandarin',
    price: 1.99,
    productName: 'Mandarin',
    src: mandarinSvg,
  },
];

export default products;
