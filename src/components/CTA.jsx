import React from "react";
import bgCirlces from "../assets/shared/desktop/bg-pattern-two-circles.svg";
const CTA = () => {
  return (
    <div className="app-container rounded-md absolute top-0 -translate-y-[50%] ">
      <div className="relative flex flex-col items-center w-full py-[64px] bg-primary bg-bgPattern object-contain bg-repeat rounded-md justify-center  lg:flex-row lg:justify-between lg:gap-x-[100px] px-6 md:px-[58px] lg:px-[95px] ">
       
        <div className="flex flex-col items-center justify-center flex-1 lg:items-start text-center lg:text-left">
          <h2 className="text-white ">
            Let’s talk about
            <br /> your project
          </h2>
          <p className="text-white mt-2 ">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="btn btn-white mt-8">Get in touch</button>
      </div>
    </div>
  );
};

export default CTA;
