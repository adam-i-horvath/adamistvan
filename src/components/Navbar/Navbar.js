import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Navbar.css';
import ImageAdam from '../../assets/img/adam.webp';
import t from '../../utils/t';

function Navbar() {
  const location = useLocation();
  const [activeLabel, setActiveLabel] = useState('');

  useEffect(() => {
    let pageTitle = `${t('firstname')}`;
    switch (location.pathname) {
      case '/':
        setActiveLabel('Home');
        break;
      case '/about':
        setActiveLabel('AboutMe');
        pageTitle += ` - ${t('n_whoami')}`;
        break;
      case '/projects':
        setActiveLabel('Projects');
        pageTitle += ` - ${t('n_projects')}`;
        break;
      case '/contact':
        setActiveLabel('Contact');
        pageTitle += ` - ${t('n_contact')}`;
        break;
      default:
        setActiveLabel('');
        break;
    }
    document.title = pageTitle;
  }, [location.pathname]);

  return (
    <div className="navbar__container">
      <NavLink
        to="/"
        className="nav-link-avatar"
        activeclassname="active"
        onClick={() => setActiveLabel('Home')}
      >
        <div className="icon-container">
          <div className="img">
            <img src={ImageAdam} alt="Adam" />
            <VerifiedIcon className="verified-icon" />
          </div>
        </div>
        <span className={activeLabel === 'Home' ? 'show' : 'hide'}>
          {t('profileMessage')}
        </span>
      </NavLink>
      <nav className="navbar">
        <NavLink
          to="/about"
          className="nav-link"
          activeclassname="active"
          onClick={() => setActiveLabel('AboutMe')}
        >
          <div className="icon-container">
            <AccountCircleIcon />
          </div>
          <span className={activeLabel === 'AboutMe' ? 'show' : 'hide'}>
            {t('n_whoami')}
          </span>
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          activeclassname="active"
          onClick={() => setActiveLabel('Projects')}
        >
          <div className="icon-container">
            <WorkIcon />
          </div>
          <span className={activeLabel === 'Projects' ? 'show' : 'hide'}>
            {t('n_projects')}
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeclassname="active"
          onClick={() => setActiveLabel('Contact')}
        >
          <div className="icon-container">
            <AlternateEmailIcon />
          </div>
          <span className={activeLabel === 'Contact' ? 'show' : 'hide'}>
            {t('n_contact')}
          </span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
