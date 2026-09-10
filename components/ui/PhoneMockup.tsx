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
      {/* Outer Phone Frame - Brushed Titanium with realistic multi-layer depth */}
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#2E3138] via-[#1E2024] to-[#121316] p-[2.5px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.2)] ring-1 ring-white/20">
        
        {/* Metal Chamfer Edge */}
        <div className="w-full h-full rounded-[45px] bg-[#0E0F12] p-[6px] relative overflow-hidden">
          
          {/* Side action buttons */}
          <div className="absolute -left-[4.5px] top-24 w-[3.5px] h-9 bg-gradient-to-r from-[#4B5563] to-[#1F2937] rounded-l-sm" />
          <div className="absolute -left-[4.5px] top-36 w-[3.5px] h-12 bg-gradient-to-r from-[#4B5563] to-[#1F2937] rounded-l-sm" />
          <div className="absolute -left-[4.5px] top-52 w-[3.5px] h-12 bg-gradient-to-r from-[#4B5563] to-[#1F2937] rounded-l-sm" />
          <div className="absolute -right-[4.5px] top-32 w-[3.5px] h-16 bg-gradient-to-l from-[#4B5563] to-[#1F2937] rounded-r-sm" />

          {/* Screen Display */}
          <div className="w-full h-full rounded-[39px] bg-white overflow-hidden relative shadow-inner">
            
            {/* Status Bar */}
            <div className="relative h-11 flex items-center justify-between px-6 bg-white z-20">
              <span className="text-[11px] font-bold text-[#0a0a0a] tracking-tight">9:41</span>
              
              {/* Realistic Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-[#000000] rounded-full flex items-center justify-between px-2.5 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1B3A4B]/80" />
                </div>
                <div className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
              </div>

              {/* Status Icons */}
              <div className="flex items-center gap-1.5">
                <div className="flex gap-[1.5px] items-end">
                  <div className="w-[3px] h-[5px] bg-[#0a0a0a] rounded-[0.5px]" />
                  <div className="w-[3px] h-[7px] bg-[#0a0a0a] rounded-[0.5px]" />
                  <div className="w-[3px] h-[9px] bg-[#0a0a0a] rounded-[0.5px]" />
                  <div className="w-[3px] h-[11px] bg-[#0a0a0a] rounded-[0.5px]" />
                </div>
                <div className="w-5 h-2.5 rounded-[3px] border border-[#0a0a0a] p-[1px] flex items-center">
                  <div className="w-3.5 h-full bg-[#0a0a0a] rounded-[1.5px]" />
                </div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="h-[calc(100%-44px)] overflow-hidden relative z-10">
              {children}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#0a0a0a]/30 rounded-full z-20" />

            {/* Realistic Glass Glare Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-30" />
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
