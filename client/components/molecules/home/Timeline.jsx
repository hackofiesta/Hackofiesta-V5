import React from "react";
import timelineImg from "@/public/timeline.png";

const Timeline = () => {
  return (
    <div className="mt-16">
      <img src={timelineImg.src} className="mx-auto w-[100%] md:w-[80%]" />
    </div>
  );
};

export default Timeline;
