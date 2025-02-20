import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import {
  HomeOutlined,
  InfoOutlined,
  WorkOutline,
  EmojiEmotionsOutlined,
  ContactMailOutlined,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, handleThemeChange }) => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      className={`navbar ${darkMode ? 'dark' : 'light'}`}
      elevation={0}
    >
      <Toolbar className="toolbar">
        <div className="left">
          <IconButton
            component={Link}
            to="/"
            color="inherit"
            aria-label="home"
            className={location.pathname === '/' ? 'active' : ''}
          >
            <HomeOutlined />
          </IconButton>
          <IconButton
            component={Link}
            to="/about"
            color="inherit"
            aria-label="about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            <InfoOutlined />
          </IconButton>
          <IconButton
            component={Link}
            to="/projects"
            color="inherit"
            aria-label="projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            <WorkOutline />
          </IconButton>
          <IconButton
            component={Link}
            to="/fun"
            color="inherit"
            aria-label="fun"
            className={location.pathname === '/fun' ? 'active' : ''}
          >
            <EmojiEmotionsOutlined />
          </IconButton>
        </div>
        <div className="right">
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ContactMailOutlined />}
          >
            Kapcsolat
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
