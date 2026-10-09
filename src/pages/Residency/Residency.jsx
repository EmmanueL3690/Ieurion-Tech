import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../components/ui/Container";

const residencyActivities = [
  "Independent projects",
  "Team projects",
  "Research",
  "Product development",
  "Code reviews",
  "Technical talks",
  "Demo days",
  "Community events",
];

const residencyExperience = [
  {
    number: "01",
    title: "Dedicated time",
    description:
      "Create the space to focus deeply on software, research or technology projects.",
  },
  {
    number: "02",
    title: "Shared environment",
    description:
      "Work alongside other builders, exchange ideas and share progress.",
  },
  {
    number: "03",
    title: "Technical sessions",
    description:
      "Participate in technical sessions, code reviews, talks and demo days.",
  },
  {
    number: "04",
    title: "Ecosystem contribution",
    description:
      "Contribute to the wider IEURION ecosystem and the people building within it.",
  },
];

function BuilderResidency() {
  const [submitted, setSubmitted] = useState(false);

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
              <span className="text-slate-200">Builder Residency</span>
            </div>

            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              IEURION BUILD
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              BUILDER{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                RESIDENCY.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Time. Space. People. Build.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#apply-residency"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Apply for Residency</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#residency-activities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Explore Residency
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
                THE RESIDENCY
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Time to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  build deeply.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7 text-base lg:text-lg leading-relaxed text-slate-300">
              <p>
                Builder Residency is a focused programme for selected builders
                who want dedicated time and an environment to work deeply on
                software, research or technology projects.
              </p>

              <p className="text-slate-400">
                Residents work alongside other builders, participate in technical
                sessions, share progress and contribute to the wider IEURION
                ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESIDENCY ACTIVITIES
          ===================================================== */}
      <section
        className="py-20 lg:py-28 border-b border-slate-800/60"
        id="residency-activities"
      >
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                RESIDENCY ACTIVITIES
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                What residents{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  do.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400 lg:col-span-5">
              Residents use their time in the programme to work on meaningful
              technical projects, learn with others and contribute to the wider
              builder ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {residencyActivities.map((activity, index) => (
              <article
                key={activity}
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                    {activity}
                  </h3>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400 shrink-0"
                />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESIDENCY EXPERIENCE
          ===================================================== */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-3 lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                THE EXPERIENCE
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build alongside{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  other builders.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {residencyExperience.map((item) => (
                <div
                  key={item.number}
                  className="group flex gap-5 rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-6 backdrop-blur-md transition-colors hover:border-slate-700"
                >
                  <span className="font-mono text-sm font-bold text-cyan-400 shrink-0 pt-0.5">
                    {item.number}
                  </span>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          APPLICATION NOTE
          ===================================================== */}
      <section className="py-16 lg:py-20 border-b border-slate-800/60">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                RESIDENCY
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to build?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Builder Residency is designed for selected builders who want
                dedicated time and an environment to work deeply on their
                projects.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Selected builders
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          APPLICATION FORM
          ===================================================== */}
      <section className="py-20 lg:py-28" id="apply-residency">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                GET INVOLVED
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Apply for Residency.
              </h2>

              <p className="text-base text-slate-400">
                Tell us who you are and what you want to build. We'll review
                your application and get back to you.
              </p>
            </div>

            <form
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-[#0B0F19]/90 p-8 backdrop-blur-xl shadow-2xl sm:p-12"
              onSubmit={handleSubmit}
            >
              {submitted && (
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-950/50 p-4 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-400" />
                  <span>
                    Thanks. Your application has been received. We'll get back
                    to you.
                  </span>
                </div>
              )}

              {/* NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="residency-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Name
                </label>
                <input
                  id="residency-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label
                  htmlFor="residency-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Email
                </label>
                <input
                  id="residency-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* ROLE */}
              <div className="space-y-2">
                <label
                  htmlFor="residency-role"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Role or skills
                </label>
                <input
                  id="residency-role"
                  name="role"
                  type="text"
                  placeholder="e.g. developer, researcher, designer"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* PROJECT */}
              <div className="space-y-2">
                <label
                  htmlFor="residency-project"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  What do you want to build?
                </label>
                <textarea
                  id="residency-project"
                  name="project"
                  rows={6}
                  placeholder="Tell us about the project you want to work on..."
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Apply for Residency</span>
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default BuilderResidency;