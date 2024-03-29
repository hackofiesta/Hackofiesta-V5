import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const StyledDiv = styled.div`
  border-radius: 20px;
  background-color: rgba(19, 40, 80, 0.6);
`;

const WantToSponsor = () => {
  return (
    <StyledDiv className="pb-5 mx-5 sm:mx-20 xl:mx-72 mb-20 z-50 new_accordcomp pt-6 md:pt-16 px-4 md:px-10 min-h-[300px] shadow-md ">
      <div className="text-2xl md:text-4xl flex min-h-12 tracking-widest">
        <div className=" text-white flex justify-center items-center opacity-85 p-2 px-4 rounded-md gap-3">
          <p>💵 </p>
          <p>Want to Sponsor Us?</p>
        </div>
        <div className="mt-8 mx-4 md:mx-20 text-xl text-gray-300">HackOFiesta has always believed in diversity and inclusion.
        Thus, every year we have a special diversity track reserved for people who face under representation, systemic bias or discrimination in the tech industry.</div>
        <div className='flex justify-center gap-20 mt-10 mb-8'>
            <button className='bg-white text-black rounded-md md:text-3xl p-2 md:p-4 font-medium hover:bg-gray-200 transition-all active:bg-gray-500 active:border-white active:border hover:scale-105 active:scale-95'><a href='https://drive.google.com/file/d/15ENSZ7l8eTafODgAPmDKwqsPgs4iD9HO/view?usp=sharing' className='hover:text-black' target='_blank'>Brochure</a></button>
            {/* <button className='bg-white text-black rounded-md md:text-3xl p-2 md:p-4 font-medium hover:bg-gray-200 transition-all active:bg-gray-500 active:border-white active:border hover:scale-105 active:scale-95'><a href='#' className='hover:text-black' target='_blank'>Fill the Form</a></button> */}
        </div>
      </div>
    </StyledDiv>
  );
};

export default WantToSponsor;
