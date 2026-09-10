"use client";

import { motion } from "framer-motion";
import { PhoneMockup, PhoneScreen } from "@/components/ui/PhoneMockup";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ROUTES } from "@/components/config/routes";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4FBF7] via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EEF9F3] rounded-full opacity-40 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-[#F4FBF7] text-[#16A36A] text-xs font-semibold px-4 py-2 rounded-full border border-[#16A36A]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A36A] animate-pulse" />
                DOKUN Club — Ücretsiz
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0a0a] leading-[1.1] tracking-tight mb-6"
            >
              İşletmelerle
              <br />
              <span className="text-[#16A36A]">bağ kurmanın</span>
              <br />
              yeni yolu.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-[#4B5563] leading-relaxed mb-8 max-w-md"
            >
              DOKUN Club ile favori işletmelerindeki sadakat programlarına katıl,
              puanlarını takip et, ödüller kazan ve sana özel fırsatları keşfet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href={ROUTES.clubJoin}
                className="inline-flex items-center justify-center h-14 px-8 bg-[#16A36A] text-white font-semibold text-base rounded-2xl hover:bg-[#12916A] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                DOKUN Club&apos;a Katıl
              </Link>
              <Link
                href={ROUTES.nasil}
                className="inline-flex items-center justify-center h-14 px-8 bg-white text-[#0a0a0a] font-semibold text-base rounded-2xl border border-[#E5E7EB] hover:border-[#16A36A]/40 hover:text-[#16A36A] transition-all duration-200 hover:scale-[1.01]"
              >
                DOKUN&apos;u Keşfet
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-6 mt-10 pt-10 border-t border-[#E5E7EB]"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0a0a0a]">1000+</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">İşletme</div>
              </div>
              <div className="w-px h-10 bg-[#E5E7EB]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0a0a0a]">50K+</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">Club Üyesi</div>
              </div>
              <div className="w-px h-10 bg-[#E5E7EB]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0a0a0a]">200K+</div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">Kazanılan Ödül</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="absolute inset-0 bg-[#16A36A]/8 rounded-full blur-3xl scale-75 pointer-events-none" />

            {/* NFC stand */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 z-10">
              <div className="w-20 h-20 bg-[#0a0a0a] rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl border-2 border-[#16A36A] mx-auto flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5C5 8.36 8.36 5 12.5 5" stroke="#16A36A" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M2 12.5C2 6.7 6.7 2 12.5 2" stroke="#16A36A" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12.5" cy="12.5" r="2.5" fill="#16A36A"/>
                    </svg>
                  </div>
                  <div className="text-[8px] text-white font-bold mt-1 tracking-wide">DOKUN</div>
                </div>
              </div>
            </div>

            <PhoneMockup size="lg">
              <PhoneScreen>
                {/* App header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase mb-0.5">
                      DOKUN CLUB
                    </div>
                    <div className="text-base font-bold text-[#0a0a0a]">Merhaba</div>
                  </div>
                  <div className="w-8 h-8 bg-[#EEF9F3] rounded-full" />
                </div>

                <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-3">
                  Sadakat Programların
                </div>

                <div className="space-y-3">
                  {/* Coffee */}
                  <div className="bg-[#F4FBF7] rounded-2xl p-3 border border-[#16A36A]/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#16A36A]/15 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#16A36A]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#0a0a0a]">Coffee House</div>
                          <div className="text-[9px] text-[#9CA3AF]">Ziyaret programı</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#16A36A]">7 / 10</span>
                    </div>
                    <ProgressBar value={70} color="#16A36A" />
                  </div>

                  {/* Burger */}
                  <div className="bg-white rounded-2xl p-3 border border-[#E5E7EB]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6B7280]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#0a0a0a]">Burger House</div>
                          <div className="text-[9px] text-[#9CA3AF]">Puan programı</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-[#16A36A]">340</div>
                        <div className="text-[9px] text-[#9CA3AF]">puan</div>
                      </div>
                    </div>
                  </div>

                  {/* Barber */}
                  <div className="bg-white rounded-2xl p-3 border border-[#E5E7EB]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6B7280]" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#0a0a0a]">Barber</div>
                          <div className="text-[9px] text-[#9CA3AF]">Ziyaret programı</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#16A36A]">2 / 5</span>
                    </div>
                    <ProgressBar value={40} color="#16A36A" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-[10px] text-[#9CA3AF]">3 sadakat programı aktif</div>
                </div>
              </PhoneScreen>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#9CA3AF]">Aşağı kaydır</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-[#E5E7EB] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[#16A36A] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
