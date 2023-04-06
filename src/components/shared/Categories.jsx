import React from "react";
import Category from "./Category";
const Categories = ({ categoriesData }) => {
  return (
    <div className="flex flex-col gap-5 items-center mt-[120px] lg:flex-row app-container">
      {categoriesData.map((category, index) => (
        <Category key={index} category={category} style={"flex-1"} />
      ))}
    </div>
  );
};

export default Categories;
