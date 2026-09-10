"use client";

import Link from "next/link";
import { ROUTES } from "@/components/config/routes";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF9F3] via-[#F4FBF7] to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#16A36A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionWrapper>
          <div className="inline-flex items-center gap-2 bg-white border border-[#16A36A]/20 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
            <span className="text-xs font-semibold text-[#16A36A]">Ücretsiz başla</span>
          </div>

          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] tracking-tight mb-6 leading-[1.1]"
          >
            Bir sonraki ödülün
            <br />
            <span className="text-[#16A36A]">bir dokunuş uzağında.</span>
          </h2>

          <p className="text-lg text-[#4B5563] max-w-xl mx-auto mb-10 leading-relaxed">
            DOKUN Club&apos;a katıl ve favori işletmelerindeki sadakat
            yolculuğuna bugün başla.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ROUTES.clubJoin}
              className="inline-flex items-center justify-center h-16 px-10 bg-[#16A36A] text-white font-bold text-base rounded-2xl hover:bg-[#12916A] transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-[#16A36A]/25"
            >
              DOKUN Club&apos;a Katıl
            </Link>
            <Link
              href={ROUTES.dokunPro}
              className="inline-flex items-center justify-center h-16 px-10 bg-white text-[#0a0a0a] font-bold text-base rounded-2xl border border-[#E5E7EB] hover:border-[#0a0a0a]/20 transition-all duration-200 hover:scale-[1.01]"
            >
              İşletmeler için →
            </Link>
          </div>

          <p className="mt-8 text-sm text-[#9CA3AF]">
            Ücretsiz · Saniyeler içinde · Uygulama gerekmez
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
