import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TourVisual from "@/components/TourVisual";
import { tours, umreSchedule } from "@/data/tours";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Umre Turları 2026 | Fiyatları, Otelleri ve Programları",
  description:
    "Akabe Turizm 2026 umre turları: Servisli, Yakın ve 5 yıldızlı otel programları. Razan Al Misk, Ravha Maqam, Le Méridien ve Emaar Royal otellerinde konforlu konaklama, sabah–akşam yemek. Güncel umre fiyatları ve kalkış tarihleri.",
  path: "/umre",
  keywords: [
    "umre",
    "umre turları",
    "umre fiyatları",
    "2026 umre",
    "umre programları",
    "ekonomik umre",
    "lüks umre",
    "5 yıldızlı umre",
  ],
});

const umreTours = tours.filter((t) => t.category === "umre");

export default function UmrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Manevi Yolculuk"
        title="Umre Turları 2026"
        description="Uçak programına göre değişen süre seçenekleriyle hazırlanan umre programlarımız; Mekke ve Medine'de konforlu konaklama ve sabah–akşam yemek hizmetiyle sunulur."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "Umre" }]}
        tone="gold"
        image="/bg-umre.jpg"
      />

      {/* Program kartları */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Umre Programlarımız"
            title="Bütçenize ve konforunuza uygun program"
            description="Ekonomik servisli otelden Harem'e yakın ve 5 yıldızlı seçeneklere kadar; her programda sabah–akşam yemek ve rehberlik dahildir."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {umreTours.map((tour) => (
              <article
                key={tour.slug}
                className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative">
                  <TourVisual image={tour.image} photo={tour.photo} alt={tour.title} className="aspect-[16/10] w-full" />
                  {tour.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-soft">
                      {tour.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-maroon-800">
                    {tour.duration.split("(")[0].trim()}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="heading-serif text-xl text-ink">{tour.title}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-700">{tour.subtitle}</p>

                  {/* Oteller */}
                  <dl className="mt-4 space-y-2 rounded-xl bg-maroon-50/60 p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <dt className="text-ink-soft/70">🕋 Mekke:</dt>
                      <dd className="font-semibold text-maroon-800">{tour.hotelMekke}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="text-ink-soft/70">🕌 Medine:</dt>
                      <dd className="font-semibold text-maroon-800">{tour.hotelMedine}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex items-end justify-between border-t border-ink/5 pt-4">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-widest text-ink-soft/70">
                        Başlangıç
                      </p>
                      <p className="font-serif text-2xl font-bold text-maroon-800">
                        {tour.price}
                      </p>
                      <p className="text-[0.7rem] text-ink-soft/60">{tour.priceNote}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Link href={`/umre/${tour.slug}`} className="btn-ghost flex-1 px-4 py-2 text-xs">
                      Detaylar
                    </Link>
                    <a
                      href={`https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
                        `Merhaba, "${tour.title}" hakkında bilgi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 px-4 py-2 text-xs"
                    >
                      Bilgi Al
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kalkış takvimi */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kalkış Takvimi"
            title="2026 Umre Kalkış Tarihleri ve Fiyatları"
            description="Tüm programlarımıza sabah–akşam yemek ve rehberlik hizmeti dahildir. Fiyatlar kişi başı ve ABD doları ($) cinsindendir."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {umreSchedule.map((row) => {
              const noPrice = row.two === "—";
              const accent = row.program.startsWith("5★")
                ? "from-gold-500 to-gold-700"
                : row.program.startsWith("Yakın")
                ? "from-maroon-900 to-maroon-700"
                : "from-maroon-800 to-maroon-600";
              return (
                <article
                  key={row.no}
                  className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div
                    className={`flex items-start justify-between gap-3 bg-gradient-to-br ${accent} p-5 text-cream`}
                  >
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream/75">
                        Gidiş Tarihi
                      </p>
                      <p className="font-serif text-2xl font-bold leading-tight">
                        {row.date}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {row.duration}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-flex w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-700">
                      {row.program}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Oteller: </span>
                      {row.hotels}
                    </p>

                    {noPrice ? (
                      <div className="mt-4 rounded-xl border border-maroon-200 bg-maroon-50 p-4 text-center">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-ink-soft/70">
                          Kişi Başı Fiyat
                        </p>
                        <p className="mt-1 font-serif text-xl font-bold text-maroon-800">
                          Fiyat için arayın
                        </p>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-soft/70">
                          Kişi Başı Fiyat · Oda Tipine Göre
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {[
                            { l: "2 Kişilik", v: row.two },
                            { l: "3 Kişilik", v: row.three },
                            { l: "4 Kişilik", v: row.four },
                          ].map((p) => (
                            <div
                              key={p.l}
                              className="overflow-hidden rounded-xl border border-gold-200 bg-white shadow-sm"
                            >
                              <p className="bg-maroon-700 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-cream">
                                {p.l}
                              </p>
                              <p className="px-1 py-2.5 font-serif text-lg font-bold text-maroon-800">
                                {p.v}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <a
                      href={`https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
                        `Merhaba, ${row.date} (${row.duration}) ${row.program} umre kalkışı hakkında bilgi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary mt-5 w-full text-xs"
                    >
                      Bu Tarih İçin Bilgi Al
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">
            * “—” ile gösterilen tarihler için fiyat bilgisi almak üzere lütfen
            bizimle iletişime geçin. Tarihler ve fiyatlar uçak programına göre
            değişiklik gösterebilir.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-primary">
              {site.phone}
            </a>
            <a
              href={`https://wa.me/${site.whatsappHref}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp'tan Fiyat Al
            </a>
          </div>
        </div>
      </section>

      {/* SEO içerik */}
      <section className="section bg-cream">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="heading-serif text-2xl text-ink">
              Umre programı seçerken nelere dikkat etmelisiniz?
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                Umre, yılın her döneminde yapılabilen, manevi açıdan çok değerli
                bir ibadettir. Program seçiminde otellerin Harem'e uzaklığı,
                konaklama tipi (servisli, yakın veya 5 yıldızlı), oda kapasitesi
                ve dahil olan hizmetler belirleyici olur.
              </p>
              <p>
                Servisli Otel Programımız en avantajlı fiyatla konforlu bir
                deneyim sunarken; Yakın Otel Programımız Harem'e yürüme
                mesafesini kısaltır. 5 Yıldızlı Otel Programımız ise Le Méridien
                ve Emaar Royal gibi seçkin otellerde premium konfor sağlar.
              </p>
              <p>
                Tüm programlarımıza sabah–akşam yemek, transfer, vize, sigorta ve
                rehberlik dahildir. Size en uygun tarih ve programı belirlemek
                için ücretsiz danışmanlık hattımızdan bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <aside className="card h-fit p-7">
            <h3 className="heading-serif text-lg text-ink">Hızlı Rezervasyon</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Uygun tarih ve program için hemen iletişime geçin.
            </p>
            <div className="mt-5 space-y-3">
              <a href={`tel:${site.phoneHref}`} className="btn-primary w-full">
                {site.phone}
              </a>
              <Link href="/iletisim" className="btn-ghost w-full">
                İletişim Formu
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
