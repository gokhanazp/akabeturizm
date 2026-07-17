"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const slides = [
  {
    key: "umre",
    eyebrow: "Kutsal Topraklara Güvenle Yolculuk",
    title: "Umre Yolculuğunuz",
    accent: "Emin Ellerde",
    text: "Harem'e en yakın oteller, deneyimli rehber kadrosu ve manevi konforla umre organizasyonunuzu kusursuz bir şekilde planlıyoruz.",
    ctaLabel: "Umre Paketlerini İncele",
    ctaHref: "/umre",
    image: "/hero-kabe.jpg",
    badge: "Öne Çıkan · Ramazan Umresi",
  },
  {
    key: "hac",
    eyebrow: "Ömürlük Farz İbadet",
    title: "Hac Yolculuğunuz",
    accent: "Emin Ellerde",
    text: "2026 hac organizasyonu; Arafat, Müzdelife ve Mina konaklamaları, deneyimli din görevlisi ve sağlık ekibi desteğiyle güvenle.",
    ctaLabel: "Hac Programlarını İncele",
    ctaHref: "/hac",
    image: "/hero-hac.jpg",
    badge: "2026 Hac Kayıtları Açık",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Arka plan efektleri */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-gold-300/30 blur-[110px] animate-glow" />
      <div className="pointer-events-none absolute -right-24 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-maroon-300/25 blur-[120px] animate-glow [animation-delay:2s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-gold-200/30 blur-[100px] animate-glow [animation-delay:4s]" />

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

      <svg
        className="pointer-events-none absolute -left-28 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.14] blur-[1px] animate-float-slow"
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
        <path d="M140 16 A84 84 0 1 0 140 184 A64 64 0 1 1 140 16 Z" fill="url(#hero-crescent)" />
      </svg>

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        {/* Sol: metin (slayta göre değişir) */}
        <div key={slide.key} className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-px w-10 bg-gold-400" /> {slide.eyebrow}
          </span>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
            {slide.title}{" "}
            <span className="relative inline-block text-maroon-700">
              {slide.accent}
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-gold-400 to-transparent" />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={slide.ctaHref} className="btn-primary">
              {slide.ctaLabel}
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
        </div>

        {/* Sağ: görsel paneli (slayta göre değişir) */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(201,144,48,0.35),transparent_40%)] blur-2xl animate-spin-slow" />
          <div className="absolute -inset-3 -z-10 rounded-[2.6rem] bg-gradient-to-br from-gold-300/50 via-transparent to-maroon-200/40 blur-md animate-glow" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink shadow-soft ring-1 ring-gold-300/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.key}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 z-10 h-full w-full animate-fade-up object-cover"
            />
            <div
              className="absolute inset-0 z-20"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 45%, transparent 60%, rgba(20,10,10,0.35) 100%)",
              }}
            />
            <div className="absolute inset-3 z-20 rounded-[1.5rem] ring-1 ring-gold-200/30" />
            <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-ink/85 to-transparent" />
            <div className="absolute bottom-5 left-5 z-30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                {slide.badge}
              </p>
            </div>

            {/* slider noktaları */}
            <div className="absolute bottom-5 right-5 z-30 flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}. görsel`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold-400" : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Yüzen onay rozeti */}
          <div className="absolute -right-3 top-8 z-30 hidden animate-float rounded-full bg-gold-500 px-4 py-2 text-xs font-bold text-ink shadow-soft md:block">
            ✓ TÜRSAB Üyesi
          </div>
        </div>
      </div>

      {/* İstatistikler (sabit) */}
      <div className="container-x relative -mt-4 pb-14 lg:pb-20">
        <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
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
    </section>
  );
}
