import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { homeData } from "../data";
import Who from "../components/Who";
import CTA from "../components/shared/CTA";
import Footer from "../components/shared/Footer";
import Category from "../components/Category";

const Home = () => {
  const { heroData, projectsCategory, whosData } = homeData;
  return (
    <div className="pt-[57px]">
      <Hero heroContent={heroData} />
      <div className="flex flex-col lg:flex-row gap-y-6 mt-[120px] lg:gap-x-6 app-container">
        <Category
          category={projectsCategory[0]}
          style="lg:h-[440px] xl:h-[640px] flex-1"
        />
        <div className="flex flex-col gap-y-6 flex-1">
          <Category
            category={projectsCategory[1]}
            style="lg:h-[208px] xl:h-[308px] "
          />
          <Category
            category={projectsCategory[2]}
            style="lg:h-[208px] xl:h-[308px]"
          />
        </div>
      </div>
      <Who whosData={whosData} />
    </div>
  );
};

export default Home;
