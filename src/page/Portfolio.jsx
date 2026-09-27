import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTASection from '../pages/CTASection';
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const portfolioCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'construction', name: 'Construction & Building' },
  { id: 'institutional', name: 'Institutional & Office' },
  { id: 'logistics', name: 'Logistics & Distribution' },
];

const projects = [
  {
    category: 'construction',
    code: 'PRJ-2025-01',
    tag: 'BUILDING MATERIALS',
    title: 'Commercial Complex Cement & Steel Supply',
    location: 'Dar es Salaam',
    date: 'Completed 2025',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=800&q=80',
    description: 'Bulk delivery of over 400 tons of high-grade cement and structural steel rebar for multi-story commercial development.',
    stats: ['400+ Tons Delivered', '100% On-Time', 'Zero Material Defects']
  },
  {
    category: 'institutional',
    code: 'PRJ-2025-02',
    tag: 'OFFICE & IT',
    title: 'Educational Institute Equipment Procurement',
    location: 'Dodoma',
    date: 'Completed 2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Full-scale procurement of office furniture, stationery, and computing hardware for regional educational administrative offices.',
    stats: ['120 Workstations', 'Full Assembly', '1-Year Warranty']
  },
  {
    category: 'logistics',
    code: 'PRJ-2025-03',
    tag: 'FLEET LOGISTICS',
    title: 'Regional FMCG Warehousing & Supply',
    location: 'Mwanza',
    date: 'Ongoing Contract',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    description: 'Custom contract logistics and scheduled bulk delivery of household consumables and fast-moving retail products.',
    stats: ['24-Hour Dispatch', 'Climate Storage', 'Nationwide Fleet']
  },
  {
    category: 'construction',
    code: 'PRJ-2024-08',
    tag: 'INFRASTRUCTURE',
    title: 'Industrial Hardware & Safety Gear Fulfillment',
    location: 'Arusha',
    date: 'Completed 2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description: 'Procurement and distribution of heavy-duty power tools, protective PPE gear, and site hardware consumables.',
    stats: ['Certified PPE', 'Contractor Discount', 'Fast Fulfillment']
  },
  {
    category: 'institutional',
    code: 'PRJ-2024-05',
    tag: 'STATIONERY & PRINT',
    title: 'Government Agency Annual Supplies',
    location: 'Dodoma',
    date: 'Completed 2024',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    description: 'Scheduled quarterly supply of bulk printing paper, official stationery, and custom branded institutional materials.',
    stats: ['Quarterly Shipments', 'Eco-certified Paper', 'Tender Compliant']
  },
  {
    category: 'logistics',
    code: 'PRJ-2024-02',
    tag: 'BULK TRANSPORT',
    title: 'Site Delivery & Heavy Material Handling',
    location: 'Tanga',
    date: 'Completed 2024',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    description: 'End-to-end transport and offloading services for large-scale timber and roofing materials for housing projects.',
    stats: ['Direct to Site', 'Safety Verified', 'Damage-Free Guarantee']
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f7f2ea] text-[#1d1a17] overflow-x-hidden">
      <Nav />

      <main className="grow">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] lg:h-[75vh] flex items-center px-6 md:px-12 lg:px-10 bg-cover bg-center">
          <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/95 via-[#1e293b]/85 to-transparent"></div>

          <div className="relative z-10 mt-6 flex flex-col items-start gap-4 w-full md:w-4/5 lg:w-3/5 text-white py-12">
            <span className="bg-amber-500/10 backdrop-blur-md border mt-10 border-amber-500/30 text-[#ffff] text-xs md:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-sm shadow-xs">
              VIVANOVA PROVEN TRACK RECORD
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Delivered Projects,<br />
              <span className="text-[#a91609]">Proven Reliability</span>.
            </h1>

            <div className="flex items-center gap-1.5 my-1">
              <span className="h-1 w-12 rounded-full bg-[#a91609]" />
              <span className="h-1 w-3 rounded-full bg-white/60" />
              <span className="h-1 w-1.5 rounded-full bg-white/30" />
            </div>

            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-xl">
              Take a look at some of our recent supply contracts, material deliveries, and institutional procurements across Tanzania.
            </p>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#a91609]" />
              <span className="text-xs font-bold tracking-widest text-[#a91609] uppercase">
                OUR WORK & DELIVERIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1a17] uppercase tracking-tight leading-tight">
              FEATURED CASE STUDIES.
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Demonstrating our capacity to handle large scale orders, tight deadlines, and complex logistical needs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all uppercase cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#a91609] text-white shadow-md'
                    : 'bg-[#f4e7de] text-[#1d1a17]/80 hover:bg-[#a91609]/10 hover:text-[#a91609] border border-[#1d1a17]/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#f4e7de]/60 border border-[#1d1a17]/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-[#f4e7de] hover:border-[#a91609]/30 transition-all duration-300 group"
              >
                <div>
                  {/* Image Container with Overlay Tag */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-[#a91609] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[#a91609]" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[#a91609]" /> {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1d1a17] mb-3 uppercase tracking-wide group-hover:text-[#a91609] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Stats / Highlights */}
                    <ul className="space-y-2 mb-2 border-t border-[#1d1a17]/10 pt-4">
                      {item.stats.map((stat, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <FaCheckCircle className="text-[#a91609] shrink-0" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-[#1d1a17]/10 flex items-center justify-between text-xs font-semibold text-[#1d1a17]">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-1.5 text-[#a91609] hover:underline font-bold tracking-wider uppercase"
                  >
                    Request Similar Supply <FaArrowRight className="text-[10px]" />
                  </a>
                  <span className="text-[#a91609] font-bold">{item.code}</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* CTA Component */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}