import ProductCard from "./ProductCard";

const gates = [
  {
    title: "Grand Estate Gate",
    description:
      "Majestic double driveway gate with intricate scrollwork and symmetrical design. Makes a powerful first impression.",
    images: [
      "../../public/gates/gate_1.jpeg",
      "../../public/gates/gate_2.jpeg",
    ],
  },
  {
    title: "Grand Estate Gate",
    description:
      "Majestic double driveway gate with intricate scrollwork and symmetrical design. Makes a powerful first impression.",
    images: [
      "../../public/gates/gate_3.jpeg",
      "../../public/gates/gate_4.jpeg",
      "../../public/gates/gate_5.jpeg",
      "../../public/gates/gate_6.jpeg",
    ],
  },
  {
    title: "Grand Estate Gate",
    description:
      "Majestic double driveway gate with intricate scrollwork and symmetrical design. Makes a powerful first impression.",
    images: [
      "../../public/gates/gate_10.jpeg",
      "../../public/gates/gate_9.jpeg",
      "../../public/gates/gate_7.jpeg",
      "../../public/gates/gate_8.jpeg",
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
            {/* <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B7355]" />
            <span
              className="text-[#8B7355] text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Secure & Beautiful
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B7355]" /> */}
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            რკინის ჭიშკრები
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ხელით დამზადებული რკინის ჭიშკრები.
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