"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { QrCode, Check } from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    label: "Ziyaret",
    text: "Mehmet ilk kez ABC Coffee'ye gelir.",
    type: "event",
  },
  {
    id: 2,
    label: "Dokunuş",
    text: "Telefonunu DOKUN standına yaklaştırır.",
    highlight: true,
    type: "action",
  },
  {
    id: 3,
    label: "Kayıt",
    text: "DOKUN Club hesabını açar.",
    type: "event",
  },
  {
    id: 4,
    label: "Katılım",
    text: "ABC Coffee'nin sadakat programına katılır.",
    type: "event",
  },
  {
    id: 5,
    label: "Alışveriş",
    text: "4 kahve satın alır.",
    type: "event",
  },
  {
    id: 6,
    label: "Kazanım",
    text: "Mehmet +4 puan kazanır.",
    highlight: true,
    type: "reward",
    badge: "+4 puan",
  },
  {
    id: 7,
    label: "Hedef",
    text: "10 kahveye ulaştığında ödülü açılır.",
    highlight: true,
    type: "milestone",
    badge: "Ücretsiz kahve",
  },
  {
    id: 8,
    label: "QR Kod",
    text: "Ödülü Kullan butonuna basar — dinamik QR kod oluşur.",
    type: "action",
    qr: true,
  },
  {
    id: 9,
    label: "Tamamlandı",
    text: "Kasiyer QR kodu tarar. Ödül kullanılır.",
    type: "success",
    highlight: true,
  },
];

function TimelineStep({
  step,
  index,
}: {
  step: (typeof timelineSteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-60px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="flex items-start gap-4"
    >
      {/* Timeline indicator */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            step.type === "success"
              ? "bg-[#EEF9F3] border-2 border-[#16A36A]"
              : step.highlight
              ? "bg-[#16A36A]"
              : "bg-white border border-[#E5E7EB]"
          }`}
        >
          {step.type === "success" ? (
            <Check size={14} className="text-[#16A36A]" strokeWidth={2.5} />
          ) : step.qr ? (
            <QrCode size={14} className={step.highlight ? "text-white" : "text-[#6B7280]"} strokeWidth={1.75} />
          ) : (
            <span className={`text-[10px] font-bold ${step.highlight ? "text-white" : "text-[#9CA3AF]"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        {index < timelineSteps.length - 1 && (
          <div className="w-px h-6 bg-[#E5E7EB] my-1" />
        )}
      </div>

      {/* Content */}
      <div className="pb-5 pt-1.5 flex-1">
        <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-0.5">
          {step.label}
        </div>
        <p
          className={`text-sm leading-relaxed ${
            step.highlight ? "font-semibold text-[#0a0a0a]" : "text-[#4B5563]"
          }`}
        >
          {step.text}
        </p>
        {step.badge && (
          <span className="inline-block mt-2 px-3 py-1 bg-[#EEF9F3] text-[#16A36A] text-xs font-bold rounded-xl border border-[#16A36A]/20">
            {step.badge}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function ScenarioSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="scenario-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: sticky card */}
          <SectionWrapper direction="left" className="lg:sticky lg:top-28">
            <div>
              <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
                Gerçek Senaryo
              </span>
              <h2
                id="scenario-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-6"
              >
                Mesela bir kahve için.
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
                Mehmet, ABC Coffee&apos;ye her gittiğinde DOKUN sayesinde sadakat
                puanı biriktiriyor. 10 kahvede bir ücretsiz kahve kazanıyor.
              </p>

              {/* App preview */}
              <div className="bg-[#F4FBF7] rounded-3xl p-6 border border-[#16A36A]/10">
                <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase mb-4">
                  Club Uygulaması
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-bold text-[#0a0a0a]">ABC Coffee</div>
                    <div className="text-xs text-[#9CA3AF]">10 ziyarette 1 ücretsiz</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#16A36A]">10 / 10</div>
                    <div className="text-[10px] text-[#9CA3AF]">tamamlandı</div>
                  </div>
                </div>

                {/* Stamp dots */}
                <div className="flex gap-1.5 mb-5 flex-wrap">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-[#16A36A] flex items-center justify-center"
                    >
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                  ))}
                </div>

                <div className="bg-[#16A36A] rounded-2xl py-3 text-center">
                  <div className="text-white text-sm font-bold">Ücretsiz kahve kazandın</div>
                  <div className="text-white/70 text-xs mt-0.5">Ödülü Kullan →</div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Right: Timeline */}
          <SectionWrapper direction="right">
            <div>
              <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-6">
                Adım adım
              </div>
              {timelineSteps.map((step, index) => (
                <TimelineStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
