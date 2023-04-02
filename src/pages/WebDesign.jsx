import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { webDesignData, webDesignProject } from "../constants";
import Categories from "../components/Categories";

const WebDesign = () => {
  return (
    <div className="pt-[57px]">
      {/* web design */}
      <Header
        title="Web Design"
        content="We build websites that serve as powerful marketing tools and bring
        memorable brand experiences."
      />
      {/* projects */}
      <Projects projectsData={webDesignData} />
      {/* Categories */}
      <Categories categoriesData={webDesignProject} />
    </div>
  );
};

export default WebDesign;
