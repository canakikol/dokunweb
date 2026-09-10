/**
 * DOKUN Merkezi Route Yönetimi
 * Tüm CTA URL'leri buradan yönetilir.
 */

export const ROUTES = {
  // Ana
  home: '/',
  business: '/business',
  club: '/club',

  // Müşteri CTA'ları
  clubJoin: '/club/kayit',
  clubLogin: '/club/giris',

  // İşletme CTA'ları
  dokunPro: '/business',
  businessStart: '/business#fiyatlar',
  businessContact: '/business/iletisim',
  businessDemo: '/business#demo',

  // Sayfa içi anchor (club)
  nedir: '/club#nedir',
  nasil: '/club#nasil-calisir',
  dokun_club: '/club#dokun-club',
  isletmeler: '/business',

  // Yasal
  kvkk: '/kvkk',
  gizlilik: '/gizlilik-politikasi',
  kullanim: '/kullanim-kosullari',
  iletisim: '/iletisim',

  // Sosyal
  instagram: 'https://instagram.com/dokunsmart',
  twitter: 'https://twitter.com/dokunsmart',
  linkedin: 'https://linkedin.com/company/dokunsmart',
} as const;

export type RouteKey = keyof typeof ROUTES;
