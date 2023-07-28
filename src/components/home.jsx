// Home.js

import React from 'react';

const Home = () => {
  return (
    <div className='relative z-0'>
      <div className='flex md:hidden py-8 md:py-16'>
        <div className='absolute left-5 top-20 md:top-40'>
          <h1 className='text-zinc-500 font-serif text-xl md:text-2xl'>Hello, I am</h1>
          <h1 className='text-slate-950 font-poppins text-4xl md:text-5xl'>KEERTHI PRASHANTH C</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse md:text-xl'>I'm a Full Stack Web Developer,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse md:text-xl'>ECE Student,</h1>
          <h1 className='text-zinc-500 font-serif animate-pulse md:text-xl'>Auto-Mobile &amp; Tech Enthusiast.</h1>
        </div>
      </div>

      <div className='hidden md:flex w-full text-5xl text-center px-4 md:px-80'>
        <div className='absolute text-center top-56 content-center'>
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
