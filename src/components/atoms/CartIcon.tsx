import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as MobileHeaderWrapper } from 'components/organisms/Header';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from 'root/CartContext';
import styled from 'styled-components/macro';

const CartIcon = () => {
  const { cartStorage } = useContext(CartContext);
  const count = cartStorage.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <Wrapper to="/cart">
      <Cart icon={faShoppingCart} />
      <ItemCount>{count}</ItemCount>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  position: relative;

  ${MobileHeaderWrapper} & {
    align-self: center;
  }
`;

const Cart = styled(FontAwesomeIcon)`
  font-size: 3.2rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: inherit;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  top: -12px;
  left: 61%;
  transform: translate(-50%, 0);
  z-index: 1;
  font-size: 1.25em;
  font-weight: 800;
  color: var(--bg-color);
  -webkit-text-fill-color: var(--bg-color);
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--font-color);

  @media ${(p) => p.theme.breakpoints.med} {
    top: -11px;
    left: 55%;
    font-size: 0.75em;
  }
`;

export default CartIcon;
