import React from 'react';

const About = () => {
  return (
    <div className='relative z-0'>
       <div className='flex md:hidden '>
        <div className='absolute left-5 top-96 bottom-10 '>
          <h1 className='text-slate-950 font-poppins text-3xl '>About Me</h1>
          <div className='py-10'>
          <h1 className='text-zinc-500 font-serif  text-xl'>I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> With a considerable track record of successfully collaborating on diverse projects and participating in challenging competitions,</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> I have developed a strong aptitude for thriving in high-pressure environments.</h1>
          </div>
          <div className='py-20'>
          <div className='text-slate-950 font-poppins text-3xl '>Education
          <div className='pt-24 text-2xl px-5 py-5 justify-center '>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-6 py-10 hover:animate-pulse' href="">
              College
              <h1 className='mt-10'>Sri Eshwar College  </h1>
              <h1>of Engineering</h1>
              <h1>Kinathukadavu,Coimbatore </h1>
              <h1 >CGPA:7.1 </h1>
              </button>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-5 py-10 hover:animate-pulse' href="">
              12th
              <h1 className='mt-10'>Nachiar Vidhyalayam Matric </h1>
              <h1>Hr Sec School</h1>
              <h1>Zamin Uthukuli,Pollachi </h1>
              <h1 >83% </h1>
              </button>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-9 py-10 hover:animate-pulse' href="">
              10th
              <h1 className='mt-10'>Bharathi Vidhya Mandhir  </h1>
              <h1>Hr Sec School</h1>
              <h1>Mahalingapuram,Pollachi</h1>
              <h1 >80% </h1>
              </button>
              </div>
          
          </div>
           </div>
        </div>
      </div>
      <div className='hidden md:flex'>
        <div className='absolute  top-[700px]  w-full text-5xl text-center  justify-center'>
          <h1 className='text-slate-950 font-poppins text-7xl '>About Me</h1>
          <div className='py-10'>
          <h1 className='text-zinc-500 font-serif  text-xl'>I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> With a considerable track record of successfully collaborating on diverse projects and participating in challenging competitions,</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> I have developed a strong aptitude for thriving in high-pressure environments.</h1>
          </div>
          <div className='py-20 '>
          <div className='text-slate-950  font-poppins text-7xl '>
            Education
            <div className='pt-24 text-2xl justify-center '>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-5 py-10 hover:animate-pulse' href="">
              College
              <h1 className='mt-10'>Sri Eshwar College  </h1>
              <h1>of Engineering</h1>
              <h1>Kinathukadavu,Coimbatore </h1>
              <h1 >CGPA:7.1 </h1>
              </button>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-5 py-10 hover:animate-pulse' href="">
              12th
              <h1 className='mt-10'>Nachiar Vidhyalayam Matric </h1>
              <h1>Hr Sec School</h1>
              <h1>Zamin Uthukuli,Pollachi </h1>
              <h1 >83% </h1>
              </button>
              <button className='shadow-2xl shadow-slate-200 rounded-xl px-5 py-10 hover:animate-pulse' href="">
              10th
              <h1 className='mt-10'>Bharathi Vidhya Mandhir  </h1>
              <h1>Hr Sec School</h1>
              <h1>Mahalingapuram,Pollachi</h1>
              <h1 >80% </h1>
              </button>
            </div>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
