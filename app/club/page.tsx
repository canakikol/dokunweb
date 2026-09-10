import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsDokun } from "@/components/sections/WhatIsDokun";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScenarioSection } from "@/components/sections/ScenarioSection";
import { ClubSection } from "@/components/sections/ClubSection";
import { WhyClub } from "@/components/sections/WhyClub";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { FreeSection } from "@/components/sections/FreeSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "DOKUN Club — Müşteriler İçin Sadakat ve Ödül Ağı",
  description:
    "DOKUN Club ile favori işletmelerindeki sadakat programlarına katıl, telefonunu dokundur, puanlarını takip et ve sana özel ödülleri kazan.",
};

export default function ClubPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsDokun />
        <HowItWorks />
        <ScenarioSection />
        <ClubSection />
        <WhyClub />
        <NetworkSection />
        <BusinessSection />
        <FreeSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
