


import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router set up

const Login = () => {
  return (
    <div>
      <div className="w-96 h-96 relative bg-white">
        <div className="w-80 h-16 left-[35px] top-[215px] absolute">
          <input className="w-80 h-12 left-0 top-[12.41px] absolute bg-white rounded-lg border text-2xl text-center border-neutral-200" />
          <div className="w-28 h-6 left-[19px] top-0 absolute">
            <div className="w-28 h-6 left-0 top-0 absolute bg-white" />
            <div className="w-24 h-6 left-[3.42px] top-0 absolute text-center text-black text-base font-semibold">User name</div>
          </div>
          <img className="w-9 h-8 left-[278px] top-[17px] absolute" src="https://via.placeholder.com/36x33" />
        </div>
        <div className="w-80 h-16 left-[35px] top-[320px] absolute">
    <div className="w-80 h-16 left-0 top-0 absolute">
      <input className="w-80 h-12 left-0 top-[12.59px] absolute bg-white rounded-lg border text-2xl text-center border-neutral-200" />
      <div className="w-16 h-16 left-[262.60px] top-0 absolute bg-neutral-200 rounded-full border border-neutral-200" />
      <img className="w-9 h-8 left-[277.69px] top-[16.23px] absolute" src="https://via.placeholder.com/36x34" />
    </div>
    <div className="w-24 h-5 left-[19.12px] top-[3.04px] absolute">
      <div className="w-24 h-3.5 left-0 top-0 absolute bg-white" />
      <div className="w-20 h-5 left-[5.42px] top-[0.25px] absolute text-center text-black text-base font-semibold">Password</div>
    </div>
  </div>
        <div className="w-48 h-12 left-[100px] top-[504px] absolute">
          <Link to="./components/registration"> {/* Specify the correct route to the registration page */}
            <button className="w-48 h-12 left-0 top-0 absolute">
              <div className="w-48 h-12 left-0 top-0 absolute bg-green-300 rounded-lg" />
              <div className="w-20 h-9 left-[33.07px] top-[8.16px] absolute text-white text-2xl font-bold">Login</div>
            </button>
          </Link>
          <img className="w-9 h-11 left-[139px] top-[4px] absolute" src="https://via.placeholder.com/38x44" />
        </div>
      </div>
    </div>
  );
};

export default Login;
