
// src/components/sections/05-ProjectsSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROJECTS_DATA = {
  eyebrow: "05 / PROJECTS",
  title: "WHAT WE'RE BUILDING.",
  description:
    "Explore our ongoing projects, experiments, and community builds.",
  viewAllHref: "/projects",
  projects: [
    {
      id: "community-learning-platform",
      title: "Community Learning Platform",
      category: "Building",
      categoryColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description:
        "A platform for collaborative learning and skill sharing across the ecosystem.",
      href: "/projects",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "smart-campus-app",
      title: "Smart Campus App",
      category: "Beta",
      categoryColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description:
        "Improving campus life with useful digital tools, real-time schedules, and resources.",
      href: "/projects",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "robotics-kit",
      title: "Robotics Kit",
      category: "Research",
      categoryColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description:
        "Exploring affordable robotics and physical computing hardware for STEM education.",
      href: "/projects",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    },
  ],
};

export default function ProjectsSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60 bg-[#060913]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              {PROJECTS_DATA.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
              {PROJECTS_DATA.title}
            </h2>
            <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
              {PROJECTS_DATA.description}
            </p>
          </div>

          <Link
            to={PROJECTS_DATA.viewAllHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold text-xs tracking-wide transition-all self-start md:self-auto"
          >
            View all projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.projects.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group relative bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              {/* Project Visual Frame */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border backdrop-blur-md ${project.categoryColor}`}
                >
                  • {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}