import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as LogoSVG } from 'assets/svgs/triangle.svg';
import { Button } from 'components/atoms';
import { DesktopMenu, HeaderButtons, MobileMenu } from 'components/molecules';
import { useColorTheme } from 'hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

interface HeaderProps {
  isMobile: boolean;
  isToggled: boolean;
  onClick: () => void;
}

const Header = ({ isMobile, isToggled, onClick }: HeaderProps) => {
  const [theme, setTheme] = useColorTheme();

  return (
    <Wrapper>
      <header>
        <LinkContainer to="/">
          <LogoSVG title="Beautiful and elegant square" />
          <Logo>The Elements</Logo>
        </LinkContainer>
        {isMobile ? (
          <>
            <HamburgerMenu
              aria-expanded={isToggled}
              aria-controls="menu"
              aria-label={isToggled ? 'Close menu' : 'Show menu'}
              onClick={onClick}
            >
              <FontAwesomeIcon icon={isToggled ? faTimes : faBars} />
            </HamburgerMenu>
            <MobileMenu isToggled={isToggled} onClick={setTheme} theme={theme} />
          </>
        ) : (
          <>
            <DesktopMenu />
            <HeaderButtons onClick={setTheme} theme={theme} />
          </>
        )}
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 90;
  background-color: var(--bg-color);
  width: 100%;
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: baseline;

  & > svg {
    align-self: flex-end;
    height: 3.5rem;
    width: auto;
    margin-right: 0.8rem;
  }
`;

const Logo = styled.span`
  font-size: 1.5em;
  font-weight: 500;
`;

const HamburgerMenu = styled(Button)`
  align-self: center;
  font-size: 2em;
`;

export default Header;
