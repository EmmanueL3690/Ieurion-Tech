import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/ui/Container";
import ProductCard from "../../components/cards/ProductCard";
import products from "../../data/products";

const filters = ["All", "Live", "Beta", "Pilot"];

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return safeProducts;
    }

    return safeProducts.filter(
      (product) =>
        product?.status?.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, safeProducts]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-slate-800/80">
        {/* Ambient Cyan Background Glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl rounded-full bg-cyan-500/10 blur-[120px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              IEURION PRODUCTS
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What we’ve{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                built.
              </span>
            </h1>

            <p className="text-base text-slate-400 sm:text-lg lg:text-xl leading-relaxed">
              Technology products built through the IEURION ecosystem and
              designed to solve real-world problems.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Directory Section */}
      <section className="py-16 lg:py-24">
        <Container>
          {/* Toolbar & Filter Bar */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/60 pb-6">
            {/* Filter Pills */}
            <div className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-1.5 backdrop-blur-md">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "border border-cyan-500/40 bg-cyan-950/80 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                        : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Product Counter */}
            <span className="inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-400 backdrop-blur-md">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id || product.slug || index}
                  product={product}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="my-12 rounded-3xl border border-dashed border-slate-800 bg-slate-900/30 p-12 text-center backdrop-blur-sm">
              <p className="text-base font-medium text-slate-400">
                No products in this stage yet.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Check back soon or select another filter category.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Call To Action Section */}
      <section className="relative overflow-hidden border-t border-slate-800/80 py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
            {/* Subtle corner glow */}
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  BUILD WITH US
                </span>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Have an idea worth building?
                </h2>

                <p className="text-base leading-relaxed text-slate-400">
                  Work with IEURION to explore, develop, and bring technology
                  products into the real world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/challenges"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/35 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Bring a Problem</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Products;