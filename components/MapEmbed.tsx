import { business, fullAddress } from "@/data/business";

export default function MapEmbed() {
  return (
    <div className="bg-kraft ring-charcoal/10 relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] ring-1 md:aspect-auto md:h-full md:min-h-[420px]">
      <iframe
        title={`Map showing ${business.fullName} at ${fullAddress}`}
        src={business.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
