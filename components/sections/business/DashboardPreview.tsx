"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, AlertTriangle, Sparkles, Search, ArrowUpRight } from "lucide-react";
import { RealisticIcon } from "@/components/ui/RealisticIcon";

const crmCustomers = [
  { name: "Mehmet Yılmaz", loyalty: "8 / 10", lastVisit: "4 gün önce", status: "Ödüle Yaklaşan", badgeColor: "bg-[#F59E0B]/10 text-[#F59E0B]" },
  { name: "Ayşe Demir", loyalty: "10 / 10", lastVisit: "Bugün", status: "Ödül Hazır", badgeColor: "bg-[#16A36A]/10 text-[#16A36A]" },
  { name: "Can Kaya", loyalty: "2 / 10", lastVisit: "34 gün önce", status: "30+ Gün Gelmedi", badgeColor: "bg-[#EF4444]/10 text-[#EF4444]" },
];

export function DashboardPreview() {
  return (
    <section id="dokun-pro" className="py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#16A36A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4 backdrop-blur-md">
            <Users size={13} />
            <span>Davranış Odaklı Bulut CRM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
            Müşterilerinizi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A36A] to-[#34D399]">
              gerçekten tanıyın.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            &ldquo;DOKUN size sadece müşteri sayısını değil, müşterilerinizin davranışını gösterir.&rdquo;
          </p>
        </div>

        {/* Large CRM Dashboard Window */}
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-2 sm:p-5 shadow-2xl backdrop-blur-xl">
          <div className="bg-[#121316] rounded-2xl border border-white/10 overflow-hidden">
            {/* Top Bar */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#18191E]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-4 text-xs font-mono text-[#9CA3AF]">
                  panel.dokun.co/crm/musteriler
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#16A36A]">
                <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
                <span className="font-semibold">Canlı Veri Akışı</span>
              </div>
            </div>

            {/* Dashboard Inner */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* 4 Required Metric Boxes */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">Müşteriler</span>
                    <RealisticIcon name="user" size={22} />
                  </div>
                  <div className="text-3xl font-bold text-white">1.248</div>
                  <div className="text-xs text-[#16A36A] font-medium mt-1 flex items-center gap-1">
                    <ArrowUpRight size={13} />
                    <span>Kayıtlı Profil</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">Aktif Müşteriler</span>
                    <RealisticIcon name="check" size={22} />
                  </div>
                  <div className="text-3xl font-bold text-[#10B981]">734</div>
                  <div className="text-xs text-[#9CA3AF] font-medium mt-1">
                    Düzenli Gelenler
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">30+ Gündür Gelmeyen</span>
                    <RealisticIcon name="target" size={22} />
                  </div>
                  <div className="text-3xl font-bold text-[#EF4444]">92</div>
                  <div className="text-xs text-[#EF4444] font-medium mt-1">
                    Kayıp Riski Taşıyan
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">Ödüle Yaklaşan</span>
                    <RealisticIcon name="sparkle" size={22} />
                  </div>
                  <div className="text-3xl font-bold text-[#F59E0B]">128</div>
                  <div className="text-xs text-[#F59E0B] font-medium mt-1">
                    1-2 Ziyareti Kalan
                  </div>
                </div>
              </div>

              {/* Required Customer Table: Son Ziyaretler */}
              <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
                <div className="p-4 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Son Ziyaretler</span>
                    <span className="text-[10px] text-[#9CA3AF] bg-white/10 px-2 py-0.5 rounded-md">
                      Canlı Akış
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-lg border border-white/10 text-xs text-[#9CA3AF]">
                    <Search size={12} />
                    <span>Müşteri ara...</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/[0.01] text-[#9CA3AF] border-b border-white/[0.06]">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Müşteri</th>
                        <th className="py-3 px-4 font-semibold">Sadakat Durumu</th>
                        <th className="py-3 px-4 font-semibold">Segment Durumu</th>
                        <th className="py-3 px-4 font-semibold">Son Ziyaret</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {crmCustomers.map((c, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-4 font-medium text-white flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-bold text-[11px]">
                              {c.name[0]}
                            </div>
                            <span>{c.name}</span>
                          </td>
                          <td className="py-4 px-4 font-mono font-bold text-[#16A36A]">{c.loyalty}</td>
                          <td className="py-4 px-4">
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badgeColor}`}>
                              {c.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-[#D1D5DB] font-medium">{c.lastVisit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-[#9CA3AF]">
                <span>Müşterilerinizin harcama alışkanlıkları ve geri gelme periyotları tek ekranda.</span>
                <span className="font-semibold text-white">DOKUN Akıllı CRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
