import React from 'react';
import './Rolam.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';
import DemoMusic from '../../assets/music/AdamHorvath-Night.mp3';
import t from '../../utils/t';

const Rolam = () => {
  return (
    <div className="rolam">
      <h1>{t('r_t')}</h1>
      <div className="grid">
        <div className="card">
          <CodeIcon className="icon" />
          <h3>{t('r_t_develop')}</h3>
          <p>{t('r_c_develop')}</p>
        </div>

        <div className="card">
          <MusicNoteIcon className="icon" />
          <h3>{t('r_t_music')}</h3>

          <p>{t('r_c_music')}</p>
          <MusicPlayer src={DemoMusic} title="Adam Horvath - The Night" />
        </div>

        <div className="card">
          <BrushIcon className="icon" />
          <h3>{t('r_t_creative')}</h3>
          <p>{t('r_c_creative')}</p>
        </div>

        <div className="card">
          <PsychologyIcon className="icon" />
          <h3>{t('r_t_data')}</h3>
          <p>{t('r_c_data')}</p>
        </div>

        <div className="card">
          <ComputerIcon className="icon" />
          <h3>{t('r_t_it')}</h3>
          <p>{t('r_c_it')}</p>
        </div>

        <div className="card">
          <BuildIcon className="icon" />
          <h3>{t('r_t_innovation')}</h3>
          <p>{t('r_c_innovation')}</p>
        </div>
      </div>
    </div>
  );
};

export default Rolam;
