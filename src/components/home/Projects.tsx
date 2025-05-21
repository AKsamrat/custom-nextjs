/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import './Featureds.css';
import { Slide } from 'react-awesome-reveal';

import { getAllProject } from '@/util/projects';

const Projects = async () => {
  const projects = await getAllProject()
  return (
    <div
      id="projects"
      className="featured-item exo-2  bg-fixed  bg-center bg-no-repeat bg-cover text-black py-16"
    >
      <div className="flex justify-center items-center pb-6 ">
        <p className="exo-2 border-b-2 w-60 text-[40px] text-center font-semibold ">
          My <span className="text-[#F86F03]"> Projects</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto pt-6">
        {
          projects?.data?.map((pro: any) => (

            <Slide key={pro?._id} direction="left" duration={1000}>
              <div className="p-6 border-2 rounded-xl bg-[#fffffffe] drop-shadow-lg shadow-lg shadow-purple-500 hover:scale-105 overflow-hidden  duration-700">
                <div className='flex justify-center items-center'>

                  <img className="w-full h-44" src={pro?.image} alt="asset" />
                </div>
                <div className="w-full pb-4">
                  <p className="text-xl font-semibold py-2">{pro?.title}</p>
                  <p className='text-[14px] text-gray-500'>Frontend : <span className='text-blue-400 cursor-pointer target:block '>{pro?.frontEnd}</span></p>
                  <p className='text-[14px] text-gray-500'>Backend : <span className='text-blue-400 cursor-pointer target:block '>{pro?.backEnd}</span></p>

                </div>
                <a
                  target="_blank"
                  href={pro?.link}
                >
                  <button className=" bg-[#F86F03]  px-6 py-2 rounded-2xl font-semibold mr-8 text-white">
                    {' '}
                    Visit
                  </button>
                </a>
              </div>
            </Slide>
          ))
        }

      </div>
    </div>
  );
};

export default Projects;
