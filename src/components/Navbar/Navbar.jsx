import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="nav-logo-container">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img
            style={{ color: "white" }}
            src="https://res.cloudinary.com/dqjfzu003/image/upload/v1740251974/SwarajRise/m5leatlpbntif9aryxej.jpg"
            alt="nav-logo"
          />
        </Link>
      </div>
      <div className="list-container">
        <ul className="top-ul">
          <li>Gallery</li>
          <li>Our Services</li>
          <li>Our Team</li>
          <li>Careers</li>
        </ul>
        <ul className="bottom-ul">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              Projects
            </Link>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
