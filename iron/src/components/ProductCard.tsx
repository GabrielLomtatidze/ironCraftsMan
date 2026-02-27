import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  images: string[];
}

export default function ProductCard({ title, images }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] overflow-hidden hover:border-[#C45A2D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C45A2D]/10">
      {/* Image Carousel */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} view ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

        {/* Arrow buttons */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0C0C0C]/70 backdrop-blur-sm border border-[#2A2A2A] text-[#F5F5F5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C45A2D]/80 hover:border-[#C45A2D]"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0C0C0C]/70 backdrop-blur-sm border border-[#2A2A2A] text-[#F5F5F5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C45A2D]/80 hover:border-[#C45A2D]"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 h-2 bg-[#C45A2D]"
                  : "w-2 h-2 bg-[#F5F5F5]/40 hover:bg-[#F5F5F5]/70"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0C0C0C]/60 backdrop-blur-sm border border-[#2A2A2A] text-[#9A9A9A] text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Info */}
      {/* <div className="p-5">
        <h3
          className="text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#C45A2D] transition-colors duration-300"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-[#9A9A9A] leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </p>
      </div> */}
    </div>
  );
}