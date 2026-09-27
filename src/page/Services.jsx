import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  FaBox,
  FaTruck,
  FaBuilding,
  FaTools,
  FaStore,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const serviceCategories = [
  {
    id: 'all',
    name: 'All Offerings',
  },
  {
    id: 'building',
    name: 'Building & Construction',
  },
  {
    id: 'commercial',
    name: 'Commercial & Institutional',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply',
  },
];

const services = [
  {
    category: 'building',
    icon: FaBuilding,
    code: 'SRV-01',
    tag: 'CONSTRUCTION',
    title: 'Building Materials Supply',
    description: 'Bulk delivery of high-grade cement, steel bars, aggregates, roofing sheets, and structural timber directly to project sites across Tanzania.',
    highlights: ['Direct Manufacturer Pricing', 'Site Delivery Guarantee', 'Quality Testing Certified']
  },
  {
    category: 'building',
    icon: FaTools,
    code: 'SRV-02',
    tag: 'HARDWARE',
    title: 'Industrial Tools & Equipment',
    description: 'Heavy-duty power tools, safety gear, plumbing fittings, electrical components, and hardware consumables for contractors and workshops.',
    highlights: ['Genuine Warranties', 'Spare Parts Availability', 'Commercial Discounting']
  },
  {
    category: 'commercial',
    icon: FaStore,
    code: 'SRV-03',
    tag: 'STATIONERY',
    title: 'Office & School Essentials',
    description: 'Complete procurement services for educational institutions and corporate offices, providing paper, furniture, printing supplies, and IT accessories.',
    highlights: ['Scheduled Monthly Fulfillment', 'Credit Term Options', 'Bulk Order Packaging']
  },
  {
    category: 'commercial',
    icon: FaBox,
    code: 'SRV-04',
    tag: 'RETAIL',
    title: 'FMCG & Household Goods',
    description: 'Wholesale distribution of essential consumer packaged goods, hygiene items, and household supplies for retail stores and supermarkets.',
    highlights: ['Fast-Moving Inventory', 'Nationwide Retail Reach', 'Flexible Order Quantities']
  },
  {
    category: 'logistics',
    icon: FaTruck,
    code: 'SRV-05',
    tag: 'FLEET LOGISTICS',
    title: 'Custom Contract Procurement',
    description: 'Tailored sourcing solutions for large tenders, government projects, and NGOs requiring specialized supply chain management.',
    highlights: ['End-to-End Tracking', 'Dedicated Account Managers', '24-Hour Dispatch']
  },
  {
    category: 'logistics',
    icon: FaHandshake,
    code: 'SRV-06',
    tag: 'COMMERCIAL',
    title: 'Warehousing & Bulk Storage',
    description: 'Secure, modern storage facilities strategy located to enable fast regional distribution and buffer inventory management.',
    highlights: ['Climate Managed Storage', 'Real-time Stock Audits', 'Safety & Security First']
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f7f2ea] text-[#1d1a17] overflow-x-hidden">
      <Nav />

      <main className="grow">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] lg:h-[75vh] flex items-center px-6 md:px-12 lg:px-10 bg-cover bg-center">
          {/* Darker, professional overlay with Vivanova brand styling */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/95 via-[#1e293b]/85 to-transparent"></div>

          <div className="relative z-10 mt-6 flex flex-col items-start gap-4 w-full md:w-4/5 lg:w-3/5 text-white py-12">
            {/* Brand Badge */}
            <span className="bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-[#ffff] text-xs md:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-sm shadow-xs">
              VIVANOVA OFFERINGS & SERVICES
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Comprehensive Supply,<br />
              <span className="text-[#a91609]">Tailored For Your Scale</span>.
            </h1>

            {/* Accent Bar */}
            <div className="flex items-center gap-1.5 my-1">
              <span className="h-1 w-12 rounded-full bg-[#a91609]" />
              <span className="h-1 w-3 rounded-full bg-white/60" />
              <span className="h-1 w-1.5 rounded-full bg-white/30" />
            </div>

            {/* Subtitle / Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-xl">
              From building sites to institutional offices, we provide high-grade products and reliable logistics across Tanzania.
            </p>
          </div>
        </div>

        {/* Services / Products Grid Section */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">

          {/* Header */}
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#a91609]" />
              <span className="text-xs font-bold tracking-widest text-[#a91609] uppercase">
                WHAT WE PROVIDE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1a17] uppercase tracking-tight leading-tight">
              OUR PRODUCTS & SERVICES.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Explore our core supply categories. Built for dependability, efficiency, and commercial growth.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all uppercase cursor-pointer ${ activeCategory === cat.id
                    ? 'bg-[#a91609] text-white shadow-md'
                    : 'bg-[#f4e7de] text-[#1d1a17]/80 hover:bg-[#a91609]/10 hover:text-[#a91609] border border-[#1d1a17]/10'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid Layout matching Vivanova card aesthetics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f4e7de]/60 border border-[#1d1a17]/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#f4e7de] hover:border-[#a91609]/30 transition-all duration-300 group"
                >
                  <div>
                    {/* Top row badges */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-[#a91609] text-white rounded-xl shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="text-xl" />
                      </div>
                      <span className="text-xs font-bold text-[#a91609] bg-[#a91609]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#1d1a17] mb-3 uppercase tracking-wide group-hover:text-[#a91609] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-2 mb-6 border-t border-[#1d1a17]/10 pt-4">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <FaCheckCircle className="text-[#a91609] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[#1d1a17]/10 flex items-center justify-between text-xs font-semibold text-[#1d1a17]">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-[#a91609] hover:underline font-bold tracking-wider uppercase"
                    >
                      Inquire Now <FaArrowRight className="text-[10px]" />
                    </a>
                    <span className="text-[#a91609] font-bold">{item.code}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* CTA Component */}
      </main>

      <Footer />
    </div>
  );
}