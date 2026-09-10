"use client";

import { motion } from "framer-motion";
import { PhoneMockup, PhoneScreen } from "@/components/ui/PhoneMockup";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ROUTES } from "@/components/config/routes";
import { RealisticIcon } from "@/components/ui/RealisticIcon";
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

          {/* Right: Realistic Phone Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="absolute inset-0 bg-[#16A36A]/10 rounded-full blur-3xl scale-90 pointer-events-none" />

            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Main Realistic Mockup Image Card */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white shadow-[#16A36A]/15 bg-white">
                <img 
                  src="/images/dokun-phone-mockup.jpg" 
                  alt="DOKUN Club Gerçekçi Telefon ve Sadakat Deneyimi"
                  className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500" 
                />
                
                {/* Subtle soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <RealisticIcon name="coffee" size={22} />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Gerçek Ziyaret Deneyimi</div>
                        <div className="text-[10px] text-white/80">Telefonunu dokundur, anında kazan</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-[#10B981] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Uygulama İndirmeden
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Realistic Badge 1: NFC Touch Status */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E5E7EB] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] flex items-center justify-center border border-[#A7F3D0]">
                  <RealisticIcon name="nfc" size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-[#6B7280] font-medium">Temassız Teknoloji</div>
                  <div className="text-xs font-bold text-[#111827]">NFC Çipiyle Anında Bağlan</div>
                </div>
              </motion.div>

              {/* Floating Realistic Badge 2: Reward Progress */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E5E7EB] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center border border-[#FDE68A]">
                  <RealisticIcon name="gift" size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-[#6B7280] font-medium">Sadakat Hedefi</div>
                  <div className="text-xs font-bold text-[#10B981]">9 / 10 · 1 Kahve Kaldı</div>
                </div>
              </motion.div>
            </div>
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
