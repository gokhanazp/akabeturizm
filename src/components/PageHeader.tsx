import Link from "next/link";

type Tone = "maroon" | "gold" | "night";

// Görsel YOKKEN kullanılan dolu degrade
const toneBg: Record<Tone, string> = {
  maroon:
    "radial-gradient(90% 140% at 85% -10%, rgba(201,144,48,0.45) 0%, rgba(201,144,48,0) 45%), linear-gradient(135deg, #8a2526 0%, #581d1e 55%, #300d0d 100%)",
  gold:
    "radial-gradient(80% 130% at 90% -10%, rgba(224,192,104,0.55) 0%, rgba(224,192,104,0) 50%), linear-gradient(135deg, #a5302f 0%, #6e1f20 60%, #3b1410 100%)",
  night:
    "radial-gradient(80% 130% at 80% -10%, rgba(201,144,48,0.35) 0%, rgba(201,144,48,0) 45%), linear-gradient(135deg, #4a0e0e 0%, #300d0d 55%, #160707 100%)",
};

// Görsel VARKEN kullanılan yarı saydam koyu kaplama (görsel silik görünür, yazı okunur)
const toneOverlay: Record<Tone, string> = {
  maroon:
    "radial-gradient(90% 140% at 85% -10%, rgba(201,144,48,0.22) 0%, rgba(201,144,48,0) 50%), linear-gradient(110deg, rgba(58,15,16,0.78) 0%, rgba(48,13,13,0.55) 50%, rgba(30,10,9,0.38) 100%)",
  gold:
    "radial-gradient(80% 130% at 90% -10%, rgba(224,192,104,0.24) 0%, rgba(224,192,104,0) 55%), linear-gradient(110deg, rgba(90,24,24,0.76) 0%, rgba(59,20,16,0.52) 55%, rgba(30,10,9,0.36) 100%)",
  night:
    "radial-gradient(80% 130% at 80% -10%, rgba(201,144,48,0.20) 0%, rgba(201,144,48,0) 50%), linear-gradient(110deg, rgba(40,11,11,0.82) 0%, rgba(22,7,7,0.60) 55%, rgba(12,5,5,0.44) 100%)",
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  tone = "maroon",
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  tone?: Tone;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Arka plan görseli (silik) */}
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
      {/* Renk kaplaması */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: image ? toneOverlay[tone] : toneBg[tone] }}
      />

      {/* arabesk motif */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.10]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 400"
      >
        <defs>
          <pattern id="ph-pat" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 23 L23 0 L46 23 L23 46 Z" fill="none" stroke="#e0c068" strokeWidth="0.8" />
            <circle cx="23" cy="23" r="3" fill="none" stroke="#e0c068" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#ph-pat)" />
      </svg>

      {/* dekoratif hilal */}
      <svg
        className="pointer-events-none absolute -right-10 -top-10 -z-10 h-56 w-56 text-gold-300/15"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M140 20 A80 80 0 1 0 140 180 A62 62 0 1 1 140 20 Z" />
      </svg>

      <div className="container-x relative py-16 lg:py-24">
        {breadcrumb && (
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-cream/70">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-gold-300">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gold-300">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="text-cream/30">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-3 heading-serif text-4xl text-cream drop-shadow-sm sm:text-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/85 drop-shadow-sm">
            {description}
          </p>
        )}
      </div>

      {/* alt altın hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px ornament-divider" />
    </section>
  );
}
