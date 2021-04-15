import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

const NotFound = () => {
  document.title = '🤷 Page not found - The Elements';
  const path = useLocation().pathname;

  return (
    <Container>
      <HamsterFace>(´･ω･`)</HamsterFace>
      <Text>
        Sowwy, da page <code>{path}</code>
        <OrphanPreventer> does nyot exist.</OrphanPreventer>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  margin: 10rem auto;
  width: 100%;
  text-align: center;
`;

const HamsterFace = styled.h1`
  font-size: 3em;
  margin-bottom: 1.6rem;
`;

const Text = styled.p`
  font-size: 1.25em;
  padding: 0 1.6rem;
`;

const OrphanPreventer = styled.span`
  display: block;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: inline;
  }
`;

export default NotFound;
