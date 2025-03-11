import React from 'react';
import './Kezdolap.css';
import profileImage from '../../assets/img/adam_rolam_oldal.jpg'; // Replace with your actual image path
import t from '../../utils/t';

function Kezdolap() {
  return (
    <div className="home">
      <h1>{t('welcome')}</h1>
      <div className="content">
        <div className="text">
          <h2>{t('quote')}</h2>
          <p>{t('home_line_01')}</p>
          <p>{t('home_line_02')}</p>
          <p>{t('home_line_03')}</p>
        </div>
        <div className="image">
          <img src={profileImage} alt="Horváth Ádám István" />
        </div>
      </div>
    </div>
  );
}

export default Kezdolap;
