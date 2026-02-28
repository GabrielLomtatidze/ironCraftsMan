import ProductCard from "./ProductCard";
import image_1 from "@/images/gates/gate_1.jpeg"
import image_2 from "@/images/gates/gate_2.jpeg"
import image_3 from "@/images/gates/gate_3.jpeg"
import image_4 from "@/images/gates/gate_4.jpeg"
import image_5 from "@/images/gates/gate_5.jpeg"
import image_6 from "@/images/gates/gate_6.jpeg"
import image_7 from "@/images/gates/gate_7.jpeg"
import image_8 from "@/images/gates/gate_8.jpeg"
import image_9 from "@/images/gates/gate_9.jpeg"
import image_10 from "@/images/gates/gate_10.jpeg"

const gates = [
  {
    title: "",
    description:
      "",
    images: [
      image_1,
      image_2,
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
      image_3,
      image_4,
      image_5,
      image_6,
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
      image_10,
      image_9,
      image_7,
      image_8,
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