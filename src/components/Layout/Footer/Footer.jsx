import React from "react";
import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import logoImg from "../../../assets/images/Logo-png-removebg-preview.png";

function Footer() {
  const exploreLinks = [
    { label: "Developer House", href: "/developer-house" },
    { label: "Build Forge", href: "/build-forge" },
    { label: "Research", href: "/research" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "Coders Cup", href: "/coders-cup" },
    { label: "Robotics Lab", href: "/robotics" },
    { label: "Products", href: "/products" },
  ];

  const joinLinks = [
    { label: "Join the House", href: "/community" },
    { label: "Builder Residency", href: "/residency" },
    { label: "Campus / SIWES", href: "/siwes" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "Coders Cup", href: "/coders-cup" },
  ];

  const workWithUsLinks = [
    { label: "Become a Partner", href: "/partners" },
    { label: "Submit a Challenge", href: "/challenges" },
    { label: "Research With Us", href: "/research" },
    { label: "FAQs", href: "/faq" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ];

  return (
    <footer className="relative w-full bg-[#020914] text-white pt-16 pb-12 border-t border-slate-800/60 overflow-hidden">
      {/* Ambient Glow Accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,195,255,0.08)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Main Footer Content Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          {/* Brand Info & Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="IEURION Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-black tracking-widest text-white uppercase group-hover:text-[#00c3ff] transition-colors">
                TECH<span className="text-[#00c3ff]">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A global community of builders creating technology solutions from Africa for the world.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* 1. Explore */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Explore
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                {exploreLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className="hover:text-cyan-300 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Join */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Join
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                {joinLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className="hover:text-cyan-300 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Work with us */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Work with us
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                {workWithUsLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className="hover:text-cyan-300 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Social */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Social
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
                {socialLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300 transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <span>
            © {new Date().getFullYear()} IEURION Technologies
          </span>

          <span className="text-slate-600">
            All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;