import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TourVisual from "@/components/TourVisual";
import { posts, getPost } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "umre", "hac", "rehber"],
  });
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
        image="/bg-umre.jpg"
      />

      <article className="section bg-cream">
        <div className="container-x max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs text-ink-soft/70">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <TourVisual
            image={post.image}
            photo={post.photo}
            alt={post.title}
            className="mb-10 aspect-[16/8] w-full rounded-2xl"
            showLabel={false}
          />

          <div className="space-y-6">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="heading-serif text-xl text-ink">{block.heading}</h2>
                )}
                <p className={`text-base leading-relaxed text-ink-soft ${block.heading ? "mt-3" : ""}`}>
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-maroon-800 p-8 text-center text-cream">
            <h3 className="heading-serif text-xl">Umre veya hac planlıyor musunuz?</h3>
            <p className="mt-2 text-sm text-cream/80">
              Paketlerimizi inceleyin veya ücretsiz danışmanlık için bize ulaşın.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/umre" className="btn-gold">Paketleri Gör</Link>
              <Link href="/iletisim" className="btn-outline">İletişim</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white pb-20">
        <div className="container-x max-w-3xl">
          <h2 className="heading-serif text-xl text-ink">Diğer Yazılar</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card p-5 transition-transform hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {p.category}
                </span>
                <p className="mt-2 font-serif text-base font-semibold text-ink">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
