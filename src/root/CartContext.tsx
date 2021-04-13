import { ProductItemProps } from 'components/molecules/ProductItem';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface ProductSchema extends ProductItemProps {
  quantity: number;
  subtotal: string;
}

export interface CartStorage extends Array<ProductSchema> {}

export interface Cart {
  cartStorage: CartStorage;
  setCartStorage: Dispatch<SetStateAction<CartStorage>>;
}

const CartContext = createContext<Cart>({
  cartStorage: [],
  setCartStorage: () => [],
});

export default CartContext;
