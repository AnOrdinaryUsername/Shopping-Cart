import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from 'components/atoms';
import { useWindowSize } from 'hooks';
import React, { ChangeEvent, MouseEventHandler, useContext, useState } from 'react';
import LazyLoad from 'react-lazyload';
import CartContext from 'root/CartContext';
import styled from 'styled-components/macro';
import { BREAKPOINT_SIZES } from '../../constants';
import { ProductItemProps } from './ProductItem';

interface ProductRowProps extends ProductItemProps {
  removeItem: MouseEventHandler<HTMLButtonElement>;
  quantityId: string;
}

const ProductRow = ({ alt, removeItem, price, productName, src, quantityId }: ProductRowProps) => {
  const { cartStorage, setCartStorage } = useContext(CartContext);
  const { width } = useWindowSize();
  const hasHamburgerMenu = width < BREAKPOINT_SIZES.med;
  const product = cartStorage.filter((item) => item.productName === productName);
  const quantity = product[0].quantity;
  const subtotal = product[0].subtotal;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const updateQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    const currentValue = Number(value);
    const TWO_DECIMAL_PLACES = 2;

    const updatedCart = cartStorage.map((item) =>
      `${item.productName}${quantityId}` === id
        ? {
            ...item,
            quantity: currentValue,
            subtotal: (currentValue * price).toFixed(TWO_DECIMAL_PLACES),
          }
        : item
    );

    setItemQuantity(Number(value));
    setCartStorage(updatedCart);
  };

  return (
    <Wrapper>
      <Left>
        <FlexRow>
          <LazyLoad height={'100%'} once>
            <Image alt={alt} src={src} />
          </LazyLoad>
          <ProductInfo>
            <Name>{productName}</Name>
            <Price>${price}</Price>
            <RemoveButton variant="tertiary" size="small" name={productName} onClick={removeItem}>
              <FontAwesomeIcon icon={faTrash} />
              Remove
            </RemoveButton>
          </ProductInfo>
        </FlexRow>
      </Left>
      {!hasHamburgerMenu && (
        <Middle>
          <HiddenLabel htmlFor={`${productName}${quantityId}`}>Quantity</HiddenLabel>
          <SelectAmount
            type="number"
            value={itemQuantity}
            min="1"
            max="50"
            pattern="[0-9]"
            id={`${productName}${quantityId}`}
            onChange={updateQuantity}
          />
        </Middle>
      )}
      <End>
        <FinalPrice hasHamburgerMenu>${subtotal}</FinalPrice>
        {hasHamburgerMenu && (
          <>
            <VisibleLabel htmlFor={`${productName}${quantityId}`} aria-label="Quantity">
              Qty
            </VisibleLabel>
            <SelectAmount
              type="number"
              value={itemQuantity}
              min="1"
              max="50"
              pattern="[0-9]"
              id={`${productName}${quantityId}`}
              onChange={updateQuantity}
            />
          </>
        )}
      </End>
    </Wrapper>
  );
};

const Wrapper = styled.tr`
  display: table-row;
  line-height: 1.5;
  box-shadow: 0px 1px 0px 0px hsl(0deg 0% 0% / 20%);

  & > td {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
  }

  & > td:nth-child(2):not(:last-child) {
    text-align: center;
  }
`;

const Left = styled.td`
  & img {
    max-width: 10rem;
    border-radius: 0.5rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  padding: 2.4rem;
  padding-left: 0;
  text-align: left;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  max-width: 40rem;
  width: 100%;
  padding: 0 1.6rem;

  & > *:not(:last-child) {
    padding-bottom: 0.6rem;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0 3.2rem;
  }
`;

const Name = styled.span`
  font-weight: 800;
  font-size: 1.25em;
  line-height: 1;
`;

const Price = styled.span`
  display: inline-block;
  font-size: 1em;
  font-weight: 700;
  max-width: 11rem;
  width: 100%;
`;

const RemoveButton = styled(Button)`
  font-size: 0.875em;
  padding-left: 0;

  & > svg {
    align-items: center;
    margin-right: 0.8rem;
  }
`;

const Middle = styled.td`
  text-align: center;
`;

const HiddenLabel = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const End = styled.td`
  text-align: right;
`;

const VisibleLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  font-size: 0.75em;
  margin-right: 0.8rem;
`;

const SelectAmount = styled.input`
  max-width: 7rem;
  width: 100%;
  font-size: 1em;
  padding: 1.4rem;
  text-align: center;
  box-shadow: 0px 2px 4px 0px hsl(0deg 0% 0% / 20%);
  outline: none;
  appearance: none;
  border: none;
  border-radius: 0.5rem;
`;

const FinalPrice = styled.span`
  display: block;
  font-size: 1.25em;
  font-weight: 300;
  padding: ${(props: { hasHamburgerMenu: boolean }) =>
    props.hasHamburgerMenu ? '0 0 0.8rem 0' : '1.6rem 3.2rem'};
  padding-right: 0;
`;

export default ProductRow;
