/**
 * Single source of truth for business details.
 * Everything on the site (header, footer, Visit section, JSON-LD, open-now
 * indicator) reads from here — edit once, updates everywhere.
 */

export type DayKey = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface DayHours {
  day: DayKey;
  /** Full day name, used for display and schema.org. */
  label: string;
  /** 24h "HH:MM" strings in America/New_York, or null when closed. */
  open: string | null;
  close: string | null;
}

// TODO: Confirm hours with Rob & Miranda (seasonal / holiday changes?).
export const hours: DayHours[] = [
  { day: "Mon", label: "Monday", open: "08:00", close: "15:00" },
  { day: "Tue", label: "Tuesday", open: "08:00", close: "15:00" },
  { day: "Wed", label: "Wednesday", open: null, close: null },
  { day: "Thu", label: "Thursday", open: "08:00", close: "15:00" },
  { day: "Fri", label: "Friday", open: "08:00", close: "15:00" },
  { day: "Sat", label: "Saturday", open: "08:00", close: "15:00" },
  { day: "Sun", label: "Sunday", open: "08:00", close: "15:00" },
];

export const business = {
  name: "Miranda's Cafe",
  tagline: "A Taste of Vermont",
  /** Full legal/listing name — matches how it shows up on maps. */
  fullName: "Miranda's Cafe: A Taste of Vermont",
  owners: "Rob & Miranda Gladding",
  timeZone: "America/New_York",
  address: {
    street: "11 Main St",
    city: "Canton",
    region: "NY",
    postalCode: "13617",
    country: "US",
  },
  geo: { latitude: 44.5956, longitude: -75.1723 },
  phone: {
    display: "(315) 714-1577",
    href: "tel:+13157141577",
    schema: "+1-315-714-1577",
  },
  // TODO: Add a public contact email once the cafe has one.
  email: null as string | null,
  // TODO: Replace with the cafe's real Facebook page URL.
  facebookUrl: "https://www.facebook.com/",
  // TODO: Replace with the production domain once purchased.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mirandascafecanton.com",
  hoursSummary: "Breakfast & lunch, 8am–3pm. Closed Wednesdays.",
  googleRating: 4.9,
  payment: ["Cash", "Credit & debit cards", "Apple Pay"],
  parkingNote: "Additional parking in back with back-door access.",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Miranda's Cafe, 11 Main St, Canton, NY 13617"),
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("11 Main St, Canton, NY 13617") +
    "&z=16&output=embed",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

/** "08:00" -> "8am", "15:30" -> "3:30pm" */
export function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12}${suffix}` : `${hour12}:${String(m).padStart(2, "0")}${suffix}`;
}

export function formatHours(d: DayHours): string {
  return d.open && d.close ? `${formatTime(d.open)}–${formatTime(d.close)}` : "Closed";
}
