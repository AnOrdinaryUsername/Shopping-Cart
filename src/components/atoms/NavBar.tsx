import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

interface NavBarProps {
  children: ReactNode;
  type: string;
}

const Horizontal = css`
  display: flex;
  justify-content: space-evenly;
`;

const StyledUl = styled.ul`
  ${Horizontal}
`;

const StyledOl = styled.ol`
  ${Horizontal}
`;

const Nav = styled.nav`
  width: 30%;
`;

const NavBar = ({ children, type }: NavBarProps): ReactElement => {
  let list = null;
  switch (type) {
    case 'ol':
      list = <StyledOl>{children}</StyledOl>;
      break;
    case 'ul':
      list = <StyledUl>{children}</StyledUl>;
      break;
    default:
      throw new Error(
        `Unknown type ${type} was passed to NavBar. Only valid ones are 'ol' and 'ul'.`
      );
  }

  return <Nav>{list}</Nav>;
};

export default NavBar;
