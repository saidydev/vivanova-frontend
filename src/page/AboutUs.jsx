import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { FaBox, FaRedo, FaHandshake, FaChartLine, FaWarehouse, FaTruck } from 'react-icons/fa'

function AboutUs() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#f7f2ea] overflow-x-hidden">
            <Nav />

            <main className="grow">
                <div
                    className="relative min-h-[50vh] lg:h-[75vh] flex items-center px-6 md:px-12 lg:px-10 bg-cover bg-center"
                >
                    {/* Darker, professional overlay with Vivanova brand styling */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/95 via-[#1e293b]/85 to-transparent"></div>

                    <div className="relative z-10 mt-6 flex flex-col items-start gap-4 w-full md:w-4/5 lg:w-3/5 text-white py-12">
                        {/* Brand Badge */}
                        <span className="bg-amber-500/10 backdrop-blur-md border mt-10 border-amber-500/30 text-[#ffff] text-xs md:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-sm shadow-xs">
                            Vivanova General Supplies
                        </span>

                        {/* Main Headline */}
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
                            Reliable Sourcing,<br />
                            <span className="text-[#a91609]">Dependable Solutions</span>.
                        </h1>

                        {/* Accent Bar */}
                        <div className="flex items-center gap-1.5 my-1">
                            <span className="h-1 w-12 rounded-full bg-[#a91609]" />
                            <span className="h-1 w-3 rounded-full bg-white/60" />
                            <span className="h-1 w-1.5 rounded-full bg-white/30" />
                        </div>

                        {/* Subtitle / Description */}
                        <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-xl">
                            Supplying quality materials, products, and essentials across Tanzania. Fast turnaround, transparent service, and nationwide delivery you can trust.
                        </p>
                    </div>
                </div>

                {/* About Overview Section */}
                <section className="py-16 px-6 md:px-12 lg:px-12">
                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="flex flex-col gap-3">
                            <div className='flex gap-2'>
                                <hr className='h-1 w-3 bg-[#a91609] border-none' />
                                <hr className='h-1 w-3 bg-[#a91609] border-none' />
                                <hr className='h-1 w-3 bg-[#a91609] border-none' />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800">
                                <span className="text-[#1d1a17]">Vivanova General</span>
                            </h2>
                        </div>

                        <div className="text-gray-600 leading-relaxed text-base">
                            <p>
                                Vivanova General Supplies Limited is a leading supplier of quality materials, products, and essentials serving contractors, retailers, institutions, and households across Tanzania. With over 12 years of industry experience, we've built a reputation for reliability and excellence.
                            </p>
                        </div>

                        <div className="text-gray-600 leading-relaxed text-base">
                            <p>
                                Through partnerships with trusted manufacturers, modern warehousing infrastructure, and a dedicated team, we deliver diverse product categories with fast, dependable logistics and competitive pricing that businesses can count on.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision, Mission, Values Section */}
                <section className="relative mt-6">
                    <div
                        className="relative min-h-[40vh] flex items-center px-6 md:px-12 lg:px-20 bg-cover bg-center py-16"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')`
                        }}
                    >
                        <div className="absolute inset-0 bg-[#1d1a17]/85"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white w-full max-w-7xl mx-auto">
                            <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-xs border border-white/10 backdrop-blur-sm">
                                <FaBox className="text-[#a91609] text-3xl" />
                                <h3 className="font-semibold text-white text-xl">Our Vision</h3>
                                <p className="text-white/80 leading-relaxed text-sm">
                                    To be the most trusted and accessible supplier of quality products for businesses, institutions, and households across Tanzania and beyond.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-xs border border-white/10 backdrop-blur-sm">
                                <FaTruck className="text-[#a91609] text-3xl" />
                                <h3 className="font-semibold text-white text-xl">Our Mission</h3>
                                <p className="text-white/80 leading-relaxed text-sm">
                                    To provide dependable supply solutions through quality products, competitive pricing, responsive service, and nationwide delivery that meets customer needs reliably.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-xs border border-white/10 backdrop-blur-sm">
                                <FaHandshake className="text-[#a91609] text-3xl" />
                                <h3 className="font-semibold text-white text-xl">Core Values</h3>
                                <p className="text-white/80 leading-relaxed text-sm">
                                    Integrity, quality assurance, customer focus, reliability, and continuous improvement guide every transaction and partnership we build.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Blocks with Images */}
<section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
    {/* Header styled like the Home page */}
    <div className="flex flex-col gap-3 mb-12">
        <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#a91609]" />
            <span className="text-xs font-bold tracking-widest text-[#a91609] uppercase">
                WHY CHOOSE US
            </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1a17] uppercase tracking-tight leading-tight">
            BUILT FOR SCALE & RELIABILITY.
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Delivering end-to-end supply solutions tailored to meet the dynamic demands of businesses, contractors, and institutions across Tanzania.
        </p>
    </div>

    {/* Cards Grid matching Home page card structure */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[#f4e7de]/60 border border-[#1d1a17]/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#f4e7de] transition-colors duration-300">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#a91609] text-white rounded-xl shadow-xs">
                        <FaBox className="text-xl" />
                    </div>
                    <span className="text-xs font-bold text-[#a91609] bg-[#a91609]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        250+ LINES
                    </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1a17] mb-3 uppercase tracking-wide">
                    Diverse Product Range
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    We supply over 250+ product lines across multiple categories: building materials, office supplies, household essentials, retail goods, and construction tools.
                </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-[#1d1a17]/10 flex items-center justify-between text-xs font-semibold text-[#1d1a17]">
                <span>CORE CAPABILITY</span>
                <span className="text-[#a91609]">01</span>
            </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f4e7de]/60 border border-[#1d1a17]/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#f4e7de] transition-colors duration-300">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#a91609] text-white rounded-xl shadow-xs">
                        <FaTruck className="text-xl" />
                    </div>
                    <span className="text-xs font-bold text-[#a91609] bg-[#a91609]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        24HR PROCESS
                    </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1a17] mb-3 uppercase tracking-wide">
                    Reliable Delivery
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Fast turnaround and dependable logistics. Orders are processed within 24 hours with transparent communication and nationwide fulfillment you can count on.
                </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1d1a17]/10 flex items-center justify-between text-xs font-semibold text-[#1d1a17]">
                <span>PRIORITY LOGISTICS</span>
                <span className="text-[#a91609]">02</span>
            </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f4e7de]/60 border border-[#1d1a17]/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#f4e7de] transition-colors duration-300">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#a91609] text-white rounded-xl shadow-xs">
                        <FaChartLine className="text-xl" />
                    </div>
                    <span className="text-xs font-bold text-[#a91609] bg-[#a91609]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        WHOLESALE
                    </span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1a17] mb-3 uppercase tracking-wide">
                    Competitive Pricing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Bulk discounts, wholesale rates, and flexible payment terms structured to keep your operations budgeted, sustainable, and ready to scale.
                </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1d1a17]/10 flex items-center justify-between text-xs font-semibold text-[#1d1a17]">
                <span>COMMERCIAL SUPPORT</span>
                <span className="text-[#a91609]">03</span>
            </div>
        </div>

    </div>
</section>

                {/* Stats Section */}
                <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#1d1a17]">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
                        <div className="flex flex-col gap-2">
                            <span className="text-4xl font-black text-[#a91609]">1000+</span>
                            <p className="text-sm text-gray-300 uppercase tracking-wide">Supplier Partners</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-4xl font-black text-[#a91609]">250+</span>
                            <p className="text-sm text-gray-300 uppercase tracking-wide">Product Lines</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-4xl font-black text-[#a91609]">50+</span>
                            <p className="text-sm text-gray-300 uppercase tracking-wide">Supply Categories</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-4xl font-black text-[#a91609]">24hrs</span>
                            <p className="text-sm text-gray-300 uppercase tracking-wide">Order Processing</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#f4e7de]">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1d1a17] mb-4">
                            Ready to Supply Your Needs?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            Contact Vivanova General Supplies Limited today for quality products, competitive pricing, and dependable service that keeps your business moving.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/#contact"
                                className="px-8 py-3 bg-[#a91609] text-white font-bold rounded-xs hover:bg-[#8e160d] transition"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="/"
                                className="px-8 py-3 border-2 border-[#a91609] text-[#1d1a17] font-bold rounded-xs hover:bg-[#a91609]/10 transition"
                            >
                                Back Home
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default AboutUs