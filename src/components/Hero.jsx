import React from "react";
import heroImage from "../assets/home/desktop/image-hero-phone.png";
const Hero = () => {
  return (
    <section className="h-[843px] lg:h-[640px] w-full sm:app-container  overflow-y-hidden">
      <div className=" relative text-center bg-primary lg:flex  lg:items-center lg:flex-row lg:justify-center  bg-bgPattern  bg-no-repeat bg-contain bg-right text-white h-full pt-[120px] md:pt-[180px] rounded-md items-center overflow-y-hidden">
        <div className="px-6 md:px-[58px] lg:pl-[95px] lg:text-left text-center">
          {" "}
          <h1 className="">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="pt-[14px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="btn btn-white mt-6 mb-3">learn more</button>
        </div>
        <img
          src={heroImage}
          alt="phone"
          className=" h-[573px] max-w-full absolute lg:relative lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0 bottom-0 translate-y-[40%] left-[50%] -translate-x-[50%] "
        />
      </div>
    </section>
  );
};

export default Hero;
