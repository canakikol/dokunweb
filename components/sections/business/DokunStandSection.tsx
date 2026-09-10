"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Radio, 
  Scan, 
  Monitor, 
  CreditCard,
  Gift
} from "lucide-react";
import { RealisticIcon } from "@/components/ui/RealisticIcon";

const standSteps = [
  {
    step: "1",
    title: "NFC veya QR Teması",
    desc: "Müşteri telefonunu standa yaklaştırır. Uygulama indirmesine gerek yoktur.",
    Icon: Radio,
  },
  {
    step: "2",
    title: "DOKUN Müşteriyi Tanır",
    desc: "Saniyeler içinde telefon çipi DOKUN altyapısıyla güvenli el sıkışır.",
    Icon: Smartphone,
  },
  {
    step: "3",
    title: "Club Hesabına Bağlanır",
    desc: "Müşteri tekil DOKUN Club hesabıyla işletmenizin sadakat programına dahil olur.",
    Icon: Sparkles,
  },
  {
    step: "4",
    title: "Kasa Ekranında Görünür",
    desc: "Kasadaki işletme panelinde 'Son Dokunanlar' listesine anlık olarak düşer.",
    Icon: Monitor,
  },
  {
    step: "5",
    title: "Kasiyer Alışverişi Girer",
    desc: "Kasiyer tek dokunuşla sipariş tutarını veya ziyareti sisteme kaydeder.",
    Icon: CreditCard,
  },
  {
    step: "6",
    title: "Sadakat Puanı Oluşur",
    desc: "Müşterinin kartına anında puan veya damga yansır, ödül kotası ilerler.",
    Icon: Gift,
  },
];

export function DokunStandSection() {
  return (
    <section id="dokun-stand" className="py-24 lg:py-32 bg-white text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Radio size={13} />
            <span>Fiziksel & Dijital Entegrasyon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            İlk temas fiziksel.
            <br />
            <span className="text-[#16A36A]">Devamı dijital.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            DOKUN Stand sadece bir &ldquo;NFC ürünü&rdquo; değildir. Müşteriniz ile dijital işletmeniz arasındaki ilk temas noktasıdır.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Physical Stand Hardware Card & Visual Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0a0a0a] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#16A36A]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold text-[#16A36A] uppercase tracking-wider bg-[#16A36A]/10 px-3 py-1 rounded-lg border border-[#16A36A]/20">
                    Akıllı Masa & Kasa Kiti
                  </span>
                  <span className="text-xs font-mono text-[#9CA3AF]">NFC + QR Çift Çip</span>
                </div>

                {/* Stand Realistic Product Photography */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl group">
                  <div className="relative h-60 w-full overflow-hidden bg-black">
                    <img 
                      src="/images/dokun-stand-hardware.jpg" 
                      alt="DOKUN Akıllı Masa & Kasa Standı Donanımı"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <RealisticIcon name="nfc" size={20} />
                        <span className="text-xs font-bold text-white">Lüks Alüminyum & Masif Ceviz Taban</span>
                      </div>
                      <span className="text-[10px] font-bold bg-[#10B981] text-white px-2 py-0.5 rounded-md">
                        Pil / Kablo Gerektirmez
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live POS Screen Preview ("Son Dokunanlar") */}
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between text-xs pb-2.5 mb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
                      <span className="font-bold text-white">Kasa Ekranı: Son Dokunanlar</span>
                    </div>
                    <span className="text-[10px] text-[#9CA3AF]">Anlık Akış</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 bg-[#16A36A]/15 border border-[#16A36A]/30 rounded-xl">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">Mehmet Yılmaz</span>
                        <span className="text-[10px] text-[#34D399]">(8/10 Kahve)</span>
                      </div>
                      <span className="text-[10px] font-semibold bg-[#16A36A] text-white px-2 py-0.5 rounded">
                        İşlem Bekliyor
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2 bg-white/[0.02] rounded-xl opacity-60">
                      <div className="flex items-center gap-2">
                        <span className="text-white">Ayşe Demir</span>
                        <span className="text-[10px] text-[#9CA3AF]">(10/10 Ödül Hazır)</span>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF]">3 dk önce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Clear Steps of The Physical-Digital Bridge */}
          <div className="lg:col-span-6 space-y-4">
            {standSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#16A36A]/40 hover:bg-[#F4FBF7] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#16A36A] font-bold text-xs shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] mb-1 group-hover:text-[#16A36A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central Core Takeaway Callout */}
        <div className="p-6 rounded-2xl bg-[#F4FBF7] border border-[#16A36A]/20 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-[#111827]">
            &ldquo;DOKUN Stand, müşteriniz ile dijital işletmeniz arasındaki ilk temas noktasıdır.&rdquo;
          </p>
          <p className="text-xs text-[#6B7280] mt-1">
            Gereksiz formlar veya indirme bariyerleri olmadan, kasadaki iletişimi hızlandırır ve sadakati garantiye alır.
          </p>
        </div>
      </div>
    </section>
  );
}
