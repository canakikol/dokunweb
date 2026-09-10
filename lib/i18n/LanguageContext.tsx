"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translations, Translations } from "./translations";

export type LanguageCode = "tr" | "en" | "de";

interface LanguageStore {
  language: LanguageCode;
  t: Translations;
  setLanguage: (lang: LanguageCode) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "tr",
      t: translations.tr as unknown as Translations,
      setLanguage: (lang: LanguageCode) => {
        if (typeof document !== "undefined") {
          document.documentElement.lang = lang;
        }
        set({
          language: lang,
          t: translations[lang] as unknown as Translations,
        });
      },
    }),
    {
      name: "dokun_lang",
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const lang = state.language;
          state.t = translations[lang] as unknown as Translations;
          if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
          }
        }
      },
    }
  )
);
