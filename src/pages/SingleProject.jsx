import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import Header from "../components/shared/Header";
import Projects from "../components/Projects";
import Categories from "../components/Categories";

const SingleProject = () => {
  const { id } = useParams();

  let singlePage = projectsData.filter((project) => project.id == parseInt(id));
  let otherProjectsCategories = projectsData.filter(
    (other) => other.id !== parseInt(id)
  );

  return (
    <div className="pt-[57px]">
      {/* web design */}
      <Header
        title={singlePage[0].categoryTitle}
        content={singlePage[0].headerContent}
      />
      {/* projects */}
      <Projects projectsData={singlePage[0].projects} />
      {/* Categories */}
      <Categories categoriesData={otherProjectsCategories} />
    </div>
  );
};

export default SingleProject;
