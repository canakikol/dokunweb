"use client";

import { ShieldCheck, EyeOff, Lock, CheckCircle2, UserCheck, AlertCircle } from "lucide-react";

export function ClubForBusiness() {
  return (
    <section className="py-24 lg:py-32 bg-[#F4FBF7] text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value & Privacy Explanation */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs font-semibold text-[#16A36A] tracking-widest uppercase mb-4 bg-[#16A36A]/10 px-3.5 py-1.5 rounded-full border border-[#16A36A]/20">
              Ortak Hesap & Veri Gizliliği
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-[#111827]">
              Müşterinizin tek bir
              <br />
              <span className="text-[#16A36A]">DOKUN hesabı var.</span>
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              Müşteri bir kez DOKUN Club hesabı oluşturur. DOKUN kullanan farklı işletmelerdeki sadakat programlarına ayrı ayrı katılabilir.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-8">
              Her dükkanda baştan form doldurmak, uygulama yüklemek veya yeni kart taşımak zorunda kalmaz. Sürtünme sıfırdır.
            </p>

            {/* Crucial Privacy Guarantees */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#16A36A]/10 text-[#16A36A] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827] mb-1">
                    Sadece Kendi Müşteri Verinizi Görürsünüz
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    ABC Coffee olarak siz sadece Mehmet&apos;in sizin işletmenizdeki ziyaretlerini ve sadakat puanlarını takip edersiniz.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center shrink-0 mt-0.5">
                  <EyeOff size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827] mb-1">
                    Diğer İşletmelerdeki Veriler Görünmez
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Mehmet&apos;in başka bir restorandaki, kafedeki veya kuafördeki harcama ve ziyaret verileri asla sizinle paylaşılmaz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Verification Demonstration */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0a0a0a] text-white flex items-center justify-center font-bold text-xs">
                    ABC
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111827]">ABC Coffee İşletme Ekranı</div>
                    <div className="text-xs text-[#6B7280]">Örnek Müşteri Kartı</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#16A36A]/10 text-[#16A36A]">
                  DOKUN Club Üyesi
                </span>
              </div>

              {/* Exact Example Specified in Prompt */}
              <div className="space-y-3 mb-6 bg-[#FAFAFA] p-5 rounded-2xl border border-[#E5E7EB]">
                <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]/60">
                  <span className="text-xs text-[#6B7280]">Müşteri Adı:</span>
                  <span className="text-xs font-bold text-[#111827]">Mehmet Yılmaz</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]/60">
                  <span className="text-xs text-[#6B7280]">ABC Coffee Ziyareti:</span>
                  <span className="text-xs font-bold text-[#111827]">12 ziyaret</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]/60">
                  <span className="text-xs text-[#6B7280]">Sadakat Durumu:</span>
                  <span className="text-xs font-bold text-[#16A36A]">8 / 10 sadakat</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-xs text-[#6B7280]">Son Ziyaret:</span>
                  <span className="text-xs font-bold text-[#111827]">4 gün önce</span>
                </div>
              </div>

              {/* Verified Privacy Notice Box */}
              <div className="p-4 rounded-2xl bg-[#F4FBF7] border border-[#16A36A]/20">
                <div className="flex items-center gap-2 text-xs font-bold text-[#111827] mb-1">
                  <Lock size={14} className="text-[#16A36A]" />
                  <span>Tam İzolasyon & KVKK Uyumlu</span>
                </div>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">
                  ABC Coffee, Mehmet&apos;in başka hiçbir DOKUN işletmesindeki verisini göremez. Müşteriniz hem ekosistemin hızından faydalanır hem de verileri yüzde yüz güvendedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
