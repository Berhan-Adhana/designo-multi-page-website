import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  useLocation,
  useParams,
  Route,
  Routes,
} from "react-router-dom";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const WebDesign = React.lazy(() => import("./pages/WebDesign.jsx"));
const AppDesign = React.lazy(() => import("./pages/AppDesign.jsx"));
const GraphicDesign = React.lazy(() => import("./pages/GraphicDesign.jsx"));
const Locations = React.lazy(() => import("./pages/Locations.jsx"));
const Contacts = React.lazy(() => import("./pages/Contacts.jsx"));

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
    <Router>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/appDesign" element={<AppDesign />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          <Route path="/location" element={<Locations />} />
        </Routes>
      </Suspense>

      <FooterAndCTA />
    </Router>
  </React.StrictMode>
);
