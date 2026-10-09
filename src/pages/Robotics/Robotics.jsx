import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../../components/ui/Container";

const labAreas = [
  "Robotics",
  "Embedded Systems",
  "Arduino",
  "Microcontrollers",
  "Sensors",
  "Automation",
  "Computer Vision",
  "AI",
  "Autonomous Systems",
  "IoT",
];

function RoboticsLab() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-800/80 py-20 lg:py-32 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]">
        <Container>
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-6 text-xs font-mono uppercase tracking-widest text-slate-400">
              Home <span className="text-slate-600 mx-1">/</span> Build <span className="text-slate-600 mx-1">/</span> <span className="text-cyan-400">Robotics Lab</span>
            </div>

            {/* Eyebrow Tag */}
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              IEURION BUILD
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-mono">
              ROBOTICS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                LAB.
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Software meets the physical world.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#join-robotics-lab"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
              >
                Join the Robotics Lab
                <ArrowRight size={16} />
              </a>

              <a
                href="#lab-areas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all active:scale-[0.98]"
              >
                Explore the Lab
              </a>
            </div>

          </div>
        </Container>
      </section>


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section className="py-20 border-b border-slate-800/60 bg-slate-900/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold mb-3 block">
                THE LAB
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Code that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  moves things.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                The IEURION Robotics Lab explores robotics,
                embedded systems, automation and intelligent
                machines.
              </p>

              <p className="text-slate-400">
                Builders work with hardware and software to
                design, program and test physical systems.
              </p>
            </div>

          </div>
        </Container>
      </section>


      {/* =====================================================
          LAB AREAS
          ===================================================== */}

      <section
        className="py-24 border-b border-slate-800/60"
        id="lab-areas"
      >
        <Container>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold mb-3 block">
                LAB AREAS
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What builders work{" "}
                <span className="text-slate-400 font-normal">
                  on at the bench.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-slate-400 text-sm leading-relaxed">
              The lab brings software and physical systems
              together across a range of robotics and
              emerging technology disciplines.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {labAreas.map((area, index) => (
              <article
                className="group relative flex items-center justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
                key={area}
              >
                <div className="text-2xl font-mono font-bold text-slate-600 group-hover:text-cyan-400 transition-colors mr-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0 mr-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {area}
                  </h3>

                  <span className="text-xs text-slate-500 uppercase tracking-wider font-mono group-hover:text-slate-400 transition-colors">
                    Explore
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0"
                />
              </article>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          EQUIPMENT / ACCESS
          ===================================================== */}

      <section className="py-20 border-b border-slate-800/60">
        <Container>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 p-8 sm:p-12 md:flex items-center justify-between gap-8 shadow-2xl">

            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold block">
                EQUIPMENT, ACCESS AND PROJECTS
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Everything you need{" "}
                <span className="text-cyan-400">starts here.</span>
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Available hardware, lab hours, access rules
                and current robotics projects will be added
                once the team confirms them.
              </p>

              <p className="text-slate-400 text-sm">
                Tell us what you want to build below and
                we'll write to you.
              </p>
            </div>


            <div className="mt-8 md:mt-0 shrink-0 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-sm font-medium text-slate-300 shadow-inner">

              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
              </span>

              <span>
                To be confirmed
              </span>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          JOIN FORM
          ===================================================== */}

      <section
        className="py-24 max-w-3xl mx-auto px-4"
        id="join-robotics-lab"
      >
        <Container>

          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold block">
              GET INVOLVED
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Join the Robotics Lab.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto">
              Tell us who you are and what you want to
              build. We'll reply by email.
            </p>
          </div>


          <form
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6"
            onSubmit={handleSubmit}
          >

            {submitted && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                <CheckCircle2 size={18} className="shrink-0" />

                <span>
                  Thanks. Your interest has been received.
                  We'll get back to you by email.
                </span>
              </div>
            )}


            <div className="space-y-2">
              <label
                htmlFor="robotics-name"
                className="block text-sm font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="robotics-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
              />
            </div>


            <div className="space-y-2">
              <label
                htmlFor="robotics-email"
                className="block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="robotics-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
              />
            </div>


            <div className="space-y-2">
              <label
                htmlFor="robotics-role"
                className="block text-sm font-medium text-slate-300"
              >
                Role or skills
              </label>

              <input
                id="robotics-role"
                name="role"
                type="text"
                placeholder="e.g. robotics engineer, developer, student"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
              />
            </div>


            <div className="space-y-2">
              <label
                htmlFor="robotics-project"
                className="block text-sm font-medium text-slate-300"
              >
                What do you want to build?
              </label>

              <textarea
                id="robotics-project"
                name="project"
                rows={6}
                placeholder="Tell us about the robotics project or idea you want to explore..."
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm resize-y"
              />
            </div>


            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.99] cursor-pointer"
            >
              Join the Robotics Lab
              <ArrowRight size={17} />
            </button>

          </form>

        </Container>
      </section>

    </main>
  );
}

export default RoboticsLab;