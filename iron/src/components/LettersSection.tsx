export default function LettersSection() {
  return (
    <section id="letters" className="py-24 px-6 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C45A2D]" />
            <span
              className="text-[#C45A2D] text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Custom Signage
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C45A2D]" />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Iron Letters
          </h2>
          <p
            className="text-[#9A9A9A] max-w-xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Custom decorative iron letters and signage — perfect for homes,
            businesses, and special occasions.
          </p>
        </div>

        {/* Letters Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main Image */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#C45A2D]/40 transition-all duration-500">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/991245/2026-02-26/18dfac9c-6bd2-49e6-987c-a9ae67719a40.png"
              alt="Custom iron letters"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3
                className="text-2xl font-bold text-[#F5F5F5] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                Custom Iron Lettering
              </h3>
              <p className="text-[#9A9A9A] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Each letter individually forged and finished to perfection.
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                title: "House Numbers & Names",
                desc: "Elegant iron house numbers and name plates that add character to any entrance.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Business Signage",
                desc: "Professional iron signs and logos for storefronts, restaurants, and offices.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Decorative Monograms",
                desc: "Personalized monograms and initials — perfect for gifts or home decor.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
              },
              {
                title: "Custom Designs",
                desc: "Any letter, word, or symbol — we bring your vision to life in iron.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group/item flex items-start gap-4 p-5 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A]/50 hover:border-[#C45A2D]/30 hover:bg-[#1A1A1A] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C45A2D]/10 border border-[#C45A2D]/20 flex items-center justify-center text-[#C45A2D] group-hover/item:bg-[#C45A2D]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4
                    className="text-lg font-bold text-[#F5F5F5] mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#9A9A9A]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}