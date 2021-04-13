import { ReactComponent as LogoSVG } from 'assets/svgs/triangle.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

type CompanyLogoProps =
  | {
      isMobileMenuOpen?: boolean;
      onEnterHomepage: () => void;
    }
  | {
      isMobileMenuOpen?: false;
      onEnterHomepage?: never;
    };

const CompanyLogo = ({ isMobileMenuOpen, onEnterHomepage }: CompanyLogoProps) => {
  const resetHamburgerIcon = () => {
    if (isMobileMenuOpen && onEnterHomepage) {
      onEnterHomepage();
    }
  };

  return (
    <LinkContainer to="/" onClick={resetHamburgerIcon}>
      <LogoSVG title="Beautiful and elegant triangle" />
      <Logo>The Elements</Logo>
    </LinkContainer>
  );
};

export default CompanyLogo;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: baseline;

  & > svg {
    align-self: flex-end;
    height: 3.25rem;
    width: auto;
    margin-right: 0.4rem;

    @media ${(p) => p.theme.breakpoints.sm} {
      height: 3.5rem;
      margin-right: 0.8rem;
    }
  }
`;

const Logo = styled.span`
  font-size: 1.25em;
  font-weight: 500;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.5em;
  }
`;
