import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hakkımızda | Akabe Turizm Seyahat Acentası",
  description:
    "Akabe Turizm; 20 yılı aşkın tecrübesiyle hac, umre ve yurt içi turlar düzenleyen, güven ve manevi konfor odaklı kurumsal bir seyahat acentasıdır.",
  path: "/hakkimizda",
});

const values = [
  { title: "Güven", desc: "TÜRSAB üyeliği ve şeffaf hizmet anlayışıyla taahhütlerimizin arkasındayız." },
  { title: "Manevi Konfor", desc: "İbadetinize odaklanabilmeniz için tüm organizasyonu titizlikle yönetiriz." },
  { title: "Tecrübe", desc: "Binlerce misafirimizi ağırladığımız 20 yılı aşkın saha tecrübesi." },
  { title: "Misafir Memnuniyeti", desc: "Yolculuk öncesinden dönüşe kadar kesintisiz destek ve ilgi." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biz Kimiz?"
        title="Hakkımızda"
        description="Kutsal yolculuğunuzu güven, tecrübe ve manevi konforla buluşturuyoruz."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "Hakkımızda" }]}
        tone="night"
        image="/bg-hakkimizda.jpg"
      />

      <section className="section bg-cream">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Hikâyemiz"
              title="Manevi yolculukların güvenilir adresi"
            />
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                Akabe Turizm, hac ve umre organizasyonları başta olmak üzere
                yurt içi kültür turları düzenleyen kurumsal bir seyahat
                acentasıdır. Kuruluşumuzdan bu yana misafirlerimizin manevi
                yolculuklarını en yüksek konfor ve güven standartlarında
                gerçekleştirmeyi ilke edindik.
              </p>
              <p>
                Harem'e en yakın oteller, deneyimli din görevlileri ve
                profesyonel rehber kadromuzla; ibadetinize odaklanmanız için tüm
                lojistik detayları biz üstleniyoruz. Her kafilemizde küçük grup
                anlayışını benimsiyor, her misafirimizle birebir ilgileniyoruz.
              </p>
              <p>
                Bugüne kadar binlerce misafirimizi kutsal topraklarda ağırlamanın
                ve Türkiye'nin dört bir yanını keşfetmelerine eşlik etmenin
                gururunu yaşıyoruz.
              </p>
            </div>
            <p className="mt-6 inline-block rounded-full bg-maroon-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-maroon-800">
              {site.tursabNo}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="heading-serif text-lg text-maroon-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-maroon-800 p-9 text-cream">
            <h3 className="heading-serif text-2xl">Misyonumuz</h3>
            <p className="mt-4 leading-relaxed text-cream/85">
              Misafirlerimizin hac ve umre ibadetlerini huzur, güven ve konfor
              içinde yerine getirmelerini sağlamak; her detayı titizlikle
              planlayarak manevi yolculuklarını kusursuz bir deneyime
              dönüştürmek.
            </p>
          </div>
          <div className="rounded-3xl bg-ink p-9 text-cream">
            <h3 className="heading-serif text-2xl text-gold-300">Vizyonumuz</h3>
            <p className="mt-4 leading-relaxed text-cream/85">
              Türkiye'nin en güvenilir ve tercih edilen hac & umre
              organizasyonu olmak; modern hizmet anlayışını manevi değerlerle
              buluşturarak sektöre öncülük etmek.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-x text-center">
          <SectionHeading
            center
            title="Yolculuğunuza birlikte başlayalım"
            description="Sorularınız ve rezervasyonlarınız için ekibimiz hizmetinizde."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/umre" className="btn-primary">Paketleri İncele</Link>
            <Link href="/iletisim" className="btn-ghost">İletişime Geç</Link>
          </div>
        </div>
      </section>
    </>
  );
}
