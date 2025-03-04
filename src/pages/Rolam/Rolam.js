import React from 'react';
import './Rolam.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';

const Rolam = () => {
  return (
    <div className="rolam">
      <h1>Ki vagyok?</h1>
      <div className="grid">
        <div className="card">
          <CodeIcon className="icon" />
          <h3>Fejlesztő és Adatbázis-szakértő</h3>
          <p>
            Weboldalakat, adatbázisokat és AI-integrációkat fejlesztek modern
            technológiákkal, mint a React, Material UI és Node.js.
          </p>
        </div>

        <div className="card">
          <MusicNoteIcon className="icon" />
          <h3>Zenei Producer és DJ</h3>
          <p>
            Elektronikus zenét készítek deep house, techno és ambient
            műfajokban.
          </p>
          <iframe
            style={{ borderRadius: '5px' }}
            width="100%"
            height="120px"
            src="https://www.youtube.com/embed/-2dsRcPooqs?si=2uqH11ZAhbnkr5PW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="card">
          <BrushIcon className="icon" />
          <h3>Kreatív Projektek és Dizájn</h3>
          <p>
            Szenvedélyem a geometriai CAD-alapú dizájn és az AI-alapú vizuális
            projektek.
          </p>
        </div>

        <div className="card">
          <PsychologyIcon className="icon" />
          <h3>Adatfeldolgozás és Mesterséges Intelligencia</h3>
          <p>
            Erősségem a problémamegoldás és az AI-alapú adatelemzés a gyártási
            hibák és folyamatok optimalizálására.
          </p>
        </div>

        <div className="card">
          <ComputerIcon className="icon" />
          <h3>IT és Technológiai Fejlesztések</h3>
          <p>
            Tapasztalatom van szoftverfejlesztésben, hálózatokban és
            automatizált rendszerek építésében.
          </p>
        </div>

        <div className="card">
          <BuildIcon className="icon" />
          <h3>Problémamegoldás és Innováció</h3>
          <p>
            Mindig keresem az új megoldásokat, és szívesen hozok létre hatékony
            rendszereket a hatékonyság növelése érdekében.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rolam;
