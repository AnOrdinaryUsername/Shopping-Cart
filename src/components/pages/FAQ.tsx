import { Anchor } from 'components/atoms';
import { Accordion } from 'components/molecules';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const FAQ = () => {
  return (
    <Wrapper>
      <Title>Frequently Answered Questions 🤔</Title>
      <Questions>
        <Accordion question="How did you make the svgs?">
          The svgs were made with help of{' '}
          <Anchor hasUnderline={true} hasHover={true} link="https://www.figma.com/">
            Figma
          </Anchor>
          . Here's a{' '}
          <Anchor
            hasUnderline={true}
            hasHover={true}
            link="https://www.youtube.com/watch?v=ZouvuUCytt4"
          >
            video
          </Anchor>{' '}
          on how to export svgs in Figma.
        </Accordion>
        <Accordion question="How do you position the svgs to stay at a certain spot?">
          If you're having trouble placing svgs in a way that you want, I'd suggest reading about{' '}
          <Anchor
            hasUnderline={true}
            hasHover={true}
            link="https://www.joshwcomeau.com/css/stacking-contexts/#creating-stacking-contexts"
          >
            stacking contexts
          </Anchor>
          . Basically, once you form a stacking context, such as when using{' '}
          <code>position: relative</code> in a container, you can absolutely position svgs to go
          wherever you want.
        </Accordion>
        <Accordion question="Is this a real website? Can I actually buy svgs here?">
          Unfortunately, no this isn't a real website. If you actually want to try the svgs for
          free, you can download them{' '}
          <Download to="free-svgs.zip" target="_blank" download>
            here
          </Download>
          . No attribution necessary.
        </Accordion>
      </Questions>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 8rem 2.4rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
  text-align: center;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 2.25em;
  }
`;

const Questions = styled.div`
  max-width: 80rem;
  width: 100%;
  padding-top: 3.6rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Download = styled(Link)`
  text-decoration: underline solid black 0.2rem;
  text-underline-offset: 0.4rem;
  cursor: pointer;
`;

export default FAQ;
