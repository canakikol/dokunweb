"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { UserX, CreditCard, MessageSquareOff, ArrowDown } from "lucide-react";

const problems = [
  {
    Icon: UserX,
    number: "01",
    title: "Müşterinizi tanımıyorsunuz.",
    description: "Günde onlarca kişi kasanızdan geçiyor ama veri tutulamıyor.",
    bullets: [
      "Kim tekrar geliyor?",
      "Kim uzun zamandır gelmiyor?",
      "Kim sadık müşteriniz?",
    ],
    impact: "Her gün gelen müşteriniz ile ilk kez gelen müşterinize aynı muameleyi yapmak zorunda kalırsınız.",
  },
  {
    Icon: CreditCard,
    number: "02",
    title: "Müşterinizin tekrar gelmesi için sebep yok.",
    description:
      "Sadakat programı ve ödül sistemi olmayınca müşteri başka işletmeye gidebilir. Kağıt kartlar kaybolur, karmaşık uygulamaları ise kimse indirmek istemez.",
    bullets: [
      "Ödül vaadi olmayan müşteri kolayca rakibe kayar.",
      "Ziyaret sıklığı ödüllendirilmez.",
      "Müşteri aidiyeti oluşmaz.",
    ],
    impact: "Müşteriniz kapıdan çıktığı an alternatif mekanları deneme olasılığı yükselir.",
  },
  {
    Icon: MessageSquareOff,
    number: "03",
    title: "Müşterinize tekrar ulaşamıyorsunuz.",
    description:
      "Müşteri verisi ve segmentasyon olmayınca doğru kişiye doğru zamanda kampanya gönderemezsiniz.",
    bullets: [
      "30 gündür gelmeyen müşterinin haberi olmaz.",
      "Sosyal medya algoritmaları kitleye erişemez.",
      "Toplu spam SMS'ler müşteri kaybettirir.",
    ],
    impact: "Elinizde izinli ve aktif iletişim kanalı kalmadığından sürekli yüksek maliyetle yeni müşteri ararsınız.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-white text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#EF4444] tracking-widest uppercase mb-4 bg-[#EF4444]/10 px-3.5 py-1.5 rounded-full border border-[#EF4444]/20">
              Geleneksel İşletmelerin Kör Noktası
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
              Müşteriniz geliyor.
              <br />
              <span className="text-[#EF4444]">Peki sonra ne oluyor?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Fiziksel işletmelerin en büyük maliyeti sessizce giden müşterilerdir. DOKUN, bu üç temel problemi tek bir akışta ortadan kaldırır.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* 3 Problems Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {problems.map((prob) => (
            <StaggerItem key={prob.number}>
              <div className="h-full bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#EF4444]/30 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#EF4444] group-hover:scale-110 transition-transform">
                      <prob.Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#9CA3AF] tracking-wider">
                      SORUN {prob.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-3 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                    {prob.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prob.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#374151] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] text-xs text-[#EF4444] font-medium leading-snug">
                  {prob.impact}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transition Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
              Çözüm: Döngüyü Tek Yerde Birleştirmek
            </span>
            <div className="w-8 h-8 rounded-full bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center animate-bounce mt-1">
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
