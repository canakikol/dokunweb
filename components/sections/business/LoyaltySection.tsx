"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Gift, 
  QrCode, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Coffee,
  ScanLine
} from "lucide-react";

export function LoyaltySection() {
  const [rewardClaimed, setRewardClaimed] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] text-[#111827] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Award size={13} />
            <span>Dijital Sadakat ve Ödül Mekaniği</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            Müşterinize tekrar gelmesi için
            <br />
            <span className="text-[#16A36A]">bir sebep verin.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Kağıt kartları cüzdanda unutturan, şeffaf ve heyecan verici bir ödül döngüsü kurun. Müşteri her kahvede hedefe yaklaştığını görür.
          </p>
        </div>

        {/* The Concrete Example Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column: Flow Explanation & Mechanics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center">
                    <Coffee size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">ABC Coffee Kuralı</h3>
                    <p className="text-xs text-[#6B7280]">10 Kahve → 1 Ücretsiz Kahve</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#16A36A] bg-[#F4FBF7] px-2.5 py-1 rounded-lg">
                  Ödül Kuralı
                </span>
              </div>

              <p className="text-xs text-[#4B5563] leading-relaxed">
                Müşteri her dokunuşunda ilerlemesini canlı izler. Kağıt damga basmakla uğraşmazsınız, suistimal edilemeyen dijital sayaç çalışır.
              </p>
            </div>

            {/* Step-by-Step Reward Flow */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E7EB]">
                <div className="w-7 h-7 rounded-lg bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#111827] block">Hedefe Ulaşılır:</span>
                  <span className="text-[#6B7280]">
                    Mehmet 8/10 kahveye ulaşır. 2 kahve sonra hediye hazır bildirimi alır.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E7EB]">
                <div className="w-7 h-7 rounded-lg bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#111827] block">Müşteri Club&apos;da [ Ödülü Kullan ] Der:</span>
                  <span className="text-[#6B7280]">
                    Tek seferlik, 60 saniye geçerli güvenli dinamik QR kod oluşur.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E5E7EB]">
                <div className="w-7 h-7 rounded-lg bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#111827] block">Kasiyer QR&apos;ı Tarar:</span>
                  <span className="text-[#6B7280]">
                    Ödül başarıyla kullandırılır, sayaç sıfırlanır ve yeni döngü başlar.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Demo Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-[#E5E7EB] p-7 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0a0a0a] text-white flex items-center justify-center text-base">
                    ☕
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111827]">ABC Coffee Sadakat Kartı</div>
                    <div className="text-xs text-[#6B7280]">Örnek Müşteri: Mehmet Yılmaz</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold bg-[#F4FBF7] text-[#16A36A] px-2.5 py-1 rounded-lg">
                  8 / 10
                </span>
              </div>

              {/* Progress Visual: ████████░░ */}
              <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#111827]">Kahve İlerlemesi</span>
                  <span className="text-[#16A36A] font-bold">2 kahve daha → 🎁 Ücretsiz Kahve</span>
                </div>

                {/* Progress Bar Bars */}
                <div className="grid grid-cols-10 gap-1.5 mb-3">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-4 rounded-md transition-all duration-300 flex items-center justify-center text-[9px] font-bold ${
                        i < 8
                          ? "bg-[#16A36A] text-white"
                          : "bg-[#E5E7EB] text-[#9CA3AF]"
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>8 Alındı (████████░░)</span>
                  <span className="font-semibold text-[#16A36A]">Ödüle çok yakın!</span>
                </div>
              </div>

              {/* Reward Action Demo */}
              <div className="rounded-2xl border border-dashed border-[#16A36A]/40 bg-[#F4FBF7] p-5 text-center">
                <AnimatePresence mode="wait">
                  {!rewardClaimed ? (
                    <motion.div
                      key="button"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white text-[#16A36A] shadow-xs flex items-center justify-center">
                        <Gift size={24} />
                      </div>
                      <h4 className="text-sm font-bold text-[#111827] mb-1">
                        10. Kahve Tamamlandığında
                      </h4>
                      <p className="text-xs text-[#6B7280] mb-4">
                        Müşteri tek tıkla dinamik QR oluşturur ve kasada ikramını alır.
                      </p>
                      <button
                        onClick={() => setRewardClaimed(true)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold transition-all shadow-md shadow-[#16A36A]/20 cursor-pointer"
                      >
                        <Sparkles size={14} />
                        <span>[ Ödülü Kullan ] Demosunu Gör</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="qr"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-1"
                    >
                      <div className="w-28 h-28 mx-auto mb-3 bg-white p-2.5 rounded-2xl border border-[#E5E7EB] shadow-md flex flex-col items-center justify-center relative">
                        <QrCode size={78} className="text-[#111827]" />
                        <div className="absolute inset-x-0 bottom-1 flex justify-center">
                          <span className="text-[8px] font-mono text-[#16A36A] font-bold bg-[#F4FBF7] px-1 rounded">
                            00:54
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-[#111827] flex items-center justify-center gap-1.5 mb-1">
                        <ScanLine size={14} className="text-[#16A36A]" />
                        <span>Dinamik QR Kod Oluştu</span>
                      </div>
                      <p className="text-[11px] text-[#6B7280] mb-3">
                        Kasiyer POS kamerası veya DOKUN paneli ile QR&apos;ı tarar ve ikram onaylanır.
                      </p>

                      <button
                        onClick={() => setRewardClaimed(false)}
                        className="text-xs text-[#16A36A] font-semibold hover:underline"
                      >
                        ← Başlangıç Durumuna Dön
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
