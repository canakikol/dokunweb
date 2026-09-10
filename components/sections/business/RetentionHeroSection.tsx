"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, TrendingUp, AlertTriangle, Layers, Send, RotateCw, ShoppingBag } from "lucide-react";

const retentionSteps = [
  {
    step: "01",
    title: "Tespit Eder",
    desc: "30 gündür gelmeyen müşteriyi anında tespit eder.",
    Icon: AlertTriangle,
    color: "text-[#EF4444]",
    bg: "bg-[#EF4444]/10 border-[#EF4444]/20",
  },
  {
    step: "02",
    title: "Segment Oluşturur",
    desc: "Kayıp riski taşıyan bu kitleyi otomatik tek havuzda toplar.",
    Icon: Layers,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10 border-[#F59E0B]/20",
  },
  {
    step: "03",
    title: "Kampanya Gönderir",
    desc: "Kişiye özel hatırlatma ve samimi davet mesajını iletir.",
    Icon: Send,
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10 border-[#25D366]/20",
  },
  {
    step: "04",
    title: "Müşteri Geri Gelir",
    desc: "Kuponu veya ikramı değerlendirmek için mağazanızı ziyaret eder.",
    Icon: RotateCw,
    color: "text-[#16A36A]",
    bg: "bg-[#16A36A]/10 border-[#16A36A]/20",
  },
  {
    step: "05",
    title: "Tekrar Alışveriş Yapar",
    desc: "Kayıp bir ziyaretçi yeniden aktif ve sadık müşteriye dönüşür.",
    Icon: ShoppingBag,
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10 border-[#10B981]/20",
  },
];

export function RetentionHeroSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#0E0F12] text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#16A36A]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Giant Typography Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-6 backdrop-blur-md">
            <span>DOKUN Ana Değer Önerisi</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Müşteriniz bugün geldi.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A36A] via-[#34D399] to-[#10B981]">
              Peki 30 gün sonra?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Geleneksel işletmeler müşterinin ne zaman koptuğunu ancak ciro düşünce fark eder. DOKUN ise 30. gün dolmadan devreye girer.
          </p>
        </div>

        {/* 5-Step Flow Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {retentionSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#16A36A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-[#9CA3AF] font-bold">
                    ADIM {item.step}
                  </span>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.bg} ${item.color}`}>
                    <item.Icon size={18} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-[#6B7280]">
                {idx < 4 ? "Süreç devam eder →" : "Döngü tamamlandı ✓"}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Bottom Proof Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#16A36A]/20 border border-[#16A36A]/40 flex items-center justify-center text-[#16A36A] shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Kayıp Müşteriyi Kurtarmak, Yeni Müşteri Bulmaktan 7 Kat Karlıdır.
              </h4>
              <p className="text-xs text-[#9CA3AF]">
                DOKUN kullanan işletmelerde 30+ gün gelmeyen müşterilerin %32&apos;si ilk otomatik kampanyada geri döner.
              </p>
            </div>
          </div>

          <a
            href="#fiyat"
            className="shrink-0 h-12 px-7 rounded-xl bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#16A36A]/20"
          >
            <span>DOKUN Pro&apos;yu Başlat</span>
            <CheckCircle2 size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
