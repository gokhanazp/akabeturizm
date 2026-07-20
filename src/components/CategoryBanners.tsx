import Link from "next/link";

// Banner görsellerini değiştirmek için public/ içindeki ilgili dosyayı
// (banner-hac.jpg, banner-umre.jpg, banner-yurtici.jpg) yenisiyle değiştirin.
const banners = [
  {
    href: "/hac",
    image: "/hac-banner.jpg",
    eyebrow: "Ömürlük Farz İbadet",
    title: "Hac",
    desc: "2026 hac programları, Arafat–Müzdelife–Mina tam organizasyonu.",
    imageHasTitle: false,
  },
  {
    href: "/umre",
    image: "/banner-umre.jpg",
    eyebrow: "Yıl Boyu Manevi Yolculuk",
    title: "Umre",
    desc: "Servisli, yakın ve 5 yıldızlı otel programlarıyla umre.",
    imageHasTitle: false,
  },
  {
    href: "/yurt-ici-turlar",
    image: "/yurtici-turlari.jpg",
    eyebrow: "Kültür & Doğa",
    title: "Yurt İçi Turlar",
    desc: "Karadeniz'den GAP'a rehberli kültür ve doğa turları.",
    imageHasTitle: false,
  },
];

export default function CategoryBanners() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-3">
          {banners.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:ring-gold-300/60"
            >
              {/* görsel */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.image}
                alt={b.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* degrade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              {/* ince altın çerçeve */}
              <div className="absolute inset-3 rounded-[1.4rem] ring-1 ring-cream/15 transition-colors group-hover:ring-gold-300/40" />

              {/* içerik */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                {!b.imageHasTitle && (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                      {b.eyebrow}
                    </span>
                    <h3 className="mt-1 font-serif text-3xl font-bold text-white">
                      {b.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/80">
                      {b.desc}
                    </p>
                  </>
                )}
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-ink transition-all duration-300 group-hover:gap-3">
                  Keşfet <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
