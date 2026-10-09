import React from "react";
import { motion } from "motion/react";

function TagList({ tags = [], onTagClick, activeTag, align = "center" }) {
  if (!tags || tags.length === 0) return null;

  const alignMap = {
    center: "justify-center",
    left: "justify-start",
    right: "justify-end",
  };

  const alignClasses = alignMap[align] || alignMap.center;

  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 w-full my-4 ${alignClasses}`}>
      {tags.map((tag, index) => {
        const label = typeof tag === "string" ? tag : tag.label;
        const id = typeof tag === "string" ? tag : tag.id || index;
        const isActive = activeTag === label || tag.active;

        return (
          <motion.button
            key={id}
            type="button"
            className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer border select-none ${
              isActive
                ? "bg-[#00c3ff] border-[#00c3ff] text-[#020914] shadow-[0_0_15px_rgba(0,195,255,0.4)]"
                : "bg-[#061221]/60 border-[#00c3ff]/20 text-slate-300 hover:text-white hover:border-[#00c3ff]/50 hover:bg-[#00c3ff]/10"
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onTagClick && onTagClick(tag)}
            aria-pressed={isActive}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                isActive ? "bg-[#020914]" : "bg-[#00c3ff]/60 group-hover:bg-[#00c3ff]"
              }`}
            />
            <span>{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

export default TagList;