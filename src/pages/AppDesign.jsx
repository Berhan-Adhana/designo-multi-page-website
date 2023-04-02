import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { appDesignData, appDesignProjects } from "../constants";
import Categories from "../components/Categories";

const AppDesign = () => {
  return (
    <div className="pt-[57px]">
      {/* web design */}
      <Header
        title="App Design"
        content="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      {/* projects */}
      <Projects projectsData={appDesignData} />
      {/* Categories */}
      <Categories categoriesData={appDesignProjects} />
    </div>
  );
};

export default AppDesign;
