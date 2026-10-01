import Image from "next/image";
import Link from "next/link";
import { signatureItems } from "@/data/menu";
import SectionHeading from "@/components/SectionHeading";
import { BestSellerBadge, GlutenFreeBadge } from "@/components/Badges";

export default function Signature() {
  return (
    <section aria-labelledby="signature-title" className="bg-paper/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="signature-title"
            eyebrow="House favorites"
            title="The sandwiches people drive across the county for"
            intro="Everything is built to order — Boar's Head meats sliced fresh, house-made dressings, and real Vermont cheddar and maple."
          />
          <Link
            href="/menu"
            className="btn btn-secondary shrink-0 self-start md:self-end"
            data-reveal
          >
            Full menu <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureItems.map((item, i) => (
            <li
              key={item.id}
              className={`card group flex flex-col overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              <div
                className={`bg-kraft relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes={
                      i === 0
                        ? "(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                {item.bestSeller && (
                  <span className="absolute top-4 left-4">
                    <BestSellerBadge />
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-charcoal text-2xl font-semibold">{item.name}</h3>
                  {item.glutenFreeAvailable && <GlutenFreeBadge />}
                </div>
                <p className="text-ink-soft mt-2 leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
