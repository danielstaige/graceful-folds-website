import gallery1 from "@/assets/gallery-1.avif";
import gallery2 from "@/assets/gallery-2.avif";
import gallery3 from "@/assets/gallery-3.avif";
import gallery4 from "@/assets/gallery-4.avif";
import gallery5 from "@/assets/gallery-5.avif";
import gallery6 from "@/assets/gallery-6.avif";
import gallery7 from "@/assets/gallery-7.avif";
import gallery8 from "@/assets/gallery-8.avif";
import gallery9 from "@/assets/gallery-9.avif";
import gallery10 from "@/assets/gallery-10.avif";
import gallery11 from "@/assets/gallery-11.avif";
import gallery12 from "@/assets/gallery-12.avif";

const images = [
  { src: gallery1, alt: "Freshly folded laundry" },
  { src: gallery2, alt: "Neatly organized clothes" },
  { src: gallery3, alt: "Laundry care in action" },
  { src: gallery4, alt: "Folded towels and linens" },
  { src: gallery5, alt: "Clean laundry ready for delivery" },
  { src: gallery6, alt: "Carefully handled garments" },
  { src: gallery7, alt: "Fresh laundry stacked with care" },
  { src: gallery8, alt: "Laundry pickup ready" },
  { src: gallery9, alt: "Perfectly folded clothing" },
  { src: gallery10, alt: "Laundry delivered to your door" },
  { src: gallery11, alt: "Clothes folded with precision" },
  { src: gallery12, alt: "Clean and organized laundry" },
];

const GalleryGrid = () => {
  return (
    <section className="bg-background py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="font-body text-xs tracking-widest uppercase mb-3 block"
            style={{ color: "hsl(var(--deep-gold))" }}
          >
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">
            Every Fold, Done with Care
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            A look at the love and attention we put into every bag we handle.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => {
            // Vary heights for visual interest
            const tall = i === 0 || i === 5 || i === 8;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl ${
                  tall ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    tall ? "h-full min-h-[320px] md:min-h-[420px]" : "h-48 md:h-56"
                  }`}
                />
                {/* Subtle hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--charcoal) / 0.4), transparent 50%)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
