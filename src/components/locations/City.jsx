import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, delay, easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const City = ({ location, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.article
      ref={ref}
      className={`flex flex-col items-center transition-all duration-[500ms] ${
        inView ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0"
      }`}
    >
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
    </motion.article>
  );
};

export default City;
