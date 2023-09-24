import React from 'react';

const Box = ({ userName, imgSrc }) => {
  return (
    <div className="w-[920px] h-[87px]">
      <div className="fixed w-[920px] h-[87px] top-0 left-0">
        <div className="relative w-[922px] h-[88px] -left-px">
          <div className="absolute w-[922px] h-[77px] top-[11px] left-0 bg-white rounded-[10px] border-2 border-solid border-[#e0e0e0]" />
          <div className="absolute w-[138px] h-[17px] top-0 left-[63px]">
            <div className="relative w-[136px] h-[17px] bg-white">
              <div className="absolute w-[131px] top-0 left-[4px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {userName}
              </div>
            </div>
          </div>
          <img className="absolute w-[83px] h-[50px] top-[25px] left-[832px]" alt="User" src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default Box;
