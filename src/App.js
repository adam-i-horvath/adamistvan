import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Kezdolap from './pages/Kezdolap/Kezdolap';
import Rolam from './pages/Rolam/Rolam';
import Projektek from './pages/Projektek/Projektek';
import Kapcsolat from './pages/Kapcsolat/Kapcsolat';
import './App.css';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import Cookie from './pages/Cookie/Cookie';

function App() {
  return (
    <ThemeProvider>
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
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
