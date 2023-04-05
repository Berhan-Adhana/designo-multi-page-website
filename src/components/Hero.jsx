
const Hero = ({ heroContent: { title, content, btnText, heroImage } }) => {
  return (
    <section className="h-[843px] lg:h-[640px] w-full sm:app-container  overflow-y-hidden">
      <div className=" relative text-center bg-primary lg:flex  lg:items-center lg:flex-row lg:justify-center  bg-bgPattern  bg-no-repeat bg-contain bg-right text-white h-full pt-[120px] md:pt-[180px] rounded-md items-center overflow-y-hidden">
        <div className="px-6 md:px-[58px] lg:pl-[95px] lg:text-left text-center">
          {" "}
          <h1 className="">{title}</h1>
          <p className="pt-[14px]">{content}</p>
          <button className="btn btn-white mt-6 mb-3">{btnText}</button>
        </div>
        <img
          src={heroImage}
          alt="phone"
          className=" h-[573px] max-w-full absolute lg:relative lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0 bottom-0 translate-y-[40%] left-[50%] -translate-x-[50%] "
        />
      </div>
    </section>
  );
};

export default Hero;
