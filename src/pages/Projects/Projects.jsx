// Projects.jsx

import React, { useState } from 'react';
import { projectCategories, projectData } from '../../data/projects';
import { 
  Box, 
  FlaskConical, 
  Cpu, 
  Users, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Code2, 
  Layers, 
  FolderGit2, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Search
} from 'lucide-react';

export default function Projects() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    building: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Icon Resolver for Categories
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Box':
        return Box;
      case 'FlaskConical':
        return FlaskConical;
      case 'Cpu':
        return Cpu;
      case 'Users':
        return Users;
      default:
        return Layers;
    }
  };

  // Documentation Standard Fields
  const documentationFields = [
    { label: "Project Name", desc: "Official title and code designation" },
    { label: "Description", desc: "High-level summary of capabilities" },
    { label: "Problem", desc: "Core challenge or market inefficiency addressed" },
    { label: "Solution", desc: "Engineering approach and product architecture" },
    { label: "Technology", desc: "Frameworks, languages, infrastructure & dependencies" },
    { label: "Team", desc: "Contributors, maintainers, and lead architects" },
    { label: "Status", desc: "Current development phase or deployment state" },
    { label: "Screenshots", desc: "Visual previews, architecture diagrams & interfaces" },
    { label: "Demo / GitHub", desc: "Live application links or public source repository" },
    { label: "Research Behind", desc: "Underlying papers, technical notes, or benchmarks" },
    { label: "Project Story", desc: "Origin, evolution, and future roadmap" }
  ];

  // Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.building.trim()) {
      newErrors.building = 'Please describe what you are building.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulated local processing / submission handler hook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', role: '', building: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Atmosphere Glow & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28">

        {/* SECTION A: HERO */}
        <header className="pt-8 pb-16 sm:py-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm tracking-wider uppercase font-semibold mb-8 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>IEURION / PROJECTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            WHAT WE'RE <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              BUILDING.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10">
            From early experiments to products for real users and organisations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects-section"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#categories-section"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span>View Categories</span>
            </a>
          </div>
        </header>


        {/* SECTION B: PRODUCT-BUILDING INTRODUCTION */}
        <section className="py-12 sm:py-16 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Ecosystem Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                A product-building environment.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                IEURION is a product-building environment. The projects developed within our ecosystem range from internal experiments to products designed for real users and organisations.
              </p>
            </div>

            {/* Code / Visual Motif Panel */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
                    <span className="ml-2 text-slate-300 font-semibold">architecture_pipeline.env</span>
                  </div>
                  <span className="text-cyan-400/80">LIVE PIPELINE</span>
                </div>

                {/* Abstract Code/Architecture Visual */}
                <div className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>01. Ideation & Research</span>
                    </div>
                    <span className="text-slate-500 text-xs">[Experimental]</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <span>02. Rapid Prototyping</span>
                    </div>
                    <span className="text-slate-500 text-xs">[Internal Builds]</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>03. User Validation & Deployment</span>
                    </div>
                    <span className="text-slate-500 text-xs">[Production]</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Iterative Development Framework</span>
                  <span className="text-cyan-400 font-mono">v2.0.26</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION C: PROJECT CATEGORIES */}
        <section className="py-16 border-t border-slate-800/60" id="categories-section">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Project categories.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Four kinds of work live here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((category) => {
              const IconComp = getCategoryIcon(category.icon);
              return (
                <div
                  key={category.id}
                  className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] backdrop-blur-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center text-xs text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* SECTION D: PROJECT DOCUMENTATION STANDARD */}
        <section className="py-16 border-t border-slate-800/60">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
              <FileText className="w-4 h-4" />
              <span>Standardization Specification</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              On every project page.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Each project is documented the same way, so you can see what it is and how it came to be.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-10 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationFields.map((field, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-bold text-white">{field.label}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-1">
                    {field.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION E: PROJECTS LISTING AND EMPTY STATE */}
        <section className="py-16 border-t border-slate-800/60" id="projects-section">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Projects
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Published works and active developments
              </p>
            </div>
            <div className="hidden sm:block text-xs uppercase tracking-widest font-mono text-slate-500">
              [ {projectData.length} PUBLISHED ]
            </div>
          </div>

          {projectData.length > 0 ? (
            /* Dynamic Rendering for Future Projects */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project) => (
                <article 
                  key={project.id}
                  className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  </div>
                  {project.ctaLink && (
                    <a href={project.ctaLink} className="text-cyan-400 text-sm font-semibold inline-flex items-center gap-1">
                      View Project <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          ) : (
            /* Premium Empty State */
            <div className="rounded-3xl bg-slate-900/30 border border-slate-800 p-10 sm:p-16 text-center relative overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <FolderGit2 className="w-8 h-8" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
                  Coming soon
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Project entries are being prepared.
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Project pages will appear here as the team publishes them. Have something to share? Tell us below.
                </p>

                <a
                  href="#share-section"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 text-sm group"
                >
                  <span>Submit a project idea</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}
        </section>


        {/* SECTION F: SHARE WHAT YOU'RE BUILDING */}
        <section className="py-16 border-t border-slate-800/60" id="share-section">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Share what you're building.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Tell us who you are and what you're working on. We'll reply by email.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-xl space-y-6"
            >
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Submission Received</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Thank you for sharing your project. The IEURION team will review your submission and follow up via email.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.name ? 'border-amber-500 focus:ring-amber-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      errors.email ? 'border-amber-500 focus:ring-amber-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Role or Skills */}
              <div>
                <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Role or Skills <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Full-Stack Engineer / UI Designer / Student"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm focus:outline-none transition-all"
                />
              </div>

              {/* What are you building */}
              <div>
                <label htmlFor="building" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  What are you building? <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="building"
                  name="building"
                  rows={4}
                  value={formData.building}
                  onChange={handleChange}
                  placeholder="Briefly describe your project, technical stack, or prototype idea..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                    errors.building ? 'border-amber-500 focus:ring-amber-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                  } text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
                />
                {errors.building && (
                  <p className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.building}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send to the team'}</span>
                </button>
              </div>
            </form>
          </div>
        </section>


        {/* SECTION G: CLOSING CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-cyan-500/20 p-10 sm:p-14 text-center relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Join the Builder Ecosystem.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Connect with creators, contribute to open-source prototypes, and turn engineering ideas into reality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#share-section"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <span>Share a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}