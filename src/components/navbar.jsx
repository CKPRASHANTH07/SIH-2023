import React, { useState } from 'react';
import {HiMenu} from 'react-icons/hi'
import {BsCircleFill} from 'react-icons/bs'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-24 flex justify-between items-center px-4 py-0 bg-slate-200  text-black text-2xl '>
      <div className='flex ml-5 place-items-end'>
      <button className='font-poppins font-extrabold' >CK </button>
      <BsCircleFill style={{color:'black'}} size="10px" />
      </div>
      <ul className='hidden md:flex gap-x-10 mr-10 dynamic'>
        <li className='group relative cursor-pointer'>
        <span class='hover:text-red-400 font-poppins text-lg'>Home</span>
        <span class='absolute -bottom-1 left-0 w-full h-1 bg-red-400 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100'>
        </span>
        </li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>About</li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>Skills</li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>Interns</li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>Certificates</li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>Projects</li>
        <li className='hover:text-red-400 font-poppins text-lg hover:underline hover:underline-offset-4 hover:decoration-red-500 '>Contact</li>
      </ul>
      
      <div className='md:hidden text-2xl'>
      <button onClick={handleClick} style={nav ? { background: 'red', borderRadius: '10%', color: 'black' } : {}}>
          <HiMenu/>
        </button>
        {nav && (
          <div className='absolute top-20 right-0 w-56 h-64 rounded-xl  bg-slate-300 bg:opacity-5 flex flex-col justify-center items-center '>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Interns</li>
              <li>Certificates</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
