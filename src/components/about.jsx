import React from 'react';

const About = () => {
  return (
    <div className='relative z-0'>
       <div className=' md:hidden '>
        <div className='absolute left-5 top-96 bottom-10 '>
          <h1 className='text-slate-950 font-poppins text-3xl '>About Me</h1>
          <div className='py-10'>
          <h1 className='text-zinc-500 font-serif  text-xl'>I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself.</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> With a considerable track record of successfully collaborating on diverse projects and participating in challenging competitions,</h1>
          <h1 className='text-zinc-500 font-serif  text-xl'> I have developed a strong aptitude for thriving in high-pressure environments.</h1>
          </div>
          <div className='py-20'>
          <div className='text-slate-950 font-poppins text-3xl '>Education
          <div className='pt-10 text-2xl px-5 py-5 flex flex-col space-y-5 justify-center '>
              <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-6 py-10 hover:animate-pulse hover:scale-110' href="">
              College
              <div className='text-zinc-500 font-serif text-xl'>
              <h1 className='mt-10'>Sri Eshwar College  </h1>
              <h1>of Engineering</h1>
              <h1>Kinathukadavu,Coimbatore </h1>
              <h1 >CGPA:7.1 </h1>
              </div>
              </button>
              
              <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-5 py-10 hover:animate-pulse hover:scale-110' href="">
              12th
              <div className='text-zinc-500 font-serif text-xl'>
              <h1 className='mt-10'>Nachiar Vidhyalayam Matric </h1>
              <h1>Hr Sec School</h1>
              <h1>Zamin Uthukuli,Pollachi </h1>
              <h1 >83% </h1>
              </div>
              </button>
              <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-9 py-10 hover:animate-pulse hover:scale-110' href="">
              10th
              <div className='text-zinc-500 font-serif text-xl'>
              <h1 className='mt-10'>Bharathi Vidhya Mandhir  </h1>
              <h1>Hr Sec School</h1>
              <h1>Mahalingapuram,Pollachi</h1>
              <h1 >80% </h1>
              </div>
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
            <div className='pt-15 text-xl justify-center space-y-10 '>
              <div className='space-x-20 space-y-10'>
              <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-5 py-10 hover:animate-pulse hover:scale-110' href="">
              College
              <div className='text-zinc-500 font-serif text-xl'>
              <h1 className='mt-10'>Sri Eshwar College  </h1>
              <h1>of Engineering</h1>
              <h1>Kinathukadavu,Coimbatore </h1>
              <h1 >CGPA:7.1 </h1>
              </div>
              </button>
              <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-5 py-10 hover:animate-pulse hover:scale-110' href="">
              12th
              <div className='text-zinc-500 font-serif text-xl'>
              <h1 className='mt-10'>Nachiar Vidhyalayam Matric </h1>
              <h1>Hr Sec School</h1>
              <h1>Zamin Uthukuli,Pollachi </h1>
              <h1 >83% </h1>
              </div>
              </button>
              </div>
                     
                     <button className='shadow-2xl shadow-slate-400 bg-slate-200 rounded-xl px-5 py-10 hover:animate-pulse hover:scale-110 ' href="">
              10th
              <div className=' text-zinc-500 font-serif text-xl'> 
              <h1 className='mt-10'>Bharathi Vidhya Mandhir  </h1>
              <h1>Hr Sec School</h1>
              <h1>Mahalingapuram,Pollachi</h1>
              <h1 >80% </h1>
              </div>
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
