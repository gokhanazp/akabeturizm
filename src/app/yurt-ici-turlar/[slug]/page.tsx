import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TourDetail from "@/components/TourDetail";
import { tours, getTour } from "@/data/tours";
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
        tone="night"
      />
      <TourDetail tour={tour} />
    </>
  );
}
