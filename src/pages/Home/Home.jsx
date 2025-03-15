import { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import { IoPlayCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Loader from "../../components/Loader/Loader";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740225845/SwarajRise/ld0hvv5bdvihrgnvr2uf.png",
    title: "Flyway Family Home",
  },
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png",
    title: "Explore Your Dreams",
  },
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740232268/SwarajRise/eqlpi3buvhqwekrsyw3m.png",
    title: "Your Future Starts Here",
  },
  {
    image:
      "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233298/SwarajRise/afmwq44sivkzxnd8dl5r.png",
    title: "Your Future Starts Here",
  },
];

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoTwoPlaying, setIsVideoTwoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    isVideoPlaying ? setIsVideoPlaying(false) : setIsVideoPlaying(true);
  };

  const handleVideoClick = () => {
    // if(isVideoTwoPlaying == "false"){

    // }
    isVideoTwoPlaying
      ? setIsVideoTwoPlaying(false)
      : setIsVideoTwoPlaying(true);
    // setIsVideoTwoPlaying(true);
  };

  return (
    <Fragment>
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 z-50 w-full">
          <Navbar />
        </div>

        <div>
          <BannerSlider />
        </div>

        <section className="w-full bg-[rgb(243,233,213)]">
          <div className="w-full h-screen flex relative">
            <div className="w-[65%]">
              <img
                className="absolute top-[4rem] left-[22rem] w-[34rem] h-[38rem]"
                src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740226600/SwarajRise/c9cvtczwupyptspaalxe.png"
                alt="Firm-img-1"
              />

              <div
                className="relative cursor-pointer"
                onClick={handleThumbnailClick}
              >
                {!isVideoPlaying && (
                  <>
                    <div className="absolute top-[29rem] left-[25.5rem] rounded-full p-5 flex items-center justify-center cursor-pointer animate-wave bg-white/40 shadow-lg z-9">
                      <FaPlay className="text-white text-2xl z-9" />
                    </div>

                    <video
                      className="absolute top-56 left-24 w-[46rem] h-[34rem]"
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740228887/SwarajRise/tgxzlc7gahuebnmnlefq.mov"
                      loop
                      autoPlay
                      muted
                    ></video>
                  </>
                )}

                {isVideoPlaying && (
                  <iframe
                    className="absolute top-56 left-24 w-[46rem] h-[34rem]"
                    src="https://www.youtube.com/embed/WArWZcmXKGY?autoplay=1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <style>
                {`
          @keyframes wave {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4),
                          0 0 0 2px rgba(255, 255, 255, 0.4),
                          0 0 0 15px rgba(255, 255, 255, 0.4);
            }
            100% {
              box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4),
                          0 0 0 15px rgba(255, 255, 255, 0.4),
                          0 0 0 30px rgba(11, 165, 255, 0);
            }
          }
          .animate-wave {
            animation: wave 1.2s linear infinite;
          }
        `}
              </style>
            </div>
            <div className="w-[35%] absolute top-[4rem] right-0 px-[2rem]">
              <h1 className="font-bold text-[3.5rem] tracking-[0.1rem] leading-[3.5rem] ">
                THE MAGIC OF SWARAJRISE
              </h1>
              <h3 className="pt-[1rem] uppercase font-medium text-[1.2rem] leading-[1.5rem] tracking-[0.3rem]">
                Established in Pune, Maharashtra since 2023
              </h3>
              <p className="py-[2rem] font-[300]  text-[1.3rem] leading-[2rem] ">
                Swarajrise Construction is a full-service construction firm
                dedicated to bringing your vision to life. Our mission is to
                provide exceptional service to our clients by understanding
                their dreams and desires, and crafting designs that are uniquely
                tailored to them. We believe that thoughtful and meticulously
                detailed architecture and interior design can significantly
                enhance lives.
              </p>
              <button className="border border-[rgb(83,100,82)] bg-[rgb(83,100,82)] px-12 py-4 rounded-sm text-white  flex items-center justify-center gap-[0.7rem] text-[1.2rem] cursor-pointer transition-all duration-500 tracking-[0.3rem] ease-in-out hover:bg-transparent hover:text-black">
                SEE OUR INSIGHTS <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        <section className="w-full py-[2rem] bg-black flex flex-col items-center justify-center">
          <div className="text-center py-[2rem]">
            <h2 className="text-[3.5rem] text-white font-bold tracking-[0.1rem] leading-[3.5rem] mt-[-1rem]">
              OUR PROJECTS
            </h2>
            <h5 className="text-white uppercase font-medium text-[1.2rem] leading-[1.5rem] tracking-[0.3rem] mt-[1rem]">
              EXPERIENCE OUR WORK
            </h5>
          </div>
          <div className="flex flex-wrap">
            {[
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740232268/SwarajRise/eqlpi3buvhqwekrsyw3m.png",
                placeName: "Emerald Haven",
                location: "Selu, Maharashtra",
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png",
                placeName: "Crystal Springs Manor",
                location: "Pune, Maharashtra",
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229257/SwarajRise/rlad0ukg46lftrtjdcmt.png",
                placeName: "Willow Creek Residence",
                location: "Beed, Maharashtra",
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233298/SwarajRise/afmwq44sivkzxnd8dl5r.png",
                placeName: "Sunset Villa",
                location: "Sambhaji Nagar, Maharashtra",
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233411/SwarajRise/eyzzp0ozvljp6o0zfuzi.png",
                placeName: "Serenity Heights",
                location: "Delhi, India",
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229466/SwarajRise/m6zoribz35qfiidvwyme.png",
                placeName: "Golden Meadows",
                location: "Ahemdabad, Gujarat",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[30rem] h-[16.8rem] relative cursor-pointer overflow-hidden group"
              >
                <img
                  // width="100%"
                  // height="100%"
                  className=" w-full h-full object-cover absolute transition-transform duration-1000 filter group-hover:scale-110 group-hover:brightness-55"
                  src={item.imgUrl}
                  alt={item.placeName}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-1000 group-hover:opacity-[1] z-[2]">
                  <h3 className="text-[2rem] my-[0.1rem]">{item.placeName}</h3>
                  <p className="mb-[1rem]">{item.location}</p>
                  <button className="bg-transparent text-white border border-white px-4 py-2 cursor-pointer transition-colors duration-300 text-base font-semibold tracking-widest hover:bg-white hover:text-black">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="my-[4rem] border text-white border-white h-[3.3rem] bg-transparent px-12 py-4 rounded-sm text-white flex justify-center items-center gap-[0.7rem] text-[1.2rem] cursor-pointer transition-all duration-500 ease-in-out tracking-[0.3rem] hover:text-black hover:bg-white ">
            <Link className="decoration-none" to="/projects">
              {" "}
              SEE ALL PROJECTS
            </Link>

            <FaArrowRight />
          </button>
        </section>

        <section className="h-[100vh] w-full bg-black relative flex items-center">
          <div className="w-full h-[100vh] relative">
            <video
              className={`${
                isVideoTwoPlaying ? "opacity-0" : ""
              } w-full h-[100vh] absolute`}
              id="owner-gym-video"
              src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740242382/SwarajRise/pbbkd1sf9pyfpldypajv.mp4"
              loop
              autoPlay
              muted
            ></video>

            <div
              className="absolute bottom-[10%] right-[5%] cursor-pointer"
              onClick={handleVideoClick}
            >
              <div
                className={`rounded-full animate-wave flex items-center justify-center p-[20px] cursor-pointer ${
                  isVideoTwoPlaying
                    ? "hidden"
                    : "text-[#f3e9d5] text-[2rem] font-light z-[9]"
                }`}
              >
                <FaPlay />
              </div>

              {isVideoTwoPlaying && (
                <video
                  src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740240565/SwarajRise/fqwsfzunlvrmptytpyjq.mp4"
                  autoPlay
                ></video>
              )}
            </div>
          </div>

          <div className="w-[70%] h-[100%] absolute top-0 left-0 text-white z-[2] flex flex-col justify-center pl-[8rem]">
            <h1 className=" font-bold text-[3.5rem] tracking-[0.1rem] leading-[3.5rem]">
              CRAFTING YOUR <br /> DREAM HOME <br /> BUILT WITH PASSION
            </h1>
            <p className=" py-[1.5rem] font-[300]  text-[1.3rem] leading-[2rem]">
              In the realm of construction, every project tells a unique story.
              At Swarajrise Construction, our mission is to transform your
              vision into reality, ensuring each brick, beam, and wall stands
              testament to our dedication to excellence. Our family-owned
              business takes pride in crafting homes that not only meet but
              exceed expectations.
            </p>
            <button className="w-[30rem] my-[2rem] font-medium border text-black border-white h-[3.3rem] bg-white px-12 py-4 rounded-sm  flex justify-center items-center gap-[0.7rem] text-[1.2rem] cursor-pointer transition-all duration-500 ease-in-out tracking-[0.3rem] hover:text-white hover:bg-transparent">
              READ OUR FULL STORY <FaArrowRight />
            </button>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/35 to-transparent z-[1] pointer-events-none"></div>
        </section>

        <section className="w-full h-[100vh] bg-[#f3e9d5]">
          <div className="p-[2rem_2rem] flex items-center justify-between">
            <h1 className=" text-[4rem] tracking-[0.1rem] leading-[3.5rem] font-bold">
              OUR TEAM
            </h1>
            <button className="font-medium border border-black bg-transparent px-12 py-4 rounded-sm text-black  flex items-center justify-center gap-[0.7rem] text-[1.2rem] cursor-pointer transition-all duration-500 tracking-[0.3rem] ease-in-out hover:bg-black hover:text-white">
              SEE ALL <FaArrowRight />
            </button>
          </div>

          <div className="w-full flex items-center justify-center gap-[2rem]">
            {[
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1726131346/images/owner/owner_zsd8ub.jpg",
                employeeName: "Rushikesh Kalyan Jadhav",
                position:
                  "Management & Execution Head at SwarajRise construction Co. Pvt Ltd.",
                quote: `"Success in construction isn't just about building structures; it's about building trust, relationships, and a vision that stands the test of time."`,
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1726131346/images/owner/team2_gz89nz.jpg",
                employeeName: "Rushikesh Kalyan Jadhav",
                position:
                  "Management & Execution Head at SwarajRise construction Co. Pvt Ltd.",
                quote: `"Success in construction isn't just about building structures; it's about building trust, relationships, and a vision that stands the test of time."`,
              },
              {
                imgUrl:
                  "https://res.cloudinary.com/dqjfzu003/image/upload/v1726131347/images/owner/team3_mxjuq5.jpg",
                employeeName: "Kalyan Bhivrao Jadhav",
                position:
                  "Project Manager & Execution Head at SwarajRise construction Co. Pvt Ltd.",
                quote: `"Every bridge we build is more than just concrete and steel—it’s a connection, a testament to engineering excellence, and a legacy that stands strong for generations."`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group w-[27.3rem] h-[43rem] perspective"
              >
                <div className="relative w-[26rem] h-full transition-transform duration-800 transform-style-3d group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full front">
                    <img
                      src={item.imgUrl}
                      alt={`owner-${index + 1}`}
                      className="w-full h-full rounded-[1.2rem]"
                    />
                    {/* <h1 className="text-2xl font-bold uppercase text-center tracking-[0.1rem] mt-[1rem]">
                    {item.employeeName}
                  </h1> */}
                  </div>

                  {/* Back Side */}
                  <div className="px-[3rem] py-[3rem] absolute inset-0 w-full h-full back flex flex-col items-center justify-between rounded-[1.2rem] bg-[rgb(83,100,82)] text-white rotate-y-180">
                    <div className="border-b border-t border-[#f3e9d5] py-[0.5rem] w-full text-center">
                      <p className="text-2xl text-[#f3e9d5] ">
                        {item.employeeName}
                      </p>
                    </div>
                    <div>
                      <p className=" py-[1.5rem] font-[300]  text-[1.3rem] leading-[2rem] text-[#f3e9d5]">
                        {item.quote}
                      </p>
                    </div>
                    <div className=" border-t border-[#f3e9d5] py-[0.5rem] w-full flex flex-col items-center justify-center">
                      <p className="text-[#f3e9d5] text-xl italic">
                        - {item.position}
                      </p>
                      <button className="font-medium border border-[#f3e9d5] bg-transparent px-4 py-4 mt-[4rem] rounded-sm text-[#f3e9d5]  flex items-center justify-center gap-[0.7rem] text-[1rem] cursor-pointer transition-all duration-500 tracking-[0.3rem] ease-in-out hover:bg-[#f3e9d5] hover:text-[rgb(83,100,82)]">
                        SEE FULL DETAILS <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold uppercase text-center tracking-[0.1rem] mt-[1rem]">
                  {item.employeeName}
                </h1>
              </div>
            ))}

            <style>
              {`
    .perspective {
      perspective: 1000px;
    }

    .transform-style-3d {
      transform-style: preserve-3d;
      will-change: transform; /* Optimize performance */
    }

    .front,
    .back {
      backface-visibility: hidden;
      transition: transform 0.6s ease-in-out; /* Smooth transition */
    }

    .back {
      transform: rotateY(180deg);
    }

    .group:hover .transform-style-3d {
      transform: rotateY(180deg);
    }
    `}
            </style>
          </div>
        </section>

        <section className="pt-[10rem] w-full bg-[#f3e9d5]">
          <div className="">
            <h1 className="pl-[2rem] text-[9vw] font-[400] font-[rejouice]">
              Get in touch.
            </h1>
            <hr
              style={{
                width: "94%",
                marginTop: "-1rem",
                marginLeft: "2rem",
              }}
            />
          </div>
          <div className="mt-[-3rem]">
            <div className="h-[60vh] w-full relative">
              <div className="w-[130%] h-full">
                <div className="">
                  <div className="image-wrapper">
                    <style>
                      {`

                  .image-wrapper {
  display: flex;

  gap: 1rem;
  animation: scrollImages 60s linear infinite; /* Adjust animation duration as needed */
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
  font-size: 18px;
}
 
                  @keyframes scrollImages {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.image-wrapper img {
  display: block;
  width: 18.6%;

  object-fit: cover;
}

.image-wrapper video {
  display: block;
  width: 18.6%;

  object-fit: cover;
}
.image-wrapper img:last-child {
  margin-right: -100%;
}
                  `}
                    </style>
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740233411/SwarajRise/eyzzp0ozvljp6o0zfuzi.png"
                      alt="img5"
                      style={{ height: "400px" }}
                    />
                    <video
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740246220/SwarajRise/puqnigzicpganz8a3dvh.mov"
                      muted
                      loop
                      autoPlay="true"
                      style={{ height: "300px" }}
                    ></video>
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229257/SwarajRise/rlad0ukg46lftrtjdcmt.png"
                      alt="img3"
                      style={{ height: "400px" }}
                    />
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png"
                      alt="img1"
                    />
                    <video
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740246120/SwarajRise/lgleexrxmlwb7zczbveo.mp4"
                      muted
                      loop
                      autoPlay="true"
                      style={{ height: "300px" }}
                    ></video>
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740246660/SwarajRise/jtcyhrbsohm1rnh727i1.png"
                      alt="img1"
                      style={{ height: "250px" }}
                    />
                    <video
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740246220/SwarajRise/puqnigzicpganz8a3dvh.mov"
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740233298/SwarajRise/afmwq44sivkzxnd8dl5r.png"
                      alt="img4"
                      style={{ height: "400px" }}
                    />
                    <video
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740246300/SwarajRise/aqajspwzw6t6okley89r.mov"
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png"
                      alt="img2"
                      style={{ height: "300px" }}
                    />
                    <img
                      src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740246612/SwarajRise/spttpbogdzguerozgqaj.png"
                      alt="img1"
                    />
                    <video
                      src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740246495/SwarajRise/pxlgw3bszefqywaymxfm.mp4"
                      muted
                      loop
                      autoPlay="true"
                      style={{ height: "300px" }}
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
