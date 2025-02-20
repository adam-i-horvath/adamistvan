import React from 'react';
import './Page.css';

const Fun = ({ darkMode }) => {
  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="page-title">
        <div className="page-title__text">• Rólam bővebben</div>
        <h1>Több, mint egy bemutatkozás</h1>
      </div>
      <div className={`content ${darkMode ? 'dark' : 'light'}`}>
        <p>Ez a rész jelenleg fejlesztés alatt áll...</p>
      </div>
    </div>
  );
};

export default Fun;
