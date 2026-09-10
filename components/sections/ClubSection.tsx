"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneMockup, PhoneScreen } from "@/components/ui/PhoneMockup";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StaggerContainer, StaggerItem, SectionWrapper } from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ROUTES } from "@/components/config/routes";
import { Check, MapPin, Gift } from "lucide-react";

const screens = [
  { id: 0, tab: "Sadakatlerim" },
  { id: 1, tab: "Ödüllerim" },
  { id: 2, tab: "Keşfet" },
];

/* Shared business dot indicator */
function BizDot({ color = "#16A36A" }: { color?: string }) {
  return (
    <div
      className="w-2 h-2 rounded-full flex-shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}

function LoyaltyScreen() {
  return (
    <PhoneScreen>
      <div className="mb-5">
        <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase mb-1">
          DOKUN CLUB
        </div>
        <div className="text-base font-bold text-[#0a0a0a]">Merhaba, Can</div>
      </div>
      <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-3">
        Sadakatlerim
      </div>
      <div className="space-y-3">
        <div className="bg-[#F4FBF7] rounded-2xl p-3 border border-[#16A36A]/15">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <BizDot />
              <div>
                <div className="text-xs font-bold text-[#0a0a0a]">ABC Coffee</div>
                <div className="text-[9px] text-[#9CA3AF]">2 ziyaret kaldı</div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A36A]">8 / 10</span>
          </div>
          <ProgressBar value={80} color="#16A36A" />
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#E5E7EB]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BizDot color="#6B7280" />
              <div>
                <div className="text-xs font-bold text-[#0a0a0a]">Pizza House</div>
                <div className="text-[9px] text-[#9CA3AF]">Puan programı</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-[#16A36A]">340</div>
              <div className="text-[9px] text-[#9CA3AF]">puan</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#E5E7EB]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BizDot color="#6B7280" />
              <div>
                <div className="text-xs font-bold text-[#0a0a0a]">Burger House</div>
                <div className="text-[9px] text-[#9CA3AF]">Ziyaret programı</div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A36A]">3 / 5</span>
          </div>
        </div>
      </div>
    </PhoneScreen>
  );
}

function RewardsScreen() {
  return (
    <PhoneScreen>
      <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase mb-5">
        Ödüllerim
      </div>

      <div className="bg-[#16A36A] rounded-3xl p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
            <Gift size={14} className="text-white" strokeWidth={1.75} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white/70 uppercase tracking-wide">
              ABC Coffee
            </div>
            <div className="text-sm font-bold text-white">Ücretsiz Kahve</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl py-2.5 text-center">
          <span className="text-xs font-bold text-[#16A36A]">Ödülü Kullan →</span>
        </div>
      </div>

      <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-3">
        Yaklaşan Ödüller
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-2xl">
          <div className="flex items-center gap-2">
            <BizDot color="#6B7280" />
            <div>
              <div className="text-xs font-semibold text-[#0a0a0a]">Pizza House</div>
              <div className="text-[9px] text-[#9CA3AF]">500 puana 160 puan kaldı</div>
            </div>
          </div>
          <div className="text-xs font-bold text-[#9CA3AF]">340 / 500</div>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-2xl">
          <div className="flex items-center gap-2">
            <BizDot color="#6B7280" />
            <div>
              <div className="text-xs font-semibold text-[#0a0a0a]">Burger House</div>
              <div className="text-[9px] text-[#9CA3AF]">5 ziyarette 1 ücretsiz</div>
            </div>
          </div>
          <div className="text-xs font-bold text-[#9CA3AF]">3 / 5</div>
        </div>
      </div>
    </PhoneScreen>
  );
}

function DiscoverScreen() {
  const businesses = [
    { name: "Coffee House", campaign: "DOKUN üyesine özel" },
    { name: "Pizza House", campaign: "+2 puan kampanyası" },
    { name: "Barber X", campaign: "5 ziyarette 1 ücretsiz" },
    { name: "Burger House", campaign: "Üye ol, 50 puan kazan" },
  ];

  return (
    <PhoneScreen>
      <div className="flex items-center gap-2 mb-1">
        <MapPin size={12} className="text-[#16A36A]" strokeWidth={2} />
        <div className="text-[10px] font-bold text-[#16A36A] tracking-widest uppercase">
          Yakındaki İşletmeler
        </div>
      </div>
      <div className="text-[9px] text-[#9CA3AF] mb-4">Demo veriler</div>
      <div className="space-y-2.5">
        {businesses.map((biz) => (
          <div key={biz.name} className="flex items-center justify-between p-3 bg-white border border-[#E5E7EB] rounded-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#F4FBF7] rounded-xl flex items-center justify-center flex-shrink-0">
                <BizDot />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0a0a0a]">{biz.name}</div>
                <div className="text-[9px] text-[#16A36A] mt-0.5">{biz.campaign}</div>
              </div>
            </div>
            <div className="text-[#E5E7EB] text-xs">›</div>
          </div>
        ))}
      </div>
    </PhoneScreen>
  );
}

export function ClubSection() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screenComponents = [<LoyaltyScreen key="loyalty" />, <RewardsScreen key="rewards" />, <DiscoverScreen key="discover" />];

  return (
    <section
      id="dokun-club"
      className="py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="club-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4">
                DOKUN Club
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2
                id="club-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
              >
                Tek hesap.{" "}
                <span className="text-[#16A36A]">Tüm ödüllerin.</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-md">
                DOKUN Club&apos;a bir kez katıl. DOKUN kullanan işletmelerdeki
                sadakat programlarını tek yerden takip et.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex gap-2 mb-8 flex-wrap">
                {screens.map((screen) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreen(screen.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeScreen === screen.id
                        ? "bg-[#16A36A] text-white shadow-md"
                        : "bg-white/10 text-[#9CA3AF] hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {screen.tab}
                  </button>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link
                href={ROUTES.clubJoin}
                className="inline-flex items-center justify-center h-14 px-8 bg-[#16A36A] text-white font-semibold text-base rounded-2xl hover:bg-[#12916A] transition-all duration-200 hover:scale-[1.02] shadow-md"
              >
                Club&apos;a Ücretsiz Katıl
              </Link>
            </StaggerItem>
          </StaggerContainer>

          {/* Right */}
          <SectionWrapper direction="right" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#16A36A]/15 rounded-full blur-3xl scale-75 pointer-events-none" />
              <PhoneMockup size="lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="h-full"
                  >
                    {screenComponents[activeScreen]}
                  </motion.div>
                </AnimatePresence>
              </PhoneMockup>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
