import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../components/ui/Container";

const hackathonStages = [
  {
    number: "01",
    title: "Challenge",
    description: "A real problem or technology theme.",
  },
  {
    number: "02",
    title: "Build",
    description: "Teams turn ideas into working prototypes.",
  },
  {
    number: "03",
    title: "Mentor",
    description:
      "Experienced builders and industry professionals support teams.",
  },
  {
    number: "04",
    title: "Demo",
    description: "Teams present what they built.",
  },
  {
    number: "05",
    title: "Judge",
    description: "Projects are evaluated against defined criteria.",
  },
  {
    number: "06",
    title: "Celebrate",
    description: "The strongest ideas, teams and builders are recognised.",
  },
];

const hackathonTracks = [
  "AI",
  "Fintech",
  "HealthTech",
  "ClimateTech",
  "EdTech",
  "Developer Tools",
  "Robotics",
  "Open Innovation",
  "Social Impact",
];

function Hackathons() {
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
              <span>Compete</span>
              <span className="text-cyan-500">/</span>
              <span className="text-slate-200">Hackathons</span>
            </div>

            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              IEURION HACKATHONS
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              HACK.{" "}
              <span className="text-cyan-400">BUILD. </span>
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                SHIP.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Focused periods of intense building, with real challenges and a
              demo at the end.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#hackathon-experience"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore the Hackathon</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#join-hackathon"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Join the Next Hackathon
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
                THE IDEA
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build something{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  in one sprint.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7 text-base lg:text-lg leading-relaxed text-slate-300">
              <p>
                IEURION Hackathons bring developers, designers, researchers and
                innovators together for focused periods of intense building.
              </p>

              <p className="text-slate-400">
                Participants form teams, tackle challenges, experiment with
                technology and present what they create.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          HACKATHON EXPERIENCE
          ===================================================== */}
      <section
        className="py-20 lg:py-28 border-b border-slate-800/60"
        id="hackathon-experience"
      >
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                THE HACKATHON EXPERIENCE
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Six stages, from the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  first challenge to the final celebration.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400 lg:col-span-5">
              A focused experience designed to move teams from a real
              challenge to something they can demonstrate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hackathonStages.map((stage) => (
              <article
                key={stage.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-cyan-400">
                      {stage.number}
                    </span>
                    <div className="h-px flex-1 bg-slate-800 ml-4 group-hover:bg-cyan-500/30 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          HACKATHON TRACKS
          ===================================================== */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                HACKATHON TRACKS
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Choose a problem.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Build around it.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400 lg:col-span-5">
              Possible tracks include technology, industry and open innovation
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hackathonTracks.map((track, index) => (
              <article
                key={track}
                className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                    {track}
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
          DATES AND DETAILS
          ===================================================== */}
      <section className="py-16 lg:py-20 border-b border-slate-800/60">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                DATES AND DETAILS
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                The next one is{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  taking shape.
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Dates, location, team sizes, prizes and judging criteria will
                be announced by the team.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Sign up below and we'll write to you first.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              To be confirmed
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PARTNER
          ===================================================== */}
      <section className="py-16 lg:py-20 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#0B0F19]/80 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                BECOME A HACKATHON PARTNER
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Support the builders.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                Support hackathons, research, builder programmes, developer
                initiatives and innovation projects.
              </p>
            </div>

            <a
              href="/partners"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Partner With IEURION</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      {/* =====================================================
          JOIN HACKATHON
          ===================================================== */}
      <section className="py-20 lg:py-28" id="join-hackathon">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                GET INVOLVED
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join the next hackathon.
              </h2>

              <p className="text-base text-slate-400">
                Tell us who you are and what you'd like to build. We'll email you
                when registration opens.
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
                    Thanks. Your interest has been received. We'll contact you
                    when registration opens.
                  </span>
                </div>
              )}

              {/* NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="hackathon-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Name
                </label>
                <input
                  id="hackathon-name"
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
                  htmlFor="hackathon-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Email
                </label>
                <input
                  id="hackathon-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* ROLE / SKILLS */}
              <div className="space-y-2">
                <label
                  htmlFor="hackathon-role"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Role or skills
                </label>
                <input
                  id="hackathon-role"
                  name="role"
                  type="text"
                  placeholder="Developer, designer, researcher..."
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* TRACKS */}
              <div className="space-y-2">
                <label
                  htmlFor="hackathon-tracks"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Which tracks interest you?
                </label>
                <select
                  id="hackathon-tracks"
                  name="tracks"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">
                    Select a track
                  </option>
                  {hackathonTracks.map((track) => (
                    <option key={track} value={track} className="bg-slate-900 text-slate-100">
                      {track}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Join the Next Hackathon</span>
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Hackathons;