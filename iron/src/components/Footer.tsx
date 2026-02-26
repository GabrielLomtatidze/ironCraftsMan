export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#111111] border-t border-[#2A2A2A]">
      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            Ready to Start Your{" "}
            <span className="text-[#C45A2D]">Project?</span>
          </h2>
          <p
            className="text-[#9A9A9A] text-lg max-w-xl mx-auto mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Whether it's a custom door, gate, or decorative letters — we'd love
            to hear about your vision. Get in touch for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+1234567890"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C45A2D] to-[#A04420] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#C45A2D]/25 transition-all duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:info@ironcraft.com"
              className="group flex items-center gap-3 px-8 py-4 border border-[#2A2A2A] text-[#9A9A9A] font-semibold rounded-xl hover:border-[#C45A2D]/50 hover:text-[#F5F5F5] transition-all duration-300 hover:-translate-y-0.5 !bg-transparent"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#2A2A2A] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C45A2D] to-[#8B7355] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span
              className="text-lg font-bold text-[#F5F5F5] tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              IRON<span className="text-[#C45A2D]">CRAFT</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Doors", "Gates", "Letters"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-sm text-[#9A9A9A] hover:text-[#C45A2D] transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-sm text-[#9A9A9A]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 IronCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}