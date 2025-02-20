import React from 'react';
import './Page.css';

const Home = ({ darkMode }) => {
  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="page-title">
        <div className="page-title__text">• Kezdőlap</div>
        <h1>Üdvözöllek!</h1>
      </div>
      <div className={`content ${darkMode ? 'dark' : 'light'}`}>
        <p>Ez a rész jelenleg fejlesztés alatt áll...</p>
      </div>
    </div>
  );
};

export default Home;
