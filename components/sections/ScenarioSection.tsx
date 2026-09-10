"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { QrCode, Check } from "lucide-react";
import { RealisticIcon } from "@/components/ui/RealisticIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ScenarioSection() {
  const { t } = useLanguage();
  const c = t.club;

  const timelineSteps = [
    { id: 1, label: c.timelineStep1Label, text: c.timelineStep1Text, type: "event" },
    { id: 2, label: c.timelineStep2Label, text: c.timelineStep2Text, highlight: true, type: "action" },
    { id: 3, label: c.timelineStep3Label, text: c.timelineStep3Text, type: "event" },
    { id: 4, label: c.timelineStep4Label, text: c.timelineStep4Text, type: "event" },
    { id: 5, label: c.timelineStep5Label, text: c.timelineStep5Text, type: "event" },
    { id: 6, label: c.timelineStep6Label, text: c.timelineStep6Text, highlight: true, type: "reward", badge: c.timelineStep6Badge },
    { id: 7, label: c.timelineStep7Label, text: c.timelineStep7Text, highlight: true, type: "milestone", badge: c.timelineStep7Badge },
    { id: 8, label: c.timelineStep8Label, text: c.timelineStep8Text, type: "action", qr: true },
    { id: 9, label: c.timelineStep9Label, text: c.timelineStep9Text, type: "success", highlight: true },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="scenario-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: sticky card */}
          <SectionWrapper direction="left" className="lg:sticky lg:top-28">
            <div>
              <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
                {c.scenarioBadge}
              </span>
              <h2 id="scenario-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-6">
                {c.scenarioTitle}
              </h2>
              <p className="text-lg text-[#4B5563] leading-relaxed mb-8">{c.scenarioDesc}</p>

              {/* Real Cafe Lifestyle + App Preview Card */}
              <div className="bg-[#F4FBF7] rounded-3xl overflow-hidden border border-[#16A36A]/20 shadow-xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/dokun-tap-hero.jpg"
                    alt="Mehmet ABC Coffee Dokunuşu"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#047857]/90 via-[#047857]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <RealisticIcon name="coffee" size={24} />
                      <div>
                        <div className="text-xs font-bold">ABC Specialty Coffee</div>
                        <div className="text-[10px] text-white/80">{c.scenarioCafeLabel}</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white text-[#047857] font-bold px-2.5 py-1 rounded-full">
                      {c.scenarioGoalDone}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-bold text-[#0a0a0a]">Mehmet Yılmaz</div>
                      <div className="text-xs text-[#6B7280]">10 ziyarette 1 ücretsiz kahve</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[#16A36A]">10 / 10</div>
                      <div className="text-[10px] font-semibold text-[#16A36A]">Hazır</div>
                    </div>
                  </div>

                  {/* Stamp dots */}
                  <div className="flex gap-2 mb-5 flex-wrap">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#16A36A] flex items-center justify-center shadow-xs">
                        <Check size={13} className="text-white" strokeWidth={3} />
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#16A36A] hover:bg-[#12916A] transition-colors rounded-2xl py-3 px-4 flex items-center justify-between shadow-md shadow-[#16A36A]/20">
                    <div className="flex items-center gap-2 text-white">
                      <RealisticIcon name="gift" size={20} />
                      <span className="text-sm font-bold">{c.scenarioFreeReward}</span>
                    </div>
                    <span className="text-white/90 text-xs font-medium">{c.scenarioQrUse}</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Right: Timeline */}
          <SectionWrapper direction="right">
            <div>
              <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-6">
                {c.scenarioStepByStep}
              </div>
              {timelineSteps.map((step, index) => (
                <TimelineStep key={step.id} step={step} index={index} total={timelineSteps.length} />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  total,
}: {
  step: { id: number; label: string; text: string; type: string; highlight?: boolean; badge?: string; qr?: boolean };
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="flex items-start gap-4"
    >
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
        {index < total - 1 && <div className="w-px h-6 bg-[#E5E7EB] my-1" />}
      </div>

      <div className="pb-5 pt-1.5 flex-1">
        <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-0.5">{step.label}</div>
        <p className={`text-sm leading-relaxed ${step.highlight ? "font-semibold text-[#0a0a0a]" : "text-[#4B5563]"}`}>
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
