import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-full px-15">
      {/* Logo */}
      <div className="nav-logo-container pt-5">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img
            className="text-white w-40"
            src="/assets/images/logo/logopng.png"
            alt="nav-logo"
          />
        </Link>
      </div>

      {/* Menu Button */}
      <div
        className="cursor-pointer px-5 py-5 text-3xl text-white  font-thin hover:bg-[#f3b03d] z-50 relative mb-15"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <div className="flex items-center gap-1 text-black">
            <FiX />
            <span>CLOSE</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <FiMenu />
            <span>MENU</span>
          </div>
        )}
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`flex justify-between py-10 items-center fixed top-0 left-0 w-full h-[100vh] bg-[#f3e9d5] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main Menu Items */}
        <div className="mt-[4rem] w-full">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <div className="  w-full" key={index}>
              <Link
                to={item.path}
                className="block  pl-10 py-8 text-8xl text-black font-bold uppercase bg-[#f3e9d5] hover:bg-black hover:text-[#f3e9d5] transition-colors duration-100"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="absolute top-35 right-50">
          <img
            className="text-white w-60"
            src="/assets/images/logo/logopng.png"
            alt="nav-logo"
          />
        </div>

        {/* Other Links Section */}
        <div className="absolute bottom-25 right-50 ">
          <div>
            <h1 className="text-4xl font-semibold mb-[1rem] uppercase">
              Other Links
            </h1>
            {[
              { name: "Gallery", path: "/gallery" },
              { name: "Our Services", path: "/services" },
              { name: "Our Team", path: "/team" },
              { name: "Careers", path: "/careers" },
            ].map((item, index) => (
              <div className="py-[0.4rem] uppercase" key={index}>
                <Link
                  to={item.path}
                  className="text-xl  text-black-700 border-b border-transparent hover:text-black hover:border-black transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="flex items-center justify-flex-start text-4xl gap-[1.5rem] mt-[1rem]">
              <a href="https://www.instagram.com/swarajrise/">
                <FaInstagramSquare />
              </a>
              <a href="https://www.youtube.com/@rishizjadhav">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/in/rishi-jadhav-322a631a5/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
