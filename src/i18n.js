import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hu from './locales/hu.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
  lng: localStorage.getItem('language') || 'hu', // Default language
  fallbackLng: 'hu',
  interpolation: { escapeValue: false },
});

// Function to change language
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('language', lng); // Save language
};

export default i18n;
