'use client';
import Image from 'next/image';
import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import img from "../../../public/portfolio.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="exo-2 bg-[#170550] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center ">
          <p className="exo-2 border-b-2 w-48 text-[40px] text-center font-semibold text-white">
            About <span className="text-[#F86F03]">Me</span>{' '}
          </p>
        </div>
        <div className="pt-16 flex flex-col lg:flex-row justify-center items-center gap-20 ">
          <div className="flex-1 h-[500px] flex justify-end">
            <Zoom direction="" duration={2000}>
              <Image
                className="h-full rounded-full"
                src={img}
                alt="about"
                width={425}
              />
            </Zoom>
          </div>
          <div className="flex-1">
            <Slide direction="right" duration={1800}>
              <p className="text-3xl font font-semibold text-white">
                Jr.MERN Stack Developer
              </p>
              <p className="text-xl pb-5 text-[#F86F03]">Frontend & Backend</p>
              <p className="text-[18px] pb-5 text-gray-400">
                My greatest passion is web developing which I have chosen to
                make it my career and make a living out of it . Thats why i
                seeking challenging and innovative organization which can
                recognize and utilize my real dedication and expertness. I
                completed my BSc and MSc degree under computer science and
                engineering .I have a strong foundation in programming and
                successfully developing and implementing web projects.I build my
                skill and experience as full stack web developer(MERN) . <br />{' '}
                <br /> Im deeply committed to continuous learning and growth,
                always seeking opportunities to expand my skill set and stay
                updated with the latest industry trends. If youre seeking a
                motivated team player with a passion for crafting exceptional
                digital experiences, Id love to connect and discuss how I can
                add value to your team.
              </p>
              <button className=" bg-[#F86F03]  px-6 py-2 rounded-2xl font-semibold mr-8">
                {' '}
                Read More
              </button>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
