import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] },
  },
};

function StepFlow({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {steps.map((step, index) => {
        const stepNum = String(index + 1).padStart(2, "0");
        const isLast = index === steps.length - 1;

        return (
          <motion.div
            key={step.id || index}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#061221]/50 border border-[#00c3ff]/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#00c3ff]/60 hover:bg-[#061221]/80 hover:shadow-[0_10px_30px_rgba(0,195,255,0.15)]"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            {/* Step Top Bar / Header */}
            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00c3ff] tracking-tight font-mono">
                    {stepNum}
                  </span>
                  <div className="p-2 rounded-xl bg-[#00c3ff]/10 border border-[#00c3ff]/20 text-[#00c3ff] flex items-center justify-center">
                    {step.icon || <ArrowRight size={16} />}
                  </div>
                </div>

                {!isLast && (
                  <div
                    className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#00c3ff]/40 to-transparent pointer-events-none z-20"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step Body */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00c3ff] transition-colors duration-300">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default StepFlow;