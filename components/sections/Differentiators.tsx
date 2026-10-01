import { differentiators, type IconName } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

const paths: Record<IconName, string> = {
  leaf: "M12 2l1.6 3.8 2.8-1.2-.8 4.3 3.2-.8-.8 2.4L21 12l-4.4 2 .8 3.2-4.4-1.2L12 22l-1-6-4.4 1.2.8-3.2L3 12l3-1.5-.8-2.4 3.2.8-.8-4.3 2.8 1.2z",
  jar: "M8 3h8v3H8zM7 6h10a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm2 6v5h6v-5z",
  slicer: "M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7zm0 4a5 5 0 1 0 5 5h-5z",
  wheat:
    "M12 2c1.5 1.5 1.5 3.5 0 5-1.5-1.5-1.5-3.5 0-5zm-4 5c2 0 3.5 1.2 4 3-2 0-3.5-1.2-4-3zm8 0c-.5 1.8-2 3-4 3 .5-1.8 2-3 4-3zM8 11c2 0 3.5 1.2 4 3-2 0-3.5-1.2-4-3zm8 0c-.5 1.8-2 3-4 3 .5-1.8 2-3 4-3zm-4 3h0M11 14h2v8h-2z",
  pot: "M4 10h16v2a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7zm-2 0h2m16 0h2M9 3c-1 1.5 1 2.5 0 4m3-4c-1 1.5 1 2.5 0 4m3-4c-1 1.5 1 2.5 0 4",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l3.6 2.1-1 1.7L11 13.6V7z",
};

function Icon({ name }: { name: IconName }) {
  const stroked = name === "pot";
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" focusable="false">
      <path
        d={paths[name]}
        fill={stroked ? "none" : "currentColor"}
        stroke={stroked ? "currentColor" : "none"}
        strokeWidth={stroked ? 2 : 0}
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function Differentiators() {
  return (
    <section aria-labelledby="different-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="different-title"
          eyebrow="Not another pizza place"
          title="What makes us different"
          intro="Canton has plenty of pizza. We wanted to bring home the kind of real-deal deli we ran in Vermont for 25 years."
          align="center"
        />
        <ul data-reveal-stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <li key={d.title} className="card p-6">
              <span className="bg-forest text-cream inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <Icon name={d.icon} />
              </span>
              <h3 className="text-charcoal mt-4 text-xl font-semibold">{d.title}</h3>
              <p className="text-ink-soft mt-2 leading-relaxed">{d.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
