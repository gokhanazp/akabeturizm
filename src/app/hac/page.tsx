import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { tours } from "@/data/tours";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hac Turları 2026 Fiyatları ve Programları",
  description:
    "Akabe Turizm 2026 hac turları: normal ve müstakil odalı hac programları. Mekke ve Medine'de konforlu konaklama, sabah–akşam tabldot yemek. VIP ve ekonomik hac paketleri.",
  path: "/hac",
  keywords: [
    "hac",
    "hac turları",
    "2026 hac",
    "hac fiyatları",
    "hac programları",
    "müstakil odalı hac",
    "vip hac",
    "ekonomik hac",
  ],
});

const hacTours = tours.filter((t) => t.category === "hac");

export default function HacPage() {
  return (
    <>
      <PageHeader
        eyebrow="2026 Hac Organizasyonu"
        title="Hac Turları 2026"
        description="Uçak programına göre değişen süre seçenekleriyle hazırlanan hac programlarımız; Mekke ve Medine'de konforlu konaklama ve sabah–akşam tabldot yemek hizmetiyle sunulur."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "Hac" }]}
        image="/bg-hac.jpg"
      />

      {/* Program kartları */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Hac Programlarımız"
            title="Size en uygun programı seçin"
            description="Normal programdan müstakil odalı seçeneklere kadar, beklentinize ve bütçenize uygun hac programları."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {hacTours.map((tour) => (
              <article
                key={tour.slug}
                className="card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                {tour.photo && (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tour.photo}
                      alt={tour.title}
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 to-transparent" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 bg-maroon-800 p-6 text-cream">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                      Hac Programı
                    </p>
                    <h3 className="mt-1 heading-serif text-xl">{tour.title}</h3>
                  </div>
                  {tour.badge && (
                    <span className="shrink-0 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase text-ink">
                      {tour.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <dl className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <dt className="w-28 shrink-0 font-semibold text-maroon-800">Süre</dt>
                      <dd className="text-ink-soft">{tour.duration}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-28 shrink-0 font-semibold text-maroon-800">Mekke</dt>
                      <dd className="text-ink-soft">{tour.mekke}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-28 shrink-0 font-semibold text-maroon-800">Medine</dt>
                      <dd className="text-ink-soft">{tour.medine}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-28 shrink-0 font-semibold text-maroon-800">Yemek</dt>
                      <dd className="text-ink-soft">{tour.meals}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/5 pt-5">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-widest text-ink-soft/70">
                        Fiyat
                      </p>
                      <p className="font-serif text-lg font-bold text-maroon-800">
                        Fiyat için arayın
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/hac/${tour.slug}`} className="btn-ghost px-4 py-2 text-xs">
                        Detaylar
                      </Link>
                      <a
                        href={`https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
                          `Merhaba, "${tour.title}" hakkında fiyat bilgisi almak istiyorum.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary px-4 py-2 text-xs"
                      >
                        Fiyat Al
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Karşılaştırma tablosu */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Karşılaştırma"
            title="2026 Hac Programları Karşılaştırması"
            description="Tüm programlarımıza sabah–akşam tabldot yemek ve rehberlik hizmeti dahildir."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-maroon-800 text-left text-cream">
                  <th className="rounded-tl-xl p-4 font-semibold">Program</th>
                  <th className="p-4 font-semibold">Süre</th>
                  <th className="p-4 font-semibold">Mekke Konaklama</th>
                  <th className="p-4 font-semibold">Medine Konaklama</th>
                  <th className="rounded-tr-xl p-4 font-semibold">Fiyat</th>
                </tr>
              </thead>
              <tbody>
                {hacTours.map((tour, i) => (
                  <tr
                    key={tour.slug}
                    className={i % 2 === 0 ? "bg-cream" : "bg-white"}
                  >
                    <td className="p-4 align-top font-semibold text-maroon-800">
                      <Link href={`/hac/${tour.slug}`} className="hover:underline">
                        {tour.title}
                      </Link>
                    </td>
                    <td className="p-4 align-top text-ink-soft">{tour.duration}</td>
                    <td className="p-4 align-top text-ink-soft">{tour.mekke}</td>
                    <td className="p-4 align-top text-ink-soft">{tour.medine}</td>
                    <td className="p-4 align-top">
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="font-semibold text-maroon-800 hover:underline"
                      >
                        Fiyat için arayın
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">
            * Fiyatlar uçak programı ve döneme göre değişiklik gösterir. Güncel
            2026 hac fiyatları için lütfen bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="rounded-3xl bg-maroon-800 px-8 py-12 text-center sm:px-16">
            <h2 className="heading-serif text-2xl text-cream sm:text-3xl text-balance">
              2026 hac kaydı ve fiyat bilgisi
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-cream/80">
              Programlar, kontenjan ve güncel fiyatlar hakkında detaylı bilgi
              için danışmanlarımız hizmetinizde.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={`tel:${site.phoneHref}`} className="btn-gold">
                {site.phone}
              </a>
              <a
                href={`https://wa.me/${site.whatsappHref}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
