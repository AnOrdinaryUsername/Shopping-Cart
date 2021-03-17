import React, { useEffect, useState } from 'react';
import { HeaderButtons, MainMenu } from '../molecules';

const root = document.documentElement;

const initialTheme = (() => {
  // Initial color theme.
  let theme = 'light';
  const storedTheme = localStorage.getItem('theme');
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  if (storedTheme) {
    if (storedTheme === 'dark') {
      theme = 'dark';
    }
  } else if (mediaQuery.matches) {
    theme = 'dark';
  }

  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    return false;
  }

  root.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  return true;
})();

const Header = () => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const colorTheme = theme ? 'light' : 'dark';
    root.setAttribute('data-theme', colorTheme);
    localStorage.setItem('theme', colorTheme);
  }, [theme]);

  return (
    <header>
      <h1>Shopping Cart</h1>
      <MainMenu />
      <HeaderButtons onClick={changeTheme} theme={theme} />
    </header>
  );
};

export default Header;
