import React from "react";
import "./style.css";
export const LoginPc = () => {
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
        <input className=" rectangle text-2xl p-10" />
        <div className="overlap-group-wrapper">
          <div className="text-wrapper">Password</div>
        </div>
        <img className="img" alt="pass" src="user.png" />
      </div>  
    </div>
  </div>
       
  </div>
        <div className="absolute w-[157px] h-[91px] top-[180px] left-[900px]">
          <div className="absolute w-[155px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#00203f] text-[50px] tracking-[0] leading-[normal]">
            LOGIN
          </div>
          <div className="absolute w-[126px] h-[5px] top-[60px] left-[14px] bg-[#8ceac1] rounded-[2px]" />
        </div>
        <div className="absolute w-[293px] h-[41px] top-[669px] left-[1153px]">
          <div className="h-[41px]">
            <div className="relative w-[295px] h-[41px]">
              <button className="absolute w-[293px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal]">
                Forgot Password
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[295px] h-[41px] top-[669px] left-[482px]">
          <button className="absolute w-[239px] top-0 left-[54px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#cac5c5] text-[30px] tracking-[0] leading-[normal]">
            Remeber login
          </button>
          <button className=" absolute w-[30px] h-[30px] top-[6px] left-0 rounded-[5px] border-2 border-solid border-black hover:bg-black " />
         
        </div>
        <div className="absolute w-[340px] h-[100px] top-[810px] left-[1106px]">
          
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
        
        <button className="absolute w-[340px] h-[100px] top-[810px] left-[474px]">
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
        </button>
      </div>
    </div>
  );
};
