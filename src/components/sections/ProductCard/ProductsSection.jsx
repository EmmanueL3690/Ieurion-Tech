// src/components/sections/04-ProductsSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Layers, ArrowRight, ExternalLink, Cpu, Sparkles, BarChart3 } from "lucide-react";

const PRODUCTS_DATA = {
  eyebrow: "OUR PRODUCTS",
  title: "PRODUCTS WE'SHIPPED.",
  description:
    "Real solutions, built by our team. Designed for practical use beyond experimentation.",
  viewAllHref: "/products",
  products: [
    {
      id: "product-alpha",
      slug: "product-alpha",
      title: "Product Alpha",
      badge: "Live",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description:
        "Simplifies complex workflows with intelligent automation and AI agent pipelines.",
      icon: Cpu,
    },
    {
      id: "product-beta",
      slug: "product-beta",
      title: "Product Beta",
      badge: "Beta",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description:
        "Helps engineering teams collaborate, manage dev environments, and build faster.",
      icon: Sparkles,
    },
    {
      id: "product-gamma",
      slug: "product-gamma",
      title: "Product Gamma",
      badge: "Pilot",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      description:
        "Brings analytics, ecosystem data, and real-time insights together in one space.",
      icon: BarChart3,
    },
  ],
};

export default function ProductsSection() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        {/* Header with View All CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
              {PRODUCTS_DATA.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 tracking-tight">
              {PRODUCTS_DATA.title}
            </h2>
            <p className="text-slate-400 mt-3 text-base md:text-lg leading-relaxed">
              {PRODUCTS_DATA.description}
            </p>
          </div>

          <Link
            to={PRODUCTS_DATA.viewAllHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold text-xs tracking-wide transition-all self-start md:self-auto"
          >
            View all products
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS_DATA.products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${product.badgeColor}`}
                    >
                      • {product.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn more
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
