import { useEffect, useState } from "react";

const useScrollToTop = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) setIsBottom(true);
      else setIsBottom(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return [isBottom];
};

export default useScrollToTop;
