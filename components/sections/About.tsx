import Image from "next/image";
import { business } from "@/data/business";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-forest text-cream on-dark py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div data-reveal className="relative order-last md:order-first">
          <div className="ring-cream/20 relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1">
            {/* TODO: Replace with a real photo of Rob & Miranda or the storefront. */}
            <Image
              src="/images/about-storefront.svg"
              alt="Illustration of the cafe storefront on Main Street in Canton"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="bg-cream font-chalk text-forest-dark absolute right-4 -bottom-5 rotate-2 rounded-lg px-4 py-2 text-xl shadow-lg">
            Est. January 2025
          </p>
        </div>

        <div data-reveal>
          <p className="eyebrow !text-maple-light">Our story</p>
          <h2
            id="about-title"
            className="mt-2 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl"
          >
            A Vermont deli, back home in St. Lawrence County
          </h2>
          <div className="text-cream/90 mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              {business.name} is run by <strong className="text-cream">{business.owners}</strong>.
              Rob grew up in Ogdensburg, then spent 25 years running restaurants and delis across
              Vermont, learning what makes a sandwich worth coming back for.
            </p>
            <p>
              In January 2025 he brought it all home, opening <em>{business.tagline}</em> in the
              former Wimpy&apos;s Inn space at 11 Main Street. Our best-seller,{" "}
              <strong className="text-cream">The Miranda</strong>, is named after his wife — and
              it&apos;s every bit as good as she is.
            </p>
            <p>
              It&apos;s a small, family-run room: bright, clean and cozy. Stop in once and
              there&apos;s a good chance we&apos;ll greet you by name the next time.
            </p>
          </div>
          <p className="font-chalk text-maple-light mt-6 text-3xl">— Rob &amp; Miranda</p>
        </div>
      </div>
    </section>
  );
}
