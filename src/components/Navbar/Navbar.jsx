import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-full px-15">
      {/* Logo */}
      <div className="nav-logo-container pt-5">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img
            className="text-white w-40"
            src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740312300/SwarajRise/skytt77ppnjvunezmrtd.png"
            alt="nav-logo"
          />
        </Link>
      </div>

      {/* Menu Button */}
      <div
        className="cursor-pointer px-5 py-5 text-3xl text-white font-thin hover:bg-[#f3b03d] z-50 relative"
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
        className={`flex justify-between px-10 py-10 items-center fixed top-0 left-0 w-full h-screen bg-[#f3e9d5] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Main Menu Items */}
        <div>
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <div className="pl-10 py-4" key={index}>
              <Link
                to={item.path}
                className="text-9xl text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Other Links Section */}
        <div>
          <div>
            <h2 className="text-xl font-semibold">Other Links</h2>
            {[
              { name: "Gallery", path: "/gallery" },
              { name: "Our Services", path: "/services" },
              { name: "Our Team", path: "/team" },
              { name: "Careers", path: "/careers" },
            ].map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  className="text-lg text-gray-700 hover:text-black transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
