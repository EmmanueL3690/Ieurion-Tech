import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import DeveloperHouse from "../pages/DeveloperHouse/DeveloperHouse";
import BuildForge from "../pages/BuildForge/BuildForge";
import Research from "../pages/Research/Research";
import Hackathons from "../pages/Hackathons/Hackathons";
import CodersCup from "../pages/CodersCup/CodersCup";
import Robotics from "../pages/Robotics/Robotics";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetail";
import Projects from "../pages/Projects/Projects";
import FAQ from "../pages/FAQ/FAQ";
import Community from "../pages/Community/Community";
import OpenSource from "../pages/OpenSource/OpenSource";
import Partners from "../pages/Partners/Partners";
import About from "../pages/About/About";
import Residency from "../pages/Residency/Residency";
import SIWES from "../pages/SIWES/SIWES";
import Challenges from "../pages/Challenges/Challenges";
import Events from "../pages/Events/Events";
// import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

       <Route
        path="/products"
        element={<Products />}
      />

      
      <Route
        path="/products/:slug"
        element={<ProductDetails />}
      />

           <Route
        path="/developer-house"
        element={<DeveloperHouse />}
      />

      <Route
        path="/build-forge"
        element={<BuildForge />}
      />

        <Route
        path="/robotics"
        element={<Robotics />}
      />

        <Route
        path="/residency"
        element={<Residency />}
      />

         <Route
        path="/research"
        element={<Research />}
      />

       <Route
        path="/hackathons"
        element={<Hackathons />}
      />

            <Route
        path="/coders-cup"
        element={<CodersCup />}
      />

        <Route
         path="/events"
        element={<Events />}
       />

             <Route
        path="/projects"
        element={<Projects />}
      />

          <Route
        path="/community"
        element={<Community />}
      />

      
      <Route
        path="/siwes"
        element={<SIWES />}
      />

      <Route
        path="/open-source"
        element={<OpenSource />}
      />

            <Route
        path="/partners"
        element={<Partners />}
      />

      

      <Route
        path="/challenges"
        element={<Challenges />}
      />

        <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/faq"
        element={<FAQ />}
      />
     
{/* 
      <Route
        path="*"
        element={<NotFound />}
      />   */}
    </Routes>
  );
}

export default AppRoutes;