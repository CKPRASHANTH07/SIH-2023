import React from "react";

export const Registration = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[1080px] absolute">
      <div className="flex justify-center items-center  h-screen">




<div className="flex flex-col gap-14">
<div className="box ">
<div className="overlap">
  <input className="rectangle text-2xl p-10" />
  <div className="overlap-group-wrapper">
    <div className="text-wrapper">Username</div>
  </div>
  <img className="img" alt="user" src="user.png" />
</div>  
</div>

<div className="box ">
<div className="overlap">
  <input className="rectangle text-2xl p-10" />
  <div className="overlap-group-wrapper">
    <div className="text-wrapper">Company name</div>
  </div>
  <img className="img" alt="user" src="user.png" />
</div>  
</div>

<div className="box ">
<div className="overlap">
  <input className="rectangle text-2xl p-10" />
  <div className="overlap-group-wrapper">
    <div className="text-wrapper">Profession</div>
  </div>
  <img className="img" alt="user" src="user.png" />
</div>  
</div>

<div className="box ">
<div className="overlap">
  <input className=" rectangle text-2xl p-10" />
  <div className="overlap-group-wrapper">
    <div className="text-wrapper">Password</div>
  </div>
  <img className="img" alt="pass" src="user.png" />
</div>  
</div>
</div>
 
</div>
        <div className="absolute w-[381px] h-[71px] top-[100px] left-[774px]">
          <div className="relative w-[379px] h-[71px]">
            <div className="absolute w-[379px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#00203f] text-[50px] tracking-[0] leading-[normal]">
              REGISTRATION
            </div>
            <div className="absolute w-[126px] h-[5px] top-[66px] left-[114px] bg-[#8ceac1] rounded-[2px]" />
          </div>
        </div>
        <div className="absolute w-[340px] h-[100px] top-[847px] left-[447px]">
          <div className="h-[100px]">
            <button className="relative w-[342px] h-[100px]">
              <div className="absolute w-[342px] h-[100px] top-0 left-0">
                <div className="relative w-[340px] h-[100px] bg-[#00203f] rounded-[10px]">
                  <div className="absolute w-[155px] top-[15px] left-[60px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
                    Create
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[67px] h-[85px] top-0 left-[233px]"
                alt="Add user male"
                src="add-user-male.png"
              />
            </button>
          </div>
        </div>
        <div className="absolute w-[265px] h-[35px] top-[774px] left-[1109px]">
          <button className="absolute w-[263px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
            Already a user..?
          </button>
        </div>
        <div className="absolute w-[340px] h-[100px] top-[847px] left-[1071px]">
          <button className="relative w-[342px] h-[100px]">
            <div className="absolute w-[342px] h-[100px] top-0 left-0">
              <div className="relative w-[340px] h-[100px] bg-[#8ceac1] rounded-[10px]">
                <div className="absolute w-[129px] top-[16px] left-[58px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#00203f] text-[40px] tracking-[0] leading-[normal]">
                  Login
                </div>
              </div>
            </div>
            <img className="absolute w-[67px] h-[85px] top-[8px] left-[244px]" alt="Login" src="login.png" />
          </button>
        </div>
      </div>
    </div>
  );
};
