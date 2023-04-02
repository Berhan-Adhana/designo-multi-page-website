import React from "react";
import { locations } from "../constants";
import Location from "../components/Location";
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
