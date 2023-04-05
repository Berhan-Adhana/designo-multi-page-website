import React from "react";
import { SlArrowUp } from "react-icons/sl";
import useScrollToTop from "../../hooks/useScrollToTop";

const ScrollToTop = () => {
  const [isBottom] = useScrollToTop();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      {isBottom && (
        <div className="fixed right-3 bottom-2 z-[999] cursor-pointer">
          <SlArrowUp
            size={40}
            className="text-primary font-bold"
            onClick={handleScrollToTop}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
