import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Herobanner() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1d1a17]"
    >
      {/* Background image & Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85"
          alt="Vivanova general supplies warehouse and logistics"
          className="object-cover object-center opacity-25 w-full h-full"
        />
        {/* Dual Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-[#2b27235e] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container-gym w-full relative z-10 pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Badge with XS Radius */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/30 rounded-xs mb-8 bg-amber-500/10 backdrop-blur-md">
          <Zap size={14} className="text-amber-400" fill="#fbbf24" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white">
            Vivanova General Supplies Limited
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-2">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-md"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Supply
          </h1>
        </div>

        <div className="mb-2">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight text-[#a91609] drop-shadow-md"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Businesses
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-md"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            With Confidence
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="flex flex-col gap-6 mt-4">
          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-normal">
            Trusted sourcing, reliable delivery, and practical supply solutions for contractors, retailers, institutions, and growing businesses.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link to={'/contact'} className="group flex items-center gap-2 px-7 py-3.5 bg-[#a91609] text-white font-bold uppercase tracking-wider rounded-xs text-sm hover:bg-[#8e160d] shadow-md transition-all duration-300"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Request Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to={'/about'} className="px-7 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider rounded-xs text-sm hover:border-white/70 hover:bg-white/5 transition-colors duration-200"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              About Us
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/15 flex-wrap">
          <div className="flex flex-col">
            <span
              className="text-3xl md:text-4xl font-black text-[#a91609] leading-none"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              12+
            </span>
            <span className="text-xs text-slate-300 mt-2 font-medium tracking-wide uppercase">
              Years of Service
            </span>
          </div>

          <div className="flex flex-col">
            <span
              className="text-3xl md:text-4xl font-black text-[#a91609] leading-none"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              250+
            </span>
            <span className="text-xs text-slate-300 mt-2 font-medium tracking-wide uppercase">
              Product Lines
            </span>
          </div>

          <div className="flex flex-col">
            <span
              className="text-3xl md:text-4xl font-black text-[#a91609] leading-none"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              98%
            </span>
            <span className="text-xs text-slate-300 mt-2 font-medium tracking-wide uppercase">
              Order Fulfillment
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 sm:flex flex-col items-center gap-2 hidden">
        <div className="w-px h-16 bg-linear-to-b from-transparent to-[#a91609]" />
        <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50 rotate-90 origin-center translate-x-4">
          Scroll
        </span>
      </div>
    </section>
  );
}