import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Navbar.css';
import ImageAdam from '../../assets/img/adam.jpg';

function Navbar() {
  const location = useLocation();
  const [activeLabel, setActiveLabel] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveLabel('Kezdőlap');
        break;
      case '/rolam':
        setActiveLabel('Rólam');
        break;
      case '/projektek':
        setActiveLabel('Projektek');
        break;
      case '/kapcsolat':
        setActiveLabel('Kapcsolat');
        break;
      default:
        setActiveLabel('');
    }
  }, [location.pathname]);

  return (
    <div className="navbar__container">
      <NavLink
        to="/"
        className="nav-link-avatar"
        activeClassName="active"
        onClick={() => setActiveLabel('Kezdőlap')}
      >
        <div className="icon-container">
          <div className="img">
            <img src={ImageAdam} alt="Adam" />
            <VerifiedIcon className="verified-icon" />
          </div>
        </div>
        <span className={activeLabel === 'Kezdőlap' ? 'show' : 'hide'}>
          Üdv! 👋
        </span>
      </NavLink>
      <nav className="navbar">
        <NavLink
          to="/rolam"
          className="nav-link"
          activeClassName="active"
          onClick={() => setActiveLabel('Rólam')}
        >
          <div className="icon-container">
            <AccountCircleIcon />
          </div>
          <span className={activeLabel === 'Rólam' ? 'show' : 'hide'}>
            Rólam
          </span>
        </NavLink>
        <NavLink
          to="/projektek"
          className="nav-link"
          activeClassName="active"
          onClick={() => setActiveLabel('Projektek')}
        >
          <div className="icon-container">
            <WorkIcon />
          </div>
          <span className={activeLabel === 'Projektek' ? 'show' : 'hide'}>
            Projektek
          </span>
        </NavLink>
        <NavLink
          to="/kapcsolat"
          className="nav-link"
          activeClassName="active"
          onClick={() => setActiveLabel('Kapcsolat')}
        >
          <div className="icon-container">
            <AlternateEmailIcon />
          </div>
          <span className={activeLabel === 'Kapcsolat' ? 'show' : 'hide'}>
            Kapcsolat
          </span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
