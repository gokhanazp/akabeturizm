export interface Testimonial {
  name: string;
  location: string;
  program: string;
  rating: number; // 1-5
  text: string;
}

// Örnek müşteri yorumları — gerçek yorumlarınızla değiştirebilirsiniz.
export const testimonials: Testimonial[] = [
  {
    name: "Mehmet Yıldız",
    location: "İstanbul",
    program: "Ramazan Umresi",
    rating: 5,
    text: "Hayatımın en huzurlu yolculuğuydu. Otelimiz Harem'e çok yakındı, rehberimiz her an yanımızdaydı. Akabe Turizm her detayı düşünmüş, gönül rahatlığıyla ibadet ettik. Allah razı olsun.",
  },
  {
    name: "Ayşe Kaya",
    location: "Ankara",
    program: "Servisli Otel Umre",
    rating: 5,
    text: "İlk umremdi ve çok heyecanlıydım. Din görevlimizin bilgilendirmeleri ve ekibin ilgisi sayesinde hiç zorlanmadım. Fiyatlar şeffaftı, sürpriz bir masrafla karşılaşmadık. Teşekkürler.",
  },
  {
    name: "Hasan Demir",
    location: "Bursa",
    program: "5 Yıldızlı Otel Umre",
    rating: 5,
    text: "Konaklama ve hizmet kalitesi beklentimin çok üzerindeydi. Le Méridien'de kaldık, kahvaltılar ve transferler kusursuzdu. Ailecek gittik, herkes çok memnun kaldı. Tavsiye ederim.",
  },
  {
    name: "Fatma Şahin",
    location: "İzmir",
    program: "Yakın Otel Umre",
    rating: 5,
    text: "Harem'e yürüme mesafesindeki otel sayesinde namazlara çok rahat yetiştik. Kafilemiz küçük ve samimiydi. Akabe Turizm'i gönül rahatlığıyla tercih edebilirsiniz.",
  },
  {
    name: "Ömer Çelik",
    location: "Konya",
    program: "Hac Organizasyonu",
    rating: 5,
    text: "Hac gibi zorlu bir ibadette ekibin organizasyonu ve sağlık desteği çok değerliydi. Arafat ve Mina'da bile yanımızdaydılar. Profesyonellik ve samimiyet bir aradaydı.",
  },
];
