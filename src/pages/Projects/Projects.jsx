import Navbar from "../../components/Navbar/Navbar";
import "./Projects.css";

// import BannerImg from "../../assets/images/1/2.jpg";

// import Image1 from "../../assets/images/2/1.png";
// import Image2 from "../../assets/images/6/5.jpg";
// import Image3 from "../../assets/images/1/1.jpg";
// import Image4 from "../../assets/images/3/Final_1.jpg";
// import Image5 from "../../assets/images/4/2.jpg";
// import Image6 from "../../assets/images/7/6.png";
// import Image7 from "../../assets/images/5/4.png";
// import Image8 from "../../assets/images/4/2.jpg";

import ProjectsCard from "../../components/ProjetsCard/ProjectsCard";

const Projects = () => {
  const projectCardData = [
    {
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740232268/SwarajRise/eqlpi3buvhqwekrsyw3m.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233475/SwarajRise/bkxeuz2clhvsupruzeiq.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233541/SwarajRise/joruugfyve5gyvqt6y4o.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233411/SwarajRise/eyzzp0ozvljp6o0zfuzi.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740229178/SwarajRise/n5sr7wkffsx3dal7u7ps.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740233298/SwarajRise/afmwq44sivkzxnd8dl5r.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740246612/SwarajRise/spttpbogdzguerozgqaj.png",
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
      projectImage:
        "https://res.cloudinary.com/dqjfzu003/image/upload/v1740247035/SwarajRise/haqnjxwspo76spe8wobl.png",
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
    <div className="project-main-container">
      <div className="header-nav-container">
        <Navbar />
      </div>

      <div className="projects-content">
        <h1>Our Projects</h1>

        <div className="projects-cards-container">
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
    </div>
  );
};

export default Projects;
