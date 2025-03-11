import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Kezdolap from './pages/Kezdolap/Kezdolap';
import Rolam from './pages/Rolam/Rolam';
import Projektek from './pages/Projektek/Projektek';
import Kapcsolat from './pages/Kapcsolat/Kapcsolat';
import './App.css';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Cookie from './pages/Cookie/Cookie';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation(); // Automatically updates when language changes

  return (
    <div className="app__container">
      <div className="app__main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Kezdolap />} />
          <Route path="/rolam" element={<Rolam />} />
          <Route path="/projektek" element={<Projektek />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/cookie" element={<Cookie />} />
        </Routes>
      </div>
      <Logo />
      <Footer />
      <LanguageSwitcher element={{ t }} />
    </div>
  );
}

export default App;
