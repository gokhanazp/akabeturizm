export const site = {
  name: "Akabe Turizm",
  legalName: "Akabe Turizm Seyahat Acentası",
  // SİTE YAYINA ALINDIĞINDA KENDİ ALAN ADINIZLA DEĞİŞTİRİN
  url: "https://www.akabeturizm.com",
  description:
    "Akabe Turizm; hac ve umre organizasyonları ile yurt içi kültür turları düzenleyen, güven ve manevi konfor odaklı kurumsal seyahat acentasıdır.",
  slogan: "Kutsal yolculuğunuz emin ellerde",
  phone: "+90 552 398 61 61",
  phoneHref: "+905523986161",
  whatsapp: "+90 552 398 61 61",
  whatsappHref: "905523986161",
  email: "info@akabeturizm.com.tr",
  address: "İstanbul",
  tursabNo: "TÜRSAB Üyesidir",
  social: {
    instagram: "https://www.instagram.com/akabe_turizm/",
    facebook: "https://www.facebook.com/www.akabeturizm.com.tr/",
    youtube: "https://youtube.com/",
  },
  nav: [
    { label: "Anasayfa", href: "/" },
    { label: "Umre", href: "/umre" },
    { label: "Hac", href: "/hac" },
    { label: "Yurt İçi Turlar", href: "/yurt-ici-turlar" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  // SEO için hedef anahtar kelimeler
  keywords: [
    "hac",
    "umre",
    "umre turları",
    "hac turları",
    "umre fiyatları",
    "ramazan umresi",
    "ekonomik umre",
    "lüks umre paketleri",
    "yurt içi turlar",
    "kültür turları",
    "Akabe Turizm",
    "seyahat acentası",
  ],
};

export type Site = typeof site;
