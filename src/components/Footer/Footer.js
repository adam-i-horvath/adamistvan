import React from 'react';
import './Footer.css';
import ReactLogo from '../../assets/img/react_logo.svg';
import PhpLogo from '../../assets/img/php_logo.png';
import SqlLogo from '../../assets/img/sql__logo.png';
import WordpressLogo from '../../assets/img/wordpress_logo.png';
import MuiLogo from '../../assets/img/mui__logo.png';
import { Box } from '@mui/material';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="logo__container">
          <Box
            component="img"
            className="react__logo"
            alt="React"
            src={ReactLogo}
          />
          <Box component="img" className="php__logo" alt="Php" src={PhpLogo} />
          <Box component="img" className="sql__logo" alt="Php" src={SqlLogo} />
          <Box
            component="img"
            className="wordpress__logo"
            alt="Php"
            src={WordpressLogo}
          />
          <Box component="img" className="mui__logo" alt="Php" src={MuiLogo} />
        </div>
        <p>&copy; {year} adamistvan.hu | Horváth Ádám István</p>
        <p>Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
