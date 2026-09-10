"use client";

import { RealisticIcon, RealisticIconType } from "@/components/ui/RealisticIcon";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhatIsDokun() {
  const { t } = useLanguage();
  const c = t.club;

  const concepts: { keyword: string; iconName: RealisticIconType; description: string; detail: string }[] = [
    { keyword: c.concept1Keyword, iconName: "nfc", description: c.concept1Desc, detail: c.concept1Detail },
    { keyword: c.concept2Keyword, iconName: "user", description: c.concept2Desc, detail: c.concept2Detail },
    { keyword: c.concept3Keyword, iconName: "trophy", description: c.concept3Desc, detail: c.concept3Detail },
  ];

  return (
    <section id="nedir" className="py-24 lg:py-32 bg-white" aria-labelledby="nedir-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              {c.whatIsBadge}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2
              id="nedir-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5"
            >
              {c.whatIsTitle}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">
              {c.whatIsDesc}
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {concepts.map((item) => (
            <StaggerItem key={item.keyword}>
              <div className="group relative bg-white border border-[#E5E7EB] rounded-3xl p-8 hover:border-[#16A36A]/30 hover:shadow-lg hover:shadow-[#16A36A]/5 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#F4FBF7] rounded-2xl flex items-center justify-center group-hover:bg-[#EEF9F3] transition-colors duration-200 border border-[#16A36A]/15 shadow-xs">
                    <RealisticIcon name={item.iconName} size={28} />
                  </div>
                  <span className="text-xs font-bold text-[#16A36A] tracking-widest">{item.keyword}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{item.description}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.detail}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A36A] rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-20 flex items-center justify-center">
          <StaggerItem>
            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <div className="w-8 h-px bg-[#E5E7EB]" />
              <span className="font-medium text-[#0a0a0a]">{c.whatIsTagline}</span>
              <div className="w-8 h-px bg-[#E5E7EB]" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
