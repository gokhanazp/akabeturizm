import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-cream px-6 py-20 text-center">
      <div>
        <p className="font-serif text-7xl font-bold text-maroon-800">404</p>
        <h1 className="mt-4 heading-serif text-2xl text-ink">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
          Sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan
          devam edebilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Anasayfa</Link>
          <Link href="/umre" className="btn-ghost">Umre</Link>
        </div>
      </div>
    </section>
  );
}
