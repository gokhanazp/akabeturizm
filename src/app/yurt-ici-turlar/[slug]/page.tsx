import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TourDetail from "@/components/TourDetail";
import { tours, getTour } from "@/data/tours";

// Afiş bazlı, yeşil temalı yurt içi turlar: kapak + gezi galerisi
const showcaseTours: Record<
  string,
  { cover: string; galleryTitle: string; gallery: { name: string; photo: string }[] }
> = {
  "karadeniz-yaylalar-turu": {
    cover: "/galeri/karadeniz/hero.jpg",
    galleryTitle: "Gezilecek İller",
    gallery: [
      { name: "Trabzon", photo: "/galeri/karadeniz/trabzon.jpg" },
      { name: "Rize", photo: "/galeri/karadeniz/rize.jpg" },
      { name: "Batum", photo: "/galeri/karadeniz/batum.jpg" },
      { name: "Samsun", photo: "/galeri/karadeniz/samsun.jpg" },
      { name: "Ordu", photo: "/galeri/karadeniz/ordu.jpg" },
      { name: "Giresun", photo: "/galeri/karadeniz/giresun.jpg" },
    ],
  },
  "eskisehir-turu": {
    cover: "/galeri/eskisehir/hero.jpg",
    galleryTitle: "Gezilecek Yerler",
    gallery: [
      { name: "Tarihi Odunpazarı", photo: "/galeri/eskisehir/odunpazari.jpg" },
      { name: "Porsuk Çayı", photo: "/galeri/eskisehir/porsuk.jpg" },
      { name: "Sazova Parkı", photo: "/galeri/eskisehir/sazova.jpg" },
      { name: "Masal Şatosu", photo: "/galeri/eskisehir/satosu.jpg" },
    ],
  },
  "bursa-turu": {
    cover: "/galeri/bursa/hero.jpg",
    galleryTitle: "Gezilecek Yerler",
    gallery: [
      { name: "Cumalıkızık", photo: "/galeri/bursa/cumalikizik.jpg" },
      { name: "Ulu Cami", photo: "/galeri/bursa/ulucami.jpg" },
      { name: "Kozahan", photo: "/galeri/bursa/kozahan.jpg" },
      { name: "Yeşil Türbe", photo: "/galeri/bursa/yesilturbe.jpg" },
      { name: "Kapalıçarşı", photo: "/galeri/bursa/kapalicarsi.jpg" },
      { name: "Tophane Saat Kulesi", photo: "/galeri/bursa/tophane.jpg" },
      { name: "Osmangazi Türbesi", photo: "/galeri/bursa/osmangazi.jpg" },
      { name: "Orhangazi Türbesi", photo: "/galeri/bursa/orhangazi.jpg" },
    ],
  },
  "gap-turu": {
    cover: "/galeri/gap/hero.jpg",
    galleryTitle: "Gezilecek İller",
    gallery: [
      { name: "Şanlıurfa", photo: "/galeri/gap/sanliurfa.jpg" },
      { name: "Gaziantep", photo: "/galeri/gap/gaziantep.jpg" },
      { name: "Adana", photo: "/galeri/gap/adana.jpg" },
      { name: "Mardin", photo: "/galeri/gap/mardin.jpg" },
      { name: "Diyarbakır", photo: "/galeri/gap/diyarbakir.jpg" },
    ],
  },
};
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export function generateStaticParams() {
  return tours
    .filter((t) => t.category === "yurtici")
    .map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const tour = getTour(params.slug);
  if (!tour) return {};
  return buildMetadata({
    title: `${tour.title} | ${tour.price} - ${tour.duration}`,
    description: tour.summary,
    path: `/yurt-ici-turlar/${tour.slug}`,
  });
}

export default function YurtIciTourPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = getTour(params.slug);
  if (!tour || tour.category !== "yurtici") {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.summary,
    brand: { "@type": "Organization", name: site.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      url: `${site.url}/yurt-ici-turlar/${tour.slug}`,
    },
  };

  const showcase = showcaseTours[tour.slug];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageHeader
        eyebrow="Yurt İçi Tur"
        title={tour.title}
        description={tour.summary}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Yurt İçi Turlar", href: "/yurt-ici-turlar" },
          { label: tour.title },
        ]}
        tone={showcase ? "green" : "night"}
        image={showcase?.cover}
      />
      <TourDetail
        tour={tour}
        gallery={showcase?.gallery}
        galleryTitle={showcase?.galleryTitle ?? "Gezilecek Rotalar"}
      />
    </>
  );
}
