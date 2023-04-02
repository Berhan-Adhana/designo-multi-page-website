import React from "react";
import { Link } from "react-router-dom";

const City = ({ location }) => {
  return (
    <article className="flex flex-col items-center">
      <div className="h-[202px] w-[202px] bg-bgPattern bg-contain flex items-center justify-center">
        <img src={location.image} alt={location.place} className="" />
      </div>
      <p className="uppercase font-bold text-[20px] leading-[26px] tracking-[5px] mt-12">
        {location.place}
      </p>
      <button className="btn btn-primary mt-8">
        <Link target="_blank" to={location.link}>
          SEE LOCATION
        </Link>
      </button>
    </article>
  );
};

export default City;
