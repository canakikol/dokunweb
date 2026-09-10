"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Store, 
  User, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Check
} from "lucide-react";
import { ROUTES } from "@/components/config/routes";
import { RealisticIcon } from "@/components/ui/RealisticIcon";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111827] flex flex-col justify-between selection:bg-[#16A36A]/20 selection:text-[#16A36A] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#16A36A]/10 via-[#16A36A]/4 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[500px] bg-[#16A36A]/6 rounded-full blur-[140px]" />
      </div>

      {/* Top Bar / Brand header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#16A36A] rounded-2xl flex items-center justify-center shadow-lg shadow-[#16A36A]/25">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#111827] font-extrabold text-xl tracking-tight leading-none">DOKUN</span>
            <span className="text-[10px] text-[#6B7280] tracking-wider uppercase font-semibold mt-0.5">
              Fiziksel Mağaza Sadakat & Retention
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-[#4B5563] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
            <span>NFC & QR Platformu Aktif</span>
          </div>
        </div>
      </header>

      {/* Main Choice Experience */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-6 py-8 lg:py-12">
        {/* Central Title and Description */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#16A36A] shadow-xs mb-4"
          >
            <Sparkles size={13} />
            <span>Kullanıcı Tipi Seçimi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4"
          >
            Sen DOKUN&apos;u nasıl kullanıyorsun?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-base sm:text-lg text-[#6B7280] leading-relaxed"
          >
            İşletmen için müşterilerini yönet veya DOKUN Club ile ödüllerini takip et.
          </motion.p>
        </div>

        {/* 2 Big Choice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto w-full">
          {/* Card 1: İŞLETMEYİM (Hierarchically prioritized, B2B flagship, 7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="lg:col-span-7 group flex"
          >
            <div className="flex-1 rounded-[32px] bg-[#0E0F12] text-white p-7 sm:p-9 border border-white/15 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#16A36A]/15 hover:border-[#16A36A]/50 relative overflow-hidden">
              {/* Green ambient aura */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#16A36A]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#16A36A]/30 transition-colors duration-500" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2.5 bg-[#16A36A]/15 border border-[#16A36A]/30 px-3.5 py-1.5 rounded-xl">
                    <RealisticIcon name="store" size={20} />
                    <span className="text-xs font-bold text-white tracking-wider uppercase">
                      İŞLETMEYİM
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9CA3AF] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                    B2B & SaaS
                  </span>
                </div>

                {/* Pitch */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                  &ldquo;Müşterilerimi tanımak, sadakat oluşturmak ve tekrar ziyaretleri artırmak istiyorum.&rdquo;
                </h2>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  DOKUN Stand donanımı, bulut CRM, müşteri segmentasyonu ve otomatik kampanya motoruyla mağazanızın cirosunu sürdürülebilir kılın.
                </p>

                {/* Real Photo + Dashboard Metrics Hybrid Preview */}
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden mb-6 backdrop-blur-md">
                  <div className="relative h-44 w-full overflow-hidden">
                    <img 
                      src="/images/dokun-pos-dashboard.jpg" 
                      alt="DOKUN PRO Kasa & Tablet Canlı Panel" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="font-bold text-white text-[11px]">Canlı Kasa & Masa Ekranı</span>
                      </div>
                      <span className="text-[10px] text-[#A7F3D0] font-mono bg-[#065F46]/80 px-2 py-0.5 rounded border border-[#10B981]/30">
                        NFC & Bulut POS
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                      <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                        <div className="text-[10px] text-[#9CA3AF]">Toplam Müşteri</div>
                        <div className="text-base font-bold text-white mt-0.5">1.248</div>
                      </div>
                      <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                        <div className="text-[10px] text-[#9CA3AF]">Bugünkü Ziyaret</div>
                        <div className="text-base font-bold text-white mt-0.5">86</div>
                      </div>
                      <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                        <div className="text-[10px] text-[#9CA3AF]">Aktif Sadakat</div>
                        <div className="text-base font-bold text-[#10B981] mt-0.5">734</div>
                      </div>
                      <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                        <div className="text-[10px] text-[#9CA3AF]">30+ Gün Risk</div>
                        <div className="text-base font-bold text-[#EF4444] mt-0.5">92</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-2 text-xs text-[#D1D5DB] mb-6">
                  <div className="flex items-center gap-2">
                    <RealisticIcon name="nfc" size={16} />
                    <span>NFC Stand Donanımı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RealisticIcon name="chart" size={16} />
                    <span>Bulut Müşteri CRM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RealisticIcon name="trophy" size={16} />
                    <span>Sadakat & Ödül Motoru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RealisticIcon name="target" size={16} />
                    <span>Otomatik Kampanyalar</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#9CA3AF]">Kurulum 5 dk · Komisyonsuz</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#16A36A] transition-colors">
                    İşletme Çözümlerini İncele
                  </div>
                </div>

                <Link
                  href={ROUTES.business}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold transition-all shadow-lg shadow-[#16A36A]/25 hover:scale-[1.03]"
                >
                  <span>İşletme Olarak Devam Et</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MÜŞTERİYİM (DOKUN Club, 5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-5 group flex"
          >
            <div className="flex-1 rounded-[32px] bg-white text-[#111827] p-7 sm:p-9 border border-[#E5E7EB] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#16A36A]/10 hover:border-[#16A36A]/40 relative overflow-hidden shadow-sm">
              {/* Soft green subtle aura */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A36A]/8 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#16A36A]/15 transition-colors duration-500" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2.5 bg-[#F4FBF7] border border-[#16A36A]/30 px-3.5 py-1.5 rounded-xl">
                    <RealisticIcon name="user" size={20} />
                    <span className="text-xs font-bold text-[#16A36A] tracking-wider uppercase">
                      MÜŞTERİYİM
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6B7280] bg-[#F3F4F6] px-2.5 py-1 rounded-lg">
                    DOKUN CLUB
                  </span>
                </div>

                {/* Pitch */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug mb-3">
                  &ldquo;DOKUN Club&apos;a katılmak, puanlarımı ve ödüllerimi takip etmek istiyorum.&rdquo;
                </h2>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  Uygulama indirmeden, standa telefonunuzu dokundurarak favori işletmelerinizde puan toplayın ve ücretsiz hediyelerin tadını çıkarın.
                </p>

                {/* Real Photo + Digital Wallet Pass Card */}
                <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#E5E7EB] shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="h-40 w-full relative overflow-hidden bg-gray-100">
                    <img 
                      src="/images/dokun-tap-hero.jpg" 
                      alt="DOKUN Club Gerçek Deneyim" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <RealisticIcon name="coffee" size={22} />
                        <div>
                          <div className="text-xs font-bold leading-tight">ABC Coffee Club</div>
                          <div className="text-[10px] text-white/80">Dokun ve Damga Kazan</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#10B981] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                        <RealisticIcon name="gift" size={14} />
                        <span>8 / 10 Damga</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#059669] text-white p-3.5 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="font-semibold">Sıradaki Ödül:</span> Ücretsiz Latte
                    </div>
                    <div className="text-[10px] bg-white text-[#059669] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      2 Damga Kaldı
                    </div>
                  </div>
                </div>

                {/* Member Highlights */}
                <div className="space-y-2.5 text-xs text-[#4B5563] mb-6">
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#16A36A]" />
                    <span>Uygulama indirme zorunluluğu yok</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#16A36A]" />
                    <span>Tek hesap ile yüzlerce farklı işletme</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#16A36A]" />
                    <span>Kasadaki dinamik QR ile anında ödül kullanımı</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-[#E5E7EB] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#6B7280]">Ücretsiz üyelik</div>
                  <div className="text-xs font-bold text-[#111827] group-hover:text-[#16A36A] transition-colors">
                    Ödüllerinizi Görüntüleyin
                  </div>
                </div>

                <Link
                  href={ROUTES.club}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-[#F4FBF7] border border-[#16A36A]/30 hover:bg-[#16A36A] hover:text-white text-[#16A36A] text-xs font-bold transition-all shadow-xs"
                >
                  <span>DOKUN Club&apos;a Git</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Trust & Policy Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#16A36A]" />
            <span>KVKK & %100 Veri İzolasyonu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-[#16A36A]" />
            <span>NFC & QR Çift Teknoloji</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href={ROUTES.kvkk} className="hover:text-[#111827] transition-colors">KVKK</Link>
          <Link href={ROUTES.gizlilik} className="hover:text-[#111827] transition-colors">Gizlilik Politikası</Link>
          <Link href={ROUTES.iletisim} className="hover:text-[#111827] transition-colors">İletişim</Link>
        </div>
      </footer>
    </div>
  );
}
