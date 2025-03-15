import "./Loader.css";
import { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#loader p", {
      x: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    })
      .to("#loader p", {
        x: -25,
        duration: 1.5,
        stagger: 0.1,
        opacity: 1,
      })
      .to("#loader p", {
        x: -65,
        duration: 1,
        stagger: 0.1,
        opacity: 0,
      });
    //   .to("#loader", {
    //     display: "none",
    //   })
  }, []);

  return (
    <div id="loader" className="loader">
      {/* <p>SwarajRise</p>
      <p>Construction</p>
      <p>Pvt. Ltd.</p> */}
      <p style={{ fontSize: "20vw" }}>S</p>
      <p>W</p>
      <p>A</p>
      <p>R</p>
      <p>A</p>
      <p>J</p>
      <p style={{ fontSize: "20vw" }}>R</p>
      <p>I</p>
      <p>S</p>
      <p>E</p>
      {/* <p>S</p>
      <p>w</p>
      <p>a</p>
      <p>r</p>
      <p>a</p>
      <p>j</p>
      <p>R</p>
      <p>i</p>
      <p>s</p>
      <p>e</p> */}
    </div>
  );
};

export default Loader;
