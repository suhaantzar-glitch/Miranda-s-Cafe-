"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { business } from "@/data/business";
import Logo from "./Logo";

const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-charcoal/10 bg-cream/90 supports-[backdrop-filter]:bg-cream/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="rounded-lg py-1" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="text-charcoal hover:bg-charcoal/5 hover:text-maple aria-[current=page]:text-maple rounded-full px-4 py-2 font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phone.href}
            className="btn btn-primary !min-h-11 !px-4 text-sm sm:text-base"
          >
            <PhoneIcon />
            <span>
              Call<span className="hidden sm:inline"> to order</span>
            </span>
          </a>
          <button
            type="button"
            className="text-charcoal hover:bg-charcoal/5 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-charcoal/10 bg-cream border-t md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-charcoal hover:text-maple flex min-h-12 items-center rounded-lg px-2 font-serif text-xl font-semibold"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-maple flex min-h-12 items-center rounded-lg px-2 font-serif text-xl font-semibold"
            >
              Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
      />
    </svg>
  );
}
