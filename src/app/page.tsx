import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import FeatureIcon, { type FeatureIconName } from "@/components/FeatureIcon";
import Testimonials from "@/components/Testimonials";
import CategoryBanners from "@/components/CategoryBanners";
import UmreFinder from "@/components/UmreFinder";
import { tours } from "@/data/tours";
import { posts } from "@/data/blog";
import { site } from "@/data/site";

const features: { title: string; desc: string; icon: FeatureIconName }[] = [
  {
    title: "Güven ve Tecrübe",
    desc: "20 yılı aşkın tecrübemiz ve TÜRSAB üyeliğimizle yolculuğunuz baştan sona güvende.",
    icon: "shield",
  },
  {
    title: "Harem'e Yakın Oteller",
    desc: "Mekke ve Medine'de Harem'e yürüme mesafesinde, seçkin ve konforlu oteller.",
    icon: "hotel",
  },
  {
    title: "Din Görevlisi Eşliği",
    desc: "Her kafilede deneyimli din görevlisi ve profesyonel rehber sizinle.",
    icon: "guide",
  },
  {
    title: "Şeffaf Fiyat",
    desc: "Sürpriz maliyet yok; tüm hizmetler paketlerde net şekilde belirtilir.",
    icon: "price",
  },
];

// Öne çıkan umre + hac karışımı
const popularTours = [
  ...tours.filter((t) => t.category === "umre").slice(0, 2),
  ...tours.filter((t) => t.category === "hac").slice(0, 1),
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 3'lü kategori banner */}
      <CategoryBanners />

      {/* Neden Akabe Turizm */}
      <section className="section bg-cream">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Neden Akabe Turizm?"
            title="Kutsal yolculuğunuzda yanınızdayız"
            description="İbadetinizi huzurla yerine getirmeniz için tüm detayları biz düşünüyoruz."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
              >
                {/* üst altın aksan */}
                <span className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-gold-400 to-maroon-600 transition-transform duration-300 group-hover:scale-x-100" />
                {/* dev filigran numara */}
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-7xl font-bold text-maroon-50 transition-colors group-hover:text-gold-100">
                  0{i + 1}
                </span>

                {/* büyük ikon */}
                <div className="relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-gold-300 shadow-soft ring-1 ring-gold-300/30">
                  <FeatureIcon name={f.icon} className="h-10 w-10" />
                  <span className="absolute -bottom-1.5 -right-1.5 grid h-7 w-7 place-items-center rounded-full bg-gold-500 text-[0.7rem] font-bold text-ink shadow">
                    ✓
                  </span>
                </div>

                <h3 className="relative mt-6 font-serif text-xl font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popüler turlar */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Hac & Umre Paketleri"
              title="Öne çıkan umre ve hac programları"
              description="Bütçenize ve beklentinize uygun, her detayı düşünülmüş paketler."
            />
            <div className="flex gap-2">
              <Link href="/umre" className="btn-ghost">
                Umre →
              </Link>
              <Link href="/hac" className="btn-ghost">
                Hac →
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {popularTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Size uygun umre turunu bulalım — WhatsApp formu */}
      <UmreFinder />

      {/* Manevi şerit / alıntı */}
      <section className="bg-cream py-20">
        <div className="container-x text-center">
          <span className="mx-auto block font-serif text-6xl leading-none text-gold-400">
            ﴾﴿
          </span>
          <p className="mx-auto mt-4 max-w-3xl font-serif text-2xl leading-relaxed text-maroon-800 sm:text-3xl text-balance">
            “Onları hacca çağır; yürüyerek ve incelmiş binekler üzerinde uzak
            yollardan sana gelsinler.”
          </p>
          <div className="mx-auto mt-6 h-px w-24 ornament-divider" />
          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-gold-600">
            Hac Sûresi, 27
          </p>
        </div>
      </section>

      {/* Yurt içi turlar tanıtım */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Yurt İçi Turlar"
              title="Türkiye'yi keşfetmeye ne dersiniz?"
              description="Kapadokya'nın peri bacalarından Karadeniz'in yeşil yaylalarına; rehber eşliğinde keyifli kültür ve doğa turları."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {[
                "Profesyonel rehber eşliğinde geziler",
                "Konforlu ulaşım ve seçkin oteller",
                "Hafta sonu ve resmi tatil kalkışları",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-100 text-xs text-gold-700">
                    ✓
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/yurt-ici-turlar" className="mt-8 inline-flex btn-primary">
              Yurt İçi Turları Gör
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {tours
              .filter((t) => t.category === "yurtici")
              .map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
          </div>
        </div>
      </section>

      {/* Blog önizleme */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Rehber & Blog"
              title="Hac ve umre rehber yazıları"
              description="Yolculuğunuza hazırlanırken işinize yarayacak güncel bilgiler."
            />
            <Link href="/blog" className="btn-ghost">
              Tüm Yazılar →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col overflow-hidden">
                {post.photo && (
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.photo}
                      alt={post.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {post.category}
                </span>
                <h3 className="mt-3 heading-serif text-lg text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-maroon-700">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-soft/70">
                  <span>{post.readingTime}</span>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-maroon-700 link-underline">
                    Devamını oku →
                  </Link>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri yorumları */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Misafir Yorumları"
            title="Misafirlerimiz ne diyor?"
            description="Binlerce misafirimizin güvenle tamamladığı kutsal yolculuklardan birkaç paylaşım."
          />
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-maroon-800 px-8 py-14 text-center sm:px-16">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(80% 120% at 100% 0%, #c79030 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="heading-serif text-3xl text-cream sm:text-4xl text-balance">
                Yolculuğunuzu birlikte planlayalım
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-cream/80">
                Uygun tarih ve paketi belirlemek için ücretsiz danışmanlık
                hattımız hizmetinizde. Hemen bizimle iletişime geçin.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={`tel:${site.phoneHref}`} className="btn-gold">
                  {site.phone}
                </a>
                <Link href="/iletisim" className="btn-outline">
                  İletişim Formu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
