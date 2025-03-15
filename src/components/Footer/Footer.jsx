import { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        id="page9"
        className="w-full h-screen bg-black text-white p-[3vw] relative"
      >
        <div id="page-top" className="flex justify-between mb-[19vw]">
          <div>
            <p className="text-[1.7vw] font-normal">{`Relax. We've got you.`}</p>
            <button className="text-[1vw] font-normal mt-[1.5vw] px-[2.1vw] py-[1.2vw] bg-black border border-white text-white rounded-[0.5vw] cursor-pointer transition-all duration-200 ease-in hover:bg-white hover:text-black">
              Take a seat
            </button>
          </div>
          <div
            id="list"
            className="flex justify-between gap-[5vw] items-start leading-[1.3vw] "
          >
            <ul className="list-none cursor-pointer transition-all duration-1000 linear">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "" },
                { name: "Projects", link: "" },
                { name: "Contact Us", link: "" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    className="border-b border-transparent leading-[1.7vw] hover:border-b hover:border-white"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="list-none cursor-pointer transition-all duration-1000 linear">
              {[
                { name: "Gallery", link: "" },
                { name: "Our Services", link: "" },
                { name: "Our Team", link: "" },
                { name: "Carrers", link: "" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    className="border-b border-transparent leading-[1.7vw] hover:border-b hover:border-white"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="list-none cursor-pointer transition-all duration-1000 linear">
              {[
                { name: "X", link: "" },
                { name: "Instagram", link: "" },
                {
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/in/rishi-jadhav-322a631a5/",
                },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-[1.1vw] font-normal border-b border-transparent leading-[1.7vw] hover:border-b hover:border-white"
                  >
                    {item.name}
                    <span className="text-15px">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="page-middle"
          className="px-[3rem] absolute top-[50%] left-0 w-full flex justify-between items-center "
        >
          <div className="font-thin">
            <p>Pune — Maharashtra</p>
            <p>India — Asia</p>
          </div>
          <div
            id="middle-left"
            className="font-thin flex justify-between items-center gap-[5vw]"
          >
            <p>swarajrise.com</p>
            <p>©2023 swarajrise</p>
          </div>
        </div>

        <div id="page-foot">
          {/* <div className="pt-[12vw]  text-[12vw] font-[500]  text-center flex"> */}
          {/* {["S", "W", "A", "R", "A", "J", "R", "i", "s", "e"].map(
              (item, index) => (
                <span className="inline-block" key={index}>
                  {item}
                </span>
              )
            )} */}
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
        </div>

        <style>
          {`
              #page-foot p {
       
  color: #fff;
  font-size: 12vw;
  font-weight: 500;
  font-family: "Playfair Display", serif;
padding:0px;
margin:0px;
  line-height:0px
}

#page-foot {
 

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  padding-top:11rem
}
`}
        </style>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
