"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    let next = track.scrollLeft + dir * step;
    // sona gelince başa, başta geri gidince sona
    if (dir > 0 && next > track.scrollWidth - track.clientWidth - 8) next = 0;
    if (dir < 0 && track.scrollLeft <= 8) next = track.scrollWidth;
    track.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByCard(1), 4500);
    return () => clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <div
      className="relative mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {testimonials.map((t, i) => (
          <figure
            key={i}
            data-card
            className="flex w-[88%] shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink/5 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-sm text-gold-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className={s < t.rating ? "" : "text-gold-200"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="font-serif text-4xl leading-none text-gold-200" aria-hidden="true">
                &rdquo;
              </span>
            </div>

            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              {t.text}
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/5 pt-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 font-serif text-sm font-bold text-gold-300">
                {initials(t.name)}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">
                  {t.location} · <span className="text-maroon-700">{t.program}</span>
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Oklar */}
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Önceki"
        className="absolute -left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-maroon-800 shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-maroon-700 hover:text-cream"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Sonraki"
        className="absolute -right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-maroon-800 shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-maroon-700 hover:text-cream"
      >
        ›
      </button>
    </div>
  );
}
