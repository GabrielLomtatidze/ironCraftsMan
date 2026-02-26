import ProductCard from "./ProductCard";

const doors = [
  {
    title: "Ornate Classic Door",
    description:
      "Hand-forged wrought iron door with intricate scrollwork patterns and decorative elements. Perfect for grand entrances.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/829a92d6-83d4-497d-9ec0-59c763610142.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/95716d0d-bbbd-497c-9177-685d05a3cb89.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/532eaa4f-14dc-4b4f-93a0-c7279cb2e23c.png",
    ],
  },
  {
    title: "Modern Geometric Door",
    description:
      "Sleek minimalist iron door with clean geometric patterns and matte black finish. Contemporary elegance.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/95716d0d-bbbd-497c-9177-685d05a3cb89.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/829a92d6-83d4-497d-9ec0-59c763610142.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/532eaa4f-14dc-4b4f-93a0-c7279cb2e23c.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/ce8741b0-064f-417e-ae74-9b95d6d7b1f8.png",
    ],
  },
  {
    title: "Classic Glass Panel Door",
    description:
      "Elegant wrought iron door with glass panels and ornamental scrollwork frame. Timeless European style.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/532eaa4f-14dc-4b4f-93a0-c7279cb2e23c.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/829a92d6-83d4-497d-9ec0-59c763610142.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/95716d0d-bbbd-497c-9177-685d05a3cb89.png",
    ],
  },
];

export default function DoorsSection() {
  return (
    <section id="doors" className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C45A2D]" />
            <span
              className="text-[#C45A2D] text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Collection
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C45A2D]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Iron Doors
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Each door is a masterpiece — hand-forged to your specifications with
            unmatched durability and beauty.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doors.map((door, idx) => (
            <ProductCard key={idx} {...door} />
          ))}
        </div>
      </div>
    </section>
  );
}