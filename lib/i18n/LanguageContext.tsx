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
          t: (translations[lang] || translations.tr) as unknown as Translations,
        });
      },
    }),
    {
      name: "dokun_lang",
      partialize: (state) => ({ language: state.language }),
      merge: (persistedState: any, currentState) => {
        const lang = (persistedState?.language as LanguageCode) || "tr";
        if (typeof document !== "undefined") {
          document.documentElement.lang = lang;
        }
        return {
          ...currentState,
          language: lang,
          t: (translations[lang] || translations.tr) as unknown as Translations,
        };
      },
    }
  )
);
