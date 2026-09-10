"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0–100
  max?: number;
  color?: string;
  className?: string;
  label?: string;
  animated?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  color = "#16A36A",
  className = "",
  label,
  animated = true,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-40px 0px",
  });
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`} role="progressbar" aria-valuenow={value} aria-valuemax={max} aria-label={label}>
      <div ref={ref} className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? (isInView ? `${percent}%` : "0%") : `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

interface StampProgressProps {
  current: number;
  total: number;
  color?: string;
  className?: string;
}

export function StampProgress({ current, total, color = "#16A36A", className = "" }: StampProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <div ref={ref} className={`flex gap-1.5 flex-wrap ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: i < current && isInView ? color : "#E5E7EB",
            backgroundColor: i < current && isInView ? color : "transparent",
            transitionDelay: `${i * 80}ms`,
          }}
        >
          {i < current && isInView && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
