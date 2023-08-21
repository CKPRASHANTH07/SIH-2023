import React from 'react';

export const Internships = () => {
  return (
    <div className='absolute top-[3500px] w-full flex justify-center items-center h-screen'>
      <div className='rounded-lg w-3/4'>
        <div className='text-7xl mb-4 font-poppins text-center'>Internships</div>
        <div className='bg-slate-200 rounded-2xl shadow-2xl border-r-4 p-4'>
          <div className='w-full'>
            <h1 className='font-poppins text-xl text-gray-700'>
              <h1 className='font-poppins text-3xl text-center text-black'>VLSI GURU INTERNSHIP</h1>
              6 MONTHS VLSI PD ENGINEERING INTERNSHIP
              Good with unix and TCL commands used in Physical design
              Done block level physical design at 14nm technology
              Efficient floorplanning is done to reduce congestion, timing and power
              Placement of standard cells is done with minimum congestion and timing violations
              CTS is done with minimum skew and latency
              routing is done and fixed various DRC and LVs violations
              Performed signoff RC extraction and closed timing using Prime time
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
