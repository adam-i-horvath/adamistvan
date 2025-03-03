import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </button>
  );
}

export default ThemeSwitcher;
