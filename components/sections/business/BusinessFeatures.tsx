"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Clock, 
  Layers, 
  Send, 
  LineChart,
  Sparkles 
} from "lucide-react";

const proFeatures = [
  {
    Icon: Users,
    title: "CRM",
    tagline: "Müşterilerinizi tek panelden yönetin.",
    desc: "Tüm müşteri veritabanınızı tek bir bulut ekrandan görün. Telefon, isim, ziyaret sıklığı ve harcama alışkanlıkları otomatik olarak kaydedilir.",
  },
  {
    Icon: Award,
    title: "SADAKAT",
    tagline: "Puan, ziyaret ve ödül sistemleri oluşturun.",
    desc: "10 kahvede 1 bedava damga sistemi veya harcama bazlı puan kurgusu. İşletmenizin dinamiklerine uygun sadakat kurallarını dakikalar içinde başlatın.",
  },
  {
    Icon: Clock,
    title: "MÜŞTERİ TAKİBİ",
    tagline: "Ziyaretleri ve alışverişleri takip edin.",
    desc: "Hangi saatlerde kasa yoğun, kimler haftalık düzenli geliyor, kim ne zaman en son uğramış? Canlı akış ile mağazanızın nabzını tutun.",
  },
  {
    Icon: Layers,
    title: "SEGMENTASYON",
    tagline: "Müşterilerinizi davranışlarına göre gruplandırın.",
    desc: "Aktifler, ödüle yaklaşanlar, 30+ gündür gelmeyenler, en sadıklar ve yeni müşteriler olarak otomatik ayrıştırılmış hedef kitleler oluşturun.",
  },
  {
    Icon: Send,
    title: "KAMPANYALAR",
    tagline: "Doğru müşteriye doğru zamanda ulaşın.",
    desc: "Toplu spam mesajlar yerine, riskli müşteriye özel 'Seni özledik' daveti veya ödüle yaklaşana özel hatırlatma mesajı gönderin.",
  },
  {
    Icon: LineChart,
    title: "ANALİZ",
    tagline: "İşletmenizin müşteri davranışlarını anlayın.",
    desc: "Kayıp oranlarını önceden tespit edin, tekrar ziyaret yüzdesini artırın ve hangi kampanyaların cironuza ne kadar katkı sağladığını net görün.",
  },
];

export function BusinessFeatures() {
  return (
    <section id="ozellikler" className="py-24 lg:py-32 bg-white text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Kapsamlı B2B Donanım & Yazılım Paketi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            DOKUN Pro ile
            <br />
            <span className="text-[#16A36A]">gelen tüm güç.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Ayrı ayrı yazılımlara binlerce lira harcamak yerine, fiziksel işletmenizin tüm sadakat ve retention ihtiyaçlarını tek bir entegre sistemle yönetin.
          </p>
        </div>

        {/* 6 Required Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#16A36A]/40 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-[#16A36A]/5 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#16A36A] mb-6 group-hover:bg-[#16A36A] group-hover:text-white group-hover:border-[#16A36A] transition-all duration-200 shadow-xs">
                  <feat.Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="text-xl font-extrabold text-[#111827] tracking-tight mb-1.5">
                  {feat.title}
                </h3>

                <div className="text-xs font-bold text-[#16A36A] mb-3">
                  {feat.tagline}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[11px] text-[#9CA3AF] flex items-center justify-between">
                <span>DOKUN PRO</span>
                <span className="font-semibold text-[#16A36A]">Dahil</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
