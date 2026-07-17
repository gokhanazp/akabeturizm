"use client";

import { useCallback, useRef } from "react";
import type { Tour } from "@/data/tours";
import TourCard from "./TourCard";

export default function TourSlider({ tours }: { tours: Tour[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    let next = track.scrollLeft + dir * step;
    if (dir > 0 && next > track.scrollWidth - track.clientWidth - 8) next = 0;
    if (dir < 0 && track.scrollLeft <= 8) next = track.scrollWidth;
    track.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        className="no-scrollbar flex touch-pan-x snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain pb-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {tours.map((tour) => (
          <div
            key={tour.slug}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TourCard tour={tour} />
          </div>
        ))}
      </div>

      {/* Oklar */}
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Önceki"
        className="absolute -left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-maroon-800 shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-maroon-700 hover:text-cream lg:-left-5"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Sonraki"
        className="absolute -right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-maroon-800 shadow-soft ring-1 ring-ink/10 transition-colors hover:bg-maroon-700 hover:text-cream lg:-right-5"
      >
        ›
      </button>
    </div>
  );
}
