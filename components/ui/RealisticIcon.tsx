import React from "react";

export type RealisticIconType = 
  | "store" 
  | "user" 
  | "coffee" 
  | "gift" 
  | "nfc" 
  | "qr" 
  | "chart" 
  | "check" 
  | "sparkle"
  | "trophy"
  | "target";

interface RealisticIconProps {
  name: RealisticIconType;
  size?: number;
  className?: string;
}

export function RealisticIcon({ name, size = 32, className = "" }: RealisticIconProps) {
  const s = size;
  
  switch (name) {
    case "store":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="storeRoof" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="storeBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="awningLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Main building back */}
          <rect x="7" y="19" width="34" height="23" rx="4" fill="url(#storeBase)" stroke="#374151" strokeWidth="1.5" />
          {/* Glass window */}
          <rect x="11" y="27" width="11" height="11" rx="2" fill="#3B82F6" fillOpacity="0.25" stroke="#60A5FA" strokeWidth="1" />
          {/* Glass reflection */}
          <path d="M13 29L20 36" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
          {/* Wooden door */}
          <rect x="27" y="26" width="10" height="16" rx="2" fill="#065F46" stroke="#10B981" strokeWidth="1" />
          <circle cx="34" cy="34" r="1.2" fill="#FCD34D" />
          {/* Awning stripes */}
          <path d="M5 19L8 8H40L43 19H5Z" fill="url(#storeRoof)" />
          <path d="M12 8L10.5 19H17.5L18.5 8H12Z" fill="url(#awningLight)" />
          <path d="M25 8L24.5 19H31.5L32 8H25Z" fill="url(#awningLight)" />
          {/* Awning wavy bottom fringe */}
          <circle cx="9" cy="19.5" r="2.5" fill="url(#storeRoof)" />
          <circle cx="14" cy="19.5" r="2.5" fill="url(#awningLight)" />
          <circle cx="19" cy="19.5" r="2.5" fill="url(#storeRoof)" />
          <circle cx="24" cy="19.5" r="2.5" fill="url(#awningLight)" />
          <circle cx="29" cy="19.5" r="2.5" fill="url(#storeRoof)" />
          <circle cx="34" cy="19.5" r="2.5" fill="url(#awningLight)" />
          <circle cx="39" cy="19.5" r="2.5" fill="url(#storeRoof)" />
        </svg>
      );

    case "user":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="userShield" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ECFDF5" />
              <stop offset="100%" stopColor="#D1FAE5" />
            </linearGradient>
          </defs>
          {/* Background circle badge */}
          <rect x="4" y="4" width="40" height="40" rx="14" fill="url(#userShield)" stroke="#A7F3D0" strokeWidth="1.5" />
          {/* Head */}
          <circle cx="24" cy="18" r="7.5" fill="url(#userGrad)" />
          <circle cx="22" cy="16" r="2" fill="#FFFFFF" fillOpacity="0.4" />
          {/* Body shoulders */}
          <path d="M12 36C12 30.5 16.5 27 24 27C31.5 27 36 30.5 36 36" fill="url(#userGrad)" />
          <path d="M14 36C14 32 17.5 29 24 29C30.5 29 34 32 34 36" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          {/* Star badge */}
          <circle cx="33" cy="14" r="5" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1.5" />
          <path d="M33 11.5L34 13.5L36.2 13.7L34.5 15.2L35 17.4L33 16.2L31 17.4L31.5 15.2L29.8 13.7L32 13.5L33 11.5Z" fill="#FFFFFF" />
        </svg>
      );

    case "coffee":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="coffeeCup" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F3F4F6" />
            </linearGradient>
            <linearGradient id="latteArt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>
          {/* Saucer */}
          <ellipse cx="23" cy="40" rx="17" ry="3.5" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
          {/* Cup Handle */}
          <path d="M29 21C36 21 38 30 30 33" stroke="#D1D5DB" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M29 21C36 21 38 30 30 33" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Cup Body */}
          <path d="M10 18C10 32 14 37 23 37C32 37 36 32 36 18H10Z" fill="url(#coffeeCup)" stroke="#E5E7EB" strokeWidth="1" />
          {/* Coffee surface */}
          <ellipse cx="23" cy="18" rx="12.5" ry="4" fill="url(#latteArt)" />
          {/* Heart Latte art */}
          <path d="M23 19.5C21.5 17.5 19 17.5 19 19C19 20.5 23 22 23 22C23 22 27 20.5 27 19C27 17.5 24.5 17.5 23 19.5Z" fill="#FEF3C7" fillOpacity="0.9" />
          {/* Steam wisps */}
          <path d="M19 13C18 10 20 8 19 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
          <path d="M24 12C23 9 25 7 24 4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
          <path d="M29 13C28 10 30 8 29 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
        </svg>
      );

    case "gift":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Box base */}
          <rect x="8" y="19" width="32" height="23" rx="4" fill="url(#boxGrad)" stroke="#065F46" strokeWidth="1" />
          {/* Box lid */}
          <rect x="6" y="14" width="36" height="7" rx="2.5" fill="#059669" stroke="#047857" strokeWidth="1" />
          {/* Vertical ribbon */}
          <rect x="21.5" y="14" width="5" height="28" fill="url(#ribbonGold)" />
          {/* Horizontal ribbon on lid */}
          <rect x="6" y="16" width="36" height="3" fill="url(#ribbonGold)" />
          {/* Bow left loop */}
          <path d="M23 14C17 14 15 7 20 7C23 7 24 11 24 14Z" fill="url(#ribbonGold)" />
          {/* Bow right loop */}
          <path d="M25 14C31 14 33 7 28 7C25 7 24 11 24 14Z" fill="url(#ribbonGold)" />
          {/* Bow center knot */}
          <circle cx="24" cy="14" r="2.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.8" />
        </svg>
      );

    case "nfc":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="nfcChip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          {/* Smart Chip Body */}
          <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#nfcChip)" stroke="#334155" strokeWidth="1.5" />
          {/* Glow circle */}
          <circle cx="24" cy="24" r="14" stroke="url(#neonGreen)" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Waves */}
          <path d="M15 24C15 19 19 15 24 15" stroke="url(#neonGreen)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18.5 24C18.5 21 21 18.5 24 18.5" stroke="url(#neonGreen)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="2.5" fill="#34D399" />
          {/* Corner metallic contacts */}
          <circle cx="11" cy="11" r="1.5" fill="#64748B" />
          <circle cx="37" cy="11" r="1.5" fill="#64748B" />
          <circle cx="11" cy="37" r="1.5" fill="#64748B" />
          <circle cx="37" cy="37" r="1.5" fill="#64748B" />
        </svg>
      );

    case "chart":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="38" height="38" rx="10" fill="#111827" stroke="#1F2937" strokeWidth="1.5" />
          {/* Trend arrow */}
          <path d="M12 28L20 20L27 25L36 14" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31 14H36V19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* 3D-styled Bars */}
          <rect x="11" y="30" width="6" height="8" rx="2" fill="url(#bar1)" />
          <rect x="21" y="24" width="6" height="14" rx="2" fill="url(#bar2)" />
          <rect x="31" y="18" width="6" height="20" rx="2" fill="url(#bar3)" />
        </svg>
      );

    case "qr":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
          {/* Top-left eye */}
          <rect x="11" y="11" width="10" height="10" rx="2" fill="#111827" />
          <rect x="13" y="13" width="6" height="6" rx="1" fill="#FFFFFF" />
          <rect x="15" y="15" width="2" height="2" fill="#10B981" />
          {/* Top-right eye */}
          <rect x="27" y="11" width="10" height="10" rx="2" fill="#111827" />
          <rect x="29" y="13" width="6" height="6" rx="1" fill="#FFFFFF" />
          <rect x="31" y="15" width="2" height="2" fill="#10B981" />
          {/* Bottom-left eye */}
          <rect x="11" y="27" width="10" height="10" rx="2" fill="#111827" />
          <rect x="13" y="29" width="6" height="6" rx="1" fill="#FFFFFF" />
          <rect x="15" y="31" width="2" height="2" fill="#10B981" />
          {/* Dynamic bits */}
          <rect x="25" y="25" width="4" height="4" rx="1" fill="#111827" />
          <rect x="32" y="27" width="4" height="4" rx="1" fill="#10B981" />
          <rect x="27" y="33" width="4" height="4" rx="1" fill="#111827" />
          <rect x="33" y="33" width="4" height="4" rx="1" fill="#111827" />
        </svg>
      );

    case "trophy":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="goldTrophy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* Pedestal */}
          <rect x="14" y="38" width="20" height="4" rx="1.5" fill="#374151" />
          <path d="M19 32H29L27 38H21L19 32Z" fill="#4B5563" />
          {/* Handles */}
          <path d="M13 14C8 14 8 23 14 24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M35 14C40 14 40 23 34 24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Cup Body */}
          <path d="M14 9H34V20C34 26 29 31 24 31C19 31 14 26 14 20V9Z" fill="url(#goldTrophy)" />
          {/* Star on Cup */}
          <path d="M24 15L25.2 18L28.5 18.2L26 20.2L26.8 23.3L24 21.6L21.2 23.3L22 20.2L19.5 18.2L22.8 18L24 15Z" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
      );

    case "target":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <circle cx="24" cy="24" r="18" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <circle cx="24" cy="24" r="12" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" fill="#EF4444" />
          <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
        </svg>
      );

    case "sparkle":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <defs>
            <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
          </defs>
          <path d="M24 4C24 14 14 24 4 24C14 24 24 34 24 44C24 34 34 24 44 24C34 24 24 14 24 4Z" fill="url(#sparkleGrad)" />
          <circle cx="37" cy="11" r="3" fill="#FACC15" />
          <circle cx="11" cy="37" r="2.5" fill="#FACC15" />
        </svg>
      );

    case "check":
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" className={`drop-shadow-md ${className}`}>
          <circle cx="24" cy="24" r="18" fill="#10B981" />
          <path d="M16 24.5L22 30.5L32 18.5" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
