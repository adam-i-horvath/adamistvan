import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { changeLanguage } from '../../i18n'; // Assuming you have a function for changing the language
import t from '../../utils/t';

const LanguageSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  // Handle theme toggle
  const handleThemeToggle = () => {
    toggleTheme();
    setOpen(false); // Close SpeedDial after action
  };

  // Handle language change
  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    setOpen(false); // Close SpeedDial after action
  };

  const actions = [
    { icon: 'EN', name: 'English', lang: 'en' },
    { icon: 'HU', name: 'Magyar', lang: 'hu' },
    {
      icon:
        theme === 'light' ? (
          <DarkModeIcon sx={{ color: 'var(--text-color)' }} />
        ) : (
          <LightModeIcon sx={{ color: 'var(--text-color)' }} />
        ),
      name:
        theme === 'light' ? t('switchLangTextDark') : t('switchLangTextLight'),
      action: handleThemeToggle,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Settings"
      icon={open ? <VisibilityIcon /> : <SettingsIcon />} // Toggle between icons based on open state
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        '& .MuiButtonBase-root': {
          backgroundColor: 'var(--frosted-pearl)', // Set the button background color to red
          color: 'var(--text-color)', // Set icon color to white
          boxShadow: 'none',
          outline: '1px black',
          border: '1px solid var(--text-color)',
        },
        '& .MuiButtonBase-root:hover': {
          backgroundColor: 'var(--hovering-cloud)', // Set the hover button color
          color: 'var(--text-color)',
          boxShadow: 'none',
          border: '1px solid var(--text-color)',
        },
        '& .MuiButtonBase-root:pressed': {
          backgroundColor: 'var(--hovering-cloud)', // Set the hover button color
        },
      }}
    >
      {/* Language Switcher Actions */}
      {actions.slice(0, 2).map((action) => (
        <SpeedDialAction
          key={action.lang}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleLanguageChange(action.lang)}
        />
      ))}

      {/* Theme Switcher Action */}
      <SpeedDialAction
        icon={actions[2].icon}
        tooltipTitle={actions[2].name}
        onClick={actions[2].action}
      />
    </SpeedDial>
  );
};

export default LanguageSwitcher;
