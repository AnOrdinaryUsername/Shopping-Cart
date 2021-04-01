import React from 'react';
import styled from 'styled-components/macro';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from './Card';
import Cards from './CardData';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonials = () => {
  return (
    <Section>
      <Subheading>Here's what people have to say</Subheading>
      <SwiperWrapper
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {Cards.map((props) => {
          return (
            <SwiperSlide>
              <Card {...props} />
            </SwiperSlide>
          );
        })}
      </SwiperWrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 4.8rem;
  }

  @media ${(p) => p.theme.breakpoints.med} {
    padding: 7.2rem;
  }
`;

const Subheading = styled.h2`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 4.8rem;
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
