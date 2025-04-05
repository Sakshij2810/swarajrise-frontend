import { FaLocationDot } from "react-icons/fa6";

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
    <div className="w-[26.5rem] h-[29rem] text-white rounded-[1rem] border border-[rgb(98,98,98)] bg-transparent overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-[245px]">
        <img
          className="w-full h-full object-cover rounded-t-[1rem]"
          src={projectImage}
          alt="Project Image"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Client and Price */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-400 text-xl">
            <span className="text-white ">Client -</span> {clientName}
          </p>
          <p className="text-green-500 text-xl">₹ {projectPrice}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-base font-normal  mt-2">
          <FaLocationDot className="text-gray-400" />
          <span>{location}</span>
        </div>

        {/* Project Details */}
        <div className="mt-6 ">
          <div className="bg-[#f3e9d5] text-black rounded-[1rem] py-5 px-4 font-medium">
            <p className="flex justify-between ">
              Project Rate: <span>{ProjectRate} rs Per SQFT</span>
            </p>
            <p className="flex justify-between mt-[0.5rem]">
              Builtup Area: <span>{BuiltupArea} SQFT</span>
            </p>
          </div>
        </div>

        {/* Services (commented out as in original) */}
        {/* <div className="mt-4 px-2">
          <div className="bg-[#f3e9d5] text-black rounded-[1rem] p-2 text-center">
            <p className="text-xl font-medium flex items-center justify-center gap-2">
              <MdEngineering /> Service's
            </p>
            <ul className="flex flex-wrap gap-6 mt-2 ml-[-0.5rem]">
              {services?.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MdDone className="text-green-500" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsCard;
