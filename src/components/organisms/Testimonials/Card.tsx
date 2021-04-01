import React from 'react';
import styled from 'styled-components/macro';
import { CardData } from './CardData';

const Card = ({ src, description, name, jobTitle }: CardData) => {
  return (
    <Wrapper>
      <Image src={src} alt={name} />
      <Testimonial>
        <Description>"{description}"</Description>
        <PersonInfo>
          <strong>{name}</strong>
          {jobTitle}
        </PersonInfo>
      </Testimonial>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 3.6rem;
  border-radius: 1.6rem;

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-right: 3.6rem;
    margin-bottom: 0;
  }
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25em;
`;

const Description = styled.p`
  margin-bottom: 2.4rem;
`;

const PersonInfo = styled.footer`
  display: flex;
  flex-direction: column;
`;

export default Card;
