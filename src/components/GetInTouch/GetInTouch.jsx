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
                    src="/assets/images/2/7.png"
                    alt="img5"
                    style={{ height: "400px" }}
                  />
                  <video
                    src="/assets/images/videos/v2.mov"
                    muted
                    loop
                    autoPlay="true"
                    style={{ height: "300px" }}
                  ></video>
                  <img
                    src="/assets/images/2/3.png"
                    alt="img3"
                    style={{ height: "400px" }}
                  />
                  <img
                    src="/assets/images/2/4.png"
                    alt="img1"
                  />
                  <video
                    src="/assets/images/videos/v3.mov"
                    muted
                    loop
                    autoPlay="true"
                    style={{ height: "300px" }}
                  ></video>
                  <img
                    src="/assets/images/2/5.png"
                    alt="img1"
                    style={{ height: "250px" }}
                  />
                  <video
                    src="/assets/images/videos/v2.mov"
                    muted
                    loop
                    autoPlay="true"
                  ></video>
                  <img
                    src="/assets/images/2/6.png"
                    alt="img4"
                    style={{ height: "400px" }}
                  />
                  <video
                    src="/assets/images/videos/v4.mov"
                    muted
                    loop
                    autoPlay="true"
                  ></video>
                  <img
                    src="/assets/images/2/4.png"
                    alt="img2"
                    style={{ height: "300px" }}
                  />
                  <img
                    src="/assets/images/2/8.png"
                    alt="img1"
                  />
                  <video
                    src="/assets/images/videos/v1.mp4"
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
