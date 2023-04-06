import React from "react";
import { useInView } from "react-intersection-observer";

const WhosCard = ({ who }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <article
      ref={ref}
      className={`flex flex-col gap-y-12 items-center md:flex-row md:gap-x-12 lg:flex-col lg:gap-x-[30px] lg:justify-start  transition-all duration-[900ms] ${
        inView ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="bg-bgPattern w-[202px] h-[202px]">
        <img src={who.image} alt="" className="object-cover max-w-full" />
      </div>
      <div className="flex flex-col gap-y-8 items-center flex-1 md:items-start lg:items-center lg:justify-start">
        <p className="font-medium text-[20px] leading-[26px] tracking-[5px]">
          {who.title}
        </p>
        <p className="font-[400] text-[16px] leading-[26px] text-center md:text-left lg:text-center">
          {who.content}
        </p>
      </div>
    </article>
  );
};

export default WhosCard;
