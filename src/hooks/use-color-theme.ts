import { useEffect, useState } from 'react';

const root = document.documentElement;

const isLightTheme = ((): boolean => {
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

// My own Custom Hook 😎
const useColorTheme = () => {
  const [theme, setTheme] = useState(isLightTheme);

  const changeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const colorTheme = theme ? 'light' : 'dark';
    root.setAttribute('data-theme', colorTheme);
    localStorage.setItem('theme', colorTheme);
  }, [theme]);

  return [theme, changeTheme] as const;
};

export default useColorTheme;
