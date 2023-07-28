
import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import {} from 'react-icons/fa'



const Contact = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full  justify-center bg-slate-300  '>
      <div className='container w-full max-w-screen-sm px-4 hidden sm:flex'>
        <ul className=' flex  space-x-5 '>
          <li className='text-black'>
            <a className='hover:text-blue-300' href="https://www.linkedin.com/in/keerthiprashanth-c-650717254">LinkedIn</a>
          </li>
          <li className='text-black'>
            <a className='hover:text-red-400' href="https://www.instagram.com/_______c_k_______/">Instagram</a>
          </li>
          <li className='text-black'>
            <a className='hover:text-green-300' href="https://wa.link/5ke4a1">Whatsapp</a>
          </li>
          <li className=' text-black'>
            <a className='hover:text-gray-600' href="https://github.com/CKPRASHANTH07" >Github</a>
          </li>
          <li className='text-black'>
            <a className='hover:text-rose-800' >ckprashanthc@gmail.com</a>
          </li>
          <li className='text-black'>
            <a className='hover:text-green-950'>91+9655433664 </a>
          </li>
        </ul>
        
      </div>
      
      <div className='sm:hidden flex justify-center py-4 px-2'>
        <ul className=' justify-center space-y-2 space-x-2 text-black'>
          
          <li className='space-x-3'>
          <a className='hover:text-blue-300' href="https://www.linkedin.com/in/keerthiprashanth-c-650717254">LinkedIn</a>
          <button className='flex-row'>
            <FaInstagram style={{color:'pink'}} />
            <a className='hover:text-red-400' href="https://www.instagram.com/_______c_k_______/">Instagram</a>
            </button>
            <a className='hover:text-green-300' href="https://wa.link/5ke4a1">Whatsapp</a>
            
            </li>
            <li className='space-x-3 space-y-2'>
           
            <a className='hover:text-gray-600' href="https://github.com/CKPRASHANTH07">Github</a>
            <a className='hover:text-rose-800'>ckprashanthc@gmail.com</a>
           
            <li >
            <a className='hover:text-green-950'>91+9655433664</a>
          </li>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Contact;