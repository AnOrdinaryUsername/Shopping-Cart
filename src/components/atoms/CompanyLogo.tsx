import { ReactComponent as LogoSVG } from 'assets/svgs/triangle.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CompanyLogo = () => {
  return (
    <LinkContainer to="/">
      <LogoSVG title="Beautiful and elegant square" />
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
