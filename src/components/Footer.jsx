import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#181512] text-[#BDB3A6] font-sans px-10 pt-15 pb-7.5">
      {/* Top Header / Brand Section */}
      <div className="flex justify-between items-start flex-wrap gap-5 pb-10">
        <div>
          {/* Accent Color Blocks */}
          <div className="flex gap-1.5 mb-4">
            <span className="w-5 h-1 bg-[#C84B31]"></span>
            <span className="w-5 h-1 bg-[#D99B26]"></span>
            <span className="w-5 h-1 bg-[#587058]"></span>
          </div>
          <h2 className="text-white text-[30px] font-bold m-0 mb-3">
            Vivanova General Supplies Limited
          </h2>
          <p className="m-0 max-w-100 leading-normal text-[#9E9487]">
            Reliable sourcing, practical building support, and dependable supply solutions for homes, businesses, and projects of every scale.
          </p>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+255677359018"
            className="text-white no-underline py-2.5 px-5 border border-[#3D352E] rounded-full text-sm"
          >
            +255 677 359 018
          </a>
          <a
            href="#contact"
            className="bg-[#822F2B] text-white no-underline py-2.5 px-5 rounded-full text-sm font-medium"
          >
            Get in touch
          </a>
        </div>
      </div>

      <hr className="border-t border-[#2A241F] m-0 mb-10" />

      {/* Grid Links & Information Section */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 pb-10">
        {/* Company */}
        <div>
          <h4 className="text-[#8E8375] text-xs tracking-wider uppercase mb-4">
            COMPANY
          </h4>
          <p className="m-0 leading-relaxed text-[#BDB3A6]">
            Supplying the essentials that keep projects moving, businesses stocked, and customers served.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#8E8375] text-xs tracking-wider uppercase mb-4">
            QUICK LINKS
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {[
              { label: 'Products', href: '/#services' },
              { label: 'About Us', href: '/about' },
              { label: 'Projects', href: '/#gallery' },
              { label: 'Our Standards', href: '/#about' },
              { label: 'FAQs', href: '/#faq' },
              { label: 'Contact', href: '/#contact' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#BDB3A6] no-underline text-sm hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[#8E8375] text-xs tracking-wider uppercase mb-4">
            HOURS
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
            <li>Mon – Fri 8:00 AM – 6:00 PM</li>
            <li>Saturday 9:00 AM – 3:00 PM</li>
            <li>Sunday Closed</li>
          </ul>
          <p className="mt-4 mb-0 text-xs text-[#8E8375]">
            Ready to support your next order and delivery schedule.
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-[#8E8375] text-xs tracking-wider uppercase mb-4">
            LOCATION
          </h4>
          <address className="not-italic leading-relaxed text-sm mb-3">
            Dar es Salaam, Tanzania<br />
            Serving businesses nationwide
          </address>
          <p className="m-0 mb-3 text-sm">+255 677 359 018</p>
          <p className="m-0 text-xs text-[#8E8375]">
            Fast response for supply enquiries and commercial orders.
          </p>
        </div>
      </div>

      <hr className="border-t border-[#2A241F] m-0 mb-6" />

      {/* Bottom Copyright Section */}
      <div className="flex justify-between items-center text-xs text-[#8E8375] flex-wrap gap-3">
        <div>© 2026 Vivanova General Supplies Limited. All rights reserved.</div>
        <div>
          Trusted supply partner ·{' '}
          <a href="#top" className="text-[#8E8375] no-underline hover:underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
