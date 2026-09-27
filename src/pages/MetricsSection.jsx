import React from 'react';

export default function MetricsSection() {
  const stats = [
    {
      value: "12,000+",
      title: "Orders Fulfilled",
      desc: "Businesses & institutions",
    },
    {
      value: "98%",
      title: "Fulfillment Rate",
      desc: "On-time delivery",
    },
    {
      value: "250+",
      title: "Product Lines",
      desc: "Diverse inventory",
    },
    {
      value: "12+",
      title: "Years Operating",
      desc: "Proven reliability",
    },
    {
      value: "48hrs",
      title: "Avg Response Time",
      desc: "Quote to delivery",
    },
    {
      value: "40+",
      title: "Supply Partners",
      desc: "Quality sourcing",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Watermark Text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" 
        aria-hidden="true"
      >
        <span 
          className="text-[18vw] font-black uppercase leading-none tracking-tighter"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          NUMBERS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-[#a91609] text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
            Business Metrics
          </span>
          <h2 
            className="text-4xl md:text-5xl font-black uppercase leading-tight" 
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            RESULTS BACKED<br />
            <span className="text-[#a91609]">BY NUMBERS</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a] rounded-xs overflow-hidden">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#ffff] p-8 md:p-12 group hover:bg-[#111] transition-colors duration-300"
            >
              <span 
                className="block text-4xl md:text-5xl font-black text-[#a91609] leading-none mb-2 group-hover:scale-105 transition-transform duration-300 origin-left"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {stat.value}
              </span>
              <p 
                className="hover:text-white text-base font-bold uppercase tracking-wide mb-1" 
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {stat.title}
              </p>
              <p className="text-slate-500 text-[15px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
