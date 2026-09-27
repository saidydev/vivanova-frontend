import React from 'react';

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden w-full flex flex-col items-center justify-center text-center bg-[#1d1a17]">
      {/* Background Image & Professional Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Vivanova industrial supply warehouse and materials"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1d1a17] via-[#1d1a17]/20 to-[#1d1a17]/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Subheading Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-xs bg-[#a91609]" />
          <span className="text-[#a91609] text-xs font-bold tracking-[0.25em] uppercase block">
            Let's Work Together
          </span>
          <span className="h-2 w-2 rounded-xs bg-[#a91609]" />
        </div>

        {/* Main Headline */}
        <div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 max-w-4xl mx-auto leading-tight drop-shadow-md"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            READY TO ORDER
            <br />
            <span className="text-[#a91609]">RELIABLE SUPPLIES?</span>
          </h2>
        </div>

        {/* Description */}
        <div>
          <p className="text-slate-300 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            Request a supply quote from our team and let's discuss your business needs. No obligation — we're here to help scale your operations.
          </p>
        </div>

        {/* CTA Buttons Grid */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#a91609] text-white font-bold uppercase tracking-wider rounded-xs text-sm hover:bg-[#8e160d] shadow-lg transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Request a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider rounded-xs text-sm hover:border-white/70 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}