// Home.js

import React from 'react';

const Home = () => {
  return (
    <div className='relative z-0'>
      <div className='flex md:hidden '>
        <div className='absolute left-5 top-[110px] '>
          <h1 className='text-zinc-500 font-serif text-xl '>Hello, I am</h1>
          <h1 className='text-slate-950 font-poppins text-3xl '>KEERTHI-- PRASHANTH C</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>I'm a Full Stack Web Developer,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>ECE Student,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>Auto-Mobile &amp; Tech Enthusiast.</h1>
        </div>
      </div>

      <div className='hidden md:flex '>
        <div className='absolute w-full text-5xl text-center  px-10 top-56 '>
          <h1 className='text-zinc-500 font-serif text-5xl animate-pulse'>Hello, I am</h1>
          <h1 className='text-slate-950 font-poppins text-7xl'>KEERTHI PRASHANTH C</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>I'm a Full Stack Web Developer,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>ECE Student,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse text-xl'>Auto-Mobile &amp; Tech Enthusiast.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
