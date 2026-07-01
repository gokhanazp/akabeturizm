import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim | Akabe Turizm",
  description:
    "Hac, umre ve yurt içi turlar hakkında bilgi almak ve rezervasyon yaptırmak için Akabe Turizm ile iletişime geçin. Telefon, WhatsApp ve e-posta ile ulaşabilirsiniz.",
  path: "/iletisim",
});

const contactItems = [
  { label: "Telefon", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "WhatsApp", value: site.whatsapp, href: `https://wa.me/${site.whatsappHref}` },
  { label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { label: "Adres", value: site.address },
];

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bize Ulaşın"
        title="İletişim"
        description="Sorularınız, paket bilgileri ve rezervasyonlarınız için ekibimiz hizmetinizde."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]}
        image="/bg-iletisim.jpg"
      />

      <section className="section bg-cream">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-serif text-2xl text-ink">İletişim Bilgileri</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Size en uygun tur paketini birlikte belirleyelim. Aşağıdaki
              kanallardan bize ulaşabilir veya formu doldurabilirsiniz.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((c) => (
                <div key={c.label} className="card flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-maroon-50 text-sm font-bold text-maroon-800">
                    {c.label[0]}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-soft/70">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-semibold text-ink hover:text-maroon-700"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
              <div className="grid h-56 place-items-center bg-maroon-50 text-center text-sm text-ink-soft">
                <div>
                  <p className="font-semibold text-maroon-800">Harita Alanı</p>
                  <p className="mt-1 max-w-xs px-6 text-xs">
                    Google Maps yerleştirme kodunuz buraya eklenecek. Adres:{" "}
                    {site.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-serif text-2xl text-ink">Bize Yazın</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Formu doldurun, en kısa sürede size dönelim.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
