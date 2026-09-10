"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section id="fiyat" className="py-24 lg:py-32 bg-white text-[#111827] relative">
      <div id="fiyatlar" className="absolute -top-20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Şeffaf & Sade Fiyatlandırma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            İşletmeniz için net,
            <br />
            <span className="text-[#16A36A]">sürprizsiz paketler.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Ciro komisyonu yok. Müşteri başına ek ücret yok. İhtiyacınıza uygun paketi seçin, işletmenizde hemen başlayın.
          </p>
        </div>

        {/* 2 Apple-Style Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-14">
          {/* Card 1: DOKUN STAND */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#16A36A]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">
                Fiziksel Donanım
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827] mb-2">
                DOKUN STAND
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mb-6 leading-relaxed">
                Kasanıza veya masanıza şık bir fiziksel temas noktası kurun.
              </p>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-[#E5E7EB]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#111827]">1.000 TL</span>
                </div>
                <div className="text-xs text-[#6B7280] mt-1">Tek seferlik kurulum & donanım bedeli</div>
              </div>

              {/* Inclusions */}
              <div className="space-y-3.5 mb-8">
                {[
                  "1 Adet Lüks DOKUN NFC Standı",
                  "Dinamik QR Kod Entegrasyonu",
                  "Masa & Kasa Kurulum Kiti",
                  "Temel Karşılama Sayfası",
                  "1 Yıl Donanım Garantisi",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-[#4B5563]">
                    <div className="w-5 h-5 rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#111827]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="mailto:iletisim@dokun.co?subject=DOKUN Stand Sipariş Talebi"
              className="w-full h-12 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#111827] text-[#111827] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>Stand Siparişi Ver</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: DOKUN PRO */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E0F12] text-white border border-white/10 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            {/* Best Value Badge */}
            <div className="absolute top-6 right-6">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#16A36A] text-white px-3 py-1 rounded-full shadow-md">
                Önerilen Paket
              </span>
            </div>

            <div className="relative">
              <div className="text-xs font-bold text-[#16A36A] uppercase tracking-wider mb-2">
                Tam Kapsamlı SaaS & Donanım
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                DOKUN PRO
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mb-6 leading-relaxed">
                NFC standı, akıllı bulut CRM, sadakat motoru ve otomatik kampanyalar tek pakette.
              </p>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">350 TL</span>
                  <span className="text-xs text-[#9CA3AF]">/ ay</span>
                </div>
                <div className="text-xs text-[#16A36A] font-semibold mt-1">
                  1.000 TL Kurulum (Stand Dahil)
                </div>
              </div>

              {/* Exactly Required 5 Features */}
              <div className="space-y-3.5 mb-8">
                {[
                  "CRM — Müşterilerinizi tek panelden yönetin",
                  "Sadakat — Puan ve damga ödül sistemleri",
                  "Kampanyalar — WhatsApp & SMS geri kazanım",
                  "Müşteri Takibi — Canlı ziyaret ve alışveriş akışı",
                  "Analiz — Kayıp oranları ve davranış raporları",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white/95">
                    <div className="w-5 h-5 rounded-full bg-[#16A36A] flex items-center justify-center shrink-0 shadow-xs">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="mailto:iletisim@dokun.co?subject=DOKUN Pro Başvurusu"
              className="w-full h-14 rounded-2xl bg-[#16A36A] hover:bg-[#12916A] text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#16A36A]/25 hover:scale-[1.02]"
            >
              <span>DOKUN Pro&apos;yu Başlat</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-xs text-[#6B7280]">
          <div className="flex items-center gap-2 justify-center">
            <ShieldCheck size={16} className="text-[#16A36A]" />
            <span>Taahhüt yok, dilediğiniz an iptal edebilirsiniz.</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Zap size={16} className="text-[#16A36A]" />
            <span>Kurulum kiti adresinize 48 saatte kargolanır.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
