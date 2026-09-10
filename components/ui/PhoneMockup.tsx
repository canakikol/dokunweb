"use client";

import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PhoneMockup({ children, className = "", size = "md" }: PhoneMockupProps) {
  const sizes = {
    sm: "w-[200px] h-[400px]",
    md: "w-[260px] h-[520px]",
    lg: "w-[300px] h-[600px]",
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[40px] bg-[#1a1a1a] shadow-2xl ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[3px] top-48 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />

        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[37px] bg-white overflow-hidden">
          {/* Status bar */}
          <div className="relative h-10 flex items-center justify-between px-6 bg-white z-10">
            <span className="text-[10px] font-semibold text-[#0a0a0a]">9:41</span>
            {/* Dynamic island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-full" />
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px] items-end">
                <div className="w-[3px] h-[6px] bg-[#0a0a0a] rounded-[1px]" />
                <div className="w-[3px] h-[8px] bg-[#0a0a0a] rounded-[1px]" />
                <div className="w-[3px] h-[10px] bg-[#0a0a0a] rounded-[1px]" />
                <div className="w-[3px] h-[12px] bg-[#0a0a0a] rounded-[1px]" />
              </div>
              <svg className="w-3 h-3 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
              <div className="flex items-center gap-[1px]">
                <div className="w-5 h-2.5 rounded-[3px] border border-[#0a0a0a] flex items-center px-[2px]">
                  <div className="w-3 h-1.5 bg-[#0a0a0a] rounded-[1px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="h-[calc(100%-40px)] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneScreen({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`h-full bg-white overflow-y-auto px-4 py-3 ${className}`}>
      {children}
    </div>
  );
}
