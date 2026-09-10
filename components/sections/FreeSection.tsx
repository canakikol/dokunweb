"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ROUTES } from "@/components/config/routes";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FreeSection() {
  const t = useLanguage((s) => s.t);
  const c = t.club;

  const features = [
    c.freeFeature1,
    c.freeFeature2,
    c.freeFeature3,
    c.freeFeature4,
    c.freeFeature5,
    c.freeFeature6,
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F4FBF7]" aria-labelledby="free-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <StaggerContainer>
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              {c.freeBadge}
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2 id="free-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-3">
              {c.freeTitle}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-[#4B5563] mb-10">{c.freeSubtitle}</p>
          </StaggerItem>

          {/* Price display */}
          <StaggerItem>
            <div className="inline-flex items-end gap-2 bg-white border border-[#E5E7EB] rounded-3xl px-8 py-6 mb-10 shadow-sm">
              <span className="text-6xl font-bold text-[#0a0a0a]">₺0</span>
              <span className="text-lg text-[#9CA3AF] mb-2">{c.freePerMonth}</span>
            </div>
          </StaggerItem>

          {/* Features */}
          <StaggerItem>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10 max-w-xl mx-auto">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-[#E5E7EB]">
                  <div className="w-6 h-6 bg-[#EEF9F3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#16A36A]" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-[#0a0a0a]">{feature}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <Link
              href={ROUTES.clubJoin}
              className="inline-flex items-center justify-center h-14 px-10 bg-[#16A36A] text-white font-semibold text-base rounded-2xl hover:bg-[#12916A] transition-all duration-200 hover:scale-[1.02] shadow-md hover:shadow-lg hover:shadow-[#16A36A]/20"
            >
              {c.freeCta}
            </Link>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-4 text-xs text-[#9CA3AF]">{c.freeFootnote}</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
