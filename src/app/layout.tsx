import type { Metadata } from "next";
// Self-host edilen fontlar (Google Fonts'a bağımlılık yok)
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-ext-400.css";
import "@fontsource/playfair-display/latin-ext-600.css";
import "@fontsource/playfair-display/latin-ext-700.css";
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-ext-400.css";
import "@fontsource/plus-jakarta-sans/latin-ext-500.css";
import "@fontsource/plus-jakarta-sans/latin-ext-600.css";
import "@fontsource/plus-jakarta-sans/latin-ext-700.css";
import "./globals.css";
import { site } from "@/data/site";
import { organizationJsonLd } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Hac, Umre ve Yurt İçi Turlar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Hac, Umre ve Yurt İçi Turlar`,
    description: site.description,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Hac, Umre ve Yurt İçi Turlar`,
    description: site.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
