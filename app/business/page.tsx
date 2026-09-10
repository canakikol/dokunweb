import { BusinessNavbar } from "@/components/layout/BusinessNavbar";
import { Footer } from "@/components/layout/Footer";
import { BusinessHero } from "@/components/sections/business/BusinessHero";
import { ProblemSection } from "@/components/sections/business/ProblemSection";
import { SolutionSection } from "@/components/sections/business/SolutionSection";
import { DokunStandSection } from "@/components/sections/business/DokunStandSection";
import { LoyaltySection } from "@/components/sections/business/LoyaltySection";
import { DashboardPreview } from "@/components/sections/business/DashboardPreview";
import { SegmentationSection } from "@/components/sections/business/SegmentationSection";
import { CampaignSection } from "@/components/sections/business/CampaignSection";
import { ClubForBusiness } from "@/components/sections/business/ClubForBusiness";
import { BusinessFeatures } from "@/components/sections/business/BusinessFeatures";
import { RetentionHeroSection } from "@/components/sections/business/RetentionHeroSection";
import { PricingSection } from "@/components/sections/business/PricingSection";
import { BusinessFinalCTA } from "@/components/sections/business/BusinessFinalCTA";

export const metadata = {
  title: "DOKUN Pro — Müşterilerinizi Sadece Kazanmayın, Geri Getirin",
  description:
    "Fiziksel işletmeniz için akıllı NFC standı, bulut CRM, sadakat sistemi ve otomatik WhatsApp kampanyaları. Müşterinizi tanıyın, sadakat oluşturun, tekrar ziyaretleri artırın.",
  openGraph: {
    title: "DOKUN Pro — Müşterilerinizi Sadece Kazanmayın, Geri Getirin",
    description:
      "DOKUN ile müşterilerinizi tanıyın, sadakat programları oluşturun, alışveriş ve ziyaretleri takip edin ve doğru müşteriye doğru zamanda ulaşın.",
    url: "https://dokun.co/business",
    siteName: "DOKUN",
    locale: "tr_TR",
    type: "website",
  },
};

export default function BusinessPage() {
  return (
    <>
      <BusinessNavbar />
      <main className="overflow-hidden">
        {/* 1. Hero */}
        <BusinessHero />

        {/* 2. Problem: Müşteriniz geliyor. Peki sonra ne oluyor? */}
        <ProblemSection />

        {/* 3. Çözüm Flow: DOKUN bütün döngüyü tek yerde birleştirir */}
        <SolutionSection />

        {/* 4. DOKUN Stand: İlk temas fiziksel. Devamı dijital. */}
        <DokunStandSection />

        {/* 5. Sadakat Sistemi: Müşterinize tekrar gelmesi için bir sebep verin. */}
        <LoyaltySection />

        {/* 6. CRM: Müşterilerinizi gerçekten tanıyın. */}
        <DashboardPreview />

        {/* 7. Müşteri Segmentasyonu: Her müşteriye aynı mesajı göndermeyin. */}
        <SegmentationSection />

        {/* 8. Kampanyalar: Müşteriniz sizi unutmasın. */}
        <CampaignSection />

        {/* 9. DOKUN Club'ın İşletme Açısından Anlatımı & Veri Gizliliği */}
        <ClubForBusiness />

        {/* 10. DOKUN Pro 6 Temel Özellik */}
        <BusinessFeatures />

        {/* 11. "Müşteriniz bugün geldi. Peki 30 gün sonra?" */}
        <RetentionHeroSection />

        {/* 12. Fiyatlandırma: DOKUN STAND & DOKUN PRO */}
        <PricingSection />

        {/* 13. Son CTA: Müşterilerinizle bağ kurmanın zamanı geldi. */}
        <BusinessFinalCTA />
      </main>
      <Footer />
    </>
  );
}
