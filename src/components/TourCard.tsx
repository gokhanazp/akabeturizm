import Link from "next/link";
import type { Tour } from "@/data/tours";
import TourVisual from "./TourVisual";

const categoryBase: Record<string, string> = {
  umre: "/umre",
  hac: "/hac",
  yurtici: "/yurt-ici-turlar",
};

export default function TourCard({ tour }: { tour: Tour }) {
  const href = `${categoryBase[tour.category]}/${tour.slug}`;
  return (
    <article className="card group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative">
        <TourVisual image={tour.image} photo={tour.photo} alt={tour.title} className="aspect-[4/3] w-full" />
        {tour.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-soft">
            {tour.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-maroon-800">
          {tour.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="heading-serif text-xl text-ink">
          <Link href={href} className="after:absolute after:inset-0">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-gold-700">{tour.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {tour.summary}
        </p>

        <div className="mt-5 flex items-end justify-between border-t border-ink/5 pt-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-widest text-ink-soft/70">
              Başlangıç
            </p>
            <p className="font-serif text-lg font-bold text-maroon-800">
              {tour.price}
            </p>
          </div>
          <span className="relative z-10 btn-ghost px-4 py-2 text-xs group-hover:bg-maroon-700 group-hover:text-cream">
            Detaylar →
          </span>
        </div>
      </div>
    </article>
  );
}
