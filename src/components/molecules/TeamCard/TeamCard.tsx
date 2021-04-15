import { Image } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

export interface TeamCardProps {
  job: string;
  name: string;
  src: string;
}

const TeamCard = ({ job, name, src }: TeamCardProps) => {
  return (
    <Wrapper>
      <Image src={src} />
      <Name>{name}</Name>
      <JobTitle>{job}</JobTitle>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    max-width: 20rem;
  }
`;

const Name = styled.h3`
  font-weight: 700;
  padding-top: 2rem;
`;

const JobTitle = styled.p`
  font-weight: 300;
  color: hsl(219, 23%, 44%);
  padding-top: 0.8rem;
`;

export default TeamCard;
