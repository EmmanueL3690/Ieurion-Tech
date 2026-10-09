// src/components/layout/MainLayout.jsx (or your layout path)

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BackToTop from "../ui/BackToTop"; 

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#020914] text-white selection:bg-[#00c3ff]/30 selection:text-[#00c3ff] relative">
      <Navbar />

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default MainLayout;