"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

function Icon({ name }: { name: "instagram" | "facebook" | "youtube" | "whatsapp" | "phone" | "mail" }) {
  const common = "h-4 w-4 fill-current";
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.3.07 1.69.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.3.06-1.69.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.05A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05Zm0 1.8A3.15 3.15 0 1 0 15.15 12 3.15 3.15 0 0 0 12 8.85Zm5.15-3.2a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.04v2.25H7.5V13h2.8v8h3.2Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M23 12s0-3.2-.4-4.7c-.23-.83-.9-1.48-1.74-1.7C19.36 5.2 12 5.2 12 5.2s-7.36 0-8.86.4c-.83.22-1.5.87-1.74 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.23.83.9 1.48 1.74 1.7 1.5.4 8.86.4 8.86.4s7.36 0 8.86-.4c.83-.22 1.5-.87 1.74-1.7.4-1.5.4-4.7.4-4.7Zm-13 3.5v-7l6 3.5-6 3.5Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.5 7H19.5L12 12.2zM4 8.3V17h16V8.3l-8 5.6-8-5.6z" />
        </svg>
      );
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Anasayfa tepedeyken büyük taşan logo; kaydırınca veya iç sayfalarda küçük (bara sığar)
  const compact = scrolled || pathname !== "/";

  const socials = [
    { name: "instagram" as const, href: site.social.instagram, label: "Instagram" },
    { name: "facebook" as const, href: site.social.facebook, label: "Facebook" },
    { name: "youtube" as const, href: site.social.youtube, label: "YouTube" },
    { name: "whatsapp" as const, href: `https://wa.me/${site.whatsappHref}`, label: "WhatsApp" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Üst iletişim + sosyal şerit */}
      <div className="bg-maroon-900 text-cream/85">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Icon name="phone" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:text-gold-300 sm:flex">
              <Icon name="mail" /> {site.email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="mr-1 hidden text-cream/60 sm:inline">Bizi takip edin:</span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-7 w-7 place-items-center rounded-full text-cream/80 transition-colors hover:bg-gold-500 hover:text-ink"
              >
                <Icon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ana bar */}
      <div
        className={`relative transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-cream/85"
            : "bg-cream"
        }`}
      >
        <div className="container-x relative flex h-20 items-center justify-end gap-6 lg:h-24">
          {/* Logo — anasayfa tepede büyük/taşan, aksi halde bara sığan küçük */}
          <Link
            href="/"
            aria-label={site.name}
            className={`absolute left-4 z-20 sm:left-5 lg:left-8 ${
              compact ? "top-1/2 -translate-y-1/2" : "top-1"
            }`}
          >
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={640}
              height={564}
              priority
              className={`w-auto object-contain drop-shadow-sm transition-all duration-300 ${
                compact ? "h-14 sm:h-16" : "h-24 sm:h-28 lg:h-44"
              }`}
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                    active ? "text-maroon-800" : "text-ink-soft hover:text-maroon-700"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-gold-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/iletisim"
              className="hidden rounded-full border border-maroon-700/30 bg-maroon-700 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-cream shadow-soft transition-colors hover:bg-maroon-800 lg:inline-flex"
            >
              Rezervasyon
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-maroon-800 ring-1 ring-maroon-700/20 lg:hidden"
              aria-label="Menüyü aç/kapat"
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`overflow-hidden border-t border-maroon-700/10 bg-cream lg:hidden ${
          open ? "max-h-[30rem]" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-semibold text-ink-soft hover:bg-maroon-50 hover:text-maroon-800"
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.phoneHref}`} className="btn-gold mt-2">
            Hemen Ara: {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
