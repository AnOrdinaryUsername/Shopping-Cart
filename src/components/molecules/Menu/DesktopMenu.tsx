import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import menuRoutes from './MenuRoutes';

const DesktopMenu = () => {
  return (
    <NavBar role="navigation">
      <List>
        {menuRoutes.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.route}>{item.text}</Link>
            </li>
          );
        })}
      </List>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 30%;
  font-size: 1.25em;
  font-weight: 300;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export default DesktopMenu;
