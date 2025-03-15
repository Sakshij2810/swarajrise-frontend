import { useEffect, useState } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740225845/SwarajRise/ld0hvv5bdvihrgnvr2uf.png",
    title: "Emerald Haven",
    belowTitle: "Build. Design. Live.",
    info: "From foundation to finesse, we build homes that last. Interiors crafted to reflect your dreams.",
  },
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740232354/SwarajRise/p5qkpmf1wltycg2vggn2.png",
    title: "Crystal Springs Manor",
    belowTitle: "Crafting Your Space.",
    info: "Seamless construction, stunning interiors, and quality materials. Your dream home, delivered with perfection.",
  },
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229257/SwarajRise/rlad0ukg46lftrtjdcmt.png",
    title: "Willow Creek Residence",
    belowTitle: "Strong Roots, Stylish Living.",
    info: "Design, build, and furnish—everything under one roof. Bringing your vision to life with expert craftsmanship.",
  },
];

const BannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(slides.length - 1);
  const [animateBorder, setAnimateBorder] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(activeSlide);
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timeout = setTimeout(() => setAnimateBorder(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
          className={`absolute inset-0 w-full h-screen bg-cover bg-center transition-transform duration-1000 ease-in-out ${
            index === activeSlide
              ? "translate-x-0 z-10"
              : index === prevSlide
              ? "translate-x-0 z-0 scale-110"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="ml-20 mt-50 flex flex-col items-start justify-center h-full relative">
            <h1
              className={`relative text-white text-7xl font-400 drop-shadow-lg 
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] 
    before:bg-white before:transition-all before:duration-3000 before:ease-in-out
    ${
      index === activeSlide && (animateBorder || index !== 0)
        ? "before:w-full"
        : "before:w-0"
    }
  `}
            >
              {slide.title}
            </h1>

            <h1 className="pt-3 text-[rgb(243,233,213)] text-6xl font-400 drop-shadow-lg">
              {slide.belowTitle}
            </h1>

            <p className="text-white text-2xl  w-2xl pt-8">{slide.info}</p>

            <div className="flex items-center text-white gap-5 pt-5">
              <button className="flex items-center justify-between cursor-pointer text-black text-sm bg-white px-6 py-3 rounded-3xl group relative overflow-hidden transition-all duration-300 ease-in-out min-w-max hover:pr-10">
                View Project
                <span className="hidden absolute right-4 transition-all duration-300 ease-in-out group-hover:inline group-hover:right-3">
                  <IoIosArrowRoundForward className="text-2xl" />
                </span>
              </button>

              <button className="flex items-center justify-between cursor-pointer text-black text-sm px-6 py-3 rounded-3xl bg-[#f3b03d] group relative overflow-hidden transition-all duration-300 ease-in-out min-w-max hover:pr-10">
                Let’s Build Together
                <span className="hidden absolute right-4 transition-all duration-300 ease-in-out group-hover:inline group-hover:right-3">
                  <IoIosArrowRoundForward className="text-2xl" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Circle Indicators */}
      <div className="absolute bottom-10 right-1 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPrevSlide(activeSlide);
              setActiveSlide(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-12 bg-white" // Active indicator - Bigger and solid white
                : "w-2.5 bg-white/30 backdrop-blur-md" // Inactive indicator - Small, transparent with blur
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
