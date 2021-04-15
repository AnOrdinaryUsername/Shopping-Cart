import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export interface ColumnDescProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const ColumnDescription = ({ description, icon, title }: ColumnDescProps) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35rem;

  & > *:nth-child(2) {
    padding-top: 1.6rem;
    padding-bottom: 0.8rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3.5em;
  color: var(--font-color);
`;

const Title = styled.h4`
  font-size: 1.25em;
  font-weight: 500;
`;

const Description = styled.p`
  line-height: 1.8;
  color: inherit;
`;

export default ColumnDescription;
