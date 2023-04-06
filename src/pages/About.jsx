import Cities from "../components/locations/Cities.jsx";
import { aboutData } from "../data";
const About = () => {
  const { hero, worldClass, realDeal } = aboutData;
  return (
    <div className="pt-[57px]">
      <div className="flex flex-col lg:flex-row-reverse items-center app-container lg:h-[480px]">
        <picture className="lg:flex-1">
          <source media="(min-width:1024px )" srcSet={hero.imageDesktop} />
          <source media="(min-width:768px )" srcSet={hero.imageTablet} />
          <img
            src={hero.imageMobile}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-md lg:rounded-l-none"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full text-white flex flex-col justify-center items-center bg-primary bg-bgPattern bg-no-repeat bg-cover bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-r-none lg:rounded-l-md">
          <h1 className="">{hero.title}</h1>
          <p>{hero.content}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center app-container lg:h-[480px] mt-[120px]">
        <picture className="">
          <source
            media="(min-width:1024px )"
            srcSet={worldClass.imageDesktop}
          />
          <source media="(min-width:768px )" srcSet={worldClass.imageTablet} />
          <img
            src={worldClass.imageMobile}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-none lg:rounded-l-md"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full  flex flex-col justify-center items-center bg-background bg-bgPattern  bg-contain bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-l-none lg:rounded-r-md">
          <h2 className="text-primary">{worldClass.title}</h2>
          <p>{worldClass.content}</p>
        </div>
      </div>

      <Cities />
      <div className="flex flex-col lg:flex-row-reverse items-center app-container lg:h-[480px] mt-[120px]">
        <picture className="">
          <source media="(min-width:1024px )" srcSet={realDeal.imageDesktop} />
          <source media="(min-width:768px )" srcSet={realDeal.imageTablet} />
          <img
            src={realDeal.imageMobile}
            alt="team"
            className="h-[320px] lg:h-[480px] rounded-t-md lg:rounded-r-md lg:rounded-l-none"
          />
        </picture>
        <div className="lg:flex-1 lg:h-full  flex flex-col justify-center items-center bg-background bg-bgPattern  bg-contain bg-center gap-y-6 py-[80px] px-6 rounded-b-md lg:rounded-l-md lg:rounded-r-none">
          <h2 className="text-primary">{realDeal.title}</h2>
          <p>{realDeal.content}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
