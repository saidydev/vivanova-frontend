import React from 'react';
import { Dumbbell, Zap, Brain, Heart, Timer, Trophy, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      badge: "Core",
      icon: Dumbbell,
      title: "Hardware & Tools",
      desc: "Durable essentials for construction, repairs, maintenance, and everyday operational needs.",
      isPremium: false,
    },
    {
      badge: "Fast Supply",
      icon: Zap,
      title: "Electrical & Safety",
      desc: "Reliable electrical items and protective materials to keep workspaces and projects running safely.",
      isPremium: false,
    },
    {
      badge: "Priority",
      icon: Brain,
      title: "Commercial Support",
      desc: "Tailored supply solutions for businesses, institutions, and growing operations with consistent demand.",
      isPremium: true,
    },
    {
      badge: "Essential",
      icon: Heart,
      title: "Building Materials",
      desc: "Practical materials for finishing, renovation, installation, and project execution across multiple sectors.",
      isPremium: false,
    },
    {
      badge: "Reliable",
      icon: Timer,
      title: "Office & Facility",
      desc: "Functional supplies that support smooth operations, staff productivity, and day-to-day business needs.",
      isPremium: false,
    },
    {
      badge: "Trusted",
      icon: Trophy,
      title: "Bulk Orders",
      desc: "Scalable procurement support for contractors, resellers, and organizations needing dependable inventory.",
      isPremium: false,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-[#a91609]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#ffff] text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
              Our Capabilities
            </span>
            <h2 
              className="text-5xl font-black uppercase leading-none" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              SUPPLIES<br />
              THAT <span className="text-[#ffff]">DELIVER</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-slate-100 text-sm leading-relaxed">
              We provide dependable products and practical sourcing support for businesses and projects that need consistency, speed, and value.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  rounded-xs overflow-hidden">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative p-8 group cursor-pointer transition-colors duration-300 ${
                  item.isPremium ? 'bg-[#111]' : 'bg-[#0b0b0b]'
                }`}
              >
                {/* Border highlight for premium card */}
                {item.isPremium && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-[#a91609]" />
                )}

                {/* Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-6 ${
                    item.isPremium
                      ? 'bg-[#a91609] text-white'
                      : 'bg-[#1a1a1a] text-slate-600'
                  }`}
                >
                  {item.badge}
                </span>

                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    item.isPremium
                      ? 'bg-[#a91609] text-white group-hover:scale-110'
                      : 'bg-[#1a1a1a] text-[#a91609] group-hover:bg-[#a91609]/10'
                  }`}
                >
                  <Icon className="w-5.5 h-5.5" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#a91609] transition-colors duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* CTA Link */}
                <div className="flex items-center gap-2 text-[#a91609] group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Learn More
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
