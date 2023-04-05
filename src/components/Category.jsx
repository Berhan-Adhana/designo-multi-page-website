import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Category = ({
  category: { imageDesktop, imageMobile, imageTablet, categoryTitle, link },
  style,
}) => {
  return (
    <article
      className={`relative  h-[250px]  rounded-[8px] overflow-hidden ${style}`}
    >
      <picture>
        <source media="(min-width:1024px )" srcSet={imageDesktop} />
        <source media="(min-width:768px )" srcSet={imageTablet} />
        <img
          src={imageMobile}
          alt=""
          className="w-full h-full object-cover rounded-[8px]"
        />
      </picture>
      <div className="absolute top-0 left-0 bottom-0 w-full flex flex-col justify-center items-center bg-black/40 hover:bg-primary/60 transition-colors duration-300">
        <h1 className="uppercase text-white">{categoryTitle}</h1>

        <Link
          to={link}
          className=" uppercase text-white text-[15px] leading-[21.68px] tracking-[5px] flex items-center gap-4 pt-4 cursor-pointer "
        >
          <span className="relative onHover before:bg-primary overflow-hidden">
            view project
          </span>
          <span>
            <MdOutlineArrowForwardIos size={24} className="text-primary" />{" "}
          </span>
        </Link>
      </div>
    </article>
  );
};

export default Category;
