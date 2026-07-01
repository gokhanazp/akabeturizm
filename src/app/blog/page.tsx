import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TourVisual from "@/components/TourVisual";
import { posts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog & Rehber | Hac ve Umre Hakkında Bilmeniz Gerekenler",
  description:
    "Umre hazırlık listesi, hac ve umre arasındaki farklar, Ramazan umresi rehberi ve daha fazlası. Akabe Turizm blog yazılarıyla yolculuğunuza hazırlanın.",
  path: "/blog",
  keywords: [
    "umre rehberi",
    "hac rehberi",
    "umre hazırlık listesi",
    "hac ve umre farkı",
    "ramazan umresi",
  ],
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rehber & Blog"
        title="Hac ve Umre Rehberi"
        description="Yolculuğunuza hazırlanırken işinize yarayacak güncel bilgiler, ipuçları ve rehber yazıları."
        breadcrumb={[{ label: "Anasayfa", href: "/" }, { label: "Blog" }]}
        image="/bg-umre.jpg"
      />

      <section className="section bg-cream">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <TourVisual
                image={post.image}
                photo={post.photo}
                alt={post.title}
                className="aspect-[16/10] w-full"
                showLabel={false}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold uppercase tracking-widest text-gold-600">
                    {post.category}
                  </span>
                  <span className="text-ink-soft/60">{formatDate(post.date)}</span>
                </div>
                <h2 className="mt-3 heading-serif text-lg text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-maroon-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-4 text-xs">
                  <span className="text-ink-soft/60">{post.readingTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-maroon-700 link-underline"
                  >
                    Devamını oku →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
