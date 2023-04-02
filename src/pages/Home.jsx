import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { projects } from "../constants";
import Who from "../components/Who";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="pt-[57px]">
      <Hero />
      <div className="flex flex-col lg:flex-row gap-y-6 mt-[120px] lg:gap-x-6 app-container">
        <Category category={projects[0]} style="lg:h-[440px] xl:h-[640px] flex-1" />
        <div className="flex flex-col gap-y-6 flex-1">
          <Category category={projects[1]} style="lg:h-[208px] xl:h-[308px] " />
          <Category category={projects[2]} style="lg:h-[208px] xl:h-[308px]" />
        </div>
      </div>
      <Who />
    </div>
  );
};

export default Home;
