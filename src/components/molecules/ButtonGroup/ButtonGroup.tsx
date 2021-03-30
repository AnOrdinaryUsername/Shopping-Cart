import React, { Children, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface ChildrenCount {
  isMobile?: boolean;
  count: number;
  gap?: string;
}

const GroupContainer = styled.div<ChildrenCount>`
  align-self: center;
  display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
  align-items: baseline;
  justify-content: center;
  font-size: 2.4rem;
  column-gap: ${({ gap }) => (gap ? `${gap}` : '1.2rem')};

  & a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    line-height: normal;
  }

  & > * {
    padding: 0 1rem;
  }

  ${({ isMobile }) =>
    isMobile &&
    `
    grid-template-columns: repeat(2, 6.5rem);
    height: 5rem;
    
    & > button {
      height: 100%;
      align-items: center;
    }`}
`;

interface ButtonGroupProps {
  isMobile?: boolean;
  children: ReactNode;
  gap?: string;
}

const ButtonGroup = ({ isMobile, children, gap }: ButtonGroupProps) => {
  const childrenCount = Children.count(children);
  return (
    <GroupContainer isMobile={isMobile} count={childrenCount} gap={gap}>
      {children}
    </GroupContainer>
  );
};

export default ButtonGroup;
