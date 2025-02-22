import "./Footer.css";
import React, { Fragment } from "react";

const Footer = () => {
  return (
    <footer>
      <div id="page9">
        <div id="page-top">
          <div>
            <p>Relax. We've got you.</p>
            <button>Take a seat</button>
          </div>
          <div id="list">
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Projects</p>
              </li>

              <li>
                <p>Contact Us</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>Gallery</p>
              </li>
              <li>
                <p>Our Services </p>
              </li>
              <li>
                <p>Our Team</p>
              </li>

              <li>
                <p>Careers</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  X <span style={{ fontSize: "15px" }}>&#8599;</span>
                </p>
              </li>
              <li>
                <p>
                  Instagram <span style={{ fontSize: "15px" }}>&#8599;</span>
                </p>
              </li>
              <li>
                <p>
                  LinkedIn <span style={{ fontSize: "15px" }}>&#8599;</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div id="page-middle">
          <div>
            <p>Pune — Maharashtra</p>
            <p>India — Asia</p>
          </div>
          <div id="middle-left">
            <p>swarajrise.com</p>
            <p>©2023 swarajrise</p>
          </div>
        </div>

        <div id="page-foot">
          <h1>
            {/* <span>S</span>
            <span>W</span>
            <span>A</span>
            <span>R</span>
            <span>A</span>
            <span>J</span>
            <span>R</span>
            <span>I</span>
            <span>S</span>
            <span>E</span> */}
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
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
