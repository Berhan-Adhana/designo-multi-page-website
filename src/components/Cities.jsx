import React from "react";
import { places } from "../data";
import City from "./City";

const Cities = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-[30px] lg:justify-between items-center justify-center gap-y-[80px] mt-[120px] app-container">
      {places.map((place, index) => (
        <City key={index} location={place} index={index} />
      ))}
    </div>
  );
};

export default Cities;
