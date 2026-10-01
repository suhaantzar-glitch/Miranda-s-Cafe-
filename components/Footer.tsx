import Link from "next/link";
import { business, formatHours, hours } from "@/data/business";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="chalkboard on-dark text-chalk-text !rounded-none !shadow-none">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo tone="light" size="lg" />
          <p className="text-chalk-text/85 mt-4 max-w-sm">
            {business.fullName} — a family-run Vermont-style deli &amp; cafe in Canton, NY. Owned by{" "}
            {business.owners}.
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-4 font-semibold hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
            </svg>
            Follow us on Facebook<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div>
          <h2 className="font-chalk text-maple-light text-3xl">Find us</h2>
          <address className="mt-3 leading-relaxed not-italic">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region} {business.address.postalCode}
          </address>
          <p className="mt-3">
            <a
              href={business.phone.href}
              className="decoration-maple-light font-semibold underline underline-offset-4 hover:text-white"
            >
              {business.phone.display}
            </a>
          </p>
          <ul className="mt-4 space-y-1">
            <li>
              <Link href="/menu" className="underline-offset-4 hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/#about" className="underline-offset-4 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/#visit" className="underline-offset-4 hover:underline">
                Visit
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-chalk text-maple-light text-3xl">Hours</h2>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
            {hours.map((d) => (
              <div key={d.day} className="contents">
                <dt>{d.label}</dt>
                <dd className="tabular-nums">{formatHours(d)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="text-chalk-text/80 mx-auto max-w-6xl px-4 py-5 text-sm sm:px-6">
          © {year} {business.name} · {business.tagline}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
