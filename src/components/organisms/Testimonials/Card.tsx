import React from 'react';
import styled from 'styled-components/macro';
import { CardData } from './CardData';

const Card = ({ src, description, name, shadowColor, jobTitle }: CardData) => {
  const title = `${name}'s Testimony`;

  return (
    <Wrapper>
      <HiddenHeading>{title}</HiddenHeading>
      <Image src={src} alt={name} color={shadowColor} />
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
  /* css variable*/
  --shadow-size: 1.6rem;

  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4.8rem;
  padding-bottom: 4.8rem;
  width: fit-content;

  @media ${(p) => p.theme.breakpoints.med} {
    flex-direction: row;
  }
`;

const HiddenHeading = styled.h3`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Image = styled.img`
  align-self: flex-start;
  width: 250px;
  height: auto;
  margin-bottom: calc(3.6rem + var(--shadow-size));
  border-radius: 1.6rem;
  ${({ color }) => `box-shadow: var(--shadow-size) var(--shadow-size) 0 0 ${color};`}

  @media ${(p) => p.theme.breakpoints.med} {
    margin-right: calc(3.6rem + var(--shadow-size));
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
