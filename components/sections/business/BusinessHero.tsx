"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { RealisticIcon } from "@/components/ui/RealisticIcon";

export function BusinessHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24 pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#16A36A]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#16A36A]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
                <span className="text-xs font-semibold text-[#16A36A] uppercase tracking-wider">
                  Fiziksel İşletmeler İçin B2B Platformu
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Müşterilerinizi sadece kazanmayın.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A36A] via-[#34D399] to-[#10B981]">
                Onları geri getirin.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-xl"
            >
              DOKUN ile müşterilerinizi tanıyın, sadakat programları oluşturun, alışveriş ve ziyaretleri takip edin ve doğru müşteriye doğru zamanda ulaşın.
            </motion.p>

            {/* Core Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
            >
              {[
                { title: "Müşterini Tanı", desc: "Kayıtsız kalabalık değil, net veri." },
                { title: "Sadakat Oluştur", desc: "Ödüllerle tekrar gelişi teşvik et." },
                { title: "Tekrar Getir", desc: "Segmentli kampanyalarla geri çağır." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={14} className="text-[#16A36A]" />
                    <span className="text-xs font-bold text-white">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <a
                href="#fiyat"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-[#16A36A] hover:bg-[#12916A] text-white font-bold text-sm rounded-2xl transition-all duration-200 shadow-lg shadow-[#16A36A]/20 hover:scale-[1.02]"
              >
                <span>DOKUN&apos;u İşletmemde Kullan</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center h-14 px-7 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-2xl border border-white/10 transition-all duration-200"
              >
                Nasıl Çalışır?
              </a>
            </motion.div>

            {/* Trust Micro-bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-[#6B7280]"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#16A36A]" />
                <span>Ciro komisyonu yok</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-[#16A36A]" />
                <span>5 dakikada anında kurulum</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Realistic DOKUN PRO POS & Counter Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Glow container */}
              <div className="relative rounded-[32px] bg-gradient-to-b from-white/15 via-white/[0.05] to-transparent p-1 shadow-2xl shadow-black/80">
                <div className="rounded-[28px] bg-[#111215] border border-white/10 overflow-hidden">
                  {/* Real Photo of POS + Stand on Counter */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src="/images/dokun-pos-dashboard.jpg" 
                      alt="DOKUN PRO Canlı Kasa ve Tablet Paneli" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/40 to-transparent" />
                    
                    {/* Live Indicator overlay */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs font-bold text-white">DOKUN PRO Kasa & Masa</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#10B981]/20 border border-[#10B981]/40 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      <span className="text-[10px] font-mono text-[#6EE7B7] font-bold">NFC STAND DAHİL</span>
                    </div>
                  </div>

                  {/* 4 Required Live Metric Cards */}
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-2.5 mb-4">
                      <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3">
                        <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Toplam Müşteri
                        </div>
                        <div className="text-2xl font-bold text-white">1.248</div>
                        <div className="text-[10px] text-[#10B981] font-medium mt-0.5">
                          +18% bu ay
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3">
                        <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Bugünkü Ziyaret
                        </div>
                        <div className="text-2xl font-bold text-white">86</div>
                        <div className="text-[10px] text-[#10B981] font-medium mt-0.5">
                          14 sadakat kullanımı
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3">
                        <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">
                          Aktif Sadakat
                        </div>
                        <div className="text-2xl font-bold text-[#10B981]">734</div>
                        <div className="text-[10px] text-[#9CA3AF] font-medium mt-0.5">
                          Düzenli müşteri
                        </div>
                      </div>

                      <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3">
                        <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-1">
                          30+ Gün Gelmeyen
                        </div>
                        <div className="text-2xl font-bold text-[#EF4444]">92</div>
                        <div className="text-[10px] text-[#EF4444] font-medium mt-0.5">
                          Kayıp riski
                        </div>
                      </div>
                    </div>

                    {/* Customer item badge */}
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold text-[11px] flex items-center justify-center">
                          MY
                        </div>
                        <div>
                          <div className="text-white font-medium text-xs">Mehmet Yılmaz</div>
                          <div className="text-[10px] text-[#9CA3AF]">8/10 kahve · 4 gün önce</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-[#10B981]/20 text-[#6EE7B7] px-2.5 py-1 rounded-full border border-[#10B981]/30">
                        Kurtarılabilir Kitle
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Stand Floating Badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#0a0a0a]/95 border border-white/15 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3">
                <RealisticIcon name="nfc" size={32} />
                <div>
                  <div className="text-xs font-bold text-white">DOKUN Akıllı Stand</div>
                  <div className="text-[10px] text-[#9CA3AF]">NFC + Dinamik QR Çift Çipli</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
