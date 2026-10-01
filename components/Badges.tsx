export function GlutenFreeBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold tracking-wide uppercase ${
        tone === "dark" ? "text-forest-dark bg-[#cfe8d2]" : "bg-forest/10 text-forest-dark"
      }`}
      title="Available on gluten-free bread"
    >
      GF<span className="sr-only">: gluten-free bread available</span>
      <span
        aria-hidden="true"
        className="ml-1 hidden font-semibold tracking-normal normal-case sm:inline"
      >
        option
      </span>
    </span>
  );
}

export function BestSellerBadge() {
  return (
    <span className="bg-maple inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wide text-white uppercase">
      <span aria-hidden="true">★</span> Best-seller
    </span>
  );
}
