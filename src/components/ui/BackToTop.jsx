// src/components/ui/BackToTop.jsx

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-slate-700/80 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}