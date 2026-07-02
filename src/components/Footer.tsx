import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={140}
              height={120}
              className="h-16 w-auto rounded-xl object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-cream/70">
            {site.description}
          </p>
          <p className="text-xs uppercase tracking-widest text-gold-300">
            {site.tursabNo}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-cream">
            Hızlı Erişim
          </h3>
          <ul className="space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-cream/70 hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-cream">
            Turlarımız
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/umre" className="text-cream/70 hover:text-gold-300">Umre Turları</Link></li>
            <li><Link href="/hac" className="text-cream/70 hover:text-gold-300">Hac Organizasyonu</Link></li>
            <li><Link href="/umre" className="text-cream/70 hover:text-gold-300">Ramazan Umresi</Link></li>
            <li><Link href="/yurt-ici-turlar" className="text-cream/70 hover:text-gold-300">Yurt İçi Kültür Turları</Link></li>
            <li><Link href="/blog" className="text-cream/70 hover:text-gold-300">Rehber Yazıları</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-cream">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/90 transition-colors hover:bg-gold-500 hover:text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.3.07 1.69.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.3.06-1.69.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.05A4.95 4.95 0 1 1 7.05 12 4.95 4.95 0 0 1 12 7.05Zm0 1.8A3.15 3.15 0 1 0 15.15 12 3.15 3.15 0 0 0 12 8.85Zm5.15-3.2a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" /></svg>
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/90 transition-colors hover:bg-gold-500 hover:text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.04v2.25H7.5V13h2.8v8h3.2Z" /></svg>
            </a>
            <a href={site.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/90 transition-colors hover:bg-gold-500 hover:text-ink">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M23 12s0-3.2-.4-4.7c-.23-.83-.9-1.48-1.74-1.7C19.36 5.2 12 5.2 12 5.2s-7.36 0-8.86.4c-.83.22-1.5.87-1.74 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.23.83.9 1.48 1.74 1.7 1.5.4 8.86.4 8.86.4s7.36 0 8.86-.4c.83-.22 1.5-.87 1.74-1.7.4-1.5.4-4.7.4-4.7Zm-13 3.5v-7l6 3.5-6 3.5Z" /></svg>
            </a>
            <a href={`https://wa.me/${site.whatsappHref}`} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/90 transition-colors hover:bg-[#25D366] hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/50 sm:flex-row">
          <p>© {year} {site.legalName}. Tüm hakları saklıdır.</p>
          <p>
            <a
              href="https://gokhan-yildirim.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold-300 hover:text-gold-200"
            >
              Web Tasarım
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
