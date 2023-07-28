// About.js

import React from 'react';

const About = () => {
  return (
    <div className='relative z-0'>
      <div className='hidden md:flex flex-col absolute container left-10 md:left-20 w-full text-xl md:text-4xl text-center py-20 md:py-[908px] px-4 md:px-[10px]'>
        <h1 className='text-slate-950 font-poppins text-4xl md:text-4xl py-10'>ABOUT ME</h1>
        <h1 className='text-zinc-500 font-serif animate-pulse md:text-xl'>
          I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself. With a considerable track record of successfully collaborating on diverse projects and participating in challenging competitions, I have developed a strong aptitude for thriving in high-pressure environments.
        </h1>
      </div>
    </div>
  );
};

export default About;
