import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TourDetail from "@/components/TourDetail";
import { tours, getTour } from "@/data/tours";

// Karadeniz turu için il fotoğrafları galerisi
const karadenizGallery = [
  { name: "Trabzon", photo: "/galeri/karadeniz/trabzon.jpg" },
  { name: "Rize", photo: "/galeri/karadeniz/rize.jpg" },
  { name: "Batum", photo: "/galeri/karadeniz/batum.jpg" },
  { name: "Samsun", photo: "/galeri/karadeniz/samsun.jpg" },
  { name: "Ordu", photo: "/galeri/karadeniz/ordu.jpg" },
  { name: "Giresun", photo: "/galeri/karadeniz/giresun.jpg" },
];
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

  const isKaradeniz = tour.slug === "karadeniz-yaylalar-turu";

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
        tone={isKaradeniz ? "green" : "night"}
        image={isKaradeniz ? "/galeri/karadeniz/hero.jpg" : undefined}
      />
      <TourDetail
        tour={tour}
        gallery={isKaradeniz ? karadenizGallery : undefined}
        galleryTitle="Gezilecek İller"
      />
    </>
  );
}
