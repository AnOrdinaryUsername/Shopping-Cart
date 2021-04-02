import { ReactComponent as Chair } from 'assets/svgs/chair.svg';
import { ReactComponent as Circle } from 'assets/svgs/circle.svg';
import { ReactComponent as Comment } from 'assets/svgs/comment-right.svg';
import { ReactComponent as Dots } from 'assets/svgs/dots.svg';
import {
  defaultButtonStyles,
  mediumButton,
  primaryButton,
  tertiaryButton,
} from 'components/atoms/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Hero = () => {
  return (
    <Section>
      <Intro>
        <Title>Quality geometric-based SVGs for everyone</Title>
        <Info>Spice up your backgrounds with these beautiful, reusable vector graphics</Info>
        <Links>
          <Link to="/stuff">Shop now</Link>
          <Link to="/about">Learn more</Link>
        </Links>
        <BackgroundDots />
        <BackgroundCircle id="circle" />
      </Intro>
      <SVGContainer>
        <Chair title="A red chair" />
        <Comment className="comment" title="Arrow pointing to red chair saying 'i made this :)'" />
      </SVGContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 3.6rem;
  overflow: hidden;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    padding-bottom: calc(7.2rem + 30rem);
  }
`;

const Intro = styled.div`
  position: relative;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 3.2rem;
  max-width: 57rem;
  width: 100%;

  & > *:not(svg) {
    margin-bottom: 2.4rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    text-align: left;
    margin-bottom: 0;
    margin-right: 4.8rem;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25em;
  letter-spacing: 0.06rem;

  @media ${(p) => p.theme.breakpoints.med} {
    font-size: 3em;
  }
`;

const Info = styled.p`
  font-size: 1.25em;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.5em;
  }
`;

const BackgroundCircle = styled(Circle)`
  position: absolute;
  top: -147px;
  left: -18px;
  z-index: -2;
  width: 40rem;
  height: auto;

  @media ${(p) => p.theme.breakpoints.sm} {
    top: -175px;
    left: -180px;
    width: 50rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    top: -250px;
    width: 70rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    top: -524px;
    left: -581px;
    width: 90rem;
  }

  & circle {
    fill: hsl(264, 51%, 88%);
  }

  /* Removes the black circle outline */
  & circle:last-child {
    display: none;
  }
`;

const BackgroundDots = styled(Dots)`
  display: none;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: initial;
    position: absolute;
    top: 202px;
    left: -169px;
    opacity: 0.65;
    z-index: -1;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    top: 390px;
    left: -16px;
    opacity: 0.65;
    transform: rotate(-26deg);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    justify-content: flex-start;
  }

  & > a {
    ${defaultButtonStyles}
    ${mediumButton}
  }

  /* Shop now link */
  & a:first-child {
    ${primaryButton}
    margin-bottom: 1.2rem;

    @media ${(p) => p.theme.breakpoints.sm} {
      margin-bottom: 0;
      margin-right: 1.2rem;
    }
  }

  /* Learn more link */
  & a:last-child {
    ${tertiaryButton}
  }
`;

const SVGContainer = styled.div`
  position: relative;

  /* .comment refers to 'i made this :)' svg */
  & > .comment {
    display: none;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    & > .comment {
      display: initial;
      position: absolute;
      top: 300px;
      left: -300px;
    }
  }
`;

export default Hero;
