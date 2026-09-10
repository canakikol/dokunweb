"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { CountryFlag } from "./CountryFlag";
import { useLanguage, LanguageCode } from "@/lib/i18n/LanguageContext";

const languages: { code: LanguageCode; label: string; nativeName: string }[] = [
  { code: "tr", label: "Türkçe", nativeName: "TR" },
  { code: "en", label: "English", nativeName: "EN" },
  { code: "de", label: "Deutsch", nativeName: "DE" },
];

interface LanguageSelectorProps {
  variant?: "pill" | "compact" | "dark";
  className?: string;
}

export function LanguageSelector({
  variant = "pill",
  className = "",
}: LanguageSelectorProps) {
  const language = useLanguage((s) => s.language);
  const setLanguage = useLanguage((s) => s.setLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = variant === "dark";

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Dil Seçimi / Select Language"
        aria-expanded={isOpen}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shadow-xs active:scale-[0.98] ${
          isDark
            ? "bg-white/10 text-white border border-white/15 hover:bg-white/15"
            : "bg-white text-[#111827] border border-[#E5E7EB] hover:border-[#16A36A]/40 hover:shadow-sm"
        }`}
      >
        <CountryFlag country={currentLang.code} size={20} />
        <span className="font-bold tracking-wide">{currentLang.nativeName}</span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${
            isDark ? "text-white/60" : "text-[#6B7280]"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute right-0 mt-2 w-44 rounded-2xl p-1.5 shadow-2xl border z-50 backdrop-blur-xl ${
              isDark
                ? "bg-[#16181D]/95 border-white/15 text-white"
                : "bg-white/95 border-[#E5E7EB] text-[#111827]"
            }`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 text-[#9CA3AF]">
              {language === "de" ? "Sprache" : language === "en" ? "Language" : "Dil"}
            </div>
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? isDark
                        ? "bg-white/15 text-[#34D399] font-bold"
                        : "bg-[#F4FBF7] text-[#16A36A] font-bold"
                      : isDark
                      ? "hover:bg-white/5 text-[#D1D5DB]"
                      : "hover:bg-gray-50 text-[#374151]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CountryFlag country={lang.code} size={22} />
                    <span>{lang.label}</span>
                  </div>
                  {isSelected && (
                    <Check
                      size={14}
                      className={isDark ? "text-[#34D399]" : "text-[#16A36A]"}
                      strokeWidth={2.5}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
