import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../components/ui/Container";

const researchApproach = [
  {
    number: "01",
    title: "Question",
    description: "Ask something worth answering.",
  },
  {
    number: "02",
    title: "Investigate",
    description: "Study what is known and what is not.",
  },
  {
    number: "03",
    title: "Experiment",
    description: "Test ideas under controlled conditions.",
  },
  {
    number: "04",
    title: "Prototype",
    description: "Make the idea tangible.",
  },
  {
    number: "05",
    title: "Test",
    description: "Check it against real conditions.",
  },
  {
    number: "06",
    title: "Document",
    description: "Write down what was tried and found.",
  },
  {
    number: "07",
    title: "Share",
    description: "Publish so others can build on it.",
  },
];

const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Robotics",
  "Computer Vision",
  "Automation",
  "Software Engineering",
  "Developer Tools",
  "IoT",
  "Emerging Technologies",
  "Digital Infrastructure",
  "African Technology Systems",
];

function Research() {
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
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span>Home</span>
              <span className="text-cyan-500">/</span>
              <span className="text-slate-200">Research</span>
            </div>

            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              IEURION RESEARCH
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              RESEARCH <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                WHAT MATTERS.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Practical, experimental research that stays connected to building.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#research-approach"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore Our Research</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#research-with-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Research With Us
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
                WHY RESEARCH
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technology{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  moves quickly.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7 text-base lg:text-lg leading-relaxed text-slate-300">
              <p>
                IEURION creates space for builders to investigate what is next,
                test new ideas and explore how emerging technologies can solve
                real problems.
              </p>

              <p className="text-slate-400">
                Our research is practical, experimental and connected to
                building.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESEARCH APPROACH
          ===================================================== */}
      <section
        className="py-20 lg:py-28 border-b border-slate-800/60"
        id="research-approach"
      >
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                RESEARCH APPROACH
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                From a good question{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  to something others can use.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400 lg:col-span-5">
              Research at IEURION moves from questions and investigation toward
              experiments, prototypes, testing and shared knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchApproach.map((step) => (
              <article
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>

                  <div className="my-4 h-0.5 w-8 bg-slate-800 transition-all duration-300 group-hover:w-16 group-hover:bg-cyan-500/50" />

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESEARCH AREAS
          ===================================================== */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                RESEARCH AREAS
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Where our builders{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  and researchers are looking.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400 lg:col-span-5">
              We explore technologies and systems that can create practical
              value and open new possibilities for builders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <article
                key={area}
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {area}
                  </h3>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          PUBLICATIONS / ACTIVE PROJECTS
          ===================================================== */}
      <section className="py-16 lg:py-20 border-b border-slate-800/60">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                PUBLICATIONS & ACTIVE PROJECTS
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Work worth{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  sharing.
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Published work, current research projects and collaboration
                terms will be added once the team confirms them.
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
          RESEARCH WITH US FORM
          ===================================================== */}
      <section className="py-20 lg:py-28" id="research-with-us">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                GET INVOLVED
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Research with us.
              </h2>

              <p className="text-base text-slate-400">
                Tell us what you want to investigate. We'll reply by email.
              </p>
            </div>

            <form
              className="rounded-3xl border border-slate-800/80 bg-[#0B0F19]/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl space-y-6"
              onSubmit={handleSubmit}
            >
              {submitted && (
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-950/50 p-4 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-400" />
                  <span>
                    Thanks. Your message has been received. We'll get back to
                    you.
                  </span>
                </div>
              )}

              {/* NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="research-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Name
                </label>
                <input
                  id="research-name"
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
                  htmlFor="research-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Email
                </label>
                <input
                  id="research-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* ORGANISATION */}
              <div className="space-y-2">
                <label
                  htmlFor="research-organisation"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Organisation or affiliation
                </label>
                <input
                  id="research-organisation"
                  name="organisation"
                  type="text"
                  placeholder="Organisation, institution or affiliation"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* RESEARCH QUESTION */}
              <div className="space-y-2">
                <label
                  htmlFor="research-question"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  What would you like to investigate?
                </label>
                <textarea
                  id="research-question"
                  name="question"
                  rows={6}
                  placeholder="Tell us about the question, technology or problem you would like to investigate..."
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Send to the Research Team</span>
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Research;