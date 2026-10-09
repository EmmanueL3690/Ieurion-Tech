import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Updated ProductCard component for the IEURION website.
 * Styled with Tailwind CSS for a dark futuristic aesthetic featuring cyan highlights,
 * status badges, hover crossfades, image error handling, and flexible data fallbacks.
 *
 * @param {Object} props
 * @param {Object} props.product - The product data object.
 */
function ProductCard({ product }) {
  if (!product) return null;

  // Flexible prop resolution to safely support both standard schema and custom variants
  const {
    name = product.title || "",
    oneLiner = product.tagline || product.description || "",
    status = "pilot",
    logo = product.image || "",
    screenshots = [],
    href = product.productUrl || (product.slug ? `/products/${product.slug}` : "#"),
  } = product;

  // Handle broken images dynamically without ruining UI layout
  const [logoError, setLogoError] = useState(false);
  const [screenshotError, setScreenshotError] = useState(false);

  const primaryScreenshot =
    Array.isArray(screenshots) && screenshots.length > 0 ? screenshots[0] : null;

  const hasValidLogo = Boolean(logo) && !logoError;
  const hasValidScreenshot = Boolean(primaryScreenshot) && !screenshotError;

  // Check if link is external or internal
  const isExternal =
    Boolean(href) &&
    (href.startsWith("http://") || href.startsWith("https://"));

  // Status Badge Component
  const renderStatusBadge = () => {
    const normalizedStatus = status ? status.toLowerCase() : "pilot";

    switch (normalizedStatus) {
      case "live":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 motion-safe:animate-ping motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Live
          </span>
        );
      case "beta":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Beta
          </span>
        );
      case "pilot":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Pilot
          </span>
        );
    }
  };

  const actionContent = (
    <>
      <span className="text-sm font-semibold tracking-wide text-cyan-400 transition-colors duration-200 group-hover/link:text-cyan-300">
        Explore product
      </span>
      <ArrowUpRight
        size={17}
        className="text-cyan-400 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-cyan-300"
      />
    </>
  );

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0B0F19]/90 p-6 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] focus-within:-translate-y-1 focus-within:border-cyan-500/40 focus-within:ring-1 focus-within:ring-cyan-500/50 backdrop-blur-md">
      {/* Ambient cyan background glow on hover */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div>
        {/* Visual Header / Logo Area */}
        <div className="relative mb-5 flex min-h-[120px] items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950/60 p-4">
          {/* Status Badge */}
          <div className="absolute top-3 right-3 z-20">
            {renderStatusBadge()}
          </div>

          {/* Logo Container */}
          <div className="relative flex h-16 w-full items-center justify-center">
            {hasValidLogo ? (
              <img
                src={logo}
                alt={`${name} logo`}
                onError={() => setLogoError(true)}
                className={`max-h-full max-w-[80%] object-contain transition-all duration-500 ease-in-out ${
                  hasValidScreenshot
                    ? "group-hover:opacity-0"
                    : "group-hover:scale-105"
                }`}
              />
            ) : (
              /* Fallback Lettermark */
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-950/60 text-xl font-bold text-cyan-300 transition-opacity duration-500 ${
                  hasValidScreenshot ? "group-hover:opacity-0" : ""
                }`}
              >
                {name ? name.charAt(0).toUpperCase() : "P"}
              </div>
            )}

            {/* Optional Screenshot Overlay Crossfade */}
            {hasValidScreenshot && (
              <img
                src={primaryScreenshot}
                alt={`${name} preview`}
                onError={() => setScreenshotError(true)}
                className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-300">
            {name}
          </h2>

          {oneLiner && (
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
              {oneLiner}
            </p>
          )}
        </div>
      </div>

      {/* Footer Link Area */}
      <div className="mt-6 border-t border-slate-800/60 pt-4">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={`Explore ${name} (opens in new tab)`}
          >
            {actionContent}
          </a>
        ) : (
          <Link
            to={href}
            className="group/link inline-flex items-center gap-2 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={`Explore ${name}`}
          >
            {actionContent}
          </Link>
        )}
      </div>
    </article>
  );
}

export default ProductCard;