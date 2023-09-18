import React from "react";
import Navbar from "./navbar";
export const Map = () => {
  return (
   
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[1080px] relative">
      <Navbar />
        <div className="absolute w-[922px] h-[57px] top-[171px] left-[529px] bg-white rounded-[20px] overflow-hidden border-2 border-solid border-[#00203f]">
          <img className="absolute w-[60px] h-[55px] top-0 left-0" alt="Search icon" src="search-icon.svg" />
          <div className="absolute top-[7px] left-[153px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal]">
            Search&nbsp;&nbsp; places
          </div>
        </div>
        <div className="left-[529px] absolute w-[222px] h-[37px] top-[250px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#00203f]">
          <div className="absolute top-[2px] left-[83px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
            State
          </div>
        </div>
        <div className="left-[763px] absolute w-[222px] h-[37px] top-[250px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#00203f]">
          <div className="absolute top-[2px] left-[72px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
            Nearby
          </div>
        </div>
        <div className="left-[998px] absolute w-[222px] h-[37px] top-[250px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#00203f]">
          <div className="absolute top-[2px] left-[79px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
            Types
          </div>
        </div>
        <div className="left-[1229px] absolute w-[222px] h-[37px] top-[250px] bg-white rounded-[20px] overflow-hidden border border-solid border-[#00203f]">
          <div className="absolute top-[2px] left-[65px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
            Duration
          </div>
        </div>
      </div>
    </div>
  );
};
