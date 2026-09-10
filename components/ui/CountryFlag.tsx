import React from "react";

export type LanguageCode = "tr" | "en" | "de";

interface CountryFlagProps {
  country: LanguageCode;
  size?: number; // width in px
  className?: string;
  showBorder?: boolean;
}

export function CountryFlag({
  country,
  size = 24,
  className = "",
  showBorder = true,
}: CountryFlagProps) {
  // Flag standard aspect ratio ~ 4:3 or 3:2. We use 4:3 with rounded corners and realistic gloss.
  const height = Math.round((size * 3) / 4);

  return (
    <div
      style={{ width: size, height }}
      className={`relative inline-flex items-center justify-center rounded-[4px] overflow-hidden flex-shrink-0 shadow-sm transition-transform duration-200 ${
        showBorder ? "ring-1 ring-black/15 dark:ring-white/20" : ""
      } ${className}`}
    >
      {country === "tr" && (
        <svg
          viewBox="0 0 1200 800"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Turkish Red */}
          <rect width="1200" height="800" fill="#E30A17" />
          {/* Outer Moon Circle */}
          <circle cx="420" cy="400" r="240" fill="#FFFFFF" />
          {/* Inner Moon Cutout */}
          <circle cx="480" cy="400" r="192" fill="#E30A17" />
          {/* 5-pointed Star rotated towards crescent */}
          <polygon
            points="680,400 600,426 630,344 570,400 650,426"
            fill="#FFFFFF"
            transform="rotate(-18 640 400)"
          />
        </svg>
      )}

      {country === "en" && (
        <svg
          viewBox="0 0 60 40"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* UK Union Jack */}
          <clipPath id="ukClip">
            <rect width="60" height="40" rx="2" />
          </clipPath>
          <g clipPath="url(#ukClip)">
            {/* Navy blue field */}
            <rect width="60" height="40" fill="#012169" />
            {/* White saltire base */}
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
            {/* Red saltires */}
            <path d="M0,0 L30,20 M60,40 L30,20" stroke="#C8102E" strokeWidth="2.5" />
            <path d="M60,0 L30,20 M0,40 L30,20" stroke="#C8102E" strokeWidth="2.5" />
            {/* White cross base */}
            <path d="M30,0 v40 M0,20 h60" stroke="#FFFFFF" strokeWidth="12" />
            {/* Red central cross */}
            <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="7" />
          </g>
        </svg>
      )}

      {country === "de" && (
        <svg
          viewBox="0 0 5 3"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* German Tricolor: Black, Red, Gold */}
          <rect width="5" height="1" y="0" fill="#151515" />
          <rect width="5" height="1" y="1" fill="#DD0000" />
          <rect width="5" height="1" y="2" fill="#FFCE00" />
        </svg>
      )}

      {/* Realistic 3D glass gloss overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/25 via-transparent to-black/15 mix-blend-overlay" />
      <div className="absolute inset-0 pointer-events-none rounded-[4px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.3)]" />
    </div>
  );
}
