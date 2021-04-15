import products from 'assets/images/products';
import { ProductItem } from 'components/molecules';
import React from 'react';
import styled from 'styled-components/macro';

const Shop = () => {
  return (
    <Wrapper>
      <Header>
        <Box>
          <PageTitle>Scalable Vector Graphics</PageTitle>
        </Box>
        <Toolbar></Toolbar>
      </Header>
      <Content>
        <ProductsContainer>
          {products.map((props, index) => {
            return <ProductItem {...props} key={index} />;
          })}
        </ProductsContainer>
      </Content>
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
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      '. header .'
      '. content .';
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

const Content = styled.div`
  grid-area: content;
  display: initial;
  width: 100%;
  padding: 4.8rem 1.6rem;

  @media ${(p) => p.theme.breakpoints.lg} {
    display: flex;
    padding: 9.6rem 0;
  }
`;

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4.8rem 4.8rem;
  justify-items: center;
  width: 100%;

  @media ${(p) => p.theme.breakpoints.sm} {
    justify-items: self-start;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 80rem;
  }
`;

export default Shop;
