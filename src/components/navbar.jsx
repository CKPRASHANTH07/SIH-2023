
import React from 'react'

const Navbar = () => {
  return (
    
<div className="absolute w-[1920px] h-[130px] top-0 left-0 bg-[#00203f]">
          <button className="absolute w-[90px] h-[60px] top-[42px] left-[1396px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8ceac1] text-[40px] tracking-[0] leading-[normal]">
              Post
            </div>
          </button>
          <button className="w-[120px] left-[1217px] absolute h-[60px] top-[42px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8ceac1] text-[40px] tracking-[0] leading-[normal]">
              Alerts
            </div>
          </button>
          <button className="w-[93px] left-[1065px] absolute h-[60px] top-[42px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8ceac1] text-[40px] tracking-[0] leading-[normal]">
              Map
            </div>
          </button>
          <button className="w-[124px] left-[1545px] absolute h-[60px] top-[42px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8ceac1] text-[40px] tracking-[0] leading-[normal]">
              Chats
            </div>
          </button>
          <button className="w-[167px] left-[1728px] absolute h-[60px] top-[42px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8ceac1] text-[40px] tracking-[0] leading-[normal]">
              Helpline
            </div>
          </button>
          
          <button ><img className="absolute w-[52px] h-[41px] top-[49px] left-[38px]" alt="Vector" src="vector.svg" />
          </button>
          </div>
  )
}

export default Navbar
