import React, { useState } from 'react';

const faqs = [
  {
    question: "Do you supply products for businesses and contractors?",
    answer: "Yes. We support businesses, institutions, contractors, and individuals with dependable supply solutions for day-to-day operations and project work."
  },
  {
    question: "Can I request a quote for bulk orders?",
    answer: "Absolutely. We can provide tailored quotations for large, recurring, or project-based orders based on your requirements and delivery schedule."
  },
  {
    question: "What are your operating hours?",
    answer: "Our office is open Monday to Friday from 8:00 AM to 6:00 PM, with Saturday support available from 9:00 AM to 3:00 PM."
  },
  {
    question: "Do you offer support for ongoing supply needs?",
    answer: "Yes. We work with clients who need consistent supply arrangements and can support repeat orders, procurement planning, and reliable delivery coordination."
  },
];

export default function FAQAndContact() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" class="section-spacing bg-[#a91609] py-20">
      <div class="container-gym max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column: FAQ Accordion */}
          <div>
            <div>
              <span class="text-md text-white font-semibold tracking-[0.25em] uppercase mb-4 block">
                FAQ
              </span>
            </div>
            <div>
              <h2
                class="text-4xl md:text-5xl font-black uppercase text-white mb-10"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                FREQUENTLY<br />
                <span class="text-bl">ASKED</span>
              </h2>
            </div>

            <div class="space-y-1">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} class="border-b border-[#1a1a1a]">
                    <button
                      onClick={() => toggleAccordion(index)}
                      class="flex items-center justify-between gap-4 w-full py-6 text-left group transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <span class="text-base font-semibold text-white group-hover:text-white/80 transition-colors">
                        {faq.question}
                      </span>
                      <div
                        class={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'border-[#1a1d0f] text-[#1a1d0f] rotate-45'
                            : 'border-[#333] text-slate-600 group-hover:border-[#555]'
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {isOpen && (
                      <div class="pb-6 text-white/60 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div class="rounded-md p-5 md:p-10">
              <span class="text-md text-white font-semibold tracking-[0.25em] uppercase mb-4 block">
                Get In Touch
              </span>
              <h3
                class="text-3xl md:text-4xl font-black uppercase leading-tight text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                REQUEST A<br />SUPPLY QUOTE
              </h3>
              <p class="text-white/50 text-sm mb-8">
                Share your requirements and we'll respond with the right solution for your order and delivery needs.
              </p>

              <form onSubmit={handleSubmit} class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      class="w-full bg-[#0b0b0b] rounded-md px-4 py-3 text-white text-sm placeholder:text-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      class="w-full bg-[#0b0b0b] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Requirements / Message
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us the products or materials you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    class="w-full bg-[#0b0b0b] border border-[#222] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#d7ff2f]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  class="w-full py-4 bg-[#0b0b0b] text-[#ffff] font-black uppercase tracking-wider rounded-full text-sm hover:bg-[#0b0b0b] hover:shadow-[0_0_25px_rgba(215,255,47,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-send"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}