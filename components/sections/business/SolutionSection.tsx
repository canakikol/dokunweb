"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  UserCheck, 
  Receipt, 
  Award, 
  Gift, 
  Users, 
  Send, 
  RotateCw, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const flowSteps = [
  {
    step: "01",
    title: "DOKUN STAND",
    desc: "Kasadaki veya masadaki akıllı fiziksel temas noktası.",
    Icon: Smartphone,
    color: "from-[#16A36A] to-[#10B981]",
  },
  {
    step: "02",
    title: "Müşteri Tanınır",
    desc: "NFC/QR dokunuşuyla Club profili 1 saniyede ekrana gelir.",
    Icon: UserCheck,
    color: "from-[#10B981] to-[#059669]",
  },
  {
    step: "03",
    title: "Alışveriş Kaydedilir",
    desc: "Kasiyer ziyareti veya sipariş tutarını anında işler.",
    Icon: Receipt,
    color: "from-[#059669] to-[#047857]",
  },
  {
    step: "04",
    title: "Sadakat",
    desc: "Müşterinin kartına dijital damga veya puan eklenir.",
    Icon: Award,
    color: "from-[#16A36A] to-[#34D399]",
  },
  {
    step: "05",
    title: "Ödül",
    desc: "Hedefe ulaşıldığında (örn. 10. kahve) ücretsiz hak açılır.",
    Icon: Gift,
    color: "from-[#F59E0B] to-[#D97706]",
  },
  {
    step: "06",
    title: "CRM",
    desc: "Tüm ziyaret sıklığı ve harcama verisi bulut panele işlenir.",
    Icon: Users,
    color: "from-[#3B82F6] to-[#2563EB]",
  },
  {
    step: "07",
    title: "Kampanya",
    desc: "Gelmeyen müşterilere özel WhatsApp daveti tetiklenir.",
    Icon: Send,
    color: "from-[#25D366] to-[#16A36A]",
  },
  {
    step: "08",
    title: "Müşteri Geri Gelir",
    desc: "Özel teklifi alan müşteri dükkanınıza tekrar adım atar.",
    Icon: RotateCw,
    color: "from-[#16A36A] to-[#059669]",
  },
  {
    step: "09",
    title: "Tekrar DOKUN",
    desc: "Döngü kesintisiz olarak devam eder, kayıp önlenir.",
    Icon: Sparkles,
    color: "from-[#10B981] to-[#16A36A]",
  },
];

export function SolutionSection() {
  return (
    <section id="nasil-calisir" className="py-24 lg:py-32 bg-[#F4FBF7] text-[#111827] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Kesintisiz B2B Retention Akışı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            DOKUN bütün döngüyü
            <br />
            <span className="text-[#16A36A]">tek yerde birleştirir.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Fiziksel temas noktasından müşteri geri kazanımına kadar tüm adımlar birbirine otomatik bağlıdır.
          </p>
        </div>

        {/* The 9-Step Animated Visual Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5 mb-14">
          {flowSteps.map((item, idx) => {
            const isHighlight = idx === 0 || idx === 8;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isHighlight
                    ? "bg-[#0a0a0a] text-white border-[#16A36A]/40 shadow-xl shadow-black/10"
                    : "bg-white text-[#111827] border-[#E5E7EB] hover:border-[#16A36A]/40 hover:shadow-lg hover:shadow-[#16A36A]/5"
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg ${
                        isHighlight
                          ? "bg-white/10 text-[#34D399]"
                          : "bg-[#F4FBF7] text-[#16A36A]"
                      }`}
                    >
                      ADIM {item.step}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isHighlight
                          ? "bg-[#16A36A] text-white shadow-md shadow-[#16A36A]/30"
                          : "bg-[#F4FBF7] text-[#16A36A] border border-[#16A36A]/20"
                      }`}
                    >
                      <item.Icon size={18} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isHighlight ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isHighlight ? "text-[#9CA3AF]" : "text-[#6B7280]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px]">
                  <span className={isHighlight ? "text-[#9CA3AF]" : "text-[#9CA3AF]"}>
                    {idx < 8 ? "Döngü devam eder" : "Sonsuz döngü"}
                  </span>
                  <div className="flex items-center gap-1 text-[#16A36A] font-semibold">
                    <span>{idx < 8 ? "Sonraki" : "Tekrar"}</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Loop Summary Box */}
        <div className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center flex-shrink-0">
              <RotateCw size={24} className="animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111827]">
                Kayıp Yok. Kopukluk Yok. Tek Bir Akış.
              </h4>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                Müşteri standa telefonunu dokundurduğu anda başlayan yolculuk, sadakat puanı, CRM takibi ve otomatik WhatsApp mesajıyla tekrar kasanıza döner.
              </p>
            </div>
          </div>

          <a
            href="#dokun-stand"
            className="shrink-0 h-11 px-6 rounded-xl bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
          >
            <span>DOKUN Stand&apos;ı İncele</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
