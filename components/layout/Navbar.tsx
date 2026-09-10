"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/components/config/routes";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.whatIs, href: ROUTES.nedir },
    { label: t.nav.club, href: ROUTES.dokun_club },
    { label: t.nav.howItWorks, href: ROUTES.nasil },
    { label: t.nav.businesses, href: ROUTES.isletmeler },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]/80 shadow-sm"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="DOKUN Ana Sayfa"
          >
            <div className="w-8 h-8 bg-[#16A36A] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  fill="currentColor"
                />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
            </div>
            <span className="text-[#0a0a0a] font-bold text-lg tracking-tight">DOKUN</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#4B5563] hover:text-[#0a0a0a] hover:bg-[#F4FBF7] rounded-xl transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Language */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector variant="pill" />
            <Link
              href={ROUTES.clubJoin}
              className="h-9 px-5 bg-[#16A36A] text-white text-sm font-semibold rounded-xl hover:bg-[#12916A] transition-all duration-200 hover:scale-[1.02] shadow-sm flex items-center"
            >
              {t.nav.joinClub}
            </Link>
          </div>

          {/* Mobile hamburger & language */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector variant="compact" />
            <button
              className="p-2 rounded-xl text-[#4B5563] hover:bg-[#F4FBF7] hover:text-[#0a0a0a] transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB] shadow-lg md:hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-[#0a0a0a] hover:bg-[#F4FBF7] hover:text-[#16A36A] rounded-xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-[#E5E7EB] my-2" />
              <Link
                href={ROUTES.clubJoin}
                className="mx-0 py-3 bg-[#16A36A] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#12916A] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.joinClub}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
