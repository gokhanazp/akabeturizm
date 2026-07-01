"use client";

import { useState } from "react";
import { site } from "@/data/site";

const programOptions = [
  "Fark etmez / Önerin",
  "Servisli Otel Programı",
  "Yakın Otel Programı",
  "5 Yıldızlı Otel Programı",
];

export default function UmreFinder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(programOptions[0]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || phone.trim().length < 7) {
      setError("Lütfen ad soyad ve geçerli bir telefon girin.");
      return;
    }
    setError("");
    const message =
      `Merhaba, ben ${name.trim()}.%0A` +
      `Telefon: ${phone.trim()}%0A` +
      `İlgilendiğim program: ${program}%0A%0A` +
      `Bana uygun umre turunu birlikte belirleyebilir miyiz?`;
    window.open(`https://wa.me/${site.whatsappHref}?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 130% at 90% -10%, rgba(201,144,48,0.4) 0%, rgba(201,144,48,0) 50%), linear-gradient(135deg, #8a2526 0%, #581d1e 55%, #300d0d 100%)",
        }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 400"
      >
        <defs>
          <pattern id="uf-pat" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 23 L23 0 L46 23 L23 46 Z" fill="none" stroke="#e0c068" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#uf-pat)" />
      </svg>

      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        {/* Sol metin */}
        <div>
          <span className="eyebrow text-gold-300">
            <span className="h-px w-8 bg-gold-400" /> Ücretsiz Danışmanlık
          </span>
          <h2 className="mt-4 heading-serif text-3xl text-cream sm:text-4xl text-balance">
            Size Uygun Umre Turunu Beraber Bulalım
          </h2>
          <p className="mt-4 max-w-lg text-cream/80">
            Bilgilerinizi bırakın; bütçenize ve beklentinize en uygun umre
            programını birlikte belirleyelim. Formu gönderdiğinizde WhatsApp
            üzerinden hızlıca size dönüş yapalım.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-cream/85">
            {[
              "Ücretsiz ve hızlı bilgilendirme",
              "Bütçenize uygun program önerisi",
              "Uygun tarih ve otel seçenekleri",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-500 text-[0.65rem] font-bold text-ink">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ form */}
        <div className="rounded-3xl bg-white p-7 shadow-soft sm:p-9">
          <h3 className="heading-serif text-xl text-ink">Bilgilerinizi Bırakın</h3>
          <p className="mt-1 text-sm text-ink-soft">
            Ad soyad ve telefonunuzu girin, WhatsApp'tan ulaşalım.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Ad Soyad <span className="text-maroon-700">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Adınız Soyadınız"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Telefon <span className="text-maroon-700">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input"
                placeholder="05XX XXX XX XX"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                İlgilendiğiniz Program
              </label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="input"
              >
                {programOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {error && <p className="text-sm font-medium text-maroon-700">{error}</p>}

            <button type="submit" className="btn-gold w-full">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
              </svg>
              WhatsApp'tan Gönder
            </button>
            <p className="text-center text-xs text-ink-soft/60">
              Gönder'e bastığınızda bilgiler WhatsApp mesajı olarak hazırlanır.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
