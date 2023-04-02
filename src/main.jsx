import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useParams,
} from "react-router-dom";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { About, AppDesign, GraphicDesign, Home, WebDesign } from "./pages";
import Contacts from "./pages/Contacts";
import Locations from "./pages/Locations";

// console.log(location.pathname);
const Dashboard = () => {
  const location = useLocation();
  return (
    <main>
      <Navbar />
      <Outlet />
      <div className="relative">
        {location.pathname === "/contact" ? "" : <CTA />}
        <Footer />
      </div>
    </main>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/webdesign", element: <WebDesign /> },
      { path: "/appdesign", element: <AppDesign /> },
      { path: "/graphicdesign", element: <GraphicDesign /> },
      { path: "/location", element: <Locations /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
