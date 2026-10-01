import { business, fullAddress } from "@/data/business";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";
import OpenStatus from "@/components/OpenStatus";
import SectionHeading from "@/components/SectionHeading";
import { PhoneIcon } from "@/components/Header";

export default function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="visit-title"
          eyebrow="Come on in"
          title="Visit us on Main Street"
          intro="A short walk or drive from St. Lawrence University and SUNY Canton."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.15fr]">
          <div data-reveal className="card flex flex-col gap-7 p-6 sm:p-8">
            <div>
              <h3 className="text-forest text-sm font-bold tracking-wider uppercase">Address</h3>
              <address className="text-charcoal mt-2 font-serif text-2xl leading-snug not-italic">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region} {business.address.postalCode}
              </address>
              <p className="text-ink-soft mt-2">{business.parkingNote}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get directions
                  <span className="sr-only">
                    {" "}
                    to {fullAddress} (opens Google Maps in a new tab)
                  </span>
                </a>
                <a href={business.phone.href} className="btn btn-secondary">
                  <PhoneIcon /> {business.phone.display}
                </a>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-forest text-sm font-bold tracking-wider uppercase">Hours</h3>
                <OpenStatus />
              </div>
              <div className="mt-3">
                <HoursTable />
              </div>
            </div>

            <div>
              <h3 className="text-forest text-sm font-bold tracking-wider uppercase">We accept</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {business.payment.map((p) => (
                  <li
                    key={p}
                    className="bg-paper text-charcoal rounded-full px-3 py-1 text-sm font-semibold"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
