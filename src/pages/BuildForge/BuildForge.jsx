import { useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";

import Container from "../../components/ui/Container";

function BuildForge() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    project: "",
    portfolio: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const buildStages = [
    {
      number: "01",
      title: "Problem",
      description: "Start with a real problem worth solving.",
    },
    {
      number: "02",
      title: "Research",
      description:
        "Understand users, constraints and what already exists.",
    },
    {
      number: "03",
      title: "Design",
      description: "Shape the solution before writing it.",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Turn the design into working software or hardware.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "Put it in front of people and find what breaks.",
    },
    {
      number: "06",
      title: "Ship",
      description: "Release it to real users.",
    },
  ];

  const buildTypes = [
    "SaaS products",
    "Mobile applications",
    "Web platforms",
    "AI products",
    "Data tools",
    "Automation systems",
    "Developer tools",
    "IoT systems",
    "Robotics",
    "Experimental technologies",
  ];

  const audience = [
    "Developers",
    "Product builders",
    "Designers",
    "Researchers",
    "Engineers",
    "Technical founders",
    "Students with strong technical interest",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 border-b border-slate-800/80">
        {/* Ambient Cyan Glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl rounded-full bg-cyan-500/10 blur-[120px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb & Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span>Home</span>
              <span className="text-cyan-500">/</span>
              <span>Build</span>
              <span className="text-cyan-500">/</span>
              <span className="text-slate-200">Build Forge</span>
            </div>

            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              IEURION BUILD FORGE
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              BUILD{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                FORGE.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Ideas go in. Products come out.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Apply for Build Forge</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#build-cycle"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                See the build cycle
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                THE PROGRAMME
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Where selected builders{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  ship real products.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7 text-base lg:text-lg leading-relaxed text-slate-300">
              <p>
                Build Forge is IEURION's product-building programme. It brings
                selected builders together to work on real products,
                experiments and technology solutions over focused build
                cycles.
              </p>

              <p className="text-slate-400">
                Participants work in teams, take ownership of projects and move
                through the full development process.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          BUILD CYCLE
      ===================================================== */}
      <section
        className="py-20 lg:py-28 border-b border-slate-800/60"
        id="build-cycle"
      >
        <Container>
          <div className="mb-14 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              THE PROCESS
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The build cycle.
            </h2>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
              Every project moves through the same six stages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {buildStages.map((stage) => (
              <article
                key={stage.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {stage.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          WHAT CAN BE BUILT / WHO IT'S FOR
      ===================================================== */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* What can be built */}
            <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  BUILD SCOPE
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                  What can be built.
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                If it can be designed and shipped, it belongs here.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {buildTypes.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 font-mono text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  BUILDERS
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Who it's for.
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Build Forge is for people who want to own what they make.
              </p>

              <ul className="space-y-3 pt-2">
                {audience.map((person) => (
                  <li
                    key={person}
                    className="flex items-center gap-3 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-3.5 backdrop-blur-md transition-colors hover:border-slate-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-950/80 text-cyan-400">
                      <Minus size={14} />
                    </span>
                    <span className="text-sm text-slate-300 font-medium">
                      {person}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROGRAMME DETAILS
      ===================================================== */}
      <section className="py-16 lg:py-20 border-b border-slate-800/60">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                PROGRAMME DETAILS
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Programme details
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Cycle dates, duration, team sizes and how applicants are
                selected will be confirmed by the team before applications open.
                Apply now and we'll write to you with the details.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              To be confirmed
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}
      <section className="py-20 lg:py-28" id="apply">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                APPLICATION
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Apply for Build Forge.
              </h2>

              <p className="text-base text-slate-400">
                Tell us who you are and what you want to build. We'll reply by
                email.
              </p>
            </div>

            <form
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-[#0B0F19]/90 p-8 backdrop-blur-xl shadow-2xl sm:p-12"
              onSubmit={handleSubmit}
            >
              {/* SUCCESS */}
              {submitted && (
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-950/50 p-4 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <Check size={18} className="shrink-0 text-cyan-400" />
                  <span>Application captured. We'll be in touch.</span>
                </div>
              )}

              {/* NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="build-forge-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Name
                </label>
                <input
                  id="build-forge-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label
                  htmlFor="build-forge-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Email
                </label>
                <input
                  id="build-forge-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* ROLE */}
              <div className="space-y-2">
                <label
                  htmlFor="build-forge-role"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Role or skills
                </label>
                <input
                  id="build-forge-role"
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. backend developer, designer"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* PROJECT */}
              <div className="space-y-2">
                <label
                  htmlFor="build-forge-project"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  What do you want to build?
                </label>
                <textarea
                  id="build-forge-project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your product idea or what you're passionate about creating..."
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* PORTFOLIO */}
              <div className="space-y-2">
                <label
                  htmlFor="build-forge-portfolio"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Link to your work (optional)
                </label>
                <input
                  id="build-forge-portfolio"
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="GitHub, portfolio or demo link"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Apply for Build Forge</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default BuildForge;