import WhosCard from "./WhosCard";

const Who = ({ whosData }) => {
  return (
    <div className="app-container flex flex-col bg-bgTwoCircles  items-center gap-y-[80px] mt-[120px] mb-[200px] lg:flex-row lg:gap-x-6 lg:justify-center lg:items-start ">
      {whosData.map((who, index) => (
        <WhosCard key={index} who={who} />
      ))}
    </div>
  );
};

export default Who;
