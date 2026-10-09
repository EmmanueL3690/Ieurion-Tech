// Events.jsx

import React from 'react';
import { eventData } from '../../data/events';
import { 
  Terminal, 
  Trophy, 
  Code2, 
  Rocket, 
  Users, 
  ArrowRight, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export default function Events() {
  const benefits = [
    {
      title: "Build",
      description: "Transform ambitious ideas into functional, production-ready applications.",
      icon: Code2
    },
    {
      title: "Compete",
      description: "Push technical boundaries against passionate engineers in high-octane contests.",
      icon: Trophy
    },
    {
      title: "Connect",
      description: "Collaborate with talented developers, mentors, and innovators across the ecosystem.",
      icon: Users
    },
    {
      title: "Grow",
      description: "Expand your portfolio, master modern toolchains, and accelerate your engineering path.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Glow Effects & Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        
        {/* Hero Section */}
        <header className="text-center max-w-4xl mx-auto pt-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs sm:text-sm tracking-wider uppercase font-semibold mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles className="w-4 h-4" />
            <span>IEURION Flagship Events</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            WHERE BUILDERS MEET, <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              COMPETE AND CREATE.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            IEURION events gather top-tier creators, developers, and problem solvers to solve challenging problems, build modern software, and sharpen industry skillsets.
          </p>
        </header>

        {/* Events Section */}
        <section className="py-12">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Terminal className="w-7 h-7 text-cyan-400" />
                Featured Programs
              </h2>
              <p className="text-slate-400 text-sm mt-1">Explore our core competitive and building tracks</p>
            </div>
            <div className="hidden sm:block text-xs uppercase tracking-widest text-slate-500 font-mono">
              [ 02 TRACKS ACTIVE ]
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventData.map((event) => (
              <article
                key={event.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div>
                  {/* Visual / Image */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-semibold bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 tracking-wider">
                      {event.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {event.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 sm:p-8 pt-0 mt-auto">
                  <a
                    href={event.ctaLink}
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                  >
                    <span>{event.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 my-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Why Join IEURION Events?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Designed for tech talent seeking hands-on mastery, meaningful connections, and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="mt-16 text-center rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-cyan-500/20 p-10 sm:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to Shape the Future?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Step into the arena with fellow builders, showcase your abilities, and construct impactful technologies.
            </p>
            <div className="flex justify-center">
              <a
                href="#events"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              >
                Join an Event
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}