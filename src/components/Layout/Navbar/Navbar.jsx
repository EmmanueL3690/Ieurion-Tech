// src/components/Layout/Navbar/Navbar.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Container from "../../ui/Container";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";

import logo from "../../../assets/images/Logo-png-removebg-preview.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const buildItems = [
    { id: "dev-house", label: "Developer House", href: "/developer-house" },
    { id: "build-forge", label: "Build Forge", href: "/build-forge" },
    { id: "residency", label: "Builder Residency", href: "/residency" },
    { id: "robotics", label: "Robotics Lab", href: "/robotics" },
  ];

  const competeItems = [
    { id: "hackathons", label: "Hackathons", href: "/hackathons" },
    { id: "coders-cup", label: "Coders Cup", href: "/coders-cup" },
    { id: "events", label: "Events", href: "/events" },
  ];

  const communityItems = [
    { id: "builders", label: "Builders", href: "/community" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "siwes", label: "Campus / SIWES", href: "/siwes" },
    { id: "open-source", label: "Open Source", href: "/open-source" },
  ];

  const partnerItems = [
    { id: "partner", label: "Become a Partner", href: "/partners" },
    { id: "challenge", label: "Submit a Challenge", href: "/challenges" },
  ];

  const aboutItems = [
    { id: "story", label: "Our Story", href: "/about" },
    { id: "faq", label: "FAQs", href: "/faq" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#02050b]/90 backdrop-blur-md border-b border-slate-800/60 transition-all duration-300">
        <Container className="h-full">
          <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
            {/* BRAND LOGO */}
            <Link 
              to="/" 
              className="flex items-center gap-3 py-1 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all group" 
              aria-label="IEURION Home"
            >
              <img 
                src={logo} 
                alt="IEURION Logo" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="sr-only">IEURION</span>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10" aria-label="Main navigation">
              <NavDropdown label="Build" items={buildItems} />

              <Link 
                to="/products" 
                className={`text-[13px] font-semibold tracking-tight py-2 px-1 transition-colors duration-200 ${
                  isActiveLink("/products")
                    ? "text-cyan-400" 
                    : "text-slate-200 hover:text-cyan-300"
                }`}
              >
                Products
              </Link>

              <Link 
                to="/research" 
                className={`text-[13px] font-semibold tracking-tight py-2 px-1 transition-colors duration-200 ${
                  isActiveLink("/research")
                    ? "text-cyan-400" 
                    : "text-slate-200 hover:text-cyan-300"
                }`}
              >
                Research
              </Link>

              <NavDropdown label="Compete" items={competeItems} />
              <NavDropdown label="Community" items={communityItems} />
              <NavDropdown label="Partners" items={partnerItems} />
              <NavDropdown label="About" items={aboutItems} />
            </nav>

            {/* ACTION BUTTONS */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              <Link 
                to="/partners" 
                className="text-[13px] font-semibold text-slate-300 hover:text-cyan-300 py-2 px-1 transition-colors duration-200"
              >
                Partner With IEURION
              </Link>

              <Link 
                to="/community" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 text-[13px] font-bold hover:bg-cyan-300 active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400/80"
              >
                <span>Join the House</span>
                <ArrowUpRight size={15} className="stroke-[2.5]" />
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              type="button" 
              className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 active:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              onClick={() => setMobileOpen((current) => !current)} 
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} 
              aria-expanded={mobileOpen} 
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu 
        isOpen={mobileOpen} 
        onClose={() => setMobileOpen(false)} 
      />
    </>
  );
}

export default Navbar;