import ProductCard from "./ProductCard";

const doors = [
  {
    title: "",
    description:
      "",
    images: [
      "../../public/doors/door_1.jpeg",
      "../../public/doors/door_2.jpeg",
      "../../public/doors/door_3.jpeg",
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
      "../../public/doors/door_4.jpeg",
      "../../public/doors/door_5.jpeg",
    ],
  },
  {
    title: "",
    description:
      "",
    images: [
      "../../public/doors/door_6.jpeg",
      "../../public/doors/door_7.jpeg",
    ],
  }
];

export default function DoorsSection() {
  return (
    <section id="doors" className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            {/* <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C45A2D]" />
            <span
              className="text-[#C45A2D] text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Collection
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C45A2D]" /> */}
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            რკინის კარებები
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            თითოეული კარი ექსკლუზიურია — ხელნაკეთი, მომხმარებლის გემოვნების შესაბამისად, გამოირჩევა მაღალი ხარისხით და გამძლეობით.
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