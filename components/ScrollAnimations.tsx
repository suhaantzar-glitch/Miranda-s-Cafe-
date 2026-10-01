"use client";

import { useEffect } from "react";

/**
 * Scroll-driven motion for the page it's mounted on:
 *  - [data-reveal]         fade + slide up as it enters the viewport
 *  - [data-reveal-stagger] same, staggered across direct children
 *  - [data-parallax]       gentle vertical drift (value = strength in %)
 * Disabled under prefers-reduced-motion via gsap.matchMedia. GSAP is loaded
 * lazily so it never blocks first paint.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let revert: (() => void) | undefined;
    let cancelled = false;

    import("@/lib/gsap").then(({ gsap }) => {
      if (cancelled) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 32,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
          gsap.from(group.children, {
            autoAlpha: 0,
            y: 28,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const strength = Number(el.dataset.parallax) || 10;
          gsap.fromTo(
            el,
            { yPercent: -strength / 2 },
            {
              yPercent: strength / 2,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      revert = () => mm.revert();
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return null;
}
