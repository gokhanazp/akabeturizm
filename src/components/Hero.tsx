import Link from "next/link";
import { site } from "@/data/site";

// Hero görseli (gerçek Kâbe fotoğrafı). Değiştirmek için public/ içindeki
// "hero-kabe.jpg" dosyasını yenisiyle değiştirmeniz yeterli.
const HERO_PHOTO = "/hero-kabe.jpg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
      {/* ——— Arka plan efektleri ——— */}
      {/* Yumuşak ışık küreleri */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-gold-300/30 blur-[110px] animate-glow" />
      <div className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-maroon-300/25 blur-[120px] animate-glow [animation-delay:2s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-gold-200/30 blur-[100px] animate-glow [animation-delay:4s]" />

      {/* İnce arabesk motif */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.05]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 600"
      >
        <defs>
          <pattern id="hero-pat" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 24 L24 0 L48 24 L24 48 Z" fill="none" stroke="#c79030" strokeWidth="0.8" />
            <circle cx="24" cy="24" r="3" fill="none" stroke="#8a2526" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#hero-pat)" />
      </svg>

      {/* İnce çizgi dokusu */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.10]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="hero-lines" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#8a2526" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-lines)" />
      </svg>

      {/* Yumuşak akışkan altın çizgiler */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.22]"
        aria-hidden="true"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
        stroke="#c79030"
        strokeWidth="1.5"
      >
        <path d="M-50 440 C 320 330, 640 520, 1260 320" />
        <path d="M-50 480 C 320 370, 640 560, 1260 360" />
        <path d="M-50 520 C 320 410, 640 600, 1260 400" />
        <path d="M-50 560 C 320 450, 640 640, 1260 440" />
      </svg>

      {/* Dekoratif büyük hilal (silik ama belirgin) */}
      <svg
        className="pointer-events-none absolute -left-28 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.16] blur-[1px] animate-float-slow"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-crescent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0c068" />
            <stop offset="60%" stopColor="#c79030" />
            <stop offset="100%" stopColor="#8a2526" />
          </linearGradient>
        </defs>
        <path
          d="M140 16 A84 84 0 1 0 140 184 A64 64 0 1 1 140 16 Z"
          fill="url(#hero-crescent)"
        />
      </svg>
      {/* İkinci, daha küçük hilal aksanı (sağ üst) */}
      <svg
        className="pointer-events-none absolute right-[42%] top-6 -z-10 h-40 w-40 text-gold-400/20 blur-[0.5px] animate-float"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M132 28 A72 72 0 1 0 132 172 A56 56 0 1 1 132 28 Z" />
      </svg>
      {/* Dekoratif yıldız */}
      <svg
        className="pointer-events-none absolute right-10 top-16 -z-10 h-10 w-10 text-gold-400/40 animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
      </svg>

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        {/* Sol: metin */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-px w-10 bg-gold-400" /> {site.slogan}
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
            Hac ve Umre <br />
            Yolculuğunuz{" "}
            <span className="relative inline-block text-maroon-700">
              Emin Ellerde
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-gold-400 to-transparent" />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Manevi konfor, deneyimli rehber kadrosu ve Harem'e en yakın
            otellerle hac, umre ve yurt içi kültür turlarınızı kusursuz bir
            organizasyonla planlıyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/umre" className="btn-primary">
              Umre Paketlerini İncele
            </Link>
            <a
              href={`https://wa.me/${site.whatsappHref}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Ücretsiz Danışmanlık
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              { n: "20+", l: "Yıllık Tecrübe" },
              { n: "50.000+", l: "Mutlu Misafir" },
              { n: "5★", l: "Otel Konaklama" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-bold text-maroon-700">{s.n}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Sağ: görsel paneli */}
        <div className="relative animate-fade-up">
          {/* dönen ışıltı halkası */}
          <div className="absolute -inset-6 -z-10 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(201,144,48,0.35),transparent_40%)] blur-2xl animate-spin-slow" />
          {/* yumuşak altın hâle */}
          <div className="absolute -inset-3 -z-10 rounded-[2.6rem] bg-gradient-to-br from-gold-300/50 via-transparent to-maroon-200/40 blur-md animate-glow" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink shadow-soft ring-1 ring-gold-300/50">
            {/* Kâbe fotoğrafı — paneli tamamen kaplar */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTO}
              alt="Mescid-i Haram ve Kâbe"
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
            {/* yumuşak vignette */}
            <div
              className="absolute inset-0 z-20"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 45%, transparent 60%, rgba(20,10,10,0.35) 100%)",
              }}
            />
            {/* parıltı (shimmer) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            {/* ince altın iç çerçeve */}
            <div className="absolute inset-3 z-20 rounded-[1.5rem] ring-1 ring-gold-200/30" />
            {/* alt degrade + rozet */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-ink/85 to-transparent" />
            <div className="absolute bottom-5 left-5 z-30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Öne Çıkan
              </p>
              <p className="mt-0.5 font-serif text-xl text-white">
                Ramazan Umresi 2026
              </p>
            </div>
          </div>

          {/* Yüzen bilgi kartı (derinlik için) */}
          <div className="absolute -bottom-5 -left-5 z-30 hidden animate-float rounded-2xl bg-white/95 p-4 shadow-soft ring-1 ring-gold-200/60 backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-maroon-50 text-xl">
                🕋
              </span>
              <div>
                <p className="font-serif text-base font-bold text-maroon-800">
                  Harem'e Yakın
                </p>
                <p className="text-xs text-ink-soft">Seçkin oteller</p>
              </div>
            </div>
          </div>

          {/* Yüzen onay rozeti */}
          <div className="absolute -right-3 top-8 z-30 hidden animate-float rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-ink shadow-soft [animation-delay:1.5s] md:block">
            ✓ TÜRSAB Üyesi
          </div>
        </div>
      </div>
    </section>
  );
}
