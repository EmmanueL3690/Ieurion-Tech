// src/components/sections/07-ProgrammesSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, UserCheck, ArrowRight } from "lucide-react";

const PROGRAMMES_DATA = {
  eyebrow: "PROGRAMMES",
  title: "FROM CAMPUS TO BUILDING.",
  description:
    "Gain practical experience, work on real projects, and grow your skills with IEURION.",
  programmes: [
    {
      id: "siwes",
      title: "Campus / SIWES",
      subtitle:
        "For academia ready to learn. Dual experience solution designed to bridge theory and industry engineering.",
      icon: GraduationCap,
      bgImage:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
      cta1: { label: "University Partnership", href: "/partners" },
      cta2: { label: "Apply as a Student", href: "/siwes" },
    },
    {
      id: "residency",
      title: "Builder Residency",
      subtitle:
        "For focused creators, engineers, and researchers building long-term technology solutions and products.",
      icon: UserCheck,
      bgImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      cta1: { label: "Independent Creators", href: "/about" },
      cta2: { label: "Apply for Residency", href: "/residency" },
    },
  ],
};

export default function ProgrammesSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            {PROGRAMMES_DATA.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
            {PROGRAMMES_DATA.title}
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
            {PROGRAMMES_DATA.description}
          </p>
        </div>

        {/* 2 Large Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMMES_DATA.programmes.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Visual Background Accent */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={prog.bgImage}
                    alt={prog.title}
                    className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 backdrop-blur-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Action Buttons */}
                <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {prog.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                    <Link
                      to={prog.cta1.href}
                      className="px-4 py-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/50 transition-colors"
                    >
                      {prog.cta1.label}
                    </Link>

                    <Link
                      to={prog.cta2.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/10"
                    >
                      {prog.cta2.label}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}