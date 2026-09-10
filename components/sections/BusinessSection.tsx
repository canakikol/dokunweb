"use client";

import { Users, Heart, BarChart2, Target, MessageCircle, TrendingUp } from "lucide-react";
import { StaggerContainer, StaggerItem, SectionWrapper } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ROUTES } from "@/components/config/routes";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function BusinessSection() {
  const t = useLanguage((s) => s.t);
  const c = t.club;

  const features = [
    { Icon: Users, label: c.bizSectionFeature1 },
    { Icon: Heart, label: c.bizSectionFeature2 },
    { Icon: BarChart2, label: c.bizSectionFeature3 },
    { Icon: Target, label: c.bizSectionFeature4 },
    { Icon: MessageCircle, label: c.bizSectionFeature5 },
    { Icon: TrendingUp, label: c.bizSectionFeature6 },
  ];

  return (
    <section id="isletmeler" className="py-24 lg:py-32 bg-white" aria-labelledby="business-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Dashboard visual */}
          <SectionWrapper direction="left">
            <div className="relative">
              <div className="bg-[#F4FBF7] rounded-3xl p-8 border border-[#16A36A]/10">
                {/* Dashboard card */}
                <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase">DOKUN PRO</div>
                      <div className="text-sm font-bold text-[#0a0a0a] mt-0.5">ABC Coffee</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#EEF9F3] px-2.5 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16A36A] animate-pulse" />
                      <span className="text-[10px] font-semibold text-[#16A36A]">Canlı</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Müşteriler", value: "284" },
                      { label: "Bu ay", value: "47" },
                      { label: "Ödüller", value: "23" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#F9FAFB] rounded-xl p-3 text-center">
                        <div className="text-base font-bold text-[#0a0a0a]">{stat.value}</div>
                        <div className="text-[9px] text-[#9CA3AF] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent customers */}
                  <div className="space-y-2">
                    {[
                      { name: "Ahmet K.", initial: "A", progress: "8 / 10" },
                      { name: "Zeynep M.", initial: "Z", progress: "340 puan" },
                      { name: "Mehmet A.", initial: "M", progress: "5 / 10" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center justify-between py-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-[#EEF9F3] rounded-full flex items-center justify-center text-xs font-bold text-[#16A36A]">
                            {c.initial}
                          </div>
                          <span className="text-xs font-medium text-[#0a0a0a]">{c.name}</span>
                        </div>
                        <span className="text-xs text-[#9CA3AF]">{c.progress}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp notification */}
                <div className="bg-[#25D366]/8 border border-[#25D366]/20 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={14} className="text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0a0a0a] mb-1">WhatsApp Kampanya</div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      &ldquo;Bu hafta sana özel 2x puan kazanma fırsatı seni bekliyor.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Right: Copy */}
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
                {c.bizSectionBadge}
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2 id="business-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5">
                {c.bizSectionTitle1}
                <br />
                {c.bizSectionTitle2}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8 max-w-md">
                {c.bizSectionDesc}{" "}
                <span className="font-semibold text-[#0a0a0a]">{c.bizSectionDescBold}</span>
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#16A36A]/20 transition-colors duration-200"
                  >
                    <Icon size={16} className="text-[#16A36A] flex-shrink-0" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-[#0a0a0a]">{label}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link
                href={ROUTES.dokunPro}
                className="inline-flex items-center gap-2 h-14 px-8 bg-[#0a0a0a] text-white font-semibold text-base rounded-2xl hover:bg-[#1a1a1a] transition-all duration-200 hover:scale-[1.02] shadow-sm"
              >
                {c.bizSectionCta}
                <ArrowRight size={18} />
              </Link>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-4 text-xs text-[#9CA3AF]">{c.bizSectionFootnote}</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
