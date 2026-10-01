import { business, hours } from "@/data/business";

const DAY_SCHEMA: Record<string, string> = {
  Mon: "https://schema.org/Monday",
  Tue: "https://schema.org/Tuesday",
  Wed: "https://schema.org/Wednesday",
  Thu: "https://schema.org/Thursday",
  Fri: "https://schema.org/Friday",
  Sat: "https://schema.org/Saturday",
  Sun: "https://schema.org/Sunday",
};

export default function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${business.siteUrl}/#restaurant`,
    name: business.fullName,
    alternateName: business.tagline,
    url: business.siteUrl,
    telephone: business.phone.schema,
    image: `${business.siteUrl}/opengraph-image`,
    menu: `${business.siteUrl}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_SCHEMA[h.day],
        opens: h.open,
        closes: h.close,
      })),
    servesCuisine: ["Deli", "Sandwiches", "American"],
    priceRange: "$",
    acceptsReservations: false,
    paymentAccepted: "Cash, Credit Card, Apple Pay",
    sameAs: [business.facebookUrl],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; escape "<" to prevent </script> injection.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
