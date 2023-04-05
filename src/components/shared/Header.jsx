import React from "react";

const Header = ({ title, content }) => {
  return (
    <header className=" w-full sm:app-container">
      <div
        className="h-[320px] md:h-[252px]
     bg-primary text-white bg-bgPattern bg-no-repeat md:bg-repeat  bg-cover md:bg-contain gap-y-6 flex flex-col items-center justify-center text-center app-container"
      >
        <h1 className="capitalize">{title}</h1>
        <p>{content}</p>
      </div>
    </header>
  );
};

export default Header;
