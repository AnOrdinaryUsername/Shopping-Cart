import { HeaderButtons } from 'components/molecules';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import menuRoutes from './MenuRoutes';

interface ToggleState {
  isToggled: boolean;
}

interface MobileMenuProps extends ToggleState {
  onClick: () => void;
  theme: boolean;
}

const MobileMenu = ({ isToggled, onClick, theme }: MobileMenuProps) => {
  return (
    <Wrapper isToggled={isToggled}>
      {isToggled && (
        <>
          <Nav>
            <List id="menu">
              {menuRoutes.map((item, index) => {
                return (
                  <Item key={index}>
                    <Link to={item.route}>{item.text}</Link>
                  </Item>
                );
              })}
            </List>
          </Nav>
          <HeaderButtons isMobile={true} onClick={onClick} theme={theme} />
        </>
      )}
    </Wrapper>
  );
};

const Nav = styled.nav`
  position: relative;
`;

const Wrapper = styled.div<ToggleState>`
  ${({ isToggled }) => (isToggled ? 'display: block;' : 'display: none;')}
  position: absolute;
  left: 0;
  top: 6rem;
  z-index: 999;
  padding: 0 3.2rem 3.2rem;
  width: 100%;
  background: var(--bg-color);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 700;
`;

const Item = styled.li`
  & > a {
    display: block;
    padding: 0.4rem 0;
    width: 100%;
  }
`;

export default MobileMenu;
