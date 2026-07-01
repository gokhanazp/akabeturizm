/**
 * Gerçek fotoğraflar eklenene kadar kullanılan, marka renkleriyle
 * uyumlu dekoratif görsel placeholder'ı. Kendi fotoğraflarınızı
 * eklemek için bu bileşeni <Image> ile değiştirebilirsiniz.
 */
const palettes: Record<string, { from: string; to: string; label: string }> = {
  "umre-lux": { from: "#581d1e", to: "#8a2526", label: "Kâbe-i Muazzama" },
  "umre-eco": { from: "#6e1f20", to: "#a5302f", label: "Mescid-i Haram" },
  "umre-family": { from: "#925a22", to: "#c79030", label: "Aile Umresi" },
  "umre-servisli": { from: "#6e1f20", to: "#a5302f", label: "Servisli Otel" },
  "umre-yakin": { from: "#581d1e", to: "#8a2526", label: "Yakın Otel" },
  "umre-5yildiz": { from: "#925a22", to: "#c79030", label: "5 Yıldız Otel" },
  hac: { from: "#300d0d", to: "#6e1f20", label: "Hac Yolculuğu" },
  kapadokya: { from: "#925a22", to: "#d4a64a", label: "Kapadokya" },
  karadeniz: { from: "#1f3a2e", to: "#3a6b52", label: "Karadeniz" },
  default: { from: "#581d1e", to: "#8a2526", label: "Akabe Turizm" },
};

export default function TourVisual({
  image,
  photo,
  alt = "",
  className = "",
  showLabel = true,
}: {
  image: string;
  photo?: string;
  alt?: string;
  className?: string;
  showLabel?: boolean;
}) {
  // Gerçek fotoğraf verilmişse onu göster
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={alt}
        className={`object-cover ${className}`}
      />
    );
  }
  const p = palettes[image] ?? palettes.default;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${p.from} 0%, ${p.to} 100%)`,
      }}
      aria-hidden="true"
    >
      {/* Dekoratif motif */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`p-${image}`} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#e0c068" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#p-${image})`} />
      </svg>
      {/* Kâbe silüeti */}
      <svg
        viewBox="0 0 120 120"
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-gold-200/80"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M60 12 L98 30 L98 78 L60 96 L22 78 L22 30 Z" opacity="0.25" />
        <path d="M60 20 L90 34 L90 74 L60 88 L30 74 L30 34 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="44" y="46" width="32" height="22" rx="2" />
        <path d="M30 34 L60 48 L90 34" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M60 48 L60 88" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      {showLabel && (
        <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
          {p.label}
        </span>
      )}
    </div>
  );
}
