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
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const total = quantity * price;
  const TWO_DECIMAL_PLACES = 100;
  const roundedPrice =
    Math.round((total + Number.EPSILON) * TWO_DECIMAL_PLACES) / TWO_DECIMAL_PLACES;

  const updateQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    const updatedCart = cartStorage.map((item) =>
      `${item.productName}${quantityId}` === name
        ? {
            ...item,
            quantity: Number(value),
          }
        : item
    );

    setItemQuantity(Number(value));
    setCartStorage(updatedCart);
  };

  return (
    <Wrapper>
      <Data>
        <FlexRow>
          <LazyLoad height={'100%'} once>
            <Image alt={alt} src={src} />
          </LazyLoad>
          <ProductInfo>
            <Name>{productName}</Name>
            <Price>${price}</Price>
            <RemoveButton variant="tertiary" size="small" name={productName} onClick={removeItem}>
              <FontAwesomeIcon icon={faTrash} />
              Remove Item
            </RemoveButton>
          </ProductInfo>
        </FlexRow>
      </Data>
      {!hasHamburgerMenu && (
        <td>
          <SelectAmount
            type="number"
            value={itemQuantity}
            min="1"
            max="50"
            pattern="[0-9]"
            name={`${productName}${quantityId}`}
            onInput={updateQuantity}
          />
        </td>
      )}
      <td>
        <FinalPrice>${roundedPrice}</FinalPrice>
        {hasHamburgerMenu && (
          <SelectAmount
            type="number"
            value={itemQuantity}
            min="1"
            max="50"
            pattern="[0-9]"
            name={`${productName}${quantityId}`}
            onInput={updateQuantity}
          />
        )}
      </td>
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

  & > td:nth-child(2) {
    text-align: center;
  }
`;

const Data = styled.td`
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
  padding: 0 3.2rem;

  & > *:not(:last-child) {
    padding-bottom: 0.6rem;
  }
`;

const Name = styled.span`
  font-weight: 800;
  font-size: 1.25em;
  line-height: 1;
`;

const Price = styled.span`
  font-size: 1em;
  font-weight: 700;
`;

const RemoveButton = styled(Button)`
  font-size: 0.875em;
  padding-left: 0;

  & > svg {
    align-items: center;
    margin-right: 0.8rem;
  }
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
  font-size: 1.25em;
  font-weight: 300;
  padding: 1.6rem 3.2rem;
  padding-right: 0;
`;

export default ProductRow;
