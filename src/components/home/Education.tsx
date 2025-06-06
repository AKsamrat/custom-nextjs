'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { PiDownloadFill, PiGraduationCapFill, PiBriefcaseFill, PiCalendarFill, PiMapPinFill } from 'react-icons/pi';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      degree: "Master in Computer Science & Engineering",
      institution: "University of Asia Pacific",
      period: "2017 - 2018",
      location: "Dhaka, Bangladesh",
      type: "Masters"
    },
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "University of Asia Pacific",
      period: "2012 - 2016",
      location: "Dhaka, Bangladesh",
      type: "Bachelor"
    },
    {
      degree: "Diploma In Computer",
      institution: "Sherpur Polytechnic Institute",
      period: "2007 - 2011",
      location: "Sherpur, Bangladesh",
      type: "Diploma"
    }
  ];

  const experienceData = [
    {
      position: "Planning Officer",
      company: "Tazbid Al Owarichu Trade Corporation",
      period: "2020 - 2023",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Maintaining the order and start its procedural way",
        "Meet with the buyer and maintaining their jobs",
        "Monitoring production and its delivery"
      ]
    },
    {
      position: "MIS Officer",
      company: "Alif Group",
      period: "2018 - 2020",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Designing, monitoring, analyzing, and troubleshooting IT systems",
        "Maintaining, managing, and updating software",
        "Supervising the development and maintenance of websites and ensuring the protection of users data"
      ]
    }
  ];

  return (
    <div id="education" className="py-12  relative">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <Slide direction="down" duration={800}>
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-white dark:text-gray-700 mb-3">
              Education <span className="text-[#F86F03]">&</span> Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F86F03] to-orange-400 mx-auto rounded-full"></div>
          </div>
        </Slide>



        <Slide direction="up" duration={1000}>
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-4 border border-slate-700">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'education'
                  ? 'bg-[#F86F03] text-white shadow-lg shadow-orange-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                <PiGraduationCapFill className="text-lg" />
                Education
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'experience'
                  ? 'bg-[#F86F03] text-white shadow-lg shadow-orange-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                <PiBriefcaseFill className="text-lg" />
                Experience
              </button>
            </div>
          </div>
        </Slide>

        {/* Content Area */}
        <div className="relative ">
          <div>

            {/* Education Tab */}
            {activeTab === 'education' && (
              <Slide direction="right" duration={800}>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {educationData.map((edu, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-800/60 border-l-4 border-[#F86F03] rounded-lg p-6 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#F86F03]/10"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-1 bg-[#F86F03]/20 text-[#F86F03] text-xs font-medium rounded">
                              {edu.type}
                            </span>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <PiCalendarFill className="text-[#F86F03]" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                          <h4 className="text-lg text-gray-300 mb-2">{edu.institution}</h4>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <PiMapPinFill className="text-[#F86F03]" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Slide>
            )}
          </div>
          <div>

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <Slide direction="left" duration={800}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {experienceData.map((exp, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-800/60 border-l-4 border-[#F86F03] rounded-lg p-6 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#F86F03]/10"
                    >
                      <div className="flex flex-col lg:flex-row lg:gap-8">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <PiCalendarFill className="text-[#F86F03]" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <PiMapPinFill className="text-[#F86F03]" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                          <h4 className="text-lg text-[#F86F03] font-semibold mb-4">{exp.company}</h4>

                          <div>
                            <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Responsibilities:</h5>
                            <ul className="space-y-1">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                                  <span className="w-1.5 h-1.5 bg-[#F86F03] rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Slide>
            )}
          </div>

        </div>


        {/* Tab Navigation */}

        {/* Download CV Button */}
        <Slide direction="up" duration={1000}>
          <div className="flex justify-center mt-10">
            <a
              target="_blank"
              href="https://drive.usercontent.google.com/download?id=1fCAUvLw0n7sam4JGAaiO5JyVE6LyKwH5&export=download&authuser=0&confirm=t&uuid=9c4af5c0-a9dc-4440-8e1d-2a92ada2bf8c&at=APZUnTWQYm1bcFl9V9OgzmbWLujY:1719209115372"
              className="group"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-[#F86F03] to-orange-500 hover:from-orange-500 hover:to-[#F86F03] rounded-lg font-semibold text-white flex items-center gap-2 shadow-lg shadow-[#F86F03]/25 hover:shadow-xl hover:shadow-[#F86F03]/40 transform hover:scale-105 transition-all duration-300">
                <PiDownloadFill className="text-lg group-hover:animate-bounce" />
                Download CV
              </button>
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Education;