import React, { useEffect, useState } from "react";
import logo from "../assets/shared/desktop/logo-light.png";
import { Menus } from "../constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

import { FaPinterestSquare } from "react-icons/fa";
const Footer = () => {
  const location = useLocation();
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    const isContactPage = () =>
      location.pathname === "/contact"
        ? setIsContact(true)
        : setIsContact(false);
    isContactPage();
  }, [location]);
  return (
    <footer className={`bg-black ${isContact ? "mt-[40px]" : "mt-[200px]"} `}>
      <div className="app-container flex flex-col items-center gap-y-10  py-[64px]">
        {/* navigation */}
        <nav
          className={`${
            isContact ? "pt-[23px]" : "pt-[150px]"
          } text-lightGrey lg:w-full flex flex-col md:flex-row h-full items-center gap-x-[110px] justify-between md:border-solid md:border-b-[1px] md:border-white/50 pb-5 `}
        >
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[202px] h-[27px] " />
          </NavLink>
          <div className="h-[.5px] my-8 bg-lightGrey w-full md:hidden " />
          <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-10">
            {Menus.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.menuLink}
                className="uppercase block text-[14px] font-[400] leading-[14px] tracking-[2px] relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:-bottom-1 after:left-[50%]  transition-all duration-300 after:transition-all after:ease-out after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {menu.menuItem}
              </NavLink>
            ))}
          </div>
        </nav>
        {/* contact info */}
        <div className="flex flex-col md:flex-row gap-y-10 items-center justify-center md:justify-between w-full">
          {/* address */}
          <div>
            <Link
              to="https://goo.gl/maps/czY7nukcZNsrMAJd7"
              target="_blank"
              className="text-white/50 mix-blend-normal md:text-left cursor-pointer"
            >
              <b>Designo Central Office</b> <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </Link>
          </div>
          {/* contact */}
          <div className=" text-white/50 mix-blend-normal text-[16px] leading-[26px] md:text-left ">
            <p className="font-bold">Contact Us (Central Office)</p>
            <div className="flex items-center gap-x-6">
              <AiOutlinePhone
                className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
                size={24}
              />
              <a href="tel:+1253-863-8967"> +1 253-863-8967</a>
            </div>

            <div className="flex items-center gap-x-6">
              <AiOutlineMail
                className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
                size={24}
              />
              <a href="mailto:contact@designo.co">contact@designo.co</a>
            </div>
          </div>
          {/* Social Media */}
          <div className="flex items-center justify-center gap-x-4 lg:self-end">
            <AiFillFacebook
              className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
              size={24}
            />
            <AiFillYoutube
              className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
              size={24}
            />
            <AiFillTwitterCircle
              className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
              size={24}
            />
            <AiFillInstagram
              className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
              size={24}
            />
            <FaPinterestSquare
              className="text-primary hover:text-lightPeach cursor-pointer transition-colors duration-300"
              size={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
