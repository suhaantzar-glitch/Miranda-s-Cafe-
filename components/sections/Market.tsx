import Image from "next/image";
import { marketItems } from "@/data/content";

export default function Market() {
  return (
    <section aria-labelledby="market-title" className="bg-paper/70 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr]">
        <div data-reveal>
          <p className="eyebrow">Take a little home</p>
          <h2
            id="market-title"
            className="mt-2 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl"
          >
            The Vermont Market
          </h2>
          <p className="text-ink-soft mt-4 text-lg leading-relaxed">
            Our shelves are stocked with goodies from Vermont and around New England — perfect for
            gifts, care packages or your own pantry.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {marketItems.map((m) => (
              <li
                key={m.name}
                className="bg-cream/80 ring-charcoal/10 flex items-start gap-3 rounded-xl p-4 ring-1"
              >
                <span
                  aria-hidden="true"
                  className="bg-maple mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45"
                />
                <span>
                  <span className="text-charcoal block font-semibold">{m.name}</span>
                  <span className="text-ink-soft block text-sm">{m.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          data-reveal
          className="ring-charcoal/10 relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1"
        >
          {/* TODO: Replace with a real photo of the market shelves. */}
          <Image
            src="/images/market-vermont-goods.svg"
            alt="Illustration of Vermont market goods: maple syrup, a cheddar brick, chips and a cookie"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
