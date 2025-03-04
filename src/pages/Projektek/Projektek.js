import React, { useEffect, useState } from 'react';
import './Projektek.css';
import Kartya from './Kartya';
import KartyaDev from './Kartya_dev';
import kartya_data from './projektek_data.json'; // Importing JSON data

function Projektek() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/adam-i-horvath/repos')
      .then((response) => response.json())
      .then((data) =>
        setRepos(
          data
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sorting by latest updated
            .map((repo) => ({
              name: repo.name,
              description: repo.description || 'Nem elérhető leírás.',
              html_url: repo.html_url,
              language: repo.language || 'Ismeretlen',
              stargazers_count: repo.stargazers_count || 0,
              forks_count: repo.forks_count || 0,
              updated_at: new Date(repo.updated_at).toLocaleDateString('hu-HU'), // Format date
            }))
        )
      )
      .catch((error) => console.error('Hiba a repók lekérésekor:', error));
  }, []);

  return (
    <div className="projektek">
      <h1>Projektek</h1>
      <div className="project">
        <div className="flex flex-wrap gap-4">
          {kartya_data.project_developed.map((project, index) => (
            <KartyaDev key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="project-grid">
        {repos.map((repo, index) => (
          <Kartya key={index} project={repo} />
        ))}
      </div>
    </div>
  );
}

export default Projektek;
