import "./ProjectsCard.css";

import { FaLocationDot } from "react-icons/fa6";
// import { MdEngineering } from "react-icons/md";
// import { MdDone } from "react-icons/md";

const ProjectsCard = ({
  projectImage,
  clientName,
  projectPrice,
  location,
  ProjectRate,
  BuiltupArea,
  services,
}) => {
  return (
    <div className="project-cards-main-container">
      <div className="card-image-project-div">
        <img style={{ height: "245px" }} src={projectImage} alt="img-1" />
      </div>
      <div className="card-content-project-div">
        <div className="card-project-top">
          <div style={{ width: "80%" }}>
            <p style={{ color: "gray", fontWeight: "500" }}>
              <span style={{ color: "white", fontWeight: "300" }}>
                Client -
              </span>{" "}
              {clientName}
            </p>
          </div>

          <p
            style={{
              color: "rgb(0, 187, 0)",
              fontSize: "1rem",
            }}
          >
            &#8377; {projectPrice}
          </p>
        </div>
        <p
          style={{
            width: "100%",
            fontSize: "1rem",
            fontWeight: "400",
            marginTop: "-1rem",
            marginLeft: "1rem",
          }}
        >
          <FaLocationDot /> <span>{location}</span>
        </p>
        <div className="card-project-bottom">
          <div className="card-project-left-div">
            <p>
              Project Rate -<span>{ProjectRate} rs Per SQFT</span>{" "}
            </p>
            <p style={{ marginTop: "-0.5rem" }}>
              Builtup Area - <span>{BuiltupArea} SQFT</span>
            </p>
          </div>
          {/* <div className="card-project-right-div">
            <p>
              <MdEngineering /> Service's
            </p>
            <ul>
              <li>
                <MdDone
                  style={{
                    color: "rgb(0, 187, 0)",
                  }}
                />
                {services[0]}
              </li>
              <li>
                <MdDone
                  style={{
                    color: "rgb(0, 187, 0)",
                  }}
                />
                {services[1]}
              </li>
              <li>
                <MdDone
                  style={{
                    color: "rgb(0, 187, 0)",
                  }}
                />
                {services[2]}
              </li>

              <li>
                <MdDone
                  style={{
                    color: "rgb(0, 187, 0)",
                  }}
                />
                {services[3]}
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
