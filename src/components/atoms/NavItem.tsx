import React, { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
  return <li>{children}</li>;
};

export default NavItem;
