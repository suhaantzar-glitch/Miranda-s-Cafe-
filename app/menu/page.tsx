import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { menu, specialsNote } from "@/data/menu";
import { BestSellerBadge, GlutenFreeBadge } from "@/components/Badges";
import OpenStatus from "@/components/OpenStatus";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Menu — Sandwiches, Breakfast & Lunch in Canton, NY",
  description: `The menu at ${business.fullName}: made-to-order hot and cold sandwiches, paninis, breakfast, salads, homemade soups and baked goods on Main Street in Canton, NY. Gluten-free bread available.`,
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section
        aria-labelledby="menu-title"
        className="mx-auto max-w-5xl px-4 pt-12 pb-6 sm:px-6 sm:pt-16"
      >
        <p className="reveal-line eyebrow">
          {business.name} · {business.tagline}
        </p>
        <h1
          id="menu-title"
          className="reveal-line text-charcoal mt-2 text-5xl font-semibold tracking-tight sm:text-6xl"
          style={{ ["--i" as string]: 1 }}
        >
          Our Menu
        </h1>
        <p
          className="reveal-line text-ink-soft mt-4 max-w-2xl text-lg leading-relaxed"
          style={{ ["--i" as string]: 2 }}
        >
          Everything made to order with Boar&apos;s Head meats sliced fresh, house-made dressings
          and real Vermont ingredients. {business.hoursSummary}
        </p>
        <div
          className="reveal-line mt-5 flex flex-wrap items-center gap-3"
          style={{ ["--i" as string]: 3 }}
        >
          <OpenStatus />
          <span className="text-ink-soft inline-flex items-center gap-2 text-sm">
            <GlutenFreeBadge /> = available on gluten-free bread
          </span>
        </div>

        <div
          className="reveal-line chalkboard mt-8 rounded-2xl px-6 py-5 sm:px-8"
          style={{ ["--i" as string]: 4 }}
        >
          <p className="font-chalk text-maple-light text-3xl leading-tight">{specialsNote}</p>
          <p className="text-chalk-text/90 mt-1">
            Prices are posted in-store. Questions or call-ahead orders:{" "}
            <a
              href={business.phone.href}
              className="decoration-maple-light font-semibold underline underline-offset-4"
            >
              {business.phone.display}
            </a>
          </p>
        </div>

        <nav aria-label="Menu categories" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {menu.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="bg-paper text-charcoal ring-charcoal/10 hover:bg-kraft inline-flex min-h-11 items-center rounded-full px-4 font-semibold ring-1"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-4 pt-6 pb-24 sm:px-6">
        {menu.map((category) => (
          <section key={category.id} aria-labelledby={category.id} data-reveal>
            <div className="chalkboard rounded-2xl px-6 py-5 sm:px-8">
              <h2
                id={category.id}
                className="font-chalk text-chalk-text text-4xl leading-none font-bold sm:text-5xl"
              >
                {category.name}
              </h2>
              {category.blurb && <p className="text-chalk-text/85 mt-2">{category.blurb}</p>}
            </div>
            <ul className="divide-charcoal/10 ring-charcoal/10 mt-2 divide-y rounded-2xl bg-[#fffdf8] px-6 ring-1 sm:px-8">
              {category.items.map((item) => (
                <li key={item.id} className="py-5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-charcoal font-serif text-xl font-semibold sm:text-2xl">
                      {item.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="border-charcoal/25 mb-1 flex-1 border-b-2 border-dotted"
                    />
                    <p className="text-maple-dark shrink-0 font-serif text-xl font-semibold tabular-nums">
                      {item.price === "$—" ? (
                        <>
                          <span aria-hidden="true">$—</span>
                          <span className="sr-only">Price posted in-store</span>
                        </>
                      ) : (
                        item.price
                      )}
                    </p>
                  </div>
                  <p className="text-ink-soft mt-1.5 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                  {(item.bestSeller || item.glutenFreeAvailable) && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {item.bestSeller && <BestSellerBadge />}
                      {item.glutenFreeAvailable && <GlutenFreeBadge />}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div
          data-reveal
          className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold">Hungry yet?</h2>
            <p className="text-ink-soft mt-1">
              Call ahead and we&apos;ll have it ready when you walk in.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={business.phone.href} className="btn btn-primary">
              Call {business.phone.display}
            </a>
            <Link href="/#visit" className="btn btn-secondary">
              Hours &amp; directions
            </Link>
          </div>
        </div>
      </div>
      <ScrollAnimations />
    </>
  );
}
