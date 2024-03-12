import React from "react";
import Lottie from "lottie-react";
import Trophy from "../../../public/trophy_animate3.json";
import { myFont } from "../common/AnimatedTitle";
const PrizeCard = ({ Rank, Price }) => {
  return (
    <div className="px-2 py-2 flex flex-col justify-center items-center my-6 rounded-sm border-2 bg-black w-fit ">
      <div className="text-2xl w-fit text-center bg-black -mt-7 px-4 mb-2">
        {Rank}
      </div>
      <div className="bg-cyan-600 min-w-[170px]  text-slate-950 font-bold py-1 text-center text-4xl">
        {Price}
      </div>
    </div>
  );
};
const Prizes = () => {
  return (
    <div className="min-h-screen md:pb-0 pb-24 flex justify-between sm:px-24 px-16 pt-32 bg-black">
      <div className="flex md:w-[70%] w-full flex-col items-center">
        <div
          className={`md:text-8xl ${myFont.className} -mt-16 md:mt-0 sm:text-6xl text-cyan-500 text-5xl text-center`}
        >
          TOTAL PRIZEPOOL
        </div>
        <div className="md:text-7xl sm:text-8xl text-5xl mt-10">
          ₹ 10,00,000
        </div>
        <div className="flex  w-[100%] md:hidden justify-center items-center">
          <Lottie animationData={Trophy} loop={true} className="scale-75" />
        </div>

        <div className="flex  flex-wrap   w-full justify-evenly   md:mt-12">
          <PrizeCard Rank="Winners" Price="₹50,000" />
          <PrizeCard Rank="Runners-Up" Price="₹30,000" />
          <PrizeCard Rank="Third Place" Price="₹20,000" />
        </div>
        <div className="flex  flex-wrap   w-full justify-evenly   md:mt-8">
          <PrizeCard Rank="Diversity" Price="₹15,000" />
          <PrizeCard Rank="Beginner's Track" Price="₹25,000" />
          <PrizeCard Rank="Most Creative Web3 Idea" Price="₹5,000" />
          <PrizeCard Rank="Most Creative AI Idea" Price="₹3,000" />
        </div>
      </div>
      <div className="hidden md:w-[30%] md:flex justify-center items-center">
        <Lottie className="" animationData={Trophy} loop={true} />
      </div>
    </div>
  );
};

export default Prizes;
