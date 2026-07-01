import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TourCard from "@/components/TourCard";
import SectionHeading from "@/components/SectionHeading";
import { tours } from "@/data/tours";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Yurt İçi Turlar | Kapadokya, Karadeniz Kültür ve Doğa Turları",
  description:
    "Akabe Turizm yurt içi turları: Kapadokya kültür turu, Karadeniz yaylalar turu ve daha fazlası. Rehber eşliğinde konforlu ulaşım ve seçkin otellerle Türkiye'yi keşfedin.",
  path: "/yurt-ici-turlar",
  keywords: [
    "yurt içi turlar",
    "kültür turları",
    "Kapadokya turu",
    "Karadeniz turu",
    "doğa turları",
    "hafta sonu turları",
  ],
});

const yurticiTours = tours.filter((t) => t.category === "yurtici");

export default function YurtIciPage() {
  return (
    <>
      <PageHeader
        eyebrow="Keşfet"
        title="Yurt İçi Turlar"
        description="Kapadokya'nın eşsiz coğrafyasından Karadeniz'in yeşil yaylalarına; rehber eşliğinde keyifli kültür ve doğa turları."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "Yurt İçi Turlar" }]}
        tone="night"
      />

      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tur Programları"
            title="Türkiye'nin en güzel rotaları"
            description="Hafta sonu ve resmi tatil kalkışlarıyla, profesyonel rehber eşliğinde unutulmaz geziler."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {yurticiTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="rounded-3xl bg-maroon-800 px-8 py-12 text-center sm:px-16">
            <h2 className="heading-serif text-2xl text-cream sm:text-3xl">
              Grup ve kurumsal turlar için özel programlar
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-cream/80">
              Okul, dernek ve kurumlar için kişiye özel rota ve fiyatlandırma
              hazırlıyoruz. Detaylı bilgi için bizimle iletişime geçin.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={`tel:${site.phoneHref}`} className="btn-gold">
                {site.phone}
              </a>
              <Link href="/iletisim" className="btn-outline">
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
