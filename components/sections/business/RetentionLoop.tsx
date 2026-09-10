"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/SectionWrapper";
import { 
  Nfc, 
  UserCheck, 
  Receipt, 
  Star, 
  Gift, 
  PieChart, 
  MessageSquare, 
  RotateCw, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

const loopSteps = [
  {
    step: "01",
    Icon: Nfc,
    title: "NFC / QR Dokunuşu",
    desc: "Müşteri standa telefonunu yaklaştırır. İndirme gerekmez.",
  },
  {
    step: "02",
    Icon: UserCheck,
    title: "Müşteri Tanınır",
    desc: "Kasadaki ekranda müşterinin profili ve ziyaret geçmişi belirir.",
  },
  {
    step: "03",
    Icon: Receipt,
    title: "İşlem Kaydedilir",
    desc: "Kasiyer tek tıkla ziyareti veya harcamayı onaylar.",
  },
  {
    step: "04",
    Icon: Star,
    title: "Sadakat İlerlemesi",
    desc: "Müşteri telefonunda puanının anında arttığını görür.",
  },
  {
    step: "05",
    Icon: Gift,
    title: "Ödül Hak Edilir",
    desc: "10. kahveye veya puan hedefine ulaştığında ödül açılır.",
  },
  {
    step: "06",
    Icon: PieChart,
    title: "Müşteri Segmentlenir",
    desc: "Sistem müşteriyi 'aktif', 'ödüle yakın' veya 'kayıp riski' olarak etiketler.",
  },
  {
    step: "07",
    Icon: MessageSquare,
    title: "WhatsApp Kampanyası",
    desc: "30 gündür gelmeyene veya ödüle yaklaşana otomatik mesaj iletilir.",
  },
  {
    step: "08",
    Icon: RotateCw,
    title: "Müşteri Geri Gelir",
    desc: "Kişiselleştirilmiş teklifi alan müşteri mağazanıza tekrar adım atar.",
  },
];

export function RetentionLoop() {
  return (
    <section id="dongu" className="py-24 lg:py-32 bg-white text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <StaggerContainer className="text-center mb-16">
          <StaggerItem>
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4 bg-[#16A36A]/10 px-3.5 py-1.5 rounded-full border border-[#16A36A]/20">
              Sürdürülebilir Gelir Motoru
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Müşteriniz bugün geldi.
              <br />
              <span className="text-[#16A36A]">Peki yarın nasıl geri gelecek?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              DOKUN sadece bir dokunuş kaydetmez. İlk ziyaretten tekrar alışverişe uzanan 8 adımlı otomatik bir retention döngüsü işletir.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* 8-Step Grid with Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {loopSteps.map((item, idx) => {
            const isLast = idx === loopSteps.length - 1;
            return (
              <div
                key={item.step}
                className={`p-6 rounded-3xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  isLast
                    ? "bg-[#16A36A] text-white border-[#16A36A] shadow-xl shadow-[#16A36A]/20"
                    : "bg-[#FAFAFA] text-[#0a0a0a] border-[#E5E7EB] hover:border-[#16A36A]/30 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider ${
                        isLast ? "text-white/80" : "text-[#16A36A]"
                      }`}
                    >
                      ADIM {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                        isLast ? "bg-white/20 text-white" : "bg-white border border-[#E5E7EB] text-[#16A36A]"
                      }`}
                    >
                      <item.Icon size={18} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3
                    className={`text-base font-bold mb-2 ${
                      isLast ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isLast ? "text-white/90" : "text-[#6B7280]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px]">
                  <span className={isLast ? "text-white/80 font-medium" : "text-[#9CA3AF]"}>
                    {idx < 7 ? "Sonraki Adım" : "Sürekli Tekrar"}
                  </span>
                  <ArrowRight size={14} className={isLast ? "text-white" : "text-[#9CA3AF]"} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Stat Banner */}
        <div className="rounded-3xl bg-[#0a0a0a] text-white p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#16A36A]/20 border border-[#16A36A]/30 flex items-center justify-center text-[#16A36A] flex-shrink-0">
              <TrendingUp size={26} />
            </div>
            <div>
              <div className="text-xl font-bold text-white mb-1">
                Düzenli müşteriler %67 daha fazla harcama yapar.
              </div>
              <div className="text-sm text-[#9CA3AF]">
                DOKUN kullanan işletmelerde tekrar ziyaret oranı ortalama %38 artar.
              </div>
            </div>
          </div>

          <a
            href="#fiyatlar"
            className="flex-shrink-0 h-12 px-6 bg-[#16A36A] hover:bg-[#12916A] text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all hover:scale-105"
          >
            İşletmemde Başlat
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
