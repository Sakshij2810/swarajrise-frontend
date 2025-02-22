import "./Home.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import { IoPlayCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
  const [activeSlide, setActiveSlide] = useState(0);

  const [isScrollPaused, setIsScrollPaused] = useState(false);
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

  useEffect(() => {
    const handlePageScroll = (event) => {
      const navbar = document.querySelector(".header-nav-container");
      const swrajriseLetters = document.querySelector(".swrajrise-letters");
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 108 && currentScrollY < 128 && !isScrollPaused) {
        setIsScrollPaused(true);
        window.scrollTo(0, 128);
        setTimeout(() => {
          setIsScrollPaused(false);
        }, 300);
      }

      if (isScrollPaused) {
        event.preventDefault();
        window.scrollTo(0, 128);
      }

      if (currentScrollY >= 128) {
        if (navbar) navbar.classList.add("hidden");
        if (swrajriseLetters) swrajriseLetters.classList.add("hidden");
      } else {
        if (navbar) navbar.classList.remove("hidden");
        if (swrajriseLetters) swrajriseLetters.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handlePageScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, [isScrollPaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-main-container">
      <div id="cursor">
        <h5>Explore</h5>
      </div>
      <div className="header-nav-container">
        <Navbar />
      </div>

      <header
        style={{
          backgroundImage: `url(${slides[activeSlide].image})`,
        }}
      >
        <div className="home-header-content">
          <div className="swrajrise-letters">
            <span>S</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>a</span>
            <span>j</span>
            <span>R</span>
            <span>i</span>
            <span>s</span>
            <span>e</span>
          </div>

          <h1>{slides[activeSlide].title}</h1>
          <div className="circle-divs">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveSlide(index)}
                className={activeSlide === index ? "active" : ""}
              ></div>
            ))}
          </div>
        </div>
      </header>

      <section className="about-firm-section">
        <div className="about-firm-content">
          <div className="about-firm-img">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740226600/SwarajRise/c9cvtczwupyptspaalxe.png"
              alt="Firm-img-1"
            />
            <div className="video-thumbnail" onClick={handleThumbnailClick}>
              <div
                className={`play-icon-container show ${
                  isVideoPlaying ? "hide" : ""
                }`}
              >
                <FaPlay className={`show ${isVideoPlaying ? "hide" : ""}`} />
              </div>

              {!isVideoPlaying && (
                <video
                  src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740228887/SwarajRise/tgxzlc7gahuebnmnlefq.mov"
                  loop
                  autoPlay
                  muted
                ></video>
              )}
              {isVideoPlaying && (
                <iframe
                  src="https://www.youtube.com/embed/WArWZcmXKGY?autoplay=1"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* <iframe
              src="https://www.youtube.com/embed/WArWZcmXKGY?autoplay=1"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="about-firm-info">
            <h1>THE MAGIC OF SWARAJRISE</h1>
            <h3>Established in Pune, Maharashtra since 2023</h3>
            <p>
              Swarajrise Construction is a full-service construction firm
              dedicated to bringing your vision to life. Our mission is to
              provide exceptional service to our clients by understanding their
              dreams and desires, and crafting designs that are uniquely
              tailored to them. We believe that thoughtful and meticulously
              detailed architecture and interior design can significantly
              enhance lives.
            </p>
            <button>
              SEE OUR INSIGHTS <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="our-projects-section">
        <div className="our-projects-text">
          <h2>OUR PROJECTS</h2>
          <h5>EXPERIENCE OUR WORK</h5>
        </div>
        <div className="our-projects-img">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740232268/SwarajRise/eqlpi3buvhqwekrsyw3m.png"
              alt="Project 1"
            />
            <div className="overlay">
              <h3>Emerald Haven</h3>
              <p>Selu, Maharashtra</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png"
              alt="Project 2"
            />
            <div className="overlay">
              <h3>Crystal Springs Manor</h3>
              <p>Pune, Maharashtra</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229257/SwarajRise/rlad0ukg46lftrtjdcmt.png"
              alt="Project 3"
            />
            <div className="overlay">
              <h3>Willow Creek Residence</h3>
              <p>Beed, Maharashtra</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740233298/SwarajRise/afmwq44sivkzxnd8dl5r.png"
              alt="Project 4"
            />
            <div className="overlay">
              <h3>Sunset Villa</h3>
              <p>Sambhaji Nagar, Maharashtra</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740233411/SwarajRise/eyzzp0ozvljp6o0zfuzi.png"
              alt="Project 5"
            />
            <div className="overlay">
              <h3>Serenity Heights</h3>
              <p>Delhi, India</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740229466/SwarajRise/m6zoribz35qfiidvwyme.png"
              alt="Project 6"
            />
            <div className="overlay">
              <h3>Golden Meadows</h3>
              <p>Ahemdabad, Gujarat</p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
        </div>
        <button>
          <Link className="button-link" to="/projects">
            {" "}
            SEE ALL PROJECTS
          </Link>

          <FaArrowRight />
        </button>
      </section>

      <section className="owner-section">
        <div className="owner-images">
          {/* <img src="" alt="owner-bg" /> */}

          <video
            className={`${isVideoTwoPlaying ? "opacityzero" : ""}`}
            // className="opacityzero"
            id="owner-gym-video"
            src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740242382/SwarajRise/pbbkd1sf9pyfpldypajv.mp4"
            loop
            autoPlay
            muted
          ></video>

          <div className="video-two-thumbnail" onClick={handleVideoClick}>
            <div
              className={`play-icon-container-two showtwo ${
                isVideoTwoPlaying ? "hidetwo" : ""
              }`}
            >
              <FaPlay />
            </div>

            {/* {!isVideoTwoPlaying && (
              <video
                src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740240565/SwarajRise/fqwsfzunlvrmptytpyjq.mp4"
                loop
                autoPlay
                muted
              ></video>
            )} */}
            {isVideoTwoPlaying && (
              <video
                src="https://res.cloudinary.com/dqjfzu003/video/upload/v1740240565/SwarajRise/fqwsfzunlvrmptytpyjq.mp4"
                // loop
                autoPlay
              ></video>
            )}
          </div>
        </div>
        <div className="owner-content">
          <h1>
            CRAFTING YOUR <br /> DREAM HOME <br /> BUILT WITH PASSION
          </h1>
          <p>
            In the realm of construction, every project tells a unique story. At
            Swarajrise Construction, our mission is to transform your vision
            into reality, ensuring each brick, beam, and wall stands testament
            to our dedication to excellence. Our family-owned business takes
            pride in crafting homes that not only meet but exceed expectations.
          </p>
          <button>
            READ OUR FULL STORY <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="our-team-section">
        <div className="our-team-text">
          <h1>OUR TEAM</h1>
          <button>
            SEE ALL <FaArrowRight />
          </button>
        </div>
        <div className="team-card-images">
          <div className="team-card">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1726131346/images/owner/owner_zsd8ub.jpg"
              alt="owner-1"
              style={{
                width: "27.3rem",
                height: "43rem",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div className="team-card">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1726131346/images/owner/team2_gz89nz.jpg"
              alt="team-2"
              style={{
                width: "27.3rem",
                height: "43rem",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div className="team-card">
            <img
              src="https://res.cloudinary.com/dqjfzu003/image/upload/v1726131347/images/owner/team3_mxjuq5.jpg"
              alt="team-3"
              style={{
                width: "27.3rem",
                height: "43rem",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </section>

      <section className="come-soon-section">
        <div className="come-soon-text">
          <h1>Get in touch.</h1>
          <hr style={{ width: "94%", marginTop: "-7rem" }} />
        </div>
        <div className="come-soon-images">
          {/* <div className="img-div">
            <blockquote
              class="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/C4slz8wtvxx/"
              data-instgrm-version="12"
            >
              <a
                href="https://www.instagram.com/p/C4slz8wtvxx/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Img7}
                  alt="Instagram Post"
                  style={{ width: "300px", height: "300px" }}
                />
              </a>
            </blockquote>

            <script async defer src="//www.instagram.com/embed.js"></script>
          </div> */}
          <div className="swiperdiv1">
            <div className="swiper1">
              <div className="container">
                <div className="image-wrapper">
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
  );
};

export default Home;
