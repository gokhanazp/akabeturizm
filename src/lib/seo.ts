import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildMetadata({ title, description, path, keywords }: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords: keywords ?? site.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
      images: [{ url: "/logo.png", width: 512, height: 512, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

/** Organizasyon (TravelAgency) JSON-LD */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "TR",
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
    areaServed: "TR",
    knowsAbout: ["Hac", "Umre", "Yurt İçi Turlar", "Kültür Turları"],
  };
}
