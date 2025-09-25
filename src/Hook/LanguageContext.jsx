import React, { createContext, useState, useContext } from "react";
import translations from "../assets/index.js"; // adjust path

// 1. Create Context
const LanguageContext = createContext();

// 2. Provider Component
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en"); // default language = English

  const value = {
    lang,
    setLang,
    t: translations[lang], // selected translations
  };

  console.log("Current Language:", lang); // Debugging line

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Custom Hook (for easy use)
export const useLanguage = () => useContext(LanguageContext);
