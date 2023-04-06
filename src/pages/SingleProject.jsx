import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import Header from "../components/shared/Header";
import Projects from "../components/singleProject/Projects";
import Categories from "../components/shared/Categories.jsx";
import { motion } from "framer-motion";

const SingleProject = () => {
  const { id } = useParams();

  let singlePage = projectsData.filter((project) => project.id == parseInt(id));
  let otherProjectsCategories = projectsData.filter(
    (other) => other.id !== parseInt(id)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="pt-[57px]"
    >
      {/* web design */}
      <Header
        title={singlePage[0].categoryTitle}
        content={singlePage[0].headerContent}
      />
      {/* projects */}
      <Projects projectsData={singlePage[0].projects} />
      {/* Categories */}
      <Categories categoriesData={otherProjectsCategories} />
    </motion.div>
  );
};

export default SingleProject;
