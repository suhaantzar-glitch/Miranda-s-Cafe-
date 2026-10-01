"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/lib/hours";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.clearInterval(id);
    document.removeEventListener("visibilitychange", onChange);
  };
}

// Snapshots are strings so React can compare them by value between renders.
const getSnapshot = () => {
  const s = getOpenStatus();
  return `${s.isOpen ? "open" : "closed"}|${s.detail}`;
};
const getServerSnapshot = () => null;

/**
 * Live "Open now / Closed now" pill, computed in America/New_York time.
 * Renders a neutral placeholder on the server and first client paint so
 * the markup always matches during hydration.
 */
export default function OpenStatus({ tone = "light" }: { tone?: "light" | "dark" }) {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold min-h-8";
  const neutral = tone === "dark" ? "bg-white/10 text-chalk-text" : "bg-charcoal/5 text-ink-soft";

  if (snap === null) {
    return (
      <span className={`${base} ${neutral}`} aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-40" />
        Checking hours…
      </span>
    );
  }

  const [state, detail] = snap.split("|");
  const isOpen = state === "open";
  const colors = isOpen
    ? tone === "dark"
      ? "bg-[#cfe8d2] text-forest-dark"
      : "bg-forest/10 text-forest-dark"
    : tone === "dark"
      ? "bg-[#f6d9c4] text-maple-dark"
      : "bg-maple/10 text-maple-dark";

  return (
    <span className={`${base} ${colors}`} role="status">
      <span
        className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-forest motion-safe:animate-pulse" : "bg-maple"}`}
        aria-hidden="true"
      />
      {isOpen ? "Open now" : "Closed now"}
      {detail && <span className="font-normal">· {detail}</span>}
    </span>
  );
}
