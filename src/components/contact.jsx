
import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';



const Contact = () => {
  return (
    <div className='fixed bottom-0 left-0 w-fit  rounded-2xl  justify-center bg-slate-200  shadow-2xl '>
      <div className='container w-full max-w-screen-sm px-4 hover:scale-110'>
        <ul className=' flex  space-x-5 '>
          <li className='text-black'>
            <a className='hover:text-blue-300' href="https://www.linkedin.com/in/keerthiprashanth-c-650717254"><FaLinkedin/></a>
          </li>
          <li className='text-black'>
            <a className='hover:text-red-400' href="https://www.instagram.com/_______c_k_______/"><FaInstagram/></a>
          </li>
          <li className='text-black'>
            <a className='hover:text-green-300' href="https://wa.link/5ke4a1"><FaWhatsapp/></a>
          </li>
          <li className=' text-black'>
            <a className='hover:text-gray-600' href="https://github.com/CKPRASHANTH07" ><FaGithub/></a>
          </li>
          <li className='text-black'>
            <a className='hover:text-rose-800' href="mailto:ckprashanthc@gmail.com" ><HiMail/></a>
          </li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Contact;