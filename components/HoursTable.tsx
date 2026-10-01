"use client";

import { useSyncExternalStore } from "react";
import { formatHours, hours } from "@/data/business";
import { todayKey } from "@/lib/hours";

const noop = () => () => {};

/** Hours table; highlights today (client-only, so SSR markup stays neutral). */
export default function HoursTable({ tone = "light" }: { tone?: "light" | "dark" }) {
  const today = useSyncExternalStore(
    noop,
    () => todayKey(),
    () => null,
  );
  const dark = tone === "dark";

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {hours.map((d) => {
          const isToday = d.day === today;
          const closed = !d.open;
          return (
            <tr
              key={d.day}
              aria-current={isToday ? "date" : undefined}
              className={`border-b last:border-0 ${dark ? "border-cream/15" : "border-charcoal/10"} ${
                isToday ? (dark ? "bg-cream/10" : "bg-maple-light/20") : ""
              }`}
            >
              <th scope="row" className="py-2.5 pr-4 pl-2 font-semibold">
                {d.label}
                {isToday && (
                  <span className="ml-2 text-xs font-bold tracking-wide uppercase opacity-80">
                    Today
                  </span>
                )}
              </th>
              <td
                className={`py-2.5 pr-2 text-right tabular-nums ${
                  closed
                    ? dark
                      ? "text-maple-light font-semibold"
                      : "text-maple-dark font-semibold"
                    : ""
                }`}
              >
                {formatHours(d)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
