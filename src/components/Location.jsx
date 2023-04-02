import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Location = ({ location }) => {
  return (
    <article
      className={`flex w-full flex-col items-center gap-y-6 lg:items-start lg:${
        location.isReverse ? "flex-row-reverse" : "flex-row"
      } lg:gap-x-6`}
    >
      <iframe
        src={location.map}
        allowFullScreen
        style={{ border: "0" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="h-[320px] lg:h-[326px] w-full object-cover rounded-md"
      />
      <div className="bg-background bg-bgTwoCircles w-full flex flex-col items-center gap-y-6 py-[80px] px-6 md:items-start lg:h-[326px] rounded-md">
        <h2 className="text-primary md:leading-[48px] ">{location.city}</h2>
        <div className="flex flex-col gap-y-6 gap-x-6 text-center md:flex-row md:justify-between w-full ">
          {/* Office location */}
          <div className="flex flex-col md:items-start">
            <p className="font-bold text-center md:text-left text-[16px] leading-[26px] ">
              Designo UK Office
            </p>
            <p>{location.line1}</p>
            <p>{location.line2}</p>
          </div>
          {/* contact */}
          <div className="flex flex-col md:items-start">
            <p className="font-bold text-[16px] leading-[26px] text-center md:text-left ">
              Contact
            </p>
            <div className="flex items-center justify-center md:justify-start  gap-x-6">
              <AiOutlinePhone
                className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
                size={24}
              />
              <a href="tel:+1253-863-8967"> {location.phone}</a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-x-6">
              <AiOutlineMail
                className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
                size={24}
              />
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Location;
