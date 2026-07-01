# Akabe Turizm — Web Sitesi

Hac, umre ve yurt içi turlar için kurumsal, modern ve SEO odaklı web sitesi.
**Next.js 14 (App Router) + TypeScript + Tailwind CSS** ile geliştirilmiştir.

## Hızlı Başlangıç

```bash
npm install      # bağımlılıkları yükle (ilk seferde)
npm run dev      # geliştirme sunucusu → http://localhost:3000
```

Yayına almak için:

```bash
npm run build    # üretim derlemesi
npm start        # üretim sunucusunu başlat
```

## Proje Yapısı

```
src/
  app/                 # Sayfalar (App Router)
    page.tsx           # Anasayfa
    hac/               # Hac programları listesi + detay
    umre/              # Umre paketleri listesi + detay
    yurt-ici-turlar/   # Yurt içi turlar listesi + detay
    hakkimizda/        # Hakkımızda
    iletisim/          # İletişim + form
    blog/              # Blog listesi + yazı
    sitemap.ts         # Otomatik sitemap.xml
    robots.ts          # robots.txt
  components/          # Navbar, Footer, Hero, kartlar vb.
  data/                # İçerik: site.ts, tours.ts, blog.ts
  lib/seo.ts           # Metadata ve JSON-LD yardımcıları
public/logo.webp       # Logo
```

## İçeriği Düzenleme (kod bilgisi gerektirmez)

- **Firma bilgileri (telefon, e-posta, adres, sosyal medya):** `src/data/site.ts`
- **Tur paketleri (fiyat, tarih, program):** `src/data/tours.ts`
- **Blog yazıları:** `src/data/blog.ts`
- **Logo:** `public/logo.webp` dosyasını değiştirin.

## Yayına Almadan Önce Yapılması Gerekenler

1. `src/data/site.ts` içindeki `url` alanını gerçek alan adınızla değiştirin
   (`https://www.akabeturizm.com`). SEO ve sitemap bunu kullanır.
2. Telefon, WhatsApp, e-posta, adres ve TÜRSAB numarasını güncelleyin.
3. Görseller: `src/components/TourVisual.tsx` şu an dekoratif placeholder
   üretir. Gerçek fotoğraflarınızı `public/` klasörüne ekleyip ilgili yerlerde
   `next/image` ile kullanabilirsiniz.
   - **Hero (ana ekran) arka planı:** Şu an `public/hero-kabe.svg` (bize ait,
     telifsiz Kâbe illüstrasyonu) kullanılıyor. Kendi fotoğrafınızı koymak için
     fotoğrafı `public/hero-kabe.jpg` adıyla ekleyin ve
     `src/components/Hero.tsx` dosyasının başındaki `HERO_BG` değerini
     `"/hero-kabe.jpg"` yapın. (Geniş/yatay, yüksek çözünürlüklü öneririz.)
4. İletişim formu şu an e-posta uygulamasını açar. Otomatik gönderim için bir
   form servisi (ör. Formspree, Resend) ya da API rotası eklenebilir.
5. Google Search Console ve Google Analytics kodlarını ekleyin.

## SEO

- Her sayfada özel `title`, `description` ve anahtar kelimeler
- Open Graph ve Twitter Card meta etiketleri
- `TravelAgency`, `Product` ve `Article` için JSON-LD yapılandırılmış veri
- Otomatik `sitemap.xml` ve `robots.txt`
- Türkçe dil etiketi (`lang="tr"`) ve semantik HTML

## Yayınlama Önerisi

Vercel (Next.js'in geliştiricisi) ücretsiz ve en kolay seçenektir:
GitHub deposuna yükleyin → vercel.com üzerinden içe aktarın → alan adınızı bağlayın.
