import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTASection from '../pages/CTASection';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#f7f2ea] text-[#1d1a17] overflow-x-hidden">
      <Nav />

      <main className="grow">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] lg:h-[75vh] flex items-center px-6 md:px-12 lg:px-10 bg-cover bg-center"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85')` }}>
          
          {/* Dark Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#1e293b]/85 to-[#0f172a]/70"></div>

          <div className="relative z-10 mt-6 flex flex-col items-start gap-4 w-full md:w-4/5 lg:w-3/5 text-white py-12">
            {/* Brand Badge with XS Radius */}
            <span className="bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-white text-xs md:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-xs shadow-xs">
              VIVANOVA DIRECT COMMUNICATIONS
            </span>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Let's Discuss Your,<br />
              <span className="text-[#a91609]">Supply Needs</span>.
            </h1>

            {/* Accent Bar */}
            <div className="flex items-center gap-1.5 my-1">
              <span className="h-1 w-12 rounded-xs bg-[#a91609]" />
              <span className="h-1 w-3 rounded-xs bg-white/60" />
              <span className="h-1 w-1.5 rounded-xs bg-white/30" />
            </div>

            {/* Subtitle / Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-xl">
              Have questions about bulk orders, pricing tenders, or contract logistics? Our specialized procurement team is ready to assist you.
            </p>
          </div>
        </div>

        {/* Contact Form & Info Grid Section */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Information & Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-xs bg-[#a91609]" />
                  <span className="text-xs font-bold tracking-widest text-[#a91609] uppercase">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1a17] uppercase tracking-tight mb-4">
                  REACH OUR OFFICES.
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  We respond to all quote requests and contract inquiries within 24 business hours.
                </p>

                {/* Contact Cards with xs Radius */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="bg-[#f4e7de]/80 border border-[#1d1a17]/10 p-5 rounded-xs flex items-start gap-4 hover:border-[#a91609]/40 transition-all shadow-2xs">
                    <div className="p-3 bg-[#a91609] text-white rounded-xs shrink-0">
                      <FaPhoneAlt className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone & WhatsApp</h4>
                      <p className="text-sm font-bold text-[#1d1a17]">+255 700 000 000</p>
                      <p className="text-xs text-gray-600">+255 600 000 000</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-[#f4e7de]/80 border border-[#1d1a17]/10 p-5 rounded-xs flex items-start gap-4 hover:border-[#a91609]/40 transition-all shadow-2xs">
                    <div className="p-3 bg-[#a91609] text-white rounded-xs shrink-0">
                      <FaEnvelope className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Enquiries</h4>
                      <p className="text-sm font-bold text-[#1d1a17]">info@vivanova.co.tz</p>
                      <p className="text-xs text-gray-600">sales@vivanova.co.tz</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-[#f4e7de]/80 border border-[#1d1a17]/10 p-5 rounded-xs flex items-start gap-4 hover:border-[#a91609]/40 transition-all shadow-2xs">
                    <div className="p-3 bg-[#a91609] text-white rounded-xs shrink-0">
                      <FaMapMarkerAlt className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Headquarters</h4>
                      <p className="text-sm font-bold text-[#1d1a17]">Dar es Salaam, Tanzania</p>
                      <p className="text-xs text-gray-600">Commercial District, Off Sam Nujoma Road</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-[#f4e7de]/80 border border-[#1d1a17]/10 p-5 rounded-xs flex items-start gap-4 hover:border-[#a91609]/40 transition-all shadow-2xs">
                    <div className="p-3 bg-[#a91609] text-white rounded-xs shrink-0">
                      <FaClock className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Working Hours</h4>
                      <p className="text-sm font-bold text-[#1d1a17]">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-xs text-gray-600">Sat: 8:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Quote / Contact Form */}
            <div className="lg:col-span-7 bg-[#f4e7de] border border-[#1d1a17]/15 rounded-xs p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="border-b border-[#1d1a17]/10 pb-4 mb-6">
                  <h3 className="text-2xl font-extrabold text-[#1d1a17] uppercase tracking-wide">
                    Request a Quote
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill out the form below and specify your order details or inquiry.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 rounded-xs flex items-center gap-3 text-sm font-semibold">
                    <FaCheckCircle className="text-emerald-600 text-lg shrink-0" />
                    <span>Thank you! Your quote request has been received. Our team will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#f7f2ea] border border-[#1d1a17]/20 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#a91609] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.co.tz"
                        className="w-full bg-[#f7f2ea] border border-[#1d1a17]/20 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#a91609] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+255 ..."
                        className="w-full bg-[#f7f2ea] border border-[#1d1a17]/20 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#a91609] transition-colors"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Supply Category
                      </label>
                      <select 
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        className="w-full bg-[#f7f2ea] border border-[#1d1a17]/20 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#a91609] transition-colors cursor-pointer"
                      >
                        <option value="general">General Supply Inquiry</option>
                        <option value="building">Building & Construction Materials</option>
                        <option value="commercial">Commercial & Office Stationery</option>
                        <option value="logistics">Logistics & Warehousing Contract</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Order / Inquiry Details *
                    </label>
                    <textarea 
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify required quantities, delivery site location, or project timeline..."
                      className="w-full bg-[#f7f2ea] border border-[#1d1a17]/20 rounded-xs px-4 py-3 text-sm focus:outline-none focus:border-[#a91609] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button with XS Radius */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#a91609] text-white font-bold uppercase tracking-wider text-sm rounded-xs hover:bg-[#8e160d] shadow-sm transition-all cursor-pointer"
                  >
                    Send Message <FaPaperPlane className="text-xs" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}