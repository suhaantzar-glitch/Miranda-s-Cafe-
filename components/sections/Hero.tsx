import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import OpenStatus from "@/components/OpenStatus";
import { MapleLeaf } from "@/components/Logo";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <MapleLeaf className="text-maple/10 pointer-events-none absolute top-24 -left-16 h-56 w-56 -rotate-12" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pt-16 md:pb-24">
        <div>
          <p className="reveal-line eyebrow" style={{ ["--i" as string]: 0 }}>
            {business.name} · {business.tagline}
          </p>
          <h1
            id="hero-title"
            className="text-charcoal mt-3 text-[2.6rem] leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="reveal-line" style={{ ["--i" as string]: 1 }}>
              Real Vermont
            </span>
            <span className="reveal-line" style={{ ["--i" as string]: 2 }}>
              sandwiches, <em className="text-maple font-medium not-italic sm:italic">right</em>
            </span>
            <span className="reveal-line" style={{ ["--i" as string]: 3 }}>
              here in Canton.
            </span>
          </h1>
          <p
            className="reveal-line text-ink-soft mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={{ ["--i" as string]: 4 }}
          >
            Made-to-order deli sandwiches with Boar&apos;s Head meats, Vermont cheddar and real
            maple, on Main Street.{" "}
            <strong className="text-charcoal font-semibold">{business.hoursSummary}</strong>
          </p>

          <div
            className="reveal-line mt-6 flex flex-wrap items-center gap-3"
            style={{ ["--i" as string]: 5 }}
          >
            <OpenStatus />
            <span className="bg-maple-light/25 text-maple-dark inline-flex min-h-8 items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold">
              <span aria-hidden="true">★</span> {business.googleRating} on Google
            </span>
          </div>

          <div
            className="reveal-line mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ ["--i" as string]: 6 }}
          >
            <Link href="/menu" className="btn btn-primary text-lg">
              See the menu
            </Link>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg"
            >
              Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="ring-charcoal/10 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgb(42_38_35/0.55)] ring-1">
            <div data-parallax="12" className="absolute inset-x-0 -inset-y-[8%]">
              {/* TODO: Replace with a real photo of The Miranda (keep the filename stem). */}
              <Image
                src="/images/hero-vermont-sandwich.svg"
                alt="Illustration of a stacked deli sandwich on grilled rye with a maple leaf"
                fill
                preload
                fetchPriority="high"
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="chalkboard absolute -bottom-6 left-4 rotate-[-3deg] rounded-xl px-5 py-3 sm:-left-6">
            <p className="font-chalk text-2xl leading-tight">
              Try <span className="text-maple-light">The Miranda</span>
              <br />
              <span className="text-chalk-text/85 text-lg">our best-seller!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
