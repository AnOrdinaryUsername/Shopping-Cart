import { ReactComponent as Lines } from 'assets/svgs/lines.svg';
import { ReactComponent as Square } from 'assets/svgs/square.svg';
import React from 'react';
import styled from 'styled-components/macro';
import SwiperCore, { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from './Card';
import Cards from './CardData';

SwiperCore.use([Pagination, A11y]);

const Testimonials = () => {
  return (
    <Section>
      <LinesSvg />
      <SquareSvg />
      <Subheading>Here's what people have to say</Subheading>
      <SwiperWrapper spaceBetween={75} slidesPerView={1} pagination={{ clickable: true }}>
        {Cards.map((props, index) => {
          return (
            <SwiperSlide key={index}>
              <Card {...props} />
            </SwiperSlide>
          );
        })}
      </SwiperWrapper>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem;
  overflow: hidden;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
  }
`;

const LinesSvg = styled(Lines)`
  position: absolute;
  top: 10px;
  left: -90px;
  z-index: -1;
  width: 150px;
  height: auto;
  transform: rotate(-100deg);

  @media ${(p) => p.theme.breakpoints.sm} {
    top: 100px;
    left: -55px;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    top: 20px;
    left: -45px;
    transform: rotate(250deg);
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    top: 55px;
    left: 30px;
    width: 125px;
    transform: rotate(350deg);
  }
`;

const SquareSvg = styled(Square)`
  display: none;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: initial;
    position: absolute;
    top: 290px;
    left: 88%;
    width: 400px;
    z-index: -1;
    height: auto;
    transform: rotate(64deg);
  }

  & rect {
    fill: hsl(338, 98%, 91%);
  }

  & rect:last-child {
    display: none;
  }
`;

const Subheading = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
`;

const SwiperWrapper = styled(Swiper)`
  max-width: 30rem;
  width: 100%;

  @media ${(p) => p.theme.breakpoints.med} {
    max-width: 60rem;
  }

  @media ${(p) => p.theme.breakpoints.lg} {
    max-width: 80rem;
  }
`;

export default Testimonials;
