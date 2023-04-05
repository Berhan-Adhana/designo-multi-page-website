import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import Navbar from "./components/shared/Navbar";
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
  Route,
  Routes,
} from "react-router-dom";
import CTA from "./components/shared/CTA";
import Footer from "./components/shared/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Locations = React.lazy(() => import("./pages/Locations.jsx"));
const Contacts = React.lazy(() => import("./pages/Contacts.jsx"));
const SingleProject = React.lazy(() => import("./pages/SingleProject.jsx"));

const FooterAndCTA = () => {
  const location = useLocation();
  return (
    <div className="relative">
      {location.pathname === "/contact" ? "" : <CTA />}
      <Footer />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/location" element={<Locations />} />
            <Route path="/project/:id" element={<SingleProject />} />
          </Routes>
        </Suspense>

        <FooterAndCTA />
      </Router>
    </AnimatePresence>
  </React.StrictMode>
);
