import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="eyebrow">Hmm, that&apos;s not on the board</p>
      <h1 className="mt-2 text-5xl font-semibold">Page not found</h1>
      <p className="text-ink-soft mt-4 text-lg">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Back home
        </Link>
        <Link href="/menu" className="btn btn-secondary">
          See the menu
        </Link>
      </div>
    </section>
  );
}
