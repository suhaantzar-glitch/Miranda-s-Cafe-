import { business } from "@/data/business";

/** Text wordmark. TODO: Replace with the real logo file when available. */
export default function Logo({
  tone = "dark",
  size = "md",
}: {
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  const main = tone === "dark" ? "text-charcoal" : "text-cream";
  const sub = tone === "dark" ? "text-maple" : "text-maple-light";
  return (
    <span className="flex items-center gap-2.5">
      <MapleLeaf className={`${size === "lg" ? "h-10 w-10" : "h-8 w-8"} shrink-0 ${sub}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-bold ${size === "lg" ? "text-2xl" : "text-xl"} ${main}`}>
          {business.name}
        </span>
        <span className={`font-chalk ${size === "lg" ? "text-xl" : "text-lg"} ${sub}`}>
          {business.tagline}
        </span>
      </span>
    </span>
  );
}

export function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-50 -55 100 110" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M0-50 8-30 22-36 18-14 34-18 30-6 44 0 22 10 26 26 4 20 2 50-2 50-4 20-26 26-22 10-44 0-30-6-34-18-18-14-22-36-8-30Z"
      />
    </svg>
  );
}
