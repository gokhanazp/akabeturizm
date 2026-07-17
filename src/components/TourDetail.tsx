import Link from "next/link";
import type { Tour } from "@/data/tours";
import TourVisual from "./TourVisual";
import { site } from "@/data/site";

export default function TourDetail({
  tour,
  gallery,
  galleryTitle = "Gezilecek Rotalar",
}: {
  tour: Tour;
  gallery?: { name: string; photo: string }[];
  galleryTitle?: string;
}) {
  return (
    <section className="section bg-cream">
      <div className="container-x grid gap-10 lg:grid-cols-3">
        {/* Ana içerik */}
        <div className="lg:col-span-2">
          <TourVisual
            image={tour.image}
            photo={tour.photo}
            alt={tour.title}
            className="aspect-[16/9] w-full rounded-2xl"
          />

          {/* İller / rotalar galerisi */}
          {gallery && gallery.length > 0 && (
            <div className="mt-8">
              <h2 className="heading-serif text-2xl text-ink">{galleryTitle}</h2>
              <div
                className={`mt-5 grid grid-cols-2 gap-3 ${
                  gallery.length === 6
                    ? "sm:grid-cols-3 lg:grid-cols-6"
                    : gallery.length === 5
                    ? "sm:grid-cols-3 lg:grid-cols-5"
                    : "sm:grid-cols-4"
                }`}
              >
                {gallery.map((g) => (
                  <div
                    key={g.name}
                    className="group relative overflow-hidden rounded-lg shadow-card ring-1 ring-ink/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.photo}
                      alt={g.name}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                    <span className="absolute inset-x-0 bottom-1.5 text-center font-serif text-xs font-bold text-white">
                      {g.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <span className="eyebrow">{tour.subtitle}</span>
            <h2 className="mt-2 heading-serif text-2xl text-ink">
              Program Hakkında
            </h2>
            {tour.description.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          {/* Otel bilgileri (umre programları) */}
          {(tour.hotelMekke || tour.hotelMedine) && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {tour.hotelMekke && (
                <div className="card flex items-center gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-maroon-50 text-xl">🕋</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Mekke Oteli</p>
                    <p className="mt-1 font-serif text-lg text-ink">{tour.hotelMekke}</p>
                  </div>
                </div>
              )}
              {tour.hotelMedine && (
                <div className="card flex items-center gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-100 text-xl">🕌</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Medine Oteli</p>
                    <p className="mt-1 font-serif text-lg text-ink">{tour.hotelMedine}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Oda bazlı fiyatlar (umre) */}
          {tour.roomPrices && (
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-ink/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-maroon-800 text-cream">
                    <th className="p-3 text-left font-semibold">2'li Oda</th>
                    <th className="p-3 text-left font-semibold">3'lü Oda</th>
                    <th className="p-3 text-left font-semibold">4'lü Oda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-cream">
                    <td className="p-3 font-serif font-bold text-maroon-800">{tour.roomPrices.two ?? "—"}</td>
                    <td className="p-3 font-serif font-bold text-maroon-800">{tour.roomPrices.three ?? "—"}</td>
                    <td className="p-3 font-serif font-bold text-maroon-800">{tour.roomPrices.four ?? "—"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Konaklama detayları (hac programları) */}
          {(tour.mekke || tour.medine || tour.meals) && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {tour.mekke && (
                <div className="card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Mekke Konaklama
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tour.mekke}</p>
                </div>
              )}
              {tour.medine && (
                <div className="card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Medine Konaklama
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tour.medine}</p>
                </div>
              )}
              {tour.meals && (
                <div className="card p-6 sm:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Yemek
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tour.meals}</p>
                </div>
              )}
            </div>
          )}

          {/* Öne çıkanlar */}
          <div className="mt-10">
            <h3 className="heading-serif text-xl text-ink">Öne Çıkan Özellikler</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500 text-[0.65rem] font-bold text-ink">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Program akışı */}
          <div className="mt-10">
            <h3 className="heading-serif text-xl text-ink">Örnek Program Akışı</h3>
            <ol className="mt-5 space-y-4 border-l-2 border-maroon-700/20 pl-6">
              {tour.itinerary.map((step) => (
                <li key={step.day} className="relative">
                  <span className="absolute -left-[1.92rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-maroon-700 ring-4 ring-cream" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    {step.day}
                  </p>
                  <p className="font-serif text-base font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Dahil / hariç */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="heading-serif text-lg text-maroon-800">
                Fiyata Dahil
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {tour.included.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold-600">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="heading-serif text-lg text-ink">Fiyata Dahil Değil</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {tour.excluded.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-ink-soft/50">✕</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Yan panel */}
        <aside className="lg:col-span-1">
          <div className="card sticky top-24 p-7">
            <p className="text-xs uppercase tracking-widest text-ink-soft/70">
              Kişi başı başlangıç
            </p>
            <p className="mt-1 font-serif text-3xl font-bold text-maroon-800">
              {tour.price}
            </p>
            {tour.priceNote && (
              <p className="mt-1 text-xs text-ink-soft/70">{tour.priceNote}</p>
            )}

            <dl className="mt-6 space-y-3 border-t border-ink/5 pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-soft/70">Süre</dt>
                <dd className="text-right font-semibold text-ink">{tour.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-soft/70">Konaklama</dt>
                <dd className="text-right font-semibold text-ink">{tour.hotelLevel}</dd>
              </div>
              <div>
                <dt className="text-ink-soft/70">Hareket Tarihleri</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {tour.dates.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-maroon-50 px-3 py-1 text-xs font-semibold text-maroon-800"
                    >
                      {d}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-6 space-y-3">
              <a
                href={`https://wa.me/${site.whatsappHref}?text=${encodeURIComponent(
                  `Merhaba, "${tour.title}" paketi hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                WhatsApp ile Sor
              </a>
              <a href={`tel:${site.phoneHref}`} className="btn-gold w-full">
                {site.phone}
              </a>
              <Link href="/iletisim" className="btn-ghost w-full">
                İletişim Formu
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
