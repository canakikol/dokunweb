"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/components/config/routes";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

const businessNavLinks = [
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { label: "DOKUN Stand", href: "#dokun-stand" },
  { label: "DOKUN Pro", href: "#dokun-pro" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Fiyat", href: "#fiyat" },
];

export function BusinessNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-[#0a0a0a]/75 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="DOKUN Ana Sayfa"
            >
              <div className="w-8 h-8 bg-[#16A36A] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-lg tracking-tight">DOKUN</span>
                <span className="text-[10px] font-bold bg-[#16A36A]/20 text-[#16A36A] border border-[#16A36A]/30 px-2 py-0.5 rounded-md uppercase tracking-wider">
                  PRO
                </span>
              </div>
            </Link>

            {/* Club Link */}
            <div className="hidden lg:flex items-center pl-3 border-l border-white/10">
              <Link
                href={ROUTES.club}
                className="inline-flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#16A36A] transition-colors"
              >
                <span>Club&apos;a Git</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {businessNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#9CA3AF] hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector variant="dark" />
            <Link
              href={ROUTES.club}
              className="text-xs font-medium text-[#9CA3AF] hover:text-white transition-colors px-2 py-1"
            >
              Club&apos;a Git
            </Link>

            <a
              href="#fiyat"
              className="h-9 px-4 bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm flex items-center gap-1.5"
            >
              <span>İşletme Başvurusu</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile menu toggle & Language */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector variant="dark" />
            <button
              className="p-2 rounded-xl text-[#9CA3AF] hover:bg-white/10 hover:text-white transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 md:hidden flex flex-col gap-2">
          {businessNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-[#D1D5DB] hover:text-white rounded-lg hover:bg-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link
            href={ROUTES.club}
            className="px-3 py-2 text-xs font-medium text-[#9CA3AF] hover:text-white flex items-center gap-1.5"
            onClick={() => setMobileOpen(false)}
          >
            <ArrowLeft size={13} />
            Club&apos;a Git (Müşteri)
          </Link>
          <a
            href="#fiyat"
            className="w-full py-3 bg-[#16A36A] text-white text-xs font-semibold rounded-xl text-center hover:bg-[#12916A] transition-all"
            onClick={() => setMobileOpen(false)}
          >
            İşletme Başvurusu
          </a>
        </div>
      )}
    </>
  );
}
