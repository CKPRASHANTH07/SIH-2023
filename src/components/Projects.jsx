import React from 'react';

const Projects = () => {
  return (
    <div className='relative z-0'>
      <div className='hidden md:flex'>
        <div className='absolute top-[1900px] w-full text-center font-poppins justify-center'>
          <h1 className='text-7xl font-bold py-5'>Projects</h1>
          <div className='flex flex-row overflow-y-auto space-x-10 py-10'>
            {/* Project 1 */}
            <button className='proj-css1'>
              {/* Project content */}
            </button>
            {/* Project 2 */}
            <button className='proj-css1'>
              {/* Project content */}
            </button>
            {/* Project 3 */}
            <button className='proj-css1'>
              {/* Project content */}
            </button>
            {/* Project 4 */}
            <button className='proj-css1'>
              {/* Project content */}
            </button>
          </div>
        </div>
      </div>

      <div className='flex md:hidden'>
        <div className='absolute top-[1800px] w-full text-left font-poppins justify-center py-20'>
          <h1 className='text-slate-950 font-poppins text-3xl py-5'>Projects</h1>
          <div className='flex flex-row overflow-y-auto space-x-10'>
            {/* Project 1 */}
            <button className='proj-css1 text-left'>
              {/* Project content */}
            </button>
            {/* Project 2 */}
            <button className='proj-css1 text-left'>
              {/* Project content */}
            </button>
            {/* Project 3 */}
            <button className='proj-css1 text-left'>
              {/* Project content */}
            </button>
            {/* Project 4 */}
            <button className='proj-css1 text-left'>
              {/* Project content */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
