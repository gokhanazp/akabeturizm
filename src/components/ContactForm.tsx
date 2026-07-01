"use client";

import { useState } from "react";
import { site } from "@/data/site";

const subjects = [
  "Umre Turları",
  "Hac Organizasyonu",
  "Yurt İçi Turlar",
  "Genel Bilgi",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend bağlanana kadar e-posta istemcisini açar.
    const body = `Ad Soyad: ${form.name}%0D%0ATelefon: ${form.phone}%0D%0AE-posta: ${form.email}%0D%0AKonu: ${form.subject}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Web Sitesi İletişim: " + form.subject
    )}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-100 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 heading-serif text-xl text-ink">Teşekkürler!</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Mesajınız hazırlandı. En kısa sürede size dönüş yapacağız. Acil
          durumlar için {site.phone} numaralı telefondan ulaşabilirsiniz.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn-ghost mt-6"
          type="button"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Adınız Soyadınız"
          />
        </Field>
        <Field label="Telefon" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="05XX XXX XX XX"
          />
        </Field>
      </div>
      <Field label="E-posta">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input"
          placeholder="ornek@eposta.com"
        />
      </Field>
      <Field label="Konu">
        <select
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="input"
        >
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="Mesajınız" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input resize-none"
          placeholder="Size nasıl yardımcı olabiliriz?"
        />
      </Field>
      <button type="submit" className="btn-primary w-full">
        Mesajı Gönder
      </button>
      <p className="text-center text-xs text-ink-soft/60">
        Form gönderildiğinde e-posta uygulamanız açılır. WhatsApp'tan da
        yazabilirsiniz.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-maroon-700">*</span>}
      </span>
      {children}
    </label>
  );
}
