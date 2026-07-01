export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  /** Paragraf dizisi (basit içerik) */
  content: { heading?: string; body: string }[];
  image: string;
  /** Gerçek fotoğraf (public/ yolu) */
  photo?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "umreye-giderken-yanima-ne-almaliyim",
    title: "Umreye Giderken Yanıma Ne Almalıyım? Eksiksiz Hazırlık Listesi",
    excerpt:
      "İlk kez umreye gidecekler için kıyafetten ilaca, evraktan ibadet malzemelerine kadar eksiksiz bir hazırlık rehberi.",
    date: "2026-01-15",
    readingTime: "6 dk okuma",
    category: "Umre Rehberi",
    image: "blog-hazirlik",
    photo: "/galeri/2e79914d-0152-4beb-b1eb-56c30256326e.jpeg",
    content: [
      {
        body: "Umre yolculuğu, manevi olduğu kadar pratik bir hazırlık da gerektirir. Doğru hazırlık, ibadetlerinizi huzurla yerine getirmenize yardımcı olur. Bu rehberde umreye giderken yanınıza almanız gereken her şeyi başlıklar halinde topladık.",
      },
      {
        heading: "Evrak ve Belgeler",
        body: "Pasaport (en az 6 ay geçerli), vize evrakları, uçak bilet çıktısı, sağlık sigortası belgesi ve aşı kartınızı mutlaka yanınıza alın. Bu belgelerin birer fotokopisini ayrı bir çantada bulundurmanızı öneririz.",
      },
      {
        heading: "İhram ve Giyim",
        body: "Erkekler için iki parça ihram, bayanlar için rahat ve örtülü kıyafetler önemlidir. Harem bölgesinde uzun yürüyüşler olacağı için rahat ve kaymayan terlik veya sandalet tercih edin.",
      },
      {
        heading: "Sağlık ve Kişisel Bakım",
        body: "Düzenli kullandığınız ilaçları yeterli miktarda, kutusu ve reçetesiyle birlikte taşıyın. Ağrı kesici, bant, güneş kremi ve dudak kremi gibi temel malzemeleri unutmayın.",
      },
      {
        body: "Akabe Turizm olarak tüm misafirlerimize kalkış öncesi detaylı bir hazırlık semineri ve kontrol listesi sunuyoruz. Sorularınız için bizimle iletişime geçebilirsiniz.",
      },
    ],
  },
  {
    slug: "hac-ve-umre-arasindaki-farklar",
    title: "Hac ve Umre Arasındaki Farklar Nelerdir?",
    excerpt:
      "Çoğu kişinin merak ettiği hac ile umre arasındaki temel farkları, zaman, menasik ve hüküm açısından açıklıyoruz.",
    date: "2026-01-08",
    readingTime: "5 dk okuma",
    category: "İbadet Rehberi",
    image: "blog-fark",
    photo: "/galeri/42a01d49-aa5c-4452-8f6a-e7b8a296090e.jpeg",
    content: [
      {
        body: "Hac ve umre, Müslümanların Mekke'de yerine getirdiği iki önemli ibadettir. Birbirine benzese de aralarında önemli farklar bulunur. Bu yazıda iki ibadeti karşılaştırıyoruz.",
      },
      {
        heading: "Zaman Farkı",
        body: "Hac, yılda yalnızca belirli günlerde (Zilhicce ayında) yapılabilirken; umre yılın her döneminde yerine getirilebilir.",
      },
      {
        heading: "Hüküm Farkı",
        body: "Hac, şartları taşıyan her Müslümana ömründe bir kez farzdır. Umre ise Hanefî mezhebine göre sünnet kabul edilir.",
      },
      {
        heading: "Menasik Farkı",
        body: "Umre; ihram, tavaf, sa'y ve tıraş ile tamamlanır. Hac ise bunlara ek olarak Arafat'ta vakfe, Müzdelife'de gecelemek ve Mina'da şeytan taşlama gibi menasikleri içerir.",
      },
    ],
  },
  {
    slug: "ramazan-umresi-neden-ozeldir",
    title: "Ramazan Umresi Neden Bu Kadar Özeldir?",
    excerpt:
      "Ramazan ayında yapılan umrenin manevi değeri ve bu dönemde dikkat edilmesi gerekenler hakkında bir rehber.",
    date: "2025-12-20",
    readingTime: "4 dk okuma",
    category: "Umre Rehberi",
    image: "blog-ramazan",
    photo: "/galeri/7edce249-9dd4-41b0-8373-18a5318a2629.jpeg",
    content: [
      {
        body: "Ramazan ayı, ibadetlerin manevi karşılığının katlandığı mübarek bir dönemdir. Bu ayda yapılan umre, birçok inanan için hayatlarının en özel yolculuklarından biri olur.",
      },
      {
        heading: "Manevi Yoğunluk",
        body: "Ramazan'da Harem'in atmosferi bambaşkadır. Teravih namazları, iftar ve sahur vakitlerinde milyonlarca insanla aynı manevi havayı paylaşmak eşsiz bir deneyimdir.",
      },
      {
        heading: "Erken Planlama Önemi",
        body: "Ramazan umresi yoğun talep gördüğü için kontenjanlar erken dolar. Harem'e yakın otellerde yer ayırtmak isteyenlerin aylar öncesinden rezervasyon yaptırması önerilir.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
