import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { BsCircleFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='relative z-50'>
      <div className='fixed w-full h-24 flex justify-between items-center px-4 py-0 bg-slate-200  text-black text-2xl'>
        <div className='flex ml-5 place-items-end'>
          <button className='font-poppins font-extrabold'>CK</button>
          <BsCircleFill style={{ color: 'black' }} size='20px' className='animate-bounce ' />
        </div>
        <ul className='hidden md:flex gap-x-10 mr-10 dynamic'>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Home</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>About</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Skills</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Interns</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Certificates</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Projects</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        </ul>

        <div className='md:hidden text-2xl'>
          <button onClick={handleClick} style={nav ? { background: 'red', borderRadius: '10%', color: 'black' } : {}}>
            <HiMenu />
          </button>
          {nav && (
            <div className='fixed top-20 right-0 w-56 h-64 rounded-xl bg-slate-200  flex flex-col justify-center items-center'>
              <ul>
              <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Home</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>About</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Skills</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Interns</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Certificates</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Projects</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
