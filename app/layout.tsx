import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "DOKUN — İşletmelerle Bağ Kurmanın Yeni Yolu",
  description:
    "DOKUN Club ile favori işletmelerindeki sadakat programlarına katıl, puanlarını takip et, ödüller kazan ve sana özel fırsatları keşfet. Bir dokunuşla başlar.",
  keywords: [
    "DOKUN",
    "DOKUN Club",
    "sadakat programı",
    "NFC",
    "puan kazanma",
    "ödül",
    "yerel işletmeler",
    "dijital sadakat",
    "müşteri kartı",
  ],
  authors: [{ name: "DOKUN" }],
  creator: "DOKUN",
  publisher: "DOKUN",
  metadataBase: new URL("https://dokun.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DOKUN — İşletmelerle Bağ Kurmanın Yeni Yolu",
    description:
      "DOKUN Club ile favori işletmelerindeki sadakat programlarına katıl, puanlarını takip et, ödüller kazan. Bir dokunuşla başlar.",
    url: "https://dokun.co",
    siteName: "DOKUN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DOKUN — İşletmelerle bağ kurmanın yeni yolu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOKUN — İşletmelerle Bağ Kurmanın Yeni Yolu",
    description:
      "DOKUN Club ile favori işletmelerindeki sadakat programlarına katıl, ödüller kazan.",
    images: ["/og-image.png"],
    creator: "@dokunsmart",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#16A36A" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
