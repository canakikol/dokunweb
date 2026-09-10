"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Translations } from "./translations";
import { LanguageCode } from "@/components/ui/CountryFlag";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dokun_lang") as LanguageCode;
      if (saved && (saved === "tr" || saved === "en" || saved === "de")) {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("dokun_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const t = translations[language] as unknown as Translations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: "tr" as LanguageCode,
      setLanguage: () => {},
      t: translations.tr as unknown as Translations,
    };
  }
  return context;
}
