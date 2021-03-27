import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

const NotFound = () => {
  document.title = '🤷 Page not found | Shopping Cart';
  const path = useLocation().pathname;

  return (
    <Container>
      <HamsterFace>(´･ω･`)</HamsterFace>
      <p>
        Sowwy, da page <code>{path}</code> does nyot exist.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  max-width: 80rem;
  margin-top: 10rem;
  width: 100%;
`;

const HamsterFace = styled.h1`
  font-size: 3em;
  margin-bottom: 2rem;
`;

export default NotFound;
