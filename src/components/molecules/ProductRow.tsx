import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from 'components/atoms';
import React, { MouseEventHandler, useContext } from 'react';
import LazyLoad from 'react-lazyload';
import CartContext from 'root/CartContext';
import styled from 'styled-components';
import { ProductItemProps } from './ProductItem';

interface ProductRowProps extends ProductItemProps {
  removeItem: MouseEventHandler<HTMLButtonElement>;
}

const ProductRow = ({ alt, removeItem, price, productName, src }: ProductRowProps) => {
  const { cartStorage } = useContext(CartContext);
  const product = cartStorage.filter((item) => item.productName === productName);

  return (
    <Wrapper>
      <Data>
        <LazyLoad height={'100%'} once>
          <Image alt={alt} src={src} />
        </LazyLoad>
        <ProductInfo>
          <Name>{productName}</Name>
          <Quantity>QTY: {product[0].quantity}</Quantity>
          <Price>${price}</Price>
          <RemoveButton variant="tertiary" size="small" onClick={removeItem}>
            <FontAwesomeIcon icon={faTrash} />
            Remove Item
          </RemoveButton>
        </ProductInfo>
      </Data>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
`;

const Data = styled.div`
  display: flex;

  & img {
    max-width: 20rem;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  max-width: 20rem;
  width: 100%;
  padding: 0 1.6rem;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Quantity = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Price = styled.span`
  font-size: 1.25em;
  font-weight: 700;
`;

const RemoveButton = styled(Button)`
  & > svg {
    align-items: center;
    margin-right: 0.8rem;
  }
`;

export default ProductRow;
