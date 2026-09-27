import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-16 font-sans bg-[#f7f2ea] text-[#1d1a17]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Image Container with Overlay Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 rounded-xs overflow-hidden shadow-2xl border border-[#1d1a17]/10">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
              alt="Vivanova general supplies warehouse and logistics" 
              className="w-full h-130 object-cover"
            />
          </div>
          
          {/* Badge Overlay with XS Radius */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-[#a91609] text-white p-6 rounded-xs text-center shadow-2xl hidden sm:block border border-red-900/40">
            <span className="block text-4xl font-black tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3+
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-90 block mt-1">
              Years of<br />Excellence
            </span>
          </div>
        </div>

        {/* Right Column: Content matching exact HTML structural breakdown */}
        <div className="lg:col-span-7 lg:pl-8 space-y-5">
          
          {/* Subheading */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-xs bg-[#a91609]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#a91609] uppercase block">
              Our Core Promise
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-[#1d1a17]" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              SUPPLYING<br />
              <span className="text-[#a91609]">BUSINESS</span><br />
              WITH RELIABILITY.
            </h2>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 max-w-xl">
            <p className="text-gray-700 text-base leading-relaxed">
              Vivanova General Supplies Limited exists to help businesses, institutions, and households access the products they need without delays, confusion, or compromise. We source quality materials and essentials that keep operations moving smoothly.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              From everyday necessities to project-critical supplies, we focus on dependable quality, practical value, and responsive service that customers can count on.
            </p>
          </div>

          {/* Tag Pills */}
          <div>
            <div className="flex flex-wrap gap-2 py-1">
              {[
                "Quality Sourcing",
                "Reliable Delivery",
                "Business Support",
                "Trusted Supply"
              ].map((item, index) => (
                <span 
                  key={index} 
                  className="px-4 py-1.5 border border-[#a91609]/30 rounded-xs text-xs font-semibold text-[#a91609] bg-[#a91609]/10 tracking-wide uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="p-5 bg-[#1d1a17] text-white border border-[#1d1a17]/20 rounded-xs hover:border-[#a91609]/50 transition-colors duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a91609] mb-3">
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  "Their team helped us source dependable materials and kept our project moving with zero stress."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-[#a91609] text-white flex items-center justify-center font-bold text-xs">
                    S
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wide">Simon M.</p>
                    <p className="text-gray-400 text-[11px]">Contractor</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 bg-[#1d1a17] text-white border border-[#1d1a17]/20 rounded-xs hover:border-[#a91609]/50 transition-colors duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a91609] mb-3">
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  "Good pricing, consistent quality, and a team that actually listens to our needs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-[#a91609] text-white flex items-center justify-center font-bold text-xs">
                    A
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wide">Aisha K.</p>
                    <p className="text-gray-400 text-[11px]">Retail Buyer</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}