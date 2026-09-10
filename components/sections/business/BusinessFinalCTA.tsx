"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, User } from "lucide-react";
import { ROUTES } from "@/components/config/routes";

export function BusinessFinalCTA() {
  return (
    <section className="py-24 lg:py-36 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Ambient green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#16A36A]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
          <Sparkles size={14} className="text-[#16A36A]" />
          <span className="text-xs font-semibold text-[#16A36A]">Hemen Başlayın</span>
        </div>

        {/* Required Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Müşterilerinizle bağ kurmanın
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A36A] via-[#34D399] to-[#10B981]">
            zamanı geldi.
          </span>
        </h2>

        {/* Required Subtitle */}
        <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto mb-10 leading-relaxed">
          DOKUN ile müşterilerinizi tanıyın, sadakat oluşturun ve tekrar ziyaretleri artırın.
        </p>

        {/* Required CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#fiyat"
            className="inline-flex items-center justify-center gap-2 h-16 px-10 bg-[#16A36A] hover:bg-[#12916A] text-white font-bold text-base rounded-2xl transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-[#16A36A]/25"
          >
            <span>İşletmemde DOKUN&apos;u Kullan</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Required Sub Option for Customers */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#9CA3AF]">
          <span>DOKUN Club müşterisi misiniz?</span>
          <Link
            href={ROUTES.club}
            className="text-[#16A36A] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Club&apos;a Git</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-[#6B7280]">
          Sözleşme taahhüdü yok · 48 saatte kargo teslimatı · Canlı teknik destek
        </p>
      </div>
    </section>
  );
}
