import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

function FeatureGrid({ items = [] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {items.map((item, index) => (
        <motion.article
          key={item.id || index}
          className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#061221]/50 border border-[#00c3ff]/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#00c3ff]/60 hover:bg-[#061221]/80 hover:shadow-[0_10px_30px_rgba(0,195,255,0.15)]"
          variants={cardVariants}
        >
          <div>
            {/* Icon */}
            {item.icon && (
              <div className="inline-flex p-3 rounded-xl bg-[#00c3ff]/10 border border-[#00c3ff]/20 text-[#00c3ff] mb-6">
                {item.icon}
              </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="text-xl font-bold text-white group-hover:text-[#00c3ff] transition-colors duration-300">
                {item.title}
              </h3>
              {item.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#00c3ff] bg-[#00c3ff]/10 border border-[#00c3ff]/20">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>
            )}
          </div>

          {/* Footer Link */}
          {item.linkText && (
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#00c3ff] transition-all duration-300 group-hover:text-white mt-auto">
              <span>{item.linkText}</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}

export default FeatureGrid;