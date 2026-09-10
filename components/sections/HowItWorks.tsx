"use client";

import { Nfc, UserPlus, Star, Gift } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();
  const c = t.club;

  const steps = [
    { number: "01", title: c.step1Title, description: c.step1Desc, Icon: Nfc, detail: c.step1Detail },
    { number: "02", title: c.step2Title, description: c.step2Desc, Icon: UserPlus, detail: c.step2Detail },
    { number: "03", title: c.step3Title, description: c.step3Desc, Icon: Star, detail: c.step3Detail },
    { number: "04", title: c.step4Title, description: c.step4Desc, Icon: Gift, detail: c.step4Detail },
  ];

  return (
    <section id="nasil-calisir" className="py-24 lg:py-32 bg-[#F4FBF7]" aria-labelledby="nasil-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              {c.howBadge}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="nasil-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5">
              {c.howTitle}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#4B5563] max-w-lg mx-auto">{c.howDesc}</p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col h-full">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+12px)] w-full h-px border-t-2 border-dashed border-[#16A36A]/25 z-10" />
                )}
                <div className="bg-white rounded-3xl p-6 border border-[#E5E7EB] hover:border-[#16A36A]/20 hover:shadow-md transition-all duration-300 h-full group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-xs font-bold text-[#16A36A] tracking-widest">{step.number}</div>
                    <div className="w-10 h-10 bg-[#F4FBF7] rounded-2xl flex items-center justify-center group-hover:bg-[#EEF9F3] transition-colors duration-200">
                      <step.Icon size={18} className="text-[#16A36A]" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#0a0a0a] mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-3">{step.description}</p>
                  <p className="text-xs text-[#9CA3AF]">{step.detail}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
