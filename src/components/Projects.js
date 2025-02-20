import React from 'react';
import './Page.css';

const Projects = ({ darkMode }) => {
  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="page-title">
        <div className="page-title__text">• Projektek</div>
        <h1>Folyamatban lévő és befejezett munkák</h1>
      </div>
      <div className={`content ${darkMode ? 'dark' : 'light'}`}>
        <p>Ez a rész jelenleg fejlesztés alatt áll...</p>
      </div>
    </div>
  );
};

export default Projects;
