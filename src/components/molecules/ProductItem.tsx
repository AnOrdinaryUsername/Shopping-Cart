import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'components/atoms';
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components/macro';

export interface ProductItemProps {
  alt: string;
  price: number;
  productName: string;
  src: string;
}

const ProductItem = ({ alt, price, productName, src }: ProductItemProps) => {
  return (
    <Wrapper>
      <LazyLoad height={'100%'} offset={100} once>
        <ProductImage alt={alt} src={src} />
      </LazyLoad>
      <Item>{productName}</Item>
      <PriceTag>
        <FontAwesomeIcon icon={faDollarSign} />
        {price}
      </PriceTag>
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.article`
  max-width: 24rem;
  min-width: 18rem;
  width: 100%;
  background: hsl(253, 47%, 92%);
  box-shadow: 0px 2px 4px 0px hsl(0deg 0% 0% / 20%);
  text-align: center;
`;

const ProductImage = styled(Image)`
  background-size: cover;
`;

const PriceTag = styled.span`
  display: inline-block;
  font-size: 1.25em;
  font-weight: 700;

  & > svg {
    margin-right: 0.2rem;
  }
`;

const Item = styled.h2`
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 0.4rem;
  margin-top: 1.2rem;
`;
