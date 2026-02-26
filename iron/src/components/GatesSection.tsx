import ProductCard from "./ProductCard";

const gates = [
  {
    title: "Grand Estate Gate",
    description:
      "Majestic double driveway gate with intricate scrollwork and symmetrical design. Makes a powerful first impression.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/ce8741b0-064f-417e-ae74-9b95d6d7b1f8.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/6c02ece9-16e6-400e-9da9-ef272593b826.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/c8078645-6c36-49ee-a6dc-2566b29493f0.png",
    ],
  },
  {
    title: "Modern Linear Gate",
    description:
      "Contemporary gate with clean horizontal lines and geometric precision. Matte black finish for a sleek look.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/6c02ece9-16e6-400e-9da9-ef272593b826.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/ce8741b0-064f-417e-ae74-9b95d6d7b1f8.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/c8078645-6c36-49ee-a6dc-2566b29493f0.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/829a92d6-83d4-497d-9ec0-59c763610142.png",
    ],
  },
  {
    title: "Garden Floral Gate",
    description:
      "Charming decorative gate with floral and vine motifs. Adds rustic elegance to any garden or courtyard.",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/c8078645-6c36-49ee-a6dc-2566b29493f0.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/ce8741b0-064f-417e-ae74-9b95d6d7b1f8.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/6c02ece9-16e6-400e-9da9-ef272593b826.png",
    ],
  },
];

export default function GatesSection() {
  return (
    <section id="gates" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B7355]" />
            <span
              className="text-[#8B7355] text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Secure & Beautiful
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B7355]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Iron Gates
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From grand estate entrances to charming garden gates — crafted to
            protect and impress.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gates.map((gate, idx) => (
            <ProductCard key={idx} {...gate} />
          ))}
        </div>
      </div>
    </section>
  );
}