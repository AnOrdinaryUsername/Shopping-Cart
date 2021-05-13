import React from 'react';
import styled from 'styled-components';

interface AccordionProps {
  children: React.ReactNode;
  question: string;
}

const Accordion = ({ children, question }: AccordionProps) => {
  return (
    <Details>
      <Summary>{question}</Summary>
      <Text>{children}</Text>
    </Details>
  );
};

const Details = styled.details`
  font-size: 1.15em;
  border: 1px solid hsl(0, 0%, 67%);
  border-radius: 0.4rem;
  padding: 0.8rem;
  padding-left: 0;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.5em;
  }

  &[open] {
    padding: 0.8rem;
  }

  &[open] summary {
    margin-bottom: 0.8rem;
  }
`;

const Summary = styled.summary`
  font-weight: 500;
  margin: -0.8rem;
  margin-left: 0;
  padding: 0.8rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export default Accordion;
