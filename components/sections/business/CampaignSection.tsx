"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, CheckCircle2, MessageCircle, Smartphone, Sparkles, ArrowRight } from "lucide-react";

export function CampaignSection() {
  const [selectedChannel, setSelectedChannel] = useState<"whatsapp" | "sms">("whatsapp");
  const [campaignTriggered, setCampaignTriggered] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] text-[#111827]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16A36A]/10 border border-[#16A36A]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#16A36A] uppercase tracking-wider mb-4">
            <MessageSquare size={13} />
            <span>Otomatik Geri Kazanım Modülü</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#111827]">
            Müşteriniz sizi
            <br />
            <span className="text-[#16A36A]">unutmasın.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed">
            DOKUN, gelmeyi bırakan müşterileri sizin yerinize takip eder ve en doğru anda samimi bir davet göndererek kasanıza geri döndürür.
          </p>
        </div>

        {/* Campaign Demo Showcase Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E5E7EB] p-7 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Trigger Prompt & Setup */}
            <div className="lg:col-span-7 space-y-6">
              {/* Alert notification badge */}
              <div className="p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EF4444] text-white flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                  92
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#EF4444] uppercase tracking-wider">
                    Otomatik Tespit: Riskli Segment
                  </h4>
                  <p className="text-xs text-[#111827] font-medium mt-0.5">
                    Tam 30 gündür mağazanızı ziyaret etmeyen <strong>92 müşteri</strong> tespit edildi.
                  </p>
                </div>
              </div>

              {/* DOKUN Question */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  DOKUN Akıllı Asistan:
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] leading-snug">
                  &ldquo;Bu müşterilere kampanya göndermek ister misiniz?&rdquo;
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Sistem, müşterinin ödül kotasını otomatik olarak mesaja ekler ve kişiye özel hale getirir.
                </p>
              </div>

              {/* Channel Selector */}
              <div>
                <span className="text-xs font-bold text-[#4B5563] block mb-2">
                  İletişim Kanalı Seçin:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedChannel("whatsapp")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      selectedChannel === "whatsapp"
                        ? "border-[#25D366] bg-[#25D366]/10 text-[#111827]"
                        : "border-[#E5E7EB] bg-white text-[#6B7280] hover:border-gray-300"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-bold">WhatsApp</div>
                      <div className="text-[10px] text-[#6B7280]">%98 Açılma Oranı</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedChannel("sms")}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                      selectedChannel === "sms"
                        ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#111827]"
                        : "border-[#E5E7EB] bg-white text-[#6B7280] hover:border-gray-300"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#3B82F6] text-white flex items-center justify-center shrink-0">
                      <Smartphone size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Başlıklı SMS</div>
                      <div className="text-[10px] text-[#6B7280]">Doğrudan İleti</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Action Trigger Button */}
              <div>
                <button
                  onClick={() => setCampaignTriggered(true)}
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#16A36A] hover:bg-[#12916A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#16A36A]/20 cursor-pointer"
                >
                  <Send size={14} />
                  <span>[ Kampanya Oluştur ] & Gönder</span>
                </button>
                {campaignTriggered && (
                  <div className="mt-2 text-xs text-[#16A36A] font-semibold flex items-center gap-1.5 animate-fadeIn">
                    <CheckCircle2 size={14} />
                    <span>Demo bildirim 92 müşteriye simüle edildi!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Realistic Message Demo UI */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E7EB] text-xs">
                  <span className="font-bold text-[#111827]">
                    {selectedChannel === "whatsapp" ? "WhatsApp Önizleme" : "SMS Önizleme"}
                  </span>
                  <span className="text-[10px] text-[#9CA3AF] font-mono">DEMO UI</span>
                </div>

                {/* Message Bubble */}
                <div className="bg-[#E7F8EE] border border-[#25D366]/30 rounded-2xl rounded-tl-none p-4 shadow-xs relative">
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#25D366]/20">
                    <span className="text-xs font-bold text-[#111827]">ABC Coffee & Bakery</span>
                    <span className="text-[9px] text-[#16A36A] font-semibold">Doğrulanmış İşletme</span>
                  </div>

                  {/* Required Exact Copy */}
                  <p className="text-xs text-[#111827] leading-relaxed whitespace-pre-line font-medium">
                    &ldquo;☕ Seni özledik!
                    {"\n\n"}
                    Ödülüne sadece 2 kahve kaldı.
                    {"\n\n"}
                    Bu hafta seni bekliyoruz.&rdquo;
                  </p>

                  <div className="mt-3 text-right">
                    <span className="text-[9px] text-[#6B7280]">Bugün, 14:02 · İletildi ✓✓</span>
                  </div>
                </div>

                {/* Footnote */}
                <div className="mt-4 text-center text-[10px] text-[#9CA3AF]">
                  * Bu bir DEMO UI örneğidir. İşletmeler kendi metinlerini ve ödül koşullarını özelleştirebilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
