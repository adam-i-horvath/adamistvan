import React, { useEffect, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </button>
  );
}

export default ThemeSwitcher;
