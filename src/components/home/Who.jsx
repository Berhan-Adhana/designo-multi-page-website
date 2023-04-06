import { useInView } from "react-intersection-observer";

const Who = ({ whosData }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="app-container flex flex-col bg-bgTwoCircles  items-center gap-y-[80px] mt-[120px] mb-[200px] lg:flex-row lg:gap-x-6 lg:justify-center lg:items-start ">
      {whosData.map((who, index) => {
        let delay = 0;
        {
          index === 0
            ? (delay = `${150 * index}ms`)
            : (delay = `${150 * index + 900}ms`);
        }
        console.log(delay);
        return (
          <article
            ref={ref}
            key={index}
            className={`flex flex-col gap-y-12 items-center md:flex-row md:gap-x-12 lg:flex-col lg:gap-x-[30px] lg:justify-start transition-all duration-[900ms] delay-[
            delay-[${delay}]
          ] ${
            inView ? "translate-y-0 opacity-1" : "-translate-y-10 opacity-0"
          }`}
          >
            <div className="bg-bgPattern w-[202px] h-[202px]">
              <img src={who.image} alt="" className="object-cover max-w-full" />
            </div>
            <div className="flex flex-col gap-y-8 items-center flex-1 md:items-start lg:items-center lg:justify-start">
              <p className="font-medium text-[20px] leading-[26px] tracking-[5px]">
                {who.title}
              </p>
              <p className="font-[400] text-[16px] leading-[26px] text-center md:text-left lg:text-center">
                {who.content}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Who;
