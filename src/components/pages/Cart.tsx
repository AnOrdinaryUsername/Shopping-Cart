import { ProductRow } from 'components/molecules';
import React, { MouseEvent, useContext } from 'react';
import CartContext from 'root/CartContext';
import styled from 'styled-components';
import uniqid from 'uniqid';

const Cart = () => {
  const { cartStorage, setCartStorage } = useContext(CartContext);
  let cartContents = null;

  const removeItem = (event: MouseEvent<HTMLButtonElement>) => {
    const cell = event.currentTarget;
    const productRow = cell.parentElement as HTMLTableRowElement;
    const itemIndex = productRow.rowIndex;
    const updatedCart = cartStorage.splice(itemIndex, 1);
    setCartStorage(updatedCart);
  };

  if (cartStorage.length === 0) {
    cartContents = <EmptyCart>Your cart is currently empty.</EmptyCart>;
  } else {
    cartContents = cartStorage.map((props) => (
      <ProductRow removeItem={removeItem} key={uniqid()} {...props} />
    ));
  }

  return (
    <Wrapper>
      <Title>Cart</Title>
      {cartContents}
    </Wrapper>
  );
};

const EmptyCart = styled.p`
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 80rem;
  width: 100%;
`;
const Title = styled.div`
  font-size: 2.25em;
  font-weight: 700;
`;

export default Cart;
