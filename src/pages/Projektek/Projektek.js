import React from 'react';
import './Projektek.css';
import Kartya from './Kartya';
import kartya_data from './projektek_data.json'; // Importing JSON data

function Projektek() {
  return (
    <div className="projektek">
      <h1>Projektek</h1>
      <div className="project">
        <div className="flex flex-wrap gap-4">
          {kartya_data.projects.map((project, index) => (
            <Kartya key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projektek;
