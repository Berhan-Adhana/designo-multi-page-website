import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { graphicDesignData, graphicDesignProjects } from "../constants";
import Categories from "../components/Categories";

const GraphicDesign = () => {
  return (
    <div className="pt-[57px]">
      {/* web design */}
      <Header
        title="Graphic Design"
        content="We deliver eye-catching branding materials that are 
tailored to meet your business objectives.
"
      />
      {/* projects */}
      <Projects projectsData={graphicDesignData} />
      {/* Categories */}
      <Categories categoriesData={graphicDesignProjects} />
    </div>
  );
};

export default GraphicDesign;
