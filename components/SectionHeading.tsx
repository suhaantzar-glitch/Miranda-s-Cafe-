export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const center = align === "center" ? "mx-auto text-center" : "";
  return (
    <div data-reveal className={`max-w-2xl ${center}`}>
      <p className={`eyebrow ${tone === "light" ? "!text-maple-light" : ""}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-2 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl ${tone === "light" ? "text-cream" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${tone === "light" ? "text-cream/85" : "text-ink-soft"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
