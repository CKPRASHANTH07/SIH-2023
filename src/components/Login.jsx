import React from "react";

export const LoginPc = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[1080px] absolute">
        <div className="absolute w-[920px] h-[87px] top-[334px] left-[501px]">
          <div className="relative w-[922px] h-[88px] -left-px">
            <input className="absolute w-[922px] h-[77px] top-[11px] left-0 p-10 text-2xl bg-white rounded-[10px] border-2 border-solid border-[#e0e0e0]" />
            <div className="absolute w-[138px] h-[17px] top-0 left-[63px]">
              <div className="relative w-[136px] h-[17px] bg-white">
                <div className="absolute w-[131px] top-0 left-[4px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  User name
                </div>
              </div>
            </div>
            <img className="absolute w-[83px] h-[50px] top-[25px] left-[832px]" alt="User" src="user.png" />
          </div>
        </div>
        <div className="absolute w-[920px] h-[86px] top-[439px] left-[501px]">
          <div className="relative h-[86px]">
            <input className="absolute w-[920px] h-[75px] top-[11px] left-0  bg-white rounded-[10px] text-2xl p-10 border-2 border-solid border-[#e0e0e0]" />
                <img className="absolute w-[83px] h-[50px] top-[10px] left-[830px]" alt="Password" src="password.png" />
              
            <div className="absolute w-[123px] h-[17px] top-0 left-[67px]">
              <div className="relative w-[121px] h-[17px]">
                <div className="absolute w-[121px] h-[13px] top-0 left-0 bg-white" />
                <div className="absolute w-[108px] top-0 left-[7px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Password
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[157px] h-[91px] top-[163px] left-[846px]">
          <div className="absolute w-[155px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#00203f] text-[50px] tracking-[0] leading-[normal]">
            LOGIN
          </div>
          <div className="absolute w-[126px] h-[5px] top-[86px] left-[14px] bg-[#8ceac1] rounded-[2px]" />
        </div>
        <div className="absolute w-[293px] h-[41px] top-[669px] left-[1153px]">
          <div className="h-[41px]">
            <div className="relative w-[295px] h-[41px]">
              <button className="absolute w-[293px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal]">
                Forgot&nbsp;&nbsp;Password
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[295px] h-[41px] top-[669px] left-[482px]">
          <button className="absolute w-[239px] top-0 left-[54px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal]">
            Remeber login
          </button>
          <div className="absolute w-[30px] h-[30px] top-[6px] left-0 rounded-[5px] border-2 border-solid border-black" />
        </div>
        <div className="absolute w-[340px] h-[100px] top-[810px] left-[1106px]">
          <div className="h-[100px]">
            <div className="relative w-[342px] h-[100px]">
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
            </div>
          </div>
        </div>
        <div className="absolute w-[340px] h-[100px] top-[810px] left-[474px]">
          <div className="relative w-[342px] h-[100px]">
            <div className="absolute w-[342px] h-[100px] top-0 left-0">
              <div className="relative w-[340px] h-[100px] bg-[#8ceac1] rounded-[10px]">
                <div className="absolute w-[129px] top-[16px] left-[58px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#00203f] text-[40px] tracking-[0] leading-[normal]">
                  Login
                </div>
              </div>
            </div>
            <img className="absolute w-[67px] h-[85px] top-[8px] left-[244px]" alt="Login" src="login.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
