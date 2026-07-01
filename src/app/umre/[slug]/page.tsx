import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TourDetail from "@/components/TourDetail";
import { tours, getTour } from "@/data/tours";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export function generateStaticParams() {
  return tours
    .filter((t) => t.category === "umre")
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
    path: `/umre/${tour.slug}`,
  });
}

export default function UmreTourPage({ params }: { params: { slug: string } }) {
  const tour = getTour(params.slug);
  if (!tour || tour.category !== "umre") {
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
      url: `${site.url}/umre/${tour.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageHeader
        eyebrow="Umre Paketi"
        title={tour.title}
        description={tour.summary}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Umre", href: "/umre" },
          { label: tour.title },
        ]}
        tone="gold"
        image="/bg-umre.jpg"
      />
      <TourDetail tour={tour} />
    </>
  );
}
