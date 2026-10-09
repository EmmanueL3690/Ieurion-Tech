import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Container from "../../components/ui/Container";
import products from "../../data/products";

function ProductDetails() {
  const { slug } = useParams();

  const safeProducts = Array.isArray(products) ? products : [];
  const product = safeProducts.find((item) => item?.slug === slug);

  // Dynamic image error tracking
  const [logoError, setLogoError] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  // Status Badge Renderer
  const renderStatusBadge = (status = "pilot") => {
    const normalizedStatus = status.toLowerCase();

    switch (normalizedStatus) {
      case "live":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 motion-safe:animate-ping motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Live
          </span>
        );
      case "beta":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Beta
          </span>
        );
      case "pilot":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Pilot
          </span>
        );
    }
  };

  // Not Found State
  if (!product) {
    return (
      <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white flex items-center justify-center">
        <Container>
          <section className="mx-auto my-20 max-w-lg rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-8 text-center backdrop-blur-md sm:p-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              PRODUCT
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Product not found.
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              The product you're looking for doesn't exist or is no longer available.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <ArrowLeft size={16} />
                <span>Back to Products</span>
              </Link>
            </div>
          </section>
        </Container>
      </main>
    );
  }

  // Safe Array Fallbacks
  const features = Array.isArray(product.features) ? product.features : [];
  const users = Array.isArray(product.users) ? product.users : [];
  const techStack = Array.isArray(product.techStack) ? product.techStack : [];
  const team = Array.isArray(product.team) ? product.team : [];

  const productName = product.name || product.title || "Untitled Product";
  const productOneLiner = product.oneLiner || product.tagline || product.description || "";

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* =========================================
          PRODUCT HERO
      ========================================= */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-slate-800/80">
        {/* Ambient Cyan Glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl rounded-full bg-cyan-500/10 blur-[120px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-cyan-400 mb-8"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Main Details */}
            <div className="space-y-6 lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                IEURION PRODUCT
              </span>

              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {productName}
                </h1>

                {renderStatusBadge(product.status)}
              </div>

              {productOneLiner && (
                <p className="text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                  {productOneLiner}
                </p>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {product.demoUrl && product.demoUrl !== "#" && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <span>Try Product</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}

                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <span>Request Demo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Logo Display Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative flex w-full max-w-sm min-h-[220px] items-center justify-center rounded-3xl border border-slate-800/80 bg-[#0B0F19]/90 p-8 shadow-2xl backdrop-blur-xl group">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-50"
                  aria-hidden="true"
                />

                {product.logo && !logoError ? (
                  <img
                    src={product.logo}
                    alt={`${productName} logo`}
                    onError={() => setLogoError(true)}
                    className="max-h-28 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/60 font-mono text-4xl font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    {productName.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================
          MEDIA SHOWCASE
      ========================================= */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-2 sm:p-4 backdrop-blur-md shadow-2xl">
            {product.media?.src && !mediaError ? (
              <img
                src={product.media.src}
                alt={product.media.alt || `${productName} preview`}
                onError={() => setMediaError(true)}
                className="w-full max-h-[520px] rounded-2xl object-cover"
              />
            ) : (
              <div className="flex h-80 sm:h-96 w-full items-center justify-center rounded-2xl bg-slate-950/80 border border-dashed border-slate-800 font-mono text-xs font-semibold tracking-widest text-slate-500">
                PRODUCT PREVIEW
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* =========================================
          PROBLEM + SOLUTION
      ========================================= */}
      {(product.problem || product.solution) && (
        <section className="py-12 lg:py-20 border-t border-slate-800/60">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Problem */}
              {product.problem && (
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md space-y-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    THE PROBLEM
                  </span>

                  <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
                    A problem worth solving.
                  </h2>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                    {product.problem}
                  </p>
                </div>
              )}

              {/* Solution */}
              {product.solution && (
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md space-y-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    THE SOLUTION
                  </span>

                  <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
                    Built to create practical impact.
                  </h2>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                    {product.solution}
                  </p>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================
          FEATURES
      ========================================= */}
      {features.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-slate-800/60">
          <Container>
            <div className="mb-12 space-y-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                KEY FEATURES
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What it can do.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={`${feature.title || index}-${index}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B0F19]/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
                >
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>

                    {feature.description && (
                      <p className="text-sm leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================
          USERS + TECH STACK
      ========================================= */}
      {(users.length > 0 || techStack.length > 0) && (
        <section className="py-16 lg:py-24 border-t border-slate-800/60 bg-slate-900/20">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Users */}
              {users.length > 0 && (
                <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      WHO IT'S FOR
                    </span>

                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Built for the people who use it.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {users.map((user, i) => (
                      <span
                        key={`${user}-${i}`}
                        className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-md">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      TECH STACK
                    </span>

                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Technology behind it.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={`${tech}-${i}`}
                        className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================
          TEAM
      ========================================= */}
      {team.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-slate-800/60">
          <Container>
            <div className="mb-12 space-y-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                THE TEAM
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built by the IEURION ecosystem.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div
                  key={`${member.name || index}-${index}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-md transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/60 font-mono text-base font-bold text-cyan-300">
                    {member.name ? member.name.charAt(0).toUpperCase() : "M"}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-white">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="truncate text-xs text-slate-400">
                        {member.role}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================
          FINAL CTA
      ========================================= */}
      <section className="relative overflow-hidden border-t border-slate-800/80 py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  KEEP BUILDING
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Want to build something like this?
                </h2>

                <p className="text-base leading-relaxed text-slate-400">
                  Join the IEURION ecosystem and turn ideas into products that can reach the real world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Join the House</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Partner With IEURION</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ProductDetails;