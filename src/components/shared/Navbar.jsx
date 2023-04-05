import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Menus } from "../../data";
import logo from "../../assets/shared/desktop/logo-dark.png";
import logoLight from "../../assets/shared/desktop/logo-light.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) setIsTop(true);
      else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`h-[56px] w-full  sm:app-container fixed z-[999] transition-colors duration-300`}
    >
      {/* Desktop Version */}
      <nav
        className={`${
          isTop ? "bg-white text-black" : "bg-primary text-white"
        } hidden md:flex h-full items-center justify-between md:gap-x-[100px] pr-4 `}
      >
        <NavLink to="/">
          <img
            src={isTop ? logo : logoLight}
            alt="logo"
            className="w-[202px] h-[27px]"
          />
        </NavLink>
        <div className="flex items-center justify-between gap-x-10">
          {Menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.menuLink}
              className="uppercase block text-[14px] font-[400] leading-[14px] tracking-[2px] relative onHover before:bg-black"
            >
              {menu.menuItem}
            </NavLink>
          ))}
        </div>
      </nav>
      {/* Mobile Version */}
      <nav
        className={`flex h-full items-center justify-between relative md:hidden p-4 ${
          isTop ? "bg-white" : "bg-primary"
        }`}
      >
        <NavLink to="/">
          <img
            src={isTop ? logo : logoLight}
            alt="logo"
            className="w-[157px] h-[27px]"
          />
        </NavLink>
        {isOpen ? (
          <AiOutlineClose
            size={24}
            className={`cursor-pointer ${isTop ? "text-black" : "text-white"}`}
            onClick={handleMenuClick}
          />
        ) : (
          <FaBars
            size={24}
            className={`cursor-pointer ${isTop ? "text-black" : "text-white"}`}
            onClick={handleMenuClick}
          />
        )}
        <div
          className={`flex flex-col top-[56px]  ${
            isOpen ? "-right-10" : "-right-[110%]"
          } bg-black text-white items-center justify-center gap-10 h-screen fixed w-full transition-all ease-in-out duration-300 z-[999]`}
        >
          {Menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.menuLink}
              onClick={handleMenuClick}
              className=" text-left uppercase block text-[14px] font-[400] leading-[14px] tracking-[2px] relative onHover before:bg-black"
            >
              {menu.menuItem}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// after:absolute after:content-[''] after:w-0 after:h-[3px] after:bg-black after:-bottom-1 after:left-0 hover:after:w-full transition-all duration-300
