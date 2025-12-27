import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "../../components/Navbar/Navbar";
import ProjectsCard from "../../components/ProjetsCard/ProjectsCard";
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";

const Projects = () => {
  // 1. Track scroll progress
  const { scrollYProgress } = useScroll();

  // 2. Map scroll progress to animation values
  const overlapOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const overlapScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "100%"]
  );

  const projectCardData = [
    {
      projectImage: "/assets/images/2/5.png",
      clientName: "SANTOSH MANE SIR",
      projectPrice: "1,650",
      location: "Selu Parbhani",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/2.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/3.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/7.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi (Beed - Sambhajinagar Highway)",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/4.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },

    {
      projectImage: "/assets/images/2/6.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/8.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
    {
      projectImage: "/assets/images/2/9.png",
      clientName: "AMOL SHINDE SIR",
      projectPrice: "1,650",
      location: "Padalshingi, Beed",
      ProjectRate: "1650",
      BuiltupArea: "2100",
      services: [
        "2D Drawing",
        "Structural Drawings",
        "3D Drawing",
        "Engineers Daily Site Visit",
      ],
    },
  ];

  return (
    <div className="w-full bg-black pb-[3rem]">
      <div className="relative ">
        <motion.div
          className="sticky top-0 h-screen"
          style={{
            zIndex: 10,
          }}
        >
          <div className="w-full h-screen flex flex-col justify-between relative z-[100]">
            <div className="z-[200]">
              <Navbar />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen z-[99] bg-[rgba(0,0,0,0.3)]"></div>

            <video
              className="absolute top-0 left-0 w-full h-screen z-[1]"
              src="/assets/images/videos/v1.mp4"
              loop
              muted
              autoPlay
              preload="auto"
              style={{
                cursor: "auto",
                width: "100%",
                height: "100%",
                borderRadius: "0px",
                display: "block",
                objectFit: "cover",
                backgroundColor: "rgba(0, 0, 0, 0)",
                objectPosition: "50% 50%",
              }}
            ></video>

            <div className="ml-15 mt-50 flex flex-col items-start justify-center h-full relative">
              <h1 className="relative text-white text-7xl font-400 drop-shadow-lg z-[100]">
                OUR PROJECTS
                <span className="border-anim-line absolute bottom-0 left-0 h-[2px] bg-white block"></span>
              </h1>

              <p className="text-white text-2xl  w-2xl pt-8 z-[100]">
                At Swrajrise Constructions Pvt Ltd, we take pride in building
                not just structures, but homes filled with quality, care, and
                long-lasting value. Each project is a testament to our
                commitment to craftsmanship, timely delivery, and sustainable
                construction practices.
              </p>

              <div className="flex items-center text-white gap-5 pt-5 z-[100]">
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
        </motion.div>

        <motion.div
          className="relative bg-black w-full h-screen"
          style={{
            zIndex: 20,
            opacity: overlapOpacity,
            scale: overlapScale,
          }}
        >
          <div className="flex flex-col items-center bg-black py-15">
            <section className="flex items-center justify-between w-full px-13 pb-20 text-[14px]">
              <div className="w-[70%] flex items-center gap-5">
                <div className="flex items-center justify-between w-[50%]  px-2 py-2 border border-[#c3c3c3] rounded-full  text-white  ">
                  <button className="flex items-center justify-between rounded-full w-full  px-5 py-2  text-white hover:border-white hover:bg-white hover:text-black  transition-colors cursor-pointer">
                    Project Rate
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <button className="flex items-center justify-between w-full  px-5 py-2 rounded-full text-white hover:border-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                    Builtup Area
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <button className="flex items-center justify-between w-full  px-5 py-2 rounded-full text-white hover:border-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                    Location
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between w-[35%]  px-2 py-4 border border-[#c3c3c3] rounded-full  text-white  ">
                  <div className="flex items-center justify-between w-full px-4 pr-5 border-r border-[#c3c3c3]">
                    <p>₹500</p>
                    <p>per sqft</p>
                  </div>

                  <div className="flex items-center justify-between w-full px-4">
                    <p>₹10000</p>
                    <p>per sqft</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-[15%]  px-2 py-4 border border-[#c3c3c3] rounded-full text-white  ">
                  <button className=" cursor-pointer">Clear filters</button>
                </div>
              </div>
              <div className="w-[20%]">
                <div className="flex items-center justify-between w-full    rounded-full text-white  ">
                  <select
                    className="flex items-center justify-between border border-[#c3c3c3] rounded-full w-full  px-5   py-4   text-white  cursor-pointer"
                    name="prices"
                    id="prices"
                  >
                    <option value="high">
                      {" "}
                      {`Sort by price (high - low)`}
                    </option>
                    <option value="low"> {`Sort by price (low - high)`}</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </section>

            <div className="flex items-center justify-center gap-[2rem] flex-wrap">
              <ProjectsCard
                projectImage={projectCardData[0].projectImage}
                clientName={projectCardData[0].clientName}
                projectPrice={projectCardData[0].projectPrice}
                location={projectCardData[0].location}
                ProjectRate={projectCardData[0].ProjectRate}
                BuiltupArea={projectCardData[0].BuiltupArea}
                services={projectCardData[0].services}
              />
              <ProjectsCard
                projectImage={projectCardData[1].projectImage}
                clientName={projectCardData[1].clientName}
                projectPrice={projectCardData[1].projectPrice}
                location={projectCardData[1].location}
                ProjectRate={projectCardData[1].ProjectRate}
                BuiltupArea={projectCardData[1].BuiltupArea}
                services={projectCardData[1].services}
              />
              <ProjectsCard
                projectImage={projectCardData[2].projectImage}
                clientName={projectCardData[2].clientName}
                projectPrice={projectCardData[2].projectPrice}
                location={projectCardData[2].location}
                ProjectRate={projectCardData[2].ProjectRate}
                BuiltupArea={projectCardData[2].BuiltupArea}
                services={projectCardData[2].services}
              />
              <ProjectsCard
                projectImage={projectCardData[3].projectImage}
                clientName={projectCardData[3].clientName}
                projectPrice={projectCardData[3].projectPrice}
                location={projectCardData[3].location}
                ProjectRate={projectCardData[3].ProjectRate}
                BuiltupArea={projectCardData[3].BuiltupArea}
                services={projectCardData[3].services}
              />
              <ProjectsCard
                projectImage={projectCardData[4].projectImage}
                clientName={projectCardData[4].clientName}
                projectPrice={projectCardData[4].projectPrice}
                location={projectCardData[4].location}
                ProjectRate={projectCardData[4].ProjectRate}
                BuiltupArea={projectCardData[4].BuiltupArea}
                services={projectCardData[4].services}
              />
              <ProjectsCard
                projectImage={projectCardData[5].projectImage}
                clientName={projectCardData[5].clientName}
                projectPrice={projectCardData[5].projectPrice}
                location={projectCardData[5].location}
                ProjectRate={projectCardData[5].ProjectRate}
                BuiltupArea={projectCardData[5].BuiltupArea}
                services={projectCardData[5].services}
              />
              <ProjectsCard
                projectImage={projectCardData[6].projectImage}
                clientName={projectCardData[6].clientName}
                projectPrice={projectCardData[6].projectPrice}
                location={projectCardData[6].location}
                ProjectRate={projectCardData[6].ProjectRate}
                BuiltupArea={projectCardData[6].BuiltupArea}
                services={projectCardData[6].services}
              />
              <ProjectsCard
                projectImage={projectCardData[7].projectImage}
                clientName={projectCardData[7].clientName}
                projectPrice={projectCardData[7].projectPrice}
                location={projectCardData[7].location}
                ProjectRate={projectCardData[7].ProjectRate}
                BuiltupArea={projectCardData[7].BuiltupArea}
                services={projectCardData[7].services}
              />
            </div>
          </div>
          <GetInTouch />

          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
