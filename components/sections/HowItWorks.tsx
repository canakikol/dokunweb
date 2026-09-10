"use client";

import { Nfc, UserPlus, Star, Gift } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "DOKUN",
    description: "Telefonunu DOKUN standına yaklaştır.",
    Icon: Nfc,
    detail: "NFC teknolojisi ile saniyeler içinde bağlanırsın.",
  },
  {
    number: "02",
    title: "KATIL",
    description: "DOKUN Club hesabını oluştur ve işletmenin sadakat programına katıl.",
    Icon: UserPlus,
    detail: "Tek hesap, tüm işletmeler.",
  },
  {
    number: "03",
    title: "KAZAN",
    description: "Alışveriş yaptıkça puanlarını veya ziyaretlerini biriktir.",
    Icon: Star,
    detail: "Her ziyaret, her ödeme — sayılır.",
  },
  {
    number: "04",
    title: "ÖDÜLÜNÜ KULLAN",
    description: "Hedefine ulaştığında ödülünü kazan ve Club üzerinden kullan.",
    Icon: Gift,
    detail: "QR kod ile anında kullan.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="nasil-calisir"
      className="py-24 lg:py-32 bg-[#F4FBF7]"
      aria-labelledby="nasil-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
              Nasıl Çalışır?
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2
              id="nasil-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-5"
            >
              Bir dokunuşla başlar.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#4B5563] max-w-lg mx-auto">
              Dört basit adım. Hiçbir uygulama indirme zorunluluğu yok.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col h-full">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+12px)] w-full h-px border-t-2 border-dashed border-[#16A36A]/25 z-10" />
                )}

                <div className="bg-white rounded-3xl p-6 border border-[#E5E7EB] hover:border-[#16A36A]/20 hover:shadow-md transition-all duration-300 h-full group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-xs font-bold text-[#16A36A] tracking-widest">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 bg-[#F4FBF7] rounded-2xl flex items-center justify-center group-hover:bg-[#EEF9F3] transition-colors duration-200">
                      <step.Icon size={18} className="text-[#16A36A]" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#0a0a0a] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                    {step.description}
                  </p>
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
