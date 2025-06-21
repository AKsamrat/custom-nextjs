/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Featureds.css';
import { getAllProject } from '@/util/projects';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getAllProject();
      setProjects(result?.data || []);
    };
    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      id="projects"
      className=" exo-2 bg-fixed bg-center bg-no-repeat bg-cover text-black pt-10"
    >
      <div className='max-w-6xl mx-auto px-4 lg:px-6'>
        <div className="flex justify-center items-center  pb-6">
          <p className="exo-2 border-b-2 w-36  lg:w-60 text-[25px] lg:text-[40px] text-center font-semibold text-white">
            My <span className="text-[#F86F03]"> Projects</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <Slider {...settings} className="text-white" >
            {projects?.map((pro: any) => (
              <div key={pro._id} className="p-4 h-full">
                {/* Ensure full height and flex column */}
                <div className="flex flex-col h-[400px] bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300 rounded-3xl overflow-hidden group">

                  {/* Image Section */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow px-6 py-4 space-y-2 text-white">
                    <h3 className="text-xl font-semibold tracking-wide text-[#F86F03]">{pro.title}</h3>

                    <div className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">Frontend:</span>{" "}
                      {pro.frontEnd}
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="font-medium text-gray-200">Backend:</span>{" "}
                      {pro.backEnd}
                    </div>

                    <div className="mt-auto pt-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={pro.link}
                        className="block w-full"
                      >
                        <button className="w-full bg-[#F86F03] hover:bg-[#dd4f00] text-white font-medium py-2 px-4 rounded-2xl shadow-lg hover:shadow-[#F86F03]/50 transition">
                          🚀 Visit Project
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default Projects;

