import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CompanyLogo } from 'components/atoms';
import { DesktopMenu, HeaderButtons, MobileMenu } from 'components/molecules';
import { useColorTheme, useToggle } from 'hooks';
import React from 'react';
import styled from 'styled-components/macro';

interface HeaderProps {
  headerRef: any;
  isMobile: boolean;
  isToggled: boolean;
  updateHamburgerIcon: () => void;
}

const Header = ({ headerRef, isMobile, isToggled, updateHamburgerIcon }: HeaderProps) => {
  const [theme, setTheme] = useColorTheme();
  const [isSticky, setIsSticky] = useToggle();

  return (
    <Wrapper ref={headerRef} isSticky={isSticky}>
      <header>
        {isMobile && (
          <MobileShoppingIcon>
            <FontAwesomeIcon icon={faShoppingCart} />
          </MobileShoppingIcon>
        )}
        <CompanyLogo />
        {isMobile ? (
          <>
            <HamburgerMenu
              aria-expanded={isToggled}
              aria-controls="menu"
              aria-label={isToggled ? 'Close menu' : 'Show menu'}
              onClick={updateHamburgerIcon}
            >
              <FontAwesomeIcon icon={isToggled ? faTimes : faBars} />
            </HamburgerMenu>
            <MobileMenu
              isToggled={isToggled}
              onClick={setTheme}
              onHeaderToggle={setIsSticky}
              onEnterNewPage={updateHamburgerIcon}
              isSticky={isSticky}
              theme={theme}
            />
          </>
        ) : (
          <>
            <DesktopMenu />
            <HeaderButtons
              onClick={setTheme}
              onHeaderToggle={setIsSticky}
              isSticky={isSticky}
              theme={theme}
            />
          </>
        )}
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: ${(props: { isSticky: boolean }) => (props.isSticky ? 'sticky' : 'static')};
  top: 0;
  z-index: 90;
  background-color: var(--header-bg);
  box-shadow: rgb(92 92 92 / 40%) 1px 1px 6px 0px;
  width: 100%;
`;

const HamburgerMenu = styled(Button)`
  align-self: center;
  font-size: 2em;
  min-width: 3rem;
`;

const MobileShoppingIcon = styled(Button)`
  align-self: center;
  font-size: 1.5em;
`;

export default Header;
