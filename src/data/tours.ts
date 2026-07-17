export type TourCategory = "umre" | "hac" | "yurtici";

export interface Tour {
  slug: string;
  category: TourCategory;
  title: string;
  subtitle: string;
  /** Kısa, kart üzerinde görünen açıklama */
  summary: string;
  /** Detay sayfasında gösterilen uzun açıklama paragrafları */
  description: string[];
  duration: string;
  /** Örnek hareket tarihleri */
  dates: string[];
  price: string;
  priceNote?: string;
  hotelLevel: string;
  /** Hac programları için Mekke konaklama detayı */
  mekke?: string;
  /** Hac programları için Medine konaklama detayı */
  medine?: string;
  /** Yemek hizmeti */
  meals?: string;
  /** Umre programları: Mekke oteli */
  hotelMekke?: string;
  /** Umre programları: Medine oteli */
  hotelMedine?: string;
  /** Oda bazlı fiyatlar (umre) */
  roomPrices?: { two?: string; three?: string; four?: string };
  /** Öne çıkan özellikler */
  highlights: string[];
  /** Pakete dahil hizmetler */
  included: string[];
  /** Pakete dahil olmayanlar */
  excluded: string[];
  /** Örnek günlük program */
  itinerary: { day: string; title: string; detail: string }[];
  featured?: boolean;
  badge?: string;
  /** Dekoratif görsel anahtarı (fotoğraf yoksa kullanılır) */
  image: string;
  /** Gerçek fotoğraf (public/ yolu). Verilirse kartta/detayda bu gösterilir. */
  photo?: string;
}

export const tours: Tour[] = [
  {
    slug: "servisli-otel-umre",
    category: "umre",
    photo: "/galeri/0a4792c1-5df2-49fb-b923-7211da011366.jpeg",
    title: "Servisli Otel Programı",
    subtitle: "Konforlu konaklama, en avantajlı fiyat",
    summary:
      "Razan Al Misk vb. (Mekke) ve Mercan vb. (Medine) otellerinde, servis destekli ve sabah–akşam yemekli ekonomik umre programı.",
    description: [
      "Uçak programına göre 8–20 gün arasında değişen süre seçenekleriyle hazırlanan Servisli Otel Programımız; Mekke'de Razan Al Misk vb., Medine'de Mercan vb. otellerde konforlu konaklama ve sabah–akşam yemek hizmetiyle sunulur.",
      "Harem'e düzenli servis, deneyimli din görevlisi ve rehber eşliğiyle ibadetlerinizi huzur içinde tamamlamanız için en avantajlı seçenektir.",
    ],
    duration: "8 – 20 Gün (uçak programına göre)",
    dates: [
      "1 Temmuz (20 gün)",
      "7 Temmuz (14 gün)",
      "30 Temmuz (10 gün)",
      "10 Ağustos (14 gün)",
      "26 Ağustos (14 gün)",
      "29 Ağustos (8 gün)",
      "12 Eylül (8 gün)",
    ],
    price: "$1.050",
    priceNote: "kişi başı, 4'lü odada başlayan fiyat",
    hotelLevel: "Servisli Otel · Sabah–Akşam Yemek",
    hotelMekke: "Razan Al Misk vb.",
    hotelMedine: "Mercan vb.",
    roomPrices: { two: "$1.150 – $1.300", three: "$1.100 – $1.250", four: "$1.050 – $1.200" },
    highlights: [
      "En avantajlı fiyat",
      "Harem'e düzenli servis",
      "Sabah–akşam yemek dahil",
      "Din görevlisi ve rehber eşliği",
    ],
    included: [
      "Gidiş-dönüş uçak biletleri",
      "Mekke ve Medine'de otel konaklaması",
      "Sabah–akşam yemek",
      "Harem servisi ve transferler",
      "Vize ve seyahat sağlık sigortası",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Öğle yemekleri", "Kurban bedeli"],
    itinerary: [
      { day: "1. Gün", title: "Hareket", detail: "Havalimanında buluşma ve uçuş." },
      { day: "2-5. Gün", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri ve ibadet." },
      { day: "6. Gün", title: "Mekke", detail: "İhrama giriş ve umre menasiki." },
      { day: "7-... Gün", title: "Mekke programı", detail: "Harem'de ibadet ve ziyaretler." },
      { day: "Son Gün", title: "Dönüş", detail: "Veda tavafı ve dönüş uçuşu." },
    ],
    featured: true,
    badge: "En Avantajlı",
    image: "umre-servisli",
  },
  {
    slug: "yakin-otel-umre",
    category: "umre",
    photo: "/galeri/0b782acc-d5ea-430f-8c09-a0dfbf224394.jpeg",
    title: "Yakın Otel Programı",
    subtitle: "Harem'e yakın konaklama",
    summary:
      "Ravha Maqam vb. (Mekke) ve Mercan vb. (Medine) otellerinde, Harem'e yakın konumda konforlu umre programı.",
    description: [
      "Yakın Otel Programımız; Mekke'de Ravha Maqam vb., Medine'de Mercan vb. otellerde, Harem'e yakın konumda konaklama imkânı sunar. Yürüme mesafesini kısaltarak ibadetlerinize daha çok vakit ayırmanızı sağlar.",
      "10 günlük programımız sabah–akşam yemek, deneyimli din görevlisi ve rehber eşliğiyle planlanmıştır.",
    ],
    duration: "10 Gün",
    dates: ["16 Temmuz", "30 Temmuz", "5 Eylül"],
    price: "$1.550",
    priceNote: "kişi başı, 4'lü odada başlayan fiyat",
    hotelLevel: "Yakın Otel · Sabah–Akşam Yemek",
    hotelMekke: "Ravha Maqam vb.",
    hotelMedine: "Mercan vb.",
    roomPrices: { two: "$1.650", three: "$1.600", four: "$1.550" },
    highlights: [
      "Harem'e yakın konum",
      "Kısa yürüme mesafesi",
      "Sabah–akşam yemek dahil",
      "Din görevlisi ve rehber eşliği",
    ],
    included: [
      "Gidiş-dönüş uçak biletleri",
      "Harem'e yakın otellerde konaklama",
      "Sabah–akşam yemek",
      "Tüm transferler",
      "Vize ve seyahat sağlık sigortası",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Öğle yemekleri", "Kurban bedeli"],
    itinerary: [
      { day: "1. Gün", title: "Hareket", detail: "Havalimanında buluşma ve uçuş." },
      { day: "2-4. Gün", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri." },
      { day: "5. Gün", title: "Mekke", detail: "İhrama giriş ve umre menasiki." },
      { day: "6-9. Gün", title: "Mekke programı", detail: "Harem'de ibadet ve ziyaretler." },
      { day: "10. Gün", title: "Dönüş", detail: "Veda tavafı ve dönüş." },
    ],
    badge: "Harem'e Yakın",
    image: "umre-yakin",
  },
  {
    slug: "bes-yildizli-otel-umre",
    category: "umre",
    photo: "/galeri/1c20ced8-58b3-4849-a1db-1aa325719a35.jpeg",
    title: "5 Yıldızlı Otel Programı",
    subtitle: "Le Méridien & Emaar Royal ile lüks konfor",
    summary:
      "Le Méridien vb. (Mekke) ve Emaar Royal vb. (Medine) 5 yıldızlı otellerinde, premium konforlu lüks umre programı.",
    description: [
      "5 Yıldızlı Otel Programımız; Mekke'de Le Méridien vb., Medine'de Emaar Royal vb. 5 yıldızlı otellerde, Harem'e yakın konumda lüks konaklama sunar. Yüksek konfor arayan misafirlerimiz için ideal premium seçenektir.",
      "8 günlük programımız sabah–akşam yemek, deneyimli din görevlisi ve profesyonel rehber eşliğiyle planlanmıştır.",
    ],
    duration: "8 Gün",
    dates: ["18 Temmuz", "15 Ağustos"],
    price: "$1.650",
    priceNote: "kişi başı, 4'lü odada başlayan fiyat",
    hotelLevel: "5 Yıldız · Harem'e yakın",
    hotelMekke: "Le Méridien vb.",
    hotelMedine: "Emaar Royal vb.",
    roomPrices: { two: "$1.750", three: "$1.700", four: "$1.650" },
    highlights: [
      "5 yıldızlı premium oteller",
      "Harem'e yakın lüks konaklama",
      "Sabah–akşam yemek dahil",
      "Profesyonel rehber ve din görevlisi",
    ],
    included: [
      "Gidiş-dönüş uçak biletleri",
      "5 yıldızlı otellerde konaklama",
      "Sabah–akşam yemek",
      "Tüm transferler",
      "Vize ve seyahat sağlık sigortası",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Öğle yemekleri", "Kurban bedeli"],
    itinerary: [
      { day: "1. Gün", title: "Hareket", detail: "Havalimanında buluşma ve uçuş." },
      { day: "2-3. Gün", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri." },
      { day: "4. Gün", title: "Mekke", detail: "İhrama giriş ve umre menasiki." },
      { day: "5-7. Gün", title: "Mekke programı", detail: "Harem'de ibadet ve ziyaretler." },
      { day: "8. Gün", title: "Dönüş", detail: "Veda tavafı ve dönüş." },
    ],
    featured: true,
    badge: "Lüks",
    image: "umre-5yildiz",
  },
  {
    slug: "normal-hac-programi",
    category: "hac",
    photo: "/galeri/53046865-be13-4a0e-82f2-4f072909ea36.jpeg",
    title: "Normal Hac Programı",
    subtitle: "Konforlu konaklama, sabah–akşam tabldot yemek",
    summary:
      "Uçak programına göre 24–45 gün. Mekke'de Harem'e en fazla 7 km, Medine'de Harem'e en fazla 700 m mesafede, en fazla 5 kişilik otel tipi odalar.",
    description: [
      "Uçak programına göre değişen süre seçenekleriyle hazırlanan hac programımız; Mekke ve Medine'de konforlu konaklama ve sabah–akşam tabldot yemek hizmetiyle sunulur.",
      "Arafat, Müzdelife ve Mina konaklamaları, deneyimli din görevlisi ve rehber eşliği ile bu kutsal yolculuğu güvenle tamamlamanız için planlanmıştır.",
    ],
    duration: "24 – 45 Gün (uçak programına göre)",
    dates: ["2026 Hac dönemi"],
    price: "Fiyat için arayın",
    priceNote: "2026 hac fiyatları için bizimle iletişime geçin",
    hotelLevel: "Otel tipi · en fazla 5 kişilik oda",
    mekke: "Harem bölgesine en fazla 7 km mesafede, en fazla 5 kişilik otel tipi odalar",
    medine: "Merkeziye'de veya Harem'e en fazla 700 m mesafede, en fazla 5 kişilik otel tipi odalar",
    meals: "Sabah – Akşam Tabldot",
    highlights: [
      "Arafat – Müzdelife – Mina tam program",
      "Sabah–akşam tabldot yemek",
      "Deneyimli din görevlisi ve rehber",
      "Esnek süre seçenekleri",
    ],
    included: [
      "Uçak biletleri ve tüm transferler",
      "Mekke–Medine otel konaklaması",
      "Mina ve Arafat çadır konaklaması",
      "Sabah–akşam tabldot yemek",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Kurban bedeli", "Ek ziyaret turları"],
    itinerary: [
      { day: "1. Aşama", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri ve manevi hazırlık." },
      { day: "2. Aşama", title: "Mekke", detail: "Umre ve Harem ibadetleri." },
      { day: "3. Aşama", title: "Arafat & Müzdelife", detail: "Vakfe ve gece konaklaması." },
      { day: "4. Aşama", title: "Mina", detail: "Şeytan taşlama ve kurban menasiki." },
      { day: "5. Aşama", title: "Veda ve dönüş", detail: "Veda tavafı ve yurda dönüş." },
    ],
    featured: true,
    badge: "2026",
    image: "hac",
  },
  {
    slug: "mustakil-odali-hac-programi-1",
    category: "hac",
    photo: "/galeri/6718d344-ad80-4734-80af-d55582cc2834.jpeg",
    title: "Müstakil Odalı Hac Programı 1",
    subtitle: "Harem'e yakın, müstakil 2 kişilik odalar",
    summary:
      "Mekke'de Harem'e 1500 m, Medine'de Harem'e sıfır mesafede müstakil 2 kişilik otel tipi odalar. Sabah–akşam tabldot yemek dahil.",
    description: [
      "Müstakil 2 kişilik odalarda mahremiyet ve konfor isteyenler için ideal program. Mekke'de Harem'e 1500 m mesafede, Medine'de Merkeziye veya Harem'e sıfır konumda konaklama sunar.",
      "Sabah–akşam tabldot yemek hizmeti, deneyimli din görevlisi ve rehber eşliğiyle huzurlu bir hac deneyimi.",
    ],
    duration: "15 – 22 Gün / 30 – 35 Gün (uçak programına göre)",
    dates: ["2026 Hac dönemi"],
    price: "Fiyat için arayın",
    priceNote: "2026 hac fiyatları için bizimle iletişime geçin",
    hotelLevel: "Müstakil 2 kişilik otel tipi oda",
    mekke: "Harem'e 1500 m mesafede, müstakil 2 kişilik otel tipi odalar",
    medine: "Merkeziye veya Harem'e sıfır, müstakil 2 kişilik otel tipi odalar",
    meals: "Sabah – Akşam Tabldot",
    highlights: [
      "Müstakil 2 kişilik odalar",
      "Mekke'de Harem'e 1500 m",
      "Medine'de Harem'e sıfır",
      "Sabah–akşam tabldot yemek",
    ],
    included: [
      "Uçak biletleri ve tüm transferler",
      "Müstakil 2 kişilik odalarda konaklama",
      "Mina ve Arafat çadır konaklaması",
      "Sabah–akşam tabldot yemek",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Kurban bedeli", "Ek ziyaret turları"],
    itinerary: [
      { day: "1. Aşama", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri." },
      { day: "2. Aşama", title: "Mekke", detail: "Umre ve Harem ibadetleri." },
      { day: "3. Aşama", title: "Arafat & Müzdelife", detail: "Vakfe ve gece konaklaması." },
      { day: "4. Aşama", title: "Mina", detail: "Şeytan taşlama ve kurban menasiki." },
      { day: "5. Aşama", title: "Veda ve dönüş", detail: "Veda tavafı ve yurda dönüş." },
    ],
    badge: "Müstakil Oda",
    image: "hac",
  },
  {
    slug: "mustakil-odali-hac-programi-2",
    category: "hac",
    photo: "/galeri/c3f98672-4bd6-49d9-9e9e-8e20f06eadf6.jpeg",
    title: "Müstakil Odalı Hac Programı 2",
    subtitle: "Müstakil 2 kişilik odalar, uygun mesafe",
    summary:
      "Mekke'de Harem'e 3500 m, Medine'de Harem'e sıfır mesafede müstakil 2 kişilik otel tipi odalar. Sabah–akşam tabldot yemek dahil.",
    description: [
      "Müstakil oda konforunu daha uygun bir konaklama mesafesiyle birleştiren program. Mekke'de Harem'e 3500 m, Medine'de Merkeziye veya Harem'e sıfır konumda konaklama.",
      "Sabah–akşam tabldot yemek, din görevlisi ve rehber eşliğiyle eksiksiz bir hac organizasyonu.",
    ],
    duration: "15 – 22 Gün / 30 – 35 Gün (uçak programına göre)",
    dates: ["2026 Hac dönemi"],
    price: "Fiyat için arayın",
    priceNote: "2026 hac fiyatları için bizimle iletişime geçin",
    hotelLevel: "Müstakil 2 kişilik otel tipi oda",
    mekke: "Harem'e 3500 m mesafede, müstakil 2 kişilik otel tipi odalar",
    medine: "Merkeziye veya Harem'e sıfır, müstakil 2 kişilik otel tipi odalar",
    meals: "Sabah – Akşam Tabldot",
    highlights: [
      "Müstakil 2 kişilik odalar",
      "Mekke'de Harem'e 3500 m",
      "Medine'de Harem'e sıfır",
      "Sabah–akşam tabldot yemek",
    ],
    included: [
      "Uçak biletleri ve tüm transferler",
      "Müstakil 2 kişilik odalarda konaklama",
      "Mina ve Arafat çadır konaklaması",
      "Sabah–akşam tabldot yemek",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Kurban bedeli", "Ek ziyaret turları"],
    itinerary: [
      { day: "1. Aşama", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri." },
      { day: "2. Aşama", title: "Mekke", detail: "Umre ve Harem ibadetleri." },
      { day: "3. Aşama", title: "Arafat & Müzdelife", detail: "Vakfe ve gece konaklaması." },
      { day: "4. Aşama", title: "Mina", detail: "Şeytan taşlama ve kurban menasiki." },
      { day: "5. Aşama", title: "Veda ve dönüş", detail: "Veda tavafı ve yurda dönüş." },
    ],
    badge: "Müstakil Oda",
    image: "hac",
  },
  {
    slug: "mustakil-odali-hac-programi-3",
    category: "hac",
    photo: "/galeri/ca71413e-e06b-4bdd-b657-fb831b4d2f86.jpeg",
    title: "Müstakil Odalı Hac Programı 3",
    subtitle: "Ekonomik müstakil oda seçeneği",
    summary:
      "Mekke'de Harem'e 3500–7000 m, Medine'de Harem'e sıfır mesafede müstakil 2 kişilik otel tipi odalar. Sabah–akşam tabldot yemek dahil.",
    description: [
      "Müstakil oda konforunu en uygun bütçeyle sunan program. Mekke'de Harem'e 3500–7000 m, Medine'de Merkeziye veya Harem'e sıfır konumda müstakil 2 kişilik odalar.",
      "Sabah–akşam tabldot yemek, din görevlisi ve rehber eşliğiyle güvenli bir hac yolculuğu.",
    ],
    duration: "15 – 30 Gün (uçak programına göre)",
    dates: ["2026 Hac dönemi"],
    price: "Fiyat için arayın",
    priceNote: "2026 hac fiyatları için bizimle iletişime geçin",
    hotelLevel: "Müstakil 2 kişilik otel tipi oda",
    mekke: "Harem'e 3500 – 7000 m mesafede, müstakil 2 kişilik otel tipi odalar",
    medine: "Merkeziye veya Harem'e sıfır, müstakil 2 kişilik otel tipi odalar",
    meals: "Sabah – Akşam Tabldot",
    highlights: [
      "Müstakil 2 kişilik odalar",
      "Ekonomik konaklama mesafesi",
      "Medine'de Harem'e sıfır",
      "Sabah–akşam tabldot yemek",
    ],
    included: [
      "Uçak biletleri ve tüm transferler",
      "Müstakil 2 kişilik odalarda konaklama",
      "Mina ve Arafat çadır konaklaması",
      "Sabah–akşam tabldot yemek",
      "Rehberlik ve din görevlisi hizmeti",
    ],
    excluded: ["Kişisel harcamalar", "Kurban bedeli", "Ek ziyaret turları"],
    itinerary: [
      { day: "1. Aşama", title: "Medine", detail: "Mescid-i Nebevi ziyaretleri." },
      { day: "2. Aşama", title: "Mekke", detail: "Umre ve Harem ibadetleri." },
      { day: "3. Aşama", title: "Arafat & Müzdelife", detail: "Vakfe ve gece konaklaması." },
      { day: "4. Aşama", title: "Mina", detail: "Şeytan taşlama ve kurban menasiki." },
      { day: "5. Aşama", title: "Veda ve dönüş", detail: "Veda tavafı ve yurda dönüş." },
    ],
    badge: "Ekonomik",
    image: "hac",
  },
  {
    slug: "kapadokya-turu",
    category: "yurtici",
    title: "Kapadokya Kültür Turu",
    subtitle: "Peri bacaları ve yeraltı şehirleri",
    summary:
      "2 gece konaklamalı, balon turu opsiyonlu, rehber eşliğinde Kapadokya'nın eşsiz coğrafyasını keşif turu.",
    description: [
      "UNESCO Dünya Mirası listesindeki Kapadokya, peri bacaları, yeraltı şehirleri ve kaya kiliseleriyle Türkiye'nin en etkileyici destinasyonlarından biridir. Rehber eşliğinde Göreme Açık Hava Müzesi, Derinkuyu Yeraltı Şehri ve Uçhisar Kalesi'ni gezeceğiniz keyifli bir program.",
      "Dileyen misafirlerimiz için gün doğumunda sıcak hava balonu turu opsiyonel olarak eklenebilir.",
    ],
    duration: "2 Gece / 3 Gün",
    dates: ["Her hafta sonu", "Resmi tatillerde özel kalkışlar"],
    price: "₺12.500",
    priceNote: "kişi başı, çift kişilik odada",
    hotelLevel: "4 Yıldız / Butik kaya otel",
    highlights: [
      "Göreme Açık Hava Müzesi",
      "Derinkuyu Yeraltı Şehri",
      "Opsiyonel balon turu",
      "Rehberli geziler",
    ],
    included: [
      "Ulaşım (otobüs/uçak opsiyonlu)",
      "2 gece konaklama ve kahvaltı",
      "Rehberlik hizmeti",
      "Müze giriş ücretleri",
    ],
    excluded: ["Balon turu", "Öğle ve akşam yemekleri", "Kişisel harcamalar"],
    itinerary: [
      { day: "1. Gün", title: "Varış", detail: "Karşılama, Uçhisar ve Güvercinlik Vadisi." },
      { day: "2. Gün", title: "Tam gün tur", detail: "Göreme, Derinkuyu ve vadi yürüyüşleri." },
      { day: "3. Gün", title: "Dönüş", detail: "Avanos çömlek atölyesi ve dönüş." },
    ],
    image: "kapadokya",
  },
  {
    slug: "karadeniz-yaylalar-turu",
    category: "yurtici",
    photo: "/galeri/karadeniz/orta.jpg",
    title: "Karadeniz Turu",
    subtitle: "Yeşilin tüm tonları",
    summary:
      "Trabzon, Rize, Batum, Samsun, Ordu ve Giresun'u kapsayan; doğa, tarih ve yöresel lezzetleri buluşturan kapsamlı Karadeniz turu.",
    description: [
      "Karadeniz'in eşsiz yaylalarını, sis altındaki ormanlarını ve tarihi mekânlarını keşfedeceğiniz bu tur; Ayder Yaylası, Pokut, Sümela Manastırı ve Uzungöl'ü kapsar. Doğayla iç içe, huzurlu bir kaçamak.",
      "Yerel lezzetlerin tadılacağı duraklar ve fotoğraf molalarıyla zenginleştirilmiş keyifli bir program sizi bekliyor.",
    ],
    duration: "6 Gece / 7 Gün",
    dates: ["Haziran - Eylül arası haftalık kalkışlar"],
    price: "₺25.000",
    priceNote: "kişi başı, çift kişilik odada",
    hotelLevel: "4 Yıldız / Dağ evi",
    highlights: [
      "Sümela Manastırı & Uzungöl",
      "Ayder Yaylası & Rize çay bahçeleri",
      "Batum (Gürcistan) şehir turu",
      "Yöresel lezzet molaları",
    ],
    included: [
      "Ulaşım (konforlu otobüs)",
      "6 gece konaklama ve kahvaltı",
      "Rehberlik hizmeti",
      "Belirtilen çevre gezileri",
    ],
    excluded: ["Öğle ve akşam yemekleri", "Müze giriş ücretleri", "Kişisel harcamalar"],
    itinerary: [
      { day: "1. Gün", title: "Samsun", detail: "Samsun'a varış, Atatürk Anıtı ve şehir turu; konaklama." },
      { day: "2. Gün", title: "Ordu", detail: "Boztepe teleferik ve sahil turu, ardından Giresun'a hareket." },
      { day: "3. Gün", title: "Giresun", detail: "Giresun Adası ve kale gezisi; Trabzon'a geçiş." },
      { day: "4. Gün", title: "Trabzon", detail: "Sümela Manastırı ve Uzungöl'ün keşfi." },
      { day: "5. Gün", title: "Rize", detail: "Çay bahçeleri ve Ayder Yaylası'nda doğa gezisi." },
      { day: "6. Gün", title: "Batum (Gürcistan)", detail: "Sınır geçişi, modern sahil ve Batum şehir turu." },
      { day: "7. Gün", title: "Dönüş", detail: "Veda kahvaltısı ve dönüş yolculuğu." },
    ],
    image: "karadeniz",
  },
  {
    slug: "eskisehir-turu",
    category: "yurtici",
    photo: "/galeri/eskisehir/orta.jpg",
    title: "Eskişehir Turu",
    subtitle: "Modern, kültürel ve tarihi bir şehir",
    summary:
      "Tarihi Odunpazarı, Porsuk Çayı, Sazova Parkı ve Masal Şatosu'yla modern ve masalsı bir Eskişehir kaçamağı.",
    description: [
      "Tarihi dokusu, modern yaşamı, eşsiz parkları ve masalsı atmosferiyle Eskişehir'i keşfetmeye hazır mısınız? Odunpazarı'nın nostaljik sokaklarından Porsuk Çayı'nın huzurlu akışına kadar şehir sizi bekliyor.",
      "Konforlu ulaşım, deneyimli rehberler ve keyifli fotoğraf molalarıyla zenginleştirilmiş bir program eşliğinde Eskişehir'in tarihini, kültürünü ve modern yüzünü birlikte keşfediyoruz.",
    ],
    duration: "Günübirlik",
    dates: ["Her hafta sonu", "Resmi tatillerde özel kalkışlar"],
    price: "₺3.000",
    priceNote: "kişi başı",
    hotelLevel: "Günübirlik tur (konaklamasız)",
    highlights: [
      "Tarihi Odunpazarı evleri",
      "Porsuk Çayı gondol turu",
      "Sazova Bilim, Sanat ve Kültür Parkı",
      "Masal Şatosu",
    ],
    included: [
      "Gidiş-dönüş ulaşım (konforlu otobüs)",
      "Rehberlik hizmeti",
      "Belirtilen şehir gezileri",
    ],
    excluded: ["Öğle yemeği", "Gondol ve müze ücretleri", "Kişisel harcamalar"],
    itinerary: [
      { day: "Sabah", title: "Odunpazarı & Porsuk Çayı", detail: "Tarihi Odunpazarı evleri ve Arnavut kaldırımlı sokaklar; Porsuk Çayı kıyısında yürüyüş ve gondol turu." },
      { day: "Öğleden Sonra", title: "Sazova & Masal Şatosu", detail: "Sazova Bilim Sanat Parkı ve Masal Şatosu gezisi; alışveriş molası ve akşam dönüş." },
    ],
    badge: "Günübirlik",
    image: "kapadokya",
  },
  {
    slug: "bursa-turu",
    category: "yurtici",
    photo: "/galeri/bursa/orta.jpg",
    title: "Bursa Turu",
    subtitle: "Osmanlı'nın ilk başkenti",
    summary:
      "Cumalıkızık, Ulu Cami, Kozahan, Yeşil Türbe ve daha fazlasıyla Osmanlı'nın ilk başkenti Bursa'yı keşfedin.",
    description: [
      "Tarihi, kültürü ve doğal güzellikleriyle Osmanlı'nın ilk başkenti Bursa'yı keşfetmeye hazır mısınız? Cumalıkızık'ın tarihi sokaklarından Ulu Cami'nin ihtişamına, Yeşil Türbe'den Kapalıçarşı'nın canlı atmosferine kadar şehir sizi bekliyor.",
      "Konforlu ulaşım, deneyimli rehberler ve yöresel lezzet molalarıyla; tarih, kültür ve huzur dolu bir yolculuğa birlikte çıkıyoruz.",
    ],
    duration: "1 Gece / 2 Gün",
    dates: ["Her hafta sonu", "Resmi tatillerde özel kalkışlar"],
    price: "₺4.500",
    priceNote: "kişi başı, çift kişilik odada",
    hotelLevel: "4 Yıldız / Şehir merkezi",
    highlights: [
      "Cumalıkızık Osmanlı köyü",
      "Ulu Cami & Kozahan",
      "Yeşil Türbe",
      "Kapalıçarşı ve yöresel lezzetler",
    ],
    included: [
      "Gidiş-dönüş ulaşım (konforlu otobüs)",
      "1 gece konaklama ve kahvaltı",
      "Rehberlik hizmeti",
      "Belirtilen şehir gezileri",
    ],
    excluded: ["Öğle ve akşam yemekleri", "Müze ve giriş ücretleri", "Kişisel harcamalar"],
    itinerary: [
      { day: "1. Gün", title: "Cumalıkızık, Ulu Cami & Kozahan", detail: "Tarihi Cumalıkızık köyü, Ulu Cami ve Kozahan gezisi; Kapalıçarşı'da yöresel lezzet ve alışveriş, otele yerleşme." },
      { day: "2. Gün", title: "Türbeler & Tophane", detail: "Yeşil Türbe, Osmangazi ve Orhangazi Türbeleri, Tophane Saat Kulesi ve şehir manzarası; akşam dönüş." },
    ],
    badge: "Yeni",
    image: "kapadokya",
  },
  {
    slug: "gap-turu",
    category: "yurtici",
    photo: "/galeri/gap/orta.jpg",
    title: "GAP Turu",
    subtitle: "Tarihin, kültürün ve doğanın büyüleyici yolculuğu",
    summary:
      "Şanlıurfa, Gaziantep, Adana, Mardin ve Diyarbakır'ı kapsayan; kadim şehirlerin büyüleyici hikâyeleriyle dolu kapsamlı GAP turu.",
    description: [
      "Kadim şehirlerin büyüleyici hikâyeleri ve eşsiz güzellikleriyle unutulmaz bir deneyime hazır mısınız? Göbeklitepe'den Balıklıgöl'e, Mardin'in taş sokaklarından Diyarbakır surlarına kadar tarih, kültür ve doğa iç içe.",
      "Konforlu ulaşım, deneyimli rehberler ve yöresel lezzet molalarıyla; GAP'ın tarihini, kültürünü ve doğasını birlikte keşfediyoruz.",
    ],
    duration: "5 Gece / 6 Gün",
    dates: ["İlkbahar - Sonbahar arası dönemsel kalkışlar"],
    price: "₺48.000",
    priceNote: "kişi başı, çift kişilik odada",
    hotelLevel: "4 Yıldız / Şehir merkezi",
    highlights: [
      "Göbeklitepe & Balıklıgöl (Şanlıurfa)",
      "Zeugma Mozaik Müzesi & Antep mutfağı",
      "Mardin taş evleri & Deyrulzafaran",
      "Diyarbakır surları & Adana Sabancı Camii",
    ],
    included: [
      "Ulaşım ve şehirlerarası transferler",
      "5 gece konaklama ve kahvaltı",
      "Rehberlik hizmeti",
      "Belirtilen şehir ve çevre gezileri",
    ],
    excluded: ["Öğle ve akşam yemekleri", "Müze ve ören yeri giriş ücretleri", "Kişisel harcamalar"],
    itinerary: [
      { day: "1. Gün", title: "Adana → Gaziantep", detail: "Adana'ya varış, Sabancı Merkez Camii ve Taşköprü; Gaziantep'e geçiş ve konaklama." },
      { day: "2. Gün", title: "Gaziantep", detail: "Gaziantep Kalesi, Zeugma Mozaik Müzesi, Bakırcılar Çarşısı ve Antep mutfağı." },
      { day: "3. Gün", title: "Şanlıurfa", detail: "Balıklıgöl, Halil-ür Rahman Camii ve Göbeklitepe ziyareti." },
      { day: "4. Gün", title: "Harran & Mardin", detail: "Harran'ın kubbeli evleri; Mardin'e geçiş ve akşam şehir manzarası." },
      { day: "5. Gün", title: "Mardin", detail: "Eski Mardin sokakları, Deyrulzafaran Manastırı ve taş işçiliği; çarşı gezisi." },
      { day: "6. Gün", title: "Diyarbakır & Dönüş", detail: "Diyarbakır surları ve On Gözlü Köprü; veda ve dönüş yolculuğu." },
    ],
    badge: "Yeni",
    image: "kapadokya",
  },
];

export const tourCategories: { id: TourCategory; label: string; href: string; description: string }[] = [
  {
    id: "umre",
    label: "Umre Turları",
    href: "/umre",
    description: "Yıl boyu düzenli kalkışlarla ekonomikten lükse umre paketleri.",
  },
  {
    id: "hac",
    label: "Hac Organizasyonu",
    href: "/hac",
    description: "Resmi takvime uygun, tam donanımlı hac organizasyonları.",
  },
  {
    id: "yurtici",
    label: "Yurt İçi Turlar",
    href: "/yurt-ici-turlar",
    description: "Kapadokya'dan Karadeniz'e kültür ve doğa turları.",
  },
];

export function getToursByCategory(category: TourCategory) {
  return tours.filter((t) => t.category === category);
}

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export const featuredTours = tours.filter((t) => t.featured);

/** Umre kalkış takvimi (akabeturizm.com.tr/umre kaynaklı, 2026) */
export interface UmreScheduleRow {
  no: number;
  date: string;
  duration: string;
  program: string;
  hotels: string;
  two: string;
  three: string;
  four: string;
}

export const umreSchedule: UmreScheduleRow[] = [
  { no: 1, date: "1 Temmuz", duration: "20 gün", program: "Servisli Otel Programı", hotels: "Razan Al Misk vb. / Mercan vb.", two: "$1.300", three: "$1.250", four: "$1.200" },
  { no: 2, date: "7 Temmuz", duration: "14 gün", program: "Servisli Otel Programı", hotels: "Razan Al Misk vb. / Mercan vb.", two: "$1.200", three: "$1.150", four: "$1.100" },
  { no: 3, date: "16 Temmuz", duration: "10 gün", program: "Yakın Otel Programı", hotels: "Ravha Maqam vb. / Mercan vb.", two: "$1.650", three: "$1.600", four: "$1.550" },
  { no: 4, date: "18 Temmuz", duration: "8 gün", program: "5★ Otel Programı", hotels: "Le Méridien vb. / Emaar Royal vb.", two: "—", three: "—", four: "—" },
  { no: 5, date: "30 Temmuz", duration: "10 gün", program: "Servisli Otel Programı", hotels: "Razan Al Misk vb. / Mercan vb.", two: "$1.150", three: "$1.100", four: "$1.050" },
  { no: 6, date: "30 Temmuz", duration: "10 gün", program: "Yakın Otel Programı", hotels: "Ravha Maqam vb. / Mercan vb.", two: "$1.650", three: "$1.600", four: "$1.550" },
  { no: 7, date: "10 Ağustos", duration: "14 gün", program: "Servisli Otel Programı", hotels: "Razan Al Misk vb. / Mercan vb.", two: "$1.200", three: "$1.150", four: "$1.100" },
  { no: 8, date: "15 Ağustos", duration: "8 gün", program: "5★ Otel Programı", hotels: "Le Méridien vb. / Emaar Royal vb.", two: "$1.750", three: "$1.700", four: "$1.650" },
  { no: 9, date: "26 Ağustos", duration: "14 gün", program: "Servisli Otel Programı", hotels: "Razan Al Misk vb. / Mercan vb.", two: "$1.200", three: "$1.150", four: "$1.100" },
  { no: 10, date: "29 Ağustos", duration: "8 gün", program: "Servisli Otel Programı", hotels: "Le Méridien vb. / Emaar Royal vb.", two: "—", three: "—", four: "—" },
  { no: 11, date: "5 Eylül", duration: "10 gün", program: "Yakın Otel Programı", hotels: "Ravha Maqam vb. / Mercan vb.", two: "$1.650", three: "$1.600", four: "$1.550" },
  { no: 12, date: "12 Eylül", duration: "8 gün", program: "Servisli Otel Programı", hotels: "Le Méridien vb. / Emaar Royal vb.", two: "—", three: "—", four: "—" },
];
