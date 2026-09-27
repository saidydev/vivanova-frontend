import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Portfolio", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="Vivanova General Supplies"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                        isActive
                          ? "text-[#a91609]"
                          : "text-slate-700 hover:text-[#0038a8]"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a91609]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#a91609] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-all duration-200 hover:bg-[#8e160d] shadow-md hover:shadow-lg"
              >
                Get in Touch
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-slate-800 p-2 rounded-xs hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer (Slides in from Left) */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-xs bg-[#111111] text-white flex flex-col justify-between p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <img src={logo} alt="Vivanova Logo" className="h-10 w-auto object-contain brightness-110" />
            </Link>

            <button
              className="text-slate-400 hover:text-white p-1 rounded-xs transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xs font-bold text-sm uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#a91609] text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer & Action Button */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400 px-2">
            <PhoneCall size={16} className="text-[#a91609]" />
            <span>Reliable Sourcing & Supply</span>
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3 bg-[#a91609] text-white text-center font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#8e160d] transition-colors shadow-md"
          >
            Request a Quote
          </Link>
        </div>
      </aside>
    </>
  );
}