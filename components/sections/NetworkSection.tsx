"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const demoBusinesses = [
  { initial: "C", name: "Coffee House", campaign: "DOKUN üyesine özel", badge: "Popüler", color: "#16A36A" },
  { initial: "B", name: "Burger House", campaign: "+2 puan kampanyası", badge: "Kampanya", color: "#F59E0B" },
  { initial: "X", name: "Barber X", campaign: "5 ziyarette 1 ücretsiz", badge: "Sadakat", color: "#8B5CF6" },
  { initial: "P", name: "Pizza House", campaign: "500 puanda büyük pizza", badge: "Yeni", color: "#EF4444" },
  { initial: "K", name: "Kitap Kafe", campaign: "10 kitapta 1 ücretsiz kahve", badge: "Özel", color: "#3B82F6" },
  { initial: "Y", name: "Yoga Studio", campaign: "5 derste 1 ücretsiz", badge: "Wellness", color: "#10B981" },
];

export function NetworkSection() {
  const t = useLanguage((s) => s.t);
  const c = t.club;

  return (
    <section className="py-24 lg:py-32 bg-[#F4FBF7]" aria-labelledby="network-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              {c.networkBadge}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="network-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5">
              {c.networkTitle1}
              <br />
              {c.networkTitle2}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#4B5563] max-w-xl mx-auto leading-relaxed">{c.networkDesc}</p>
          </StaggerItem>

          <StaggerItem>
            <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-xs text-[#6B7280]">{c.networkDemoNote}</span>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {demoBusinesses.map((biz) => (
            <StaggerItem key={biz.name}>
              <div className="bg-white rounded-2xl p-5 border border-[#E5E7EB] hover:border-[#16A36A]/20 hover:shadow-md hover:shadow-[#16A36A]/5 transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-sm font-bold group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: biz.color }}
                  >
                    {biz.initial}
                  </div>
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${biz.color}15`, color: biz.color }}
                  >
                    {biz.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#0a0a0a] mb-1.5">{biz.name}</h3>
                <p className="text-xs text-[#16A36A] font-medium">{biz.campaign}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-16 text-center">
          <StaggerItem>
            <div className="inline-flex items-center gap-3 bg-white border border-[#E5E7EB] rounded-2xl px-6 py-4">
              <div className="flex -space-x-2">
                {["C", "B", "X", "P", "K"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: demoBusinesses[i].color }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#4B5563]">
                <span className="font-bold text-[#0a0a0a]">{c.networkCount}</span> {c.networkGrowth}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
