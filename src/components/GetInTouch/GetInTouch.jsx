import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <section className="pt-[2rem] w-full bg-[#f3e9d5]">
        <div className="">
          <h1 className="pl-[2rem] text-[9vw] font-[400] font-[rejouice]">
            Get in touch.
          </h1>
          <hr
            style={{
              width: "94%",
              marginTop: "-1rem",
              marginLeft: "2rem",
            }}
          />
        </div>
        <div className="mt-[-3rem]">
          <div className="h-[60vh] w-full relative">
            <div className="w-[130%] h-full">
              <div className="">
                <div className="image-wrapper">
                  <style>
                    {`

                  .image-wrapper {
  display: flex;

  gap: 1rem;
  animation: scrollImages 60s linear infinite; /* Adjust animation duration as needed */
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
  font-size: 18px;
}
 
                  @keyframes scrollImages {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.image-wrapper img {
  display: block;
  width: 18.6%;

  object-fit: cover;
}

.image-wrapper video {
  display: block;
  width: 18.6%;

  object-fit: cover;
}
.image-wrapper img:last-child {
  margin-right: -100%;
}
                  `}
                  </style>
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
    </div>
  );
};

export default GetInTouch;
