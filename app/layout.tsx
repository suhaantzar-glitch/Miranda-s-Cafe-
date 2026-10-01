import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business, fullAddress } from "@/data/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import RestaurantJsonLd from "@/components/RestaurantJsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

const title = `${business.fullName} | Sandwiches & Deli in Canton, NY`;
const description = `${business.name} (${business.tagline}) is a family-run Vermont-style deli at ${fullAddress}. Made-to-order sandwiches with Boar's Head meats, Vermont cheddar and real maple — breakfast & lunch near St. Lawrence University and SUNY Canton.`;

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: title,
    template: `%s | ${business.fullName}`,
  },
  description,
  applicationName: business.fullName,
  keywords: [
    "sandwiches Canton NY",
    "deli Canton NY",
    "breakfast Canton NY",
    "lunch Canton NY",
    "lunch near St. Lawrence University",
    "lunch near SUNY Canton",
    "Miranda's Cafe",
    "A Taste of Vermont",
    "Vermont deli",
    "Boar's Head",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.fullName,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="focus:bg-charcoal focus:text-cream sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RestaurantJsonLd />
      </body>
    </html>
  );
}
