import Link from "next/link";
import { ROUTES } from "@/components/config/routes";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "DOKUN Nedir?", href: ROUTES.nedir },
      { label: "DOKUN Club", href: ROUTES.club },
      { label: "Nasıl Çalışır?", href: ROUTES.nasil },
      { label: "İşletmeler", href: ROUTES.isletmeler },
    ],
  },
  legal: {
    title: "Yasal",
    links: [
      { label: "KVKK", href: ROUTES.kvkk },
      { label: "Gizlilik Politikası", href: ROUTES.gizlilik },
      { label: "Kullanım Koşulları", href: ROUTES.kullanim },
      { label: "İletişim", href: ROUTES.iletisim },
    ],
  },
};

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: ROUTES.instagram },
  { icon: XIcon, label: "Twitter / X", href: ROUTES.twitter },
  { icon: LinkedinIcon, label: "LinkedIn", href: ROUTES.linkedin },

];

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#16A36A] rounded-xl flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
              </div>
              <span className="text-[#0a0a0a] font-bold text-lg tracking-tight">DOKUN</span>
            </div>
            <p className="text-[#4B5563] text-sm leading-relaxed max-w-xs">
              İşletmelerle bağ kurmanın yeni yolu.
              <br />
              Bir dokunuşla başlar.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] hover:text-[#16A36A] hover:border-[#16A36A]/30 hover:bg-[#F4FBF7] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#4B5563] hover:text-[#16A36A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} DOKUN. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
            <span className="text-xs text-[#9CA3AF]">Tüm sistemler çalışıyor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
