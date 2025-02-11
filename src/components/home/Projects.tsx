'use client';
import React from 'react';
import './Featureds.css';
import { Slide } from 'react-awesome-reveal';
import asset from '../../../public/asset.jpg'
import sketch from '../../../public/sketch.png'
import expert from '../../../public/logo1.jpg'
import Image from 'next/image';

const Projects = () => {
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
        <Slide direction="left" duration={1000}>
          <div className="p-6 border-2 rounded-xl bg-[#fffffffe] drop-shadow-lg shadow-lg shadow-purple-500 hover:scale-105 overflow-hidden  duration-700">
            <Image width={40} quality={100} className="w-40" src={asset} alt="asset" />
            <div className="w-full pb-4">
              <p className="text-3xl font-semibold py-3">Asset Management</p>
              <p className="text-[18px] text-slate-500">
                This is an asset management system where any company can manage
                her businesss smartly by using this website.I am sharing some
                feature.{' '}
              </p>
              <p className="font-semibold text-[18px] pt-3">
                Skills: HTML5 · CSS ·Tailwind CSS · JavaScript · React.js ·
                Node.js · MongoDB · Express.js
              </p>
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7205437742988550144"
            >
              <button className=" bg-[#F86F03]  px-6 py-2 rounded-2xl font-semibold mr-8 text-white">
                {' '}
                Details
              </button>
            </a>
          </div>
        </Slide>
        <Slide direction="up" duration={1000}>
          <div className="p-6 border-2 rounded-xl bg-[#fffffffe] drop-shadow-lg shadow-lg shadow-purple-500 hover:scale-105 overflow-hidden  duration-700 h-full">
            <Image className="w-40" quality={100} width={40} src={expert} alt="" />
            <div className="w-full pb-4">
              <p className="text-3xl font-semibold py-3">Expert Hunter</p>
              <p className="text-[18px] text-slate-500">
                In this project i implement a job searching website where any
                company or a recruiter can post their job and also can delete
                and update it.On the other site employee{' '}
              </p>
              <p className="font-semibold text-[18px] pt-3">
                Skills: HTML5 · CSS ·Tailwind CSS · JavaScript · React.js ·
                Node.js · MongoDB · Express.js
              </p>
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7199468941683953664"
            >
              <button className=" bg-[#F86F03]  px-6 py-2 rounded-2xl font-semibold mr-8 text-white">
                {' '}
                Details
              </button>
            </a>
          </div>
        </Slide>
        <Slide direction="right" duration={1000}>
          <div className="p-6 border-2 rounded-xl bg-[#fffffffe] drop-shadow-lg shadow-lg shadow-purple-500 hover:scale-105 overflow-hidden  duration-700 ">
            <Image className="w-40" quality={100} src={sketch} width={40} alt="sketch" />
            <div className="w-full pb-4">
              <p className="text-3xl font-semibold py-3">Sketch craft</p>
              <p className="text-[18px] text-slate-500">
                This is an online sales like e-commerce website.Where will
                finddifferent category of drawing here and also also can
                purchase from it.You can customize any sketch or craft by us{' '}
              </p>
              <p className="font-semibold text-[18px] pt-3">
                Skills: HTML5 · CSS ·Tailwind CSS · JavaScript · React.js ·
                Node.js · MongoDB · Express.js
              </p>
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:7191977685747732484"
            >
              <button className=" bg-[#F86F03]  px-6 py-2 rounded-2xl font-semibold mr-8 text-white">
                {' '}
                Details
              </button>
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
