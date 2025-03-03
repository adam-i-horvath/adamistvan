import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import CookieBanner from './components/CookieBanner/CookieBanner';

const container = document.getElementById('root');
const root = createRoot(container);

console.log(process.env.REACT_APP_TEST);

root.render(
  <Router>
    <App />
    <CookieBanner />
  </Router>
);
