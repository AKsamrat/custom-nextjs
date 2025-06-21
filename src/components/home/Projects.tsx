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
                <div className="flex flex-col h-[380px] bg-[#180b2aa1] rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-[#53377abd] border-[1px]">

                  {/* Image Section */}
                  <div className="w-full h-48 overflow-hidden p-2 rounded-2xl">
                    <img
                      src={pro.image}
                      alt={pro.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-2xl"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-5">
                    <h3 className="text-lg font-bold text-gray-100 mb-2">{pro.title}</h3>

                    <p className="text-sm text-gray-200">
                      <span className="font-medium text-gray-200">Frontend:</span>{" "}
                      <span className="text-gray-400">{pro.frontEnd}</span>
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                      <span className="font-medium text-gray-200">Backend:</span>{" "}
                      <span className="text-gray-400">{pro.backEnd}</span>
                    </p>

                    {/* Button pinned at bottom */}
                    <div className="mt-auto">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={pro.link}
                        className="inline-block w-full"
                      >
                        <button className="w-full bg-[#F86F03] hover:bg-[#e25c00] text-gray-900 font-semibold py-2 px-4 rounded-xl transition duration-300">
                          Visit Project
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

