import React from "react";
import aboutImage from "../assets/about/mobile/image-about-hero.jpg";
import aboutImageTablet from "../assets/about/tablet/image-about-hero.jpg";
import aboutImageDesktop from "../assets/about/desktop/image-about-hero.jpg";

import aboutImage2 from "../assets/about/mobile/image-world-class-talent.jpg";
import aboutImageTablet2 from "../assets/about/tablet/image-world-class-talent.jpg";
import aboutImageDesktop2 from "../assets/about/desktop/image-world-class-talent.jpg";

import aboutImage3 from "../assets/about/mobile/image-real-deal.jpg";
import aboutImageTablet3 from "../assets/about/tablet/image-real-deal.jpg";
import aboutImageDesktop3 from "../assets/about/desktop/image-real-deal.jpg";
import Cities from "../components/Cities";
const About = () => {
  return (
    <div className="pt-[57px]">
      <div className="flex flex-col lg:flex-row-reverse items-center app-container lg:h-[480px]">
        <picture className="lg:flex-1">
          <source media="(min-width:1024px )" srcset={aboutImageDesktop} />
          <source media="(min-width:768px )" srcset={aboutImageTablet} />
          <img
            src={aboutImage}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-md lg:rounded-l-none"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full text-white flex flex-col justify-center items-center bg-primary bg-bgPattern bg-no-repeat bg-cover bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-r-none lg:rounded-l-md">
          <h1 className="">About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center app-container lg:h-[480px] mt-[120px]">
        <picture className="">
          <source media="(min-width:1024px )" srcset={aboutImageDesktop2} />
          <source media="(min-width:768px )" srcset={aboutImageTablet2} />
          <img
            src={aboutImage2}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-none lg:rounded-l-md"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full  flex flex-col justify-center items-center bg-background bg-bgPattern  bg-contain bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-l-none lg:rounded-r-md">
          <h2 className="text-primary">World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br /> Our team is multi-disciplinary and we are not merely
            interested in form — content and meaning are just as important. We
            give great importance to craftsmanship, service, and prompt
            delivery. Clients have always been impressed with our high-quality
            outcomes that encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <Cities />
      <div className="flex flex-col lg:flex-row-reverse items-center app-container lg:h-[480px] mt-[120px]">
        <picture className="">
          <source media="(min-width:1024px )" srcset={aboutImageDesktop3} />
          <source media="(min-width:768px )" srcset={aboutImageTablet3} />
          <img
            src={aboutImage3}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-md lg:rounded-l-none"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full  flex flex-col justify-center items-center bg-background bg-bgPattern  bg-contain bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-l-md lg:rounded-r-none">
          <h2 className="text-primary">The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
