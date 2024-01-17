import React from "react";
import { myFont } from "../common/AnimatedTitle";
const data = [
  {
    title: "💰 10 Lakh+ Prize Pool",
    text: "Participants competed across diverse tracks such as 'All Girls', 'Beginners Only' and 'Overall Track' for a prize pool worth over 10 lakhs.",
  },
  {
    title: "👥 1000+ registrations",
    text: "Hack-o-Fiesta v4 saw more than 1000 participants from all around the globe, come together and build innovative solutions.",
  },
  {
    title: "🚀 60+ Projects",
    text: "We witnessed the creation of more than 60 innovative projects in just 36 hours, ranging right from Bio-Tech to Augmented Reality.",
  },
  {
    title: "🌐 Reach over 2,00,000+ ",
    text: "Over 2,00,000 people engaged with Hack-o-Fiesta v4 & Equinox across various social media channels.",
  },
  {
    title: "🎓 10+ Sessions",
    text: "More than 10 Speakers and Mentors conducted engaging educational sessions for the ever-enthusiastic participants.",
  },
  {
    title: "🏆 4 Successful Editions Hosted",
    text: "Carrying forward the legacy of the first 3 editions, HOF v4 introduced hundreds of students to the world of software development.",
  },
];

const RequestToJoin = () => {
  return (
    <div className="w-screen sm:px-28">
      <h1
        className={`md:text-8xl ${myFont.className} -mt-16 md:mt-0 sm:text-6xl text-5xl text-center`}
      >
        PREVIOUS YEAR STATS
      </h1>
      <section>
        {data.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div key={index} className="w-full flex items-center justify-start px-auto px-8 my-16">
                <div className="lg:w-2/3 md:w-4/5 md:h-36 h-max w-full flex gap-5">
                  <span className=" md:w-2 w-1 h-[75%] my-auto bg-white"></span>
                  <div className="hidden sm:w-36 h-full"> </div>
                  <div className=" h-full w-full justify-center flex flex-col py-3">
                    <div className="md:text-4xl text-xl font-bold flex w-full md:px-3 mb-4">
                     {item.title}
                    </div>
                    <div className="lg:px-3 px-1 md:text-lg text-sm ">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          else{
            return(
                <div key={index} className="w-full flex items-center justify-end px-auto px-8 my-20">
                <div className="lg:w-1/2 md:h-36 h-max w-full flex gap-5">
                  <span className=" md:w-2 w-1 h-[75%] my-auto bg-white"></span>
                  <div className="hidden sm:w-36 h-full"> </div>
                  <div className=" h-full w-full justify-center flex flex-col py-3">
                    <div className="md:text-4xl text-xl font-bold flex w-full md:px-3 mb-4">
                     {item.title}
                    </div>
                    <div className="lg:px-3 px1 md:text-lg text-sm ">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </section>
    </div>
  );
};

export default RequestToJoin;
