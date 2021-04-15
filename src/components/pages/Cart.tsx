import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductRow } from 'components/molecules';
import { useWindowSize } from 'hooks';
import React, { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from 'root/CartContext';
import styled from 'styled-components/macro';
import { BREAKPOINT_SIZES } from '../../constants';
import { defaultButtonStyles, mediumButton, primaryButton } from '../atoms/Button';

const Cart = () => {
  document.title = 'Your Cart - The Elements';

  const { cartStorage, setCartStorage } = useContext(CartContext);
  const { width } = useWindowSize();
  const hasHamburgerMenu = width < BREAKPOINT_SIZES.med;
  const emptyCart = cartStorage.length === 0;
  const id = 'Quantity';

  const TWO_DECIMAL_PLACES = 2;
  const total: number = cartStorage.reduce((sum, { subtotal }) => sum + parseFloat(subtotal), 0);
  const roundedTotal = total.toFixed(TWO_DECIMAL_PLACES);

  const removeItem = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;
    setCartStorage(cartStorage.filter((item) => item.productName !== name));
  };

  return (
    <Wrapper>
      <Title emptyCart>My Cart</Title>
      {emptyCart ? (
        <>
          <EmptyCart>Your cart is currently empty.</EmptyCart>
          <ContinueShopping to="/shop">
            Continue Shopping
            <FontAwesomeIcon icon={faArrowRight} />
          </ContinueShopping>
        </>
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
              <Amount>${roundedTotal}</Amount>
            </Subtotal>
            <Checkout type="submit" name="checkout" value="Checkout" />
          </OrderSummary>
        </Form>
      )}
    </Wrapper>
  );
};

const EmptyCart = styled.p`
  font-size: 1.25em;
  text-align: center;
  padding-bottom: 2rem;
`;

const ContinueShopping = styled(Link)`
  ${defaultButtonStyles}
  ${mediumButton}
  ${primaryButton}

  & > svg {
    font-size: 1em;
    margin-left: 0.8rem;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 7.2rem 1.4rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 7.2rem 2.8rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
  }
`;

const Form = styled.form`
  display: grid;
  max-width: 80rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.75em;
  font-weight: 700;
  padding-bottom: ${(props: { emptyCart: boolean }) => (props.emptyCart ? '2rem' : '2.8rem')};
`;

const Table = styled.table`
  text-align: right;
`;

const TableRow = styled.tr`
  box-shadow: 0px 1px 0px 0px hsl(0deg 0% 0% / 20%);

  & > th:first-child {
    text-align: left;
  }

  & > th:nth-child(2):not(:last-child) {
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
  display: inline-block;
  min-width: 18rem;
  padding-left: 5.6rem;
  text-align: right;
`;

const Checkout = styled.input`
  ${defaultButtonStyles}
  ${mediumButton}
  ${primaryButton}
`;

export default Cart;
