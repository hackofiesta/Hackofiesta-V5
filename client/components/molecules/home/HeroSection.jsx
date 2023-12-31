import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/AnimatedTitle";
import Timer from "@/components/atoms/Timer";
import { MobileNavbar } from "../mobile-navbar/MobileNavbar";
const HeroSection = () => {
  const Hack = useRef(null);
  const Fiesta = useRef(null);
  return (
    <>
      <div className="h-screen w-screen relative mb-32">
        <MobileNavbar/>

        <div className="-z-50 opacity-80 h-screen w-screen absolute">
          <video
            className="w-full absolute h-full object-cover brightness-[60%] transition duration-500"
            autoPlay
            muted
            loop
            src="/hero_section_video.mp4"
          ></video>
        </div>
        <div className="w-screen h-full absolute overlay"></div>
        <div className="h-full pt-12  flex flex-col items-center gap-y-5 justify-center">
          <div className="flex main_heading text-white text-9xl mt-5">
            <AnimatedTitle />
          </div>
          <div className="second_heading md:text-base text-sm text-white text-center md:px-14 px-3 max-w-[700px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            adipisci perspiciatis provident at nemo consequatur necessitatibus
            laudantium iure.
          </div>
          <div className="w-full flex justify-center items-center pt-4">
            <Timer />
          </div>
        <div className="flex justify-around md:mt-7 mt-5 md:flex-row flex-col">
          <button className="button-glitch mx-5 md:my-1 my-1">Register</button>
          <button className="button-glitch mx-5 flex  items-center md:my-1 my-1">
            <svg
              height="30px"
              width="30px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="discord mx-1"
            >
              <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
            </svg>
            Join Discord
          </button>
          </div>
          <div className="h-7"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
