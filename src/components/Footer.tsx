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
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-gold-500 hover:text-ink">in</a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-gold-500 hover:text-ink">fb</a>
            <a href={site.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-gold-500 hover:text-ink">yt</a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/50 sm:flex-row">
          <p>© {year} {site.legalName}. Tüm hakları saklıdır.</p>
          <p>Manevi yolculuğunuz emin ellerde.</p>
        </div>
      </div>
    </footer>
  );
}
