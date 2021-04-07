import products from 'assets/images/products';
import { ProductItem } from 'components/molecules';
import { useWindowSize } from 'hooks';
import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINT_SIZES } from '../../constants';

const Shop = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= BREAKPOINT_SIZES.lg;

  return (
    <Wrapper>
      <Header>
        <Box>
          <PageTitle>Scalable Vector Graphics</PageTitle>
        </Box>
        <Toolbar></Toolbar>
      </Header>
      {isDesktop && (
        <Sidebar>
          <div>
            <p>hello</p>
          </div>
        </Sidebar>
      )}
      <ProductsContainer>
        {products.map((props, index) => {
          return <ProductItem {...props} key={index} />;
        })}
      </ProductsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  @media ${(p) => p.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'header header'
      'sidebar products';
  }
`;

const Header = styled.header`
  justify-content: center;
  padding-top: 4.8rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    grid-area: header;
  }
`;

const Box = styled.div`
  position: relative;
  background: hsl(0, 0%, 97%);
  border: 3px solid var(--font-color);
  box-shadow: 1.6rem 1.6rem 0 0 var(--font-color);
  padding: 3.2rem 2.4rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 800;
  text-align: center;
  letter-spacing: 1px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sidebar = styled.section`
  align-self: self-start;
  position: sticky;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  width: 100%;
  margin-left: auto;
  padding: 3.6rem;
`;

const ProductsContainer = styled.section`
  grid-area: products;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.6rem;
  justify-items: center;
  width: 100%;
  max-width: 80rem;
  margin: auto;
  padding: 9.6rem 1.6rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    justify-items: self-start;
  }
`;

export default Shop;
