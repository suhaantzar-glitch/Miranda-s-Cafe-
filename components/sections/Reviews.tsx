import { ratingSummary, reviews } from "@/data/reviews";
import SectionHeading from "@/components/SectionHeading";

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            id="reviews-title"
            eyebrow="Kind words"
            title="What our neighbors say"
            align="center"
          />
          <p
            data-reveal
            className="bg-charcoal text-cream inline-flex items-center gap-3 rounded-full px-5 py-2.5"
          >
            <span className="text-2xl font-bold">{ratingSummary.score}</span>
            <span aria-hidden="true" className="text-maple-light tracking-widest">
              ★★★★★
            </span>
            <span className="font-semibold">on {ratingSummary.source}</span>
          </p>
        </div>

        <ul data-reveal-stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.id}>
              <figure className="card relative flex h-full flex-col p-7">
                <span
                  aria-hidden="true"
                  className="text-maple/30 absolute -top-4 left-6 font-serif text-7xl leading-none"
                >
                  “
                </span>
                <p className="text-forest text-sm font-bold tracking-wider uppercase">{r.theme}</p>
                <blockquote className="text-charcoal mt-3 flex-1 font-serif text-xl leading-snug">
                  <p>{r.quote}</p>
                </blockquote>
                <figcaption className="text-ink-soft mt-5 text-sm font-semibold">
                  — {r.author}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
