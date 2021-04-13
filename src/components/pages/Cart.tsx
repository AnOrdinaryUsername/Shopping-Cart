import { ProductRow } from 'components/molecules';
import { useWindowSize } from 'hooks';
import React, { MouseEvent, useContext } from 'react';
import CartContext from 'root/CartContext';
import styled from 'styled-components/macro';
import { BREAKPOINT_SIZES } from '../../constants';
import { defaultButtonStyles, mediumButton, primaryButton } from '../atoms/Button';

const Cart = () => {
  const { cartStorage, setCartStorage } = useContext(CartContext);
  const { width } = useWindowSize();
  const hasHamburgerMenu = width < BREAKPOINT_SIZES.med;
  const id = 'Quantity';

  const removeItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    setCartStorage(cartStorage.filter((item) => item.productName !== name));
  };

  return (
    <Wrapper>
      <Title>My Cart</Title>
      {cartStorage.length === 0 ? (
        <EmptyCart>Your cart is currently empty.</EmptyCart>
      ) : (
        <Form>
          <Table>
            <thead>
              <TableRow>
                <th scope="col">Product</th>
                {!hasHamburgerMenu && <th scope="col">Quantity</th>}
                <th scope="col">Total</th>
              </TableRow>
            </thead>
            <tbody>
              {cartStorage.map((props, index) => (
                <ProductRow removeItem={removeItem} quantityId={id} key={index} {...props} />
              ))}
            </tbody>
          </Table>
          <OrderSummary>
            <Subtotal>
              <span>Subtotal</span>
              <Amount>$ NaN</Amount>
            </Subtotal>
            <Checkout type="submit" name="checkout" value="Checkout" />
          </OrderSummary>
        </Form>
      )}
    </Wrapper>
  );
};

const EmptyCart = styled.p`
  text-align: center;
`;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 1.4rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 2.8rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
  }
`;

const Form = styled.form`
  display: grid;
  max-width: 60rem;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2.25em;
  font-weight: 700;
  padding-bottom: 2.8rem;
`;

const Table = styled.table`
  text-align: right;
`;

const TableRow = styled.tr`
  box-shadow: 0px 1px 0px 0px hsl(0deg 0% 0% / 20%);

  & > th:first-child {
    text-align: left;
  }

  & > th:nth-child(2) {
    text-align: center;
  }

  & > th {
    padding-top: 2.8rem;
    padding-bottom: 2.8rem;
  }
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 3.2rem;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  font-weight: 300;
  width: fit-content;
  padding-bottom: 1.6rem;
`;

const Amount = styled.span`
  padding-left: 5.6rem;
`;

const Checkout = styled.input`
  ${defaultButtonStyles}
  ${mediumButton}
  ${primaryButton}
`;

export default Cart;
