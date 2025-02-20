import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Footer.css';

const Footer = ({ darkMode }) => {
  return (
    <AppBar
      position="static"
      className={`footer ${darkMode ? 'dark' : 'light'}`}
      elevation={0}
    >
      <Toolbar className="toolbar__footer">
        <Typography variant="body1" color="inherit">
          © 2025 // adamistvan.hu
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
