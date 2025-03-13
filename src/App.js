import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Cookie from './pages/Cookie/Cookie';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import UnderDev from './components/UnderDev/UnderDev';

function App() {
  const { t } = useTranslation(); // Automatically updates when language changes

  return (
    <div className="app__container">
      <div className="app__main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookie" element={<Cookie />} />
        </Routes>
      </div>
      <UnderDev />
      <Logo />
      <Footer />
      <LanguageSwitcher element={{ t }} />
    </div>
  );
}

export default App;
