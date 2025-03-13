import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import CookieBanner from './components/CookieBanner/CookieBanner';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // i18n configuration for translations
import LoadingBackdrop from './components/LoadingBackdrop/LoadingBackdrop';

const container = document.getElementById('root');
const root = createRoot(container); // Create root for React 18 rendering

const RootComponent = () => {
  const [loading, setLoading] = useState(true); // State to manage loading screen

  return (
    <>
      <ThemeProvider>
        {' '}
        {/* Provides theme context to the app */}
        <Router>
          {' '}
          {/* Enables client-side routing */}
          {loading && (
            <LoadingBackdrop onComplete={() => setLoading(false)} />
          )}{' '}
          {/* Show loading screen until complete */}
          {!loading && (
            <I18nextProvider i18n={i18n}>
              {' '}
              {/* Provides i18n translation support */}
              <App /> {/* Main application component */}
              <CookieBanner /> {/* Displays cookie consent banner */}
            </I18nextProvider>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
};

root.render(<RootComponent />); // Render the app into the root DOM element
