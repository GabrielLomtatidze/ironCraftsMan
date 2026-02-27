import ProductCard from "./ProductCard";

const gates = [
  {
    title: "",
    description:
      "",
    images: [
      "../../public/stairs/stair_1.jpeg",
      "../../public/stairs/stair_2.jpeg",
      "../../public/stairs/stair_3.jpeg",
      "../../public/stairs/stair_4.jpeg",
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
     "../../public/stairs/stair_5.jpeg",
      "../../public/stairs/stair_6.jpeg",
      "../../public/stairs/stair_7.jpeg",
      "../../public/stairs/stair_8.jpeg",
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
      "../../public/stairs/stair_9.jpeg",
      "../../public/stairs/stair_10.jpeg",
      "../../public/stairs/stair_11.jpeg",
      "../../public/stairs/stair_12.jpeg",
    ],
  },

];


export default function StairsSection() {
  return (
    <section id="stairs" className="py-24 px-6 bg-[#0C0C0C]">
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
            რკინის კიბეები
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ხელით დამზადებული რკინის კიბეები.
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