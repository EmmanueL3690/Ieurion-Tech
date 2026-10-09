import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FolderKanban } from "lucide-react";

function ProjectCard({ title, description, category, href }) {
  return (
    <motion.article
      className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-[#061221]/50 border border-[#00c3ff]/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#00c3ff]/60 hover:bg-[#061221]/80 hover:shadow-[0_10px_30px_rgba(0,195,255,0.15)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {/* Category Header */}
        {category && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider text-[#00c3ff] bg-[#00c3ff]/10 border border-[#00c3ff]/20 mb-4">
            <FolderKanban size={12} />
            <span>{category}</span>
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00c3ff] transition-colors duration-300">
          {title}
        </h3>

        {description && (
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>
        )}
      </div>

      {/* Footer Link */}
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00c3ff] transition-all duration-300 group-hover:text-white mt-auto"
        >
          <span>View Project</span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </motion.article>
  );
}

export default ProjectCard;