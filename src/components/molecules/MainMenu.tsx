import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, NavItem } from '../atoms';

const menuRoutes = [
  {
    route: '/',
    text: 'Home',
  },
  {
    route: '/about',
    text: 'About',
  },
  {
    route: '/stuff',
    text: 'Stuff',
  },
];

const MainMenu = () => {
  return (
    <NavBar type="ul">
      {menuRoutes.map((item, index) => {
        return (
          <NavItem>
            <Link to={item.route} key={index}>
              {item.text}
            </Link>
          </NavItem>
        );
      })}
    </NavBar>
  );
};

export default MainMenu;
