"use client";

import { CreditCard, Star, Gift, Sparkles } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";

const benefits = [
  {
    Icon: CreditCard,
    title: "Tek Hesap",
    description:
      "Her işletme için ayrı üyelik oluşturmak zorunda değilsin. DOKUN Club ile tüm sadakat programların tek yerde.",
  },
  {
    Icon: Star,
    title: "Sadakat",
    description:
      "Favori işletmelerinde her ziyarette, her alışverişte puan veya ziyaret sayısı kazan.",
  },
  {
    Icon: Gift,
    title: "Ödüller",
    description:
      "Kazandığın ödülleri Club uygulamasından tek yerden takip et. Hiçbir ödülünü kaçırma.",
  },
  {
    Icon: Sparkles,
    title: "Fırsatlar",
    description:
      "DOKUN işletmelerindeki sana özel kampanyaları ve fırsatları keşfet.",
  },
];

export function WhyClub() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              Avantajlar
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5"
            >
              Neden DOKUN Club?
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#4B5563] max-w-lg mx-auto">
              Tek hesap. Daha fazla ödül.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="flex gap-5 p-7 rounded-3xl border border-[#E5E7EB] hover:border-[#16A36A]/20 hover:shadow-lg hover:shadow-[#16A36A]/5 transition-all duration-300 group hover:-translate-y-0.5 bg-white">
                <div className="flex-shrink-0 w-11 h-11 bg-[#F4FBF7] rounded-2xl flex items-center justify-center group-hover:bg-[#EEF9F3] transition-colors duration-200">
                  <benefit.Icon size={18} className="text-[#16A36A]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0a0a0a] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
