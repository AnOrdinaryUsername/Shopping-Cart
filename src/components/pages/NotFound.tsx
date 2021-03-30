import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

const NotFound = () => {
  document.title = '🤷 Page not found | Shopping Cart';
  const path = useLocation().pathname;

  return (
    <Container>
      <HamsterFace>(´･ω･`)</HamsterFace>
      <Text>
        Sowwy, da page <code>{path}</code> does nyot exist.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  margin-top: 10rem;
  width: 100%;
`;

const HamsterFace = styled.h1`
  font-size: 3em;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.25em;
`;

export default NotFound;
