import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {year} adamistvan.hu | Horváth Ádám István</p>
        <p>Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
