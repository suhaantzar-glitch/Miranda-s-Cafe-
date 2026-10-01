"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scrolling synced with GSAP ScrollTrigger.
 * Libraries are loaded lazily so they stay off the critical path, and the
 * whole thing is skipped when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    Promise.all([import("lenis"), import("@/lib/gsap")]).then(
      ([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
        if (cancelled) return;
        const lenis = new Lenis({
          duration: 1.1,
          // Anchor offsets come from the CSS scroll-margin-top on [id].
          anchors: true,
        });
        lenis.on("scroll", ScrollTrigger.update);

        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        cleanup = () => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
