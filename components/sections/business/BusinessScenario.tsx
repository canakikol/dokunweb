"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { MessageCircle, Check, Smartphone, Store, Gift, AlertCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    day: "GÜN 1",
    action: "İlk Ziyaret & Tanıma",
    desc: "Mehmet, ABC Coffee'ye gelir ve 4 kahve sipariş eder. Telefonunu DOKUN standına dokundurur, sisteme anında kaydedilir.",
    highlight: "+4 Puan Eklendi",
    badgeColor: "bg-[#16A36A]/10 text-[#16A36A] border-[#16A36A]/20",
    role: "Kasiyer & Müşteri",
  },
  {
    day: "GÜN 18",
    action: "Ödüle Ulaşma",
    desc: "Mehmet 3. ziyaretinde 10 kahve kotasını tamamlar. Telefonuna anında 'Ücretsiz Kahveniz Hazır' bildirimi düşer.",
    highlight: "10/10 Tamamlandı — Ödül Açıldı",
    badgeColor: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
    role: "Sadakat Motoru",
  },
  {
    day: "GÜN 48",
    action: "Riskli Müşteri Uyarısı",
    desc: "Mehmet tam 30 gündür kafeye uğramamıştır. DOKUN Pro Mehmet'i 'Riskli / Churn' segmentine alır.",
    highlight: "30+ Gündür Ziyaret Yok",
    badgeColor: "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20",
    role: "Otomatik CRM Algoritması",
  },
  {
    day: "GÜN 49",
    action: "WhatsApp Kampanyası",
    desc: "DOKUN otomatik olarak Mehmet'in WhatsApp'ına samimi bir davet ve özel ikram kuponu gönderir.",
    highlight: "Otomatik WhatsApp Bildirimi",
    badgeColor: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    role: "WhatsApp Entegrasyonu",
    whatsappMock: "Merhaba Mehmet Bey! Kahvenizi özledik. Bu hafta yapacağınız ziyarette tatlınız bizden ikram!",
  },
  {
    day: "GÜN 51",
    action: "Müşteri Geri Geldi",
    desc: "Mehmet mesajı görür ve cumartesi günü arkadaşlarıyla kafeye tekrar gelir. Kayıp bir müşteri geri kazanılmıştır.",
    highlight: "Kayıp Müşteri Kurtarıldı (+320 TL)",
    badgeColor: "bg-[#16A36A] text-white border-[#16A36A]",
    role: "Nihai Satış Sonucu",
  },
];

export function BusinessScenario() {
  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4 bg-[#16A36A]/10 px-3.5 py-1.5 rounded-full border border-[#16A36A]/20">
              Uygulamalı Senaryo
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Mesela bir kahveci için:
              <br />
              <span className="text-[#16A36A]">Mehmet&apos;in 51 günlük hikayesi.</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              DOKUN olmadan Mehmet 30 gün sonra unutulup giderdi. DOKUN ile nasıl sadık ve tekrar gelen bir müşteriye dönüştüğünü görün:
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Timeline Grid */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-[#16A36A]/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#16A36A] bg-[#F4FBF7] px-3 py-1 rounded-lg">
                    {item.day}
                  </span>
                  <span className="text-base font-bold text-[#0a0a0a]">{item.action}</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF] font-medium">{item.role}</span>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{item.desc}</p>

              {/* WhatsApp Mock Preview if present */}
              {item.whatsappMock && (
                <div className="bg-[#25D366]/8 border border-[#25D366]/20 rounded-2xl p-3.5 mb-4 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} />
                  </div>
                  <div className="text-xs text-[#0a0a0a] font-medium leading-relaxed">
                    &ldquo;{item.whatsappMock}&rdquo;
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.highlight}
                </span>
                <span className="text-xs text-[#9CA3AF]">
                  Adım {idx + 1} / 5
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Takeaway */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6B7280]">
            Bu süreçte işletme sahibinin hiçbir şey düşünmesine gerek kalmaz. Tüm segmentasyon ve iletişim akışı arka planda otomatik yürür.
          </p>
        </div>
      </div>
    </section>
  );
}
