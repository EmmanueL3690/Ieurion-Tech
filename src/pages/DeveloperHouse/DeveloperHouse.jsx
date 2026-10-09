import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Wifi,
  Zap,
} from "lucide-react";

import Container from "../../components/ui/Container";

function DeveloperHouse() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const activities = [
    "Product development",
    "Software engineering",
    "AI experimentation",
    "Data projects",
    "Robotics",
    "Research",
    "Open-source development",
    "Team projects",
    "Technical discussions",
    "Code reviews",
    "Demos",
    "Build sessions",
    "Community events",
  ];

  const audience = [
    "Developers who want to build beyond their day job or coursework",
    "Designers and researchers who want to work with builders",
    "Students who want to work on real projects",
    "Anyone with a problem worth solving and the will to ship",
  ];

  const faqs = [
    {
      question: "Is there internet access at the House?",
      answer:
        "House infrastructure and connectivity details will be confirmed by the IEURION team before launch.",
    },
    {
      question: "What happens when the power goes out?",
      answer:
        "Power and infrastructure arrangements will be communicated as the Developer House moves toward opening.",
    },
    {
      question: "Who can join?",
      answer:
        "The Developer House is designed for developers, designers, researchers, students, makers and technology enthusiasts who want to build, collaborate and learn.",
    },
    {
      question: "Does it cost anything?",
      answer:
        "Membership and access details will be communicated by the IEURION team as the House opens.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 border-b border-slate-800/80">
        {/* Ambient Cyan Background Glow */}
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
              <span className="text-slate-200">Developer House</span>
            </div>

            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              DEVELOPER HOUSE
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-none">
              THE DEVELOPER{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                HOUSE.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              A physical and community environment where builders come together
              to write code, build products, experiment with technology and
              learn from one another.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Join the Developer House</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Read the FAQs</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                THE HOUSE
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Somewhere to build,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  every day.
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-7 text-base lg:text-lg leading-relaxed text-slate-300">
              <p>
                The Developer House is IEURION's physical and community
                environment for people who want to spend more time building.
              </p>

              <p>
                It is a place to write code, work on products, collaborate
                with other builders, experiment with technology and turn ideas
                into something real.
              </p>

              <p className="text-slate-400 font-medium">
                Nothing here is a course. People work on real things and help
                each other finish them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          WHAT HAPPENS HERE / WHO IT'S FOR
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Inside the House */}
            <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  INSIDE THE HOUSE
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                  What happens here.
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                A normal week at the House is built around creating,
                experimenting and working with other builders.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {activities.map((activity) => (
                  <span
                    key={activity}
                    className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 font-mono text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-500/40 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Who It's For */}
            <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  THE COMMUNITY
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Who it's for.
                </h2>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                You don't need a job title to belong.
              </p>

              <ul className="space-y-4 pt-2">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 backdrop-blur-md transition-colors hover:border-slate-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-950/80 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                      <Check size={14} />
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          INSIDE THE SPACE (VISUAL GRID)
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="mb-12 space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              THE SPACE
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inside the House.
            </h2>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
              Real photos of the space will go here as the House takes shape.
              For now, these visual blocks show what happens at the House, not
              the space itself.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Workspace (Featured Large) */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] sm:col-span-2">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80">
                <div className="grid grid-cols-2 gap-3 p-4 w-full max-w-xs opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="h-14 rounded-lg border border-cyan-500/30 bg-cyan-950/40" />
                  <div className="h-14 rounded-lg border border-indigo-500/30 bg-indigo-950/40" />
                  <div className="h-14 rounded-lg border border-slate-700 bg-slate-900" />
                  <div className="h-14 rounded-lg border border-cyan-500/30 bg-cyan-950/40" />
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Workspace
              </div>
            </article>

            {/* Build Session */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80">
                <div className="flex items-end gap-2">
                  <div className="h-10 w-6 rounded-t bg-slate-800" />
                  <div className="h-20 w-6 rounded-t bg-cyan-500/60 group-hover:bg-cyan-400 transition-colors" />
                  <div className="h-14 w-6 rounded-t bg-indigo-500/60" />
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Build session
              </div>
            </article>

            {/* Code Review */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80 p-6">
                <div className="w-full space-y-2.5">
                  <div className="h-2.5 w-3/4 rounded bg-cyan-500/50" />
                  <div className="h-2.5 w-1/2 rounded bg-slate-800" />
                  <div className="h-2.5 w-5/6 rounded bg-indigo-500/50" />
                  <div className="h-2.5 w-2/3 rounded bg-slate-800" />
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Code review
              </div>
            </article>

            {/* Demo Day */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] sm:col-span-2 lg:col-span-1">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">
                  <span className="ml-1 text-xl">▶</span>
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Demo day
              </div>
            </article>

            {/* Robotics Bench */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-cyan-500/40">
                  <div className="h-6 w-6 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Robotics bench
              </div>
            </article>

            {/* Common Area */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]">
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/80">
                <div className="flex -space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950 font-mono text-xs font-bold text-cyan-300">
                    A
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-950 font-mono text-xs font-bold text-indigo-300">
                    B
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 font-mono text-xs font-bold text-slate-300">
                    C
                  </div>
                </div>
              </div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                Common area
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* =========================================
          HOUSE IS TAKING SHAPE
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The House is taking shape.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                We're setting up the space. Here is the work so far, and we'll
                add photos as it fills with builders.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              In progress
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md"
              >
                <span className="font-mono text-xs font-semibold text-slate-500">
                  Progress photo
                </span>
              </div>
            ))}
          </div>

          {/* Notify Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-white">
                Get notified when we open
              </h3>
              <p className="text-sm text-slate-400">
                Leave your email and we'll let you know when the House is ready.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row items-center gap-3 w-full lg:max-w-md"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Notify Me
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* =========================================
          VISIT THE HOUSE
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-900/20">
        <Container>
          <div className="mb-12 space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              VISIT
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Visit the House.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              Details will be confirmed by the IEURION team before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Address */}
            <article className="flex gap-5 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400">
                <MapPin size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Address and map</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  To be confirmed. Address, map and visiting rules will be
                  published when the House is ready.
                </p>
              </div>
            </article>

            {/* Infrastructure */}
            <article className="flex gap-5 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-400">
                <div className="flex gap-1">
                  <Zap size={16} />
                  <Wifi size={16} />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Power and internet
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  To be confirmed. Power, speed, backup power and opening hours
                  will be shared before the House opens.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* =========================================
          FAQ
      ========================================= */}
      <section className="py-20 lg:py-28 border-b border-slate-800/60" id="faq">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                FAQ
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Questions builders ask.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 backdrop-blur-md transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-bold text-white transition-colors hover:text-cyan-300"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 font-mono text-base text-cyan-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-800/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-400">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-center sm:text-left">
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <span>See all FAQs</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          JOIN THE DEVELOPER HOUSE
      ========================================= */}
      <section className="py-20 lg:py-28" id="join">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 space-y-3 text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                JOIN THE HOUSE
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join the Developer House.
              </h2>

              <p className="text-base text-slate-400">
                Tell us who you are and what you want to build. We'll get back
                to you by email.
              </p>
            </div>

            <form
              className="space-y-6 rounded-3xl border border-slate-800/80 bg-[#0B0F19]/90 p-8 backdrop-blur-xl shadow-2xl sm:p-12"
              onSubmit={(event) => event.preventDefault()}
            >
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="developer-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Name
                </label>
                <input
                  id="developer-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="developer-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Email
                </label>
                <input
                  id="developer-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <label
                  htmlFor="developer-role"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Role or skills
                </label>
                <input
                  id="developer-role"
                  name="role"
                  type="text"
                  placeholder="e.g. backend developer, designer"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* Build intent */}
              <div className="space-y-2">
                <label
                  htmlFor="developer-build"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  What do you want to build?
                </label>
                <textarea
                  id="developer-build"
                  name="project"
                  rows={5}
                  placeholder="Tell us what you want to build..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label
                  htmlFor="developer-location"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Location
                </label>
                <input
                  id="developer-location"
                  name="location"
                  type="text"
                  placeholder="Where are you based?"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 text-slate-100 placeholder-slate-500 backdrop-blur-md transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Join the Developer House</span>
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default DeveloperHouse;