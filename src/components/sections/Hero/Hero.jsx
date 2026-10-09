import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, Box, Cpu, FileText } from "lucide-react";
import Container from "../../ui/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const floatingAnimation = (duration = 4, delay = 0) => ({
  y: [0, -8, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
});

function Hero({ heroBg, bgImage }) {
  const activeBg = bgImage || heroBg;

  const avatarList = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#020914] bg-cover bg-center bg-no-repeat pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 flex items-center text-white"
      style={activeBg ? { backgroundImage: `url(${activeBg})` } : undefined}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#020914]/80 via-[#020914]/90 to-[#020914] pointer-events-none"
        aria-hidden="true"
      />

      {/* Atmospheric horizon glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00c3ff]/20 via-[#061221]/40 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            className="flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow badge */}
            <motion.div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#00c3ff] uppercase mb-4 drop-shadow-[0_0_12px_rgba(0,195,255,0.4)]"
              variants={itemVariants}
            >
              <span className="font-bold">01</span>
              <span className="text-slate-500">/</span>
              <span>ECOSYSTEM</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-black uppercase leading-[0.88] tracking-tight text-white mb-6"
              variants={itemVariants}
            >
              WHERE <br />
              BUILDERS <br />
              COME TO <br />
              <span className="text-[#00c3ff] drop-shadow-[0_0_25px_rgba(0,195,255,0.4)]">
                BUILD.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 font-normal"
              variants={itemVariants}
            >
              IEURION is a technology ecosystem where people, ideas and
              innovation come together to create what comes next.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
              variants={itemVariants}
            >
              <a
                href="#build"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00c3ff] text-[#020914] font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#33d0ff] hover:shadow-[0_0_25px_rgba(0,195,255,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Building</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#explore"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#061221]/60 backdrop-blur-md border border-[#00c3ff]/30 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:border-[#00c3ff] hover:bg-[#00c3ff]/10 hover:shadow-[0_0_20px_rgba(0,195,255,0.2)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore IEURION</span>
              </a>
            </motion.div>

            {/* Community Social Proof */}
            <motion.div
              className="flex items-center gap-4 pt-2 border-t border-slate-800/60 w-full sm:w-auto"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {avatarList.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Community member ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-[#020914] object-cover"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                Join a growing community <br />
                of builders, dreamers and creators.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Orbital Diagram Canvas */}
          <motion.div
            className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-none aspect-square mx-auto flex items-center justify-center select-none py-6 lg:py-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Ambient Halo behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-[#00c3ff]/15 blur-3xl pointer-events-none" />

            {/* Elliptical Orbit Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border border-[#00c3ff]/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full border border-[#00c3ff]/15 border-dashed pointer-events-none" />

            {/* Central Globe Core */}
            <motion.div
              className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-[#061221]/90 border-2 border-[#00c3ff] backdrop-blur-md flex items-center justify-center text-center shadow-[0_0_35px_rgba(0,195,255,0.4)] cursor-pointer"
              whileHover={{ scale: 1.04 }}
              animate={{
                boxShadow: [
                  "0 0 35px rgba(0, 195, 255, 0.3)",
                  "0 0 65px rgba(0, 195, 255, 0.5)",
                  "0 0 35px rgba(0, 195, 255, 0.3)",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center justify-center gap-1.5 text-white">
                <div className="text-[#00c3ff]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-extrabold tracking-widest text-white uppercase">
                  IEURION
                </span>
              </div>
            </motion.div>

            {/* 5 Orbiting Badges */}
            {/* 1. People (Top) */}
            <motion.div
              className="absolute top-[4%] left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/40 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer whitespace-nowrap"
              animate={floatingAnimation(4.2, 0)}
              whileHover={{ scale: 1.08 }}
            >
              <Users size={15} />
              <span className="text-white">People</span>
            </motion.div>

            {/* 2. Ideas (Top Right) */}
            <motion.div
              className="absolute top-[22%] right-[2%] sm:right-[6%] z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/40 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer whitespace-nowrap"
              animate={floatingAnimation(4.8, 0.5)}
              whileHover={{ scale: 1.08 }}
            >
              <Lightbulb size={15} />
              <span className="text-white">Ideas</span>
            </motion.div>

            {/* 3. Products (Bottom Right) */}
            <motion.div
              className="absolute bottom-[18%] right-[4%] sm:right-[8%] z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/40 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer whitespace-nowrap"
              animate={floatingAnimation(4.5, 1)}
              whileHover={{ scale: 1.08 }}
            >
              <Box size={15} />
              <span className="text-white">Products</span>
            </motion.div>

            {/* 4. Technology (Bottom Left) */}
            <motion.div
              className="absolute bottom-[18%] left-[4%] sm:left-[8%] z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/40 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer whitespace-nowrap"
              animate={floatingAnimation(5, 1.2)}
              whileHover={{ scale: 1.08 }}
            >
              <Cpu size={15} />
              <span className="text-white">Technology</span>
            </motion.div>

            {/* 5. Research (Top Left) */}
            <motion.div
              className="absolute top-[22%] left-[2%] sm:left-[6%] z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#061221]/80 backdrop-blur-md border border-[#00c3ff]/40 text-[#00c3ff] text-xs sm:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer whitespace-nowrap"
              animate={floatingAnimation(4.6, 0.8)}
              whileHover={{ scale: 1.08 }}
            >
              <FileText size={15} />
              <span className="text-white">Research</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;