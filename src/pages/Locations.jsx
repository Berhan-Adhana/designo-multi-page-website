import React from "react";
import { locations } from "../data";
import Location from "../components/about/Location.jsx";
const Locations = () => {
  return (
    <div className="w-full sm:app-container flex flex-col items-center gap-y-10 pt-[57px]">
      {locations.map((location, index) => (
        <Location key={index} location={location} />
      ))}
    </div>
  );
};

export default Locations;
