import "./locomotive.css"; // instead of the SCSS import

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll"; // Correct import

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.8,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="fixed inset-0 overflow-hidden will-change-transform"
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
