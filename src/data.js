import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

import webDesign from "./assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "./assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "./assets/home/desktop/image-web-design-large.jpg";

import appDesign from "./assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "./assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "./assets/home/desktop/image-app-design.jpg";

import graphicDesign from "./assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "./assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "./assets/home/desktop/image-graphic-design.jpg";

import blogger from "./assets/web-design/desktop/image-blogr.jpg";
import builder from "./assets/web-design/desktop/image-builder.jpg";
import camp from "./assets/web-design/desktop/image-camp.jpg";
import express from "./assets/web-design/desktop/image-express.jpg";
import photon from "./assets/web-design/desktop/image-photon.jpg";
import transfer from "./assets/web-design/desktop/image-transfer.jpg";

import airFilter from "./assets/app-design/desktop/image-airfilter.jpg";
import eyeCam from "./assets/app-design/desktop/image-eyecam.jpg";
import faceit from "./assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "./assets/app-design/desktop/image-loopstudios.jpg";
import todo from "./assets/app-design/desktop/image-todo.jpg";

import boxedWater from "./assets/graphic-design/desktop/image-boxed-water.jpg";
import change from "./assets/graphic-design/desktop/image-change.jpg";
import science from "./assets/graphic-design/desktop/image-science.jpg";

import canadaImage from "./assets/shared/desktop/illustration-canada.svg";
import australiaImage from "./assets/shared/desktop/illustration-australia.svg";
import uk from "./assets/shared/desktop/illustration-united-kingdom.svg";

import passionateImage from "./assets/home/desktop/illustration-passionate.svg";
import resourcefullImage from "./assets/home/desktop/illustration-resourceful.svg";
import friendlyImage from "./assets/home/desktop/illustration-friendly.svg";

import heroImage from "./assets/home/desktop/image-hero-phone.png";

import aboutHero from "./assets/about/mobile/image-about-hero.jpg";
import aboutHeroTablet from "./assets/about/tablet/image-about-hero.jpg";
import aboutHeroDesktop from "./assets/about/desktop/image-about-hero.jpg";

import aboutWroldClass from "./assets/about/mobile/image-world-class-talent.jpg";
import aboutWroldClassTablet from "./assets/about/tablet/image-world-class-talent.jpg";
import aboutWroldClassDesktop from "./assets/about/desktop/image-world-class-talent.jpg";

import aboutRealDeal from "./assets/about/mobile/image-real-deal.jpg";
import aboutRealDealTablet from "./assets/about/tablet/image-real-deal.jpg";
import aboutRealDealDesktop from "./assets/about/desktop/image-real-deal.jpg";

export const Menus = [
  { menuItem: "Our Company", menuLink: "/about" },
  { menuItem: "Locations", menuLink: "/location" },
  { menuItem: "contact", menuLink: "/contact" },
];

export const projectsData = [
  {
    id: 1,
    categoryTitle: "app design",
    headerContent:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    imageMobile: appDesign,
    imageTablet: appDesignTablet,
    imageDesktop: appDesignDesktop,
    link: "/project/1",
    projects: [
      {
        screenshot: airFilter,
        title: "AIRFILTER",
        desc: "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        screenshot: eyeCam,
        title: "EYECAM",
        desc: "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        screenshot: photon,
        title: "PHOTON",
        desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        screenshot: faceit,
        title: "FACEIT",
        desc: "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        screenshot: todo,
        title: "TODO",
        desc: "A todo app that features cloud sync with light and dark mode",
      },
      {
        screenshot: loopstudios,
        title: "LOOPSTUDIOS",
        desc: "A VR experience app made for Loopstudios",
      },
    ],
  },
  {
    id: 2,
    categoryTitle: "web design",
    headerContent:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    imageMobile: webDesign,
    imageTablet: webDesignTablet,
    imageDesktop: webDesignDesktop,
    link: "/project/2",
    projects: [
      {
        screenshot: express,
        title: "EXPRESS",
        desc: "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        screenshot: transfer,
        title: "TRANSFER",
        desc: "Site for low-cost money transfers and sending money within seconds",
      },
      {
        screenshot: photon,
        title: "PHOTON",
        desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        screenshot: builder,
        title: "BUILDER",
        desc: "Connects users with local contractors based on their location",
      },
      {
        screenshot: blogger,
        title: "BLOGR",
        desc: "Blogr is a platform for creating an online blog or publication",
      },
      {
        screenshot: camp,
        title: "CAMP",
        desc: "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  {
    id: 3,
    categoryTitle: "gaphic design",
    headerContent:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    imageMobile: graphicDesign,
    imageTablet: graphicDesignTablet,
    imageDesktop: graphicDesignDesktop,
    link: "/project/3",
    projects: [
      {
        screenshot: change,
        title: "TIM BROWN",
        desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        screenshot: boxedWater,
        title: "BOXED WATER",
        desc: "A simple packaging concept made for Boxed Water",
      },
      {
        screenshot: science,
        title: "SCIENCE!",
        desc: "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },
];

export const homeData = {
  heroData: {
    title: " Award-winning custom designs and digital branding solutions",
    content:
      " With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
    btnText: "learn more",
    heroImage: heroImage,
  },
  projectsCategory: [
    {
      categoryTitle: "web design",
      imageMobile: webDesign,
      imageTablet: webDesignTablet,
      imageDesktop: webDesignDesktop,
      link: "/project/2",
    },
    {
      categoryTitle: "app design",
      imageMobile: appDesign,
      imageTablet: appDesignTablet,
      imageDesktop: appDesignDesktop,
      link: "/project/1",
    },
    {
      categoryTitle: "graphic design",
      imageMobile: graphicDesign,
      imageTablet: graphicDesignTablet,
      imageDesktop: graphicDesignDesktop,
      link: "/project/3",
    },
  ],
  whosData: [
    {
      image: passionateImage,
      title: "PASSIONATE",
      content:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      image: resourcefullImage,
      title: "RESOURCEFUL",
      content:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      image: friendlyImage,
      title: "FRIENDLY",
      content:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ],
};

export const places = [
  {
    image: canadaImage,
    place: "Canada",
    link: "https://goo.gl/maps/czY7nukcZNsrMAJd7",
  },
  {
    image: australiaImage,
    place: "AUSTRALIA",
    link: "https://goo.gl/maps/BmeVTfUYHHQzzAnm8",
  },
  {
    image: uk,
    place: "UNITED KINGDOM",
    link: "https://goo.gl/maps/r9bXmDctG32rRrZr7",
  },
];

export const locations = [
  {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1993720707264!2d-79.39672808522347!3d43.64402016104355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1680467517272!5m2!1sen!2sca",
    city: "Canada",
    line1: "3886 Wellington Street",
    line2: "Toronto, Ontario M9C 3J5",
    phone: " +1 253-863-8967",
    email: "contact@designo.co",
    isReverse: true,
  },
  {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.7582375772777!2d149.786051214534!3d-30.32939385154785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sca!4v1680467187619!5m2!1sen!2sca",
    city: "Australia",
    line1: "19 Balonne Street",
    line2: "New South Wales 2443",
    phone: "  (02) 6720 9092",
    email: "contact@designo.au",
    isReverse: false,
  },
  {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9884.214016303298!2d-3.8788087996158973!3d51.73205672655634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5867a4c5658f%3A0xf837c949fc975d7b!2sRhyd-y-fro%2C%20Pontardawe%2C%20Swansea%2C%20UK!5e0!3m2!1sen!2sca!4v1680467609482!5m2!1sen!2sca",
    city: "United Kingdom",
    line1: "13  Colorado Way",
    line2: "Rhyd-y-fro SA8 9GA",
    phone: "  078 3115 1400",
    email: " contact@designo.uk",
    isReverse: true,
  },
];

export const socialMedia = [
  {
    icon: AiFillFacebook,
    link: "https://www.facebook.com/",
  },
  {
    icon: AiFillYoutube,
    link: "https://www.youtube.com/",
  },
  {
    icon: AiFillTwitterCircle,
    link: "https://www.twitter.com/",
  },
  {
    icon: AiFillInstagram,
    link: "https://www.instagram.com/",
  },
  {
    icon: FaPinterestSquare,
    link: "https://www.pinterest.com/",
  },
];

export const aboutData = {
  hero: {
    title: "About Us",
    content:
      " Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
    imageMobile: aboutHero,
    imageTablet: aboutHeroTablet,
    imageDesktop: aboutHeroDesktop,
  },
  realDeal: {
    title: "The real deal",
    content:
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br/></br/> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    imageMobile: aboutRealDeal,
    imageTablet: aboutRealDealTablet,
    imageDesktop: aboutRealDealDesktop,
  },
  worldClass: {
    title: "World-class talent",
    content:
      "We are a crew of strategists, problem-solvers, and technologists.Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br /> Our team is multi-disciplinary and we are not merelyinterested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    imageMobile: aboutWroldClass,
    imageTablet: aboutWroldClassTablet,
    imageDesktop: aboutWroldClassDesktop,
  },
};
