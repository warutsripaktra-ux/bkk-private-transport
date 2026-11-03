import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('bkk_lang') || 'EN';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('bkk_lang', newLang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let val = translations[lang];
    for (const k of keys) {
      if (!val || val[k] === undefined) {
        // Fallback to EN if missing
        let fallback = translations['EN'];
        for (const fk of keys) {
          if (!fallback || fallback[fk] === undefined) return key;
          fallback = fallback[fk];
        }
        return fallback;
      }
      val = val[k];
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
