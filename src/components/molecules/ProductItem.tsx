import { faCircleNotch, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from 'components/atoms';
import React, { useContext } from 'react';
import LazyLoad from 'react-lazyload';
import CartContext, { ProductSchema } from 'root/CartContext';
import styled from 'styled-components/macro';

export interface ProductItemProps {
  alt: string;
  price: number;
  productName: string;
  src: string;
}

const Loading = () => <FontAwesomeIcon height="25rem" icon={faCircleNotch} spin />;

const ProductItem = ({ alt, price, productName, src }: ProductItemProps) => {
  const { cartStorage, setCartStorage } = useContext(CartContext);

  const addItemToCart = () => {
    const alreadyContainsItem = (item: ProductSchema) => item.productName === productName;

    if (cartStorage.some(alreadyContainsItem)) {
      const updatedCart = cartStorage.map((item: ProductSchema) =>
        item.productName === productName
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartStorage(updatedCart);
    } else {
      const newItem = {
        alt,
        price,
        productName,
        src,
        quantity: 1,
      };

      setCartStorage((oldCart) => [...oldCart, newItem]);
    }
  };

  return (
    <Wrapper>
      <LazyLoad height={'100%'} offset={50} placeholder={<Loading />} once>
        <Image alt={alt} src={src} />
      </LazyLoad>
      <Item>{productName}</Item>
      <PriceTag>
        <FontAwesomeIcon icon={faDollarSign} />
        {price}
      </PriceTag>
      <AddItemButton variant="primary" size="medium" onClick={addItemToCart}>
        Add to Cart
      </AddItemButton>
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  min-width: 18rem;
  width: 100%;
  background: hsl(0, 0%, 100%);
  border-radius: 2rem;
  box-shadow: 0px 2px 4px 0px hsl(0deg 0% 0% / 20%);
  text-align: center;

  & > .lazyload-wrapper {
    border-radius: inherit;
  }
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
`;

const AddItemButton = styled(Button)`
  border-radius: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  margin-top: 1.6rem;
`;
