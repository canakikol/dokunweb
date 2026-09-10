"use client";

import { motion } from "framer-motion";
import { Filter, Users, CheckCircle2, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: "🟢",
    title: "Aktif Müşteriler",
    subtitle: "Düzenli ziyaretçiler",
    count: "734 Kişi",
    desc: "Haftada en az 1 kez uğrayan, mağazanızın çekirdek müşteri kitlesi.",
    strategy: "Teşekkür & yeni menü tanıtımları",
    borderClass: "border-[#16A36A]/30 hover:border-[#16A36A]",
    bgBadge: "bg-[#16A36A]/10 text-[#16A36A]",
  },
  {
    icon: "🟡",
    title: "Ödüle Yaklaşanlar",
    subtitle: "Hedefe 1-2 ziyaret kalanlar",
    count: "128 Kişi",
    desc: "Ödülü kazanmak üzere olan ve küçük bir teşvikle hemen gelebilecek kitle.",
    strategy: "'Son 2 kahve kaldı!' hatırlatması",
    borderClass: "border-[#F59E0B]/30 hover:border-[#F59E0B]",
    bgBadge: "bg-[#F59E0B]/10 text-[#F59E0B]",
  },
  {
    icon: "🔴",
    title: "30+ Gündür Gelmeyenler",
    subtitle: "Kayıp riski taşıyanlar",
    count: "92 Kişi",
    desc: "Eskiden düzenli gelen ama 1 aydır uğramayan, geri kazanılması gereken kitle.",
    strategy: "'Seni özledik' özel ikram kuponu",
    borderClass: "border-[#EF4444]/30 hover:border-[#EF4444]",
    bgBadge: "bg-[#EF4444]/10 text-[#EF4444]",
  },
  {
    icon: "⭐",
    title: "En Sadık Müşteriler",
    subtitle: "VIP ve yüksek cirolu kitle",
    count: "215 Kişi",
    desc: "Toplamda 15+ ziyaret yapmış, markanızı çevresine tavsiye eden elçiler.",
    strategy: "VIP etkinlik daveti & özel ayrıcalık",
    borderClass: "border-purple-300 hover:border-purple-500",
    bgBadge: "bg-purple-100 text-purple-700",
  },
  {
    icon: "🆕",
    title: "Yeni Müşteriler",
    subtitle: "İlk kez temas kuranlar",
    count: "79 Kişi",
    desc: "Bu hafta ilk kez standa dokunmuş ve henüz 1-2 ziyareti olan potansiyel sadıklar.",
    strategy: "İkinci ziyarete özel hoş geldin hediyesi",
    borderClass: "border-blue-300 hover:border-blue-500",
    bgBadge: "bg-blue-100 text-blue-700",
  },
];

export function SegmentationSection() {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Filter size={13} />
            <span>Hedefli İletişim</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            Her müşteriye
            <br />
            <span className="text-[#16A36A]">aynı mesajı göndermeyin.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Herkese atılan toplu spam mesajlar müşteri kaybettirir. Müşterinizi davranışına göre gruplayın, doğru kişiye doğru anda dokunun.
          </p>
        </div>

        {/* 5 Segment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {segments.map((seg, idx) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`p-6 rounded-3xl bg-[#FAFAFA] border transition-all duration-200 hover:shadow-lg hover:bg-white flex flex-col justify-between ${seg.borderClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xl">
                    <span>{seg.icon}</span>
                    <span className="text-base font-bold text-[#111827]">{seg.title}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${seg.bgBadge}`}>
                    {seg.count}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#4B5563] mb-2">
                  {seg.subtitle}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  {seg.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
                <span className="text-[#9CA3AF]">Önerilen Strateji:</span>
                <span className="font-semibold text-[#111827]">{seg.strategy}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Subtitle Banner */}
        <div className="text-center max-w-xl mx-auto p-6 rounded-3xl bg-[#F4FBF7] border border-[#16A36A]/20">
          <p className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-snug">
            &ldquo;Doğru müşteriyi seçin.
            <br />
            <span className="text-[#16A36A]">Doğru mesajı gönderin.&rdquo;</span>
          </p>
          <p className="text-xs text-[#6B7280] mt-2">
            DOKUN filtreleri tek tıkla kitleyi hazırlar ve WhatsApp modülüne aktarır.
          </p>
        </div>
      </div>
    </section>
  );
}
