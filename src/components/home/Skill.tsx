'use client';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import html from '../../../public/html.png'
import css from '../../../public/css3.png'
import tailwind from '../../../public/Tailwind_CSS_.png'
import node from '../../../public/node.jpg'
import expree from '../../../public/express.png'


const Skill = () => {
  return (
    <div id="skill" className="bg-[#31065A] exo-2  ">
      <div className="max-w-7xl mx-auto  py-24">
        <div className="flex justify-center items-center ">
          <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold ">
            My <span className="text-[#F86F03]">Skills</span>{' '}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700 ">
              <Image quality={100} className="w-20 h-20" src={html} alt="html" width={20} height={20} />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">HTML</p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image quality={100} className="w-20 h-20" src={css} alt="" width={20} height={20} />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">CSS</p>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700 ">
              <Image quality={100} className="w-20 h-20" src={tailwind} alt="" width={20} height={20} />
              <div className="w-full">
                <p className="text-3xl font-semibold py-3">Tailwind </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image
                className="w-20 h-20"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt=""
                width={20} height={20} quality={100}
              />
              <div className="w-full">
                <p className="text-3xl font-semibold py-3">Java Script</p>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image
                className="w-20 h-20"
                width={20} height={20} quality={100}
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt=""
              />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">React</p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image className="w-[70px] h-20" src={node} alt="" width={20} height={20} quality={100} />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">Node.js</p>
              </div>
            </div>
          </Slide>
          <Slide direction="left" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image quality={100} className="w-20 h-20" src={expree} alt="" width={20} height={20} />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">Express</p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" duration={1000}>
            <div className="p-4 border-2 rounded-xl bg-[#ffffff8d] flex justify-start items-center gap-5 hover:scale-105 overflow-hidden  duration-700">
              <Image
                className="w-20 h-20"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt=""
                width={20} height={20}
              />
              <div className="w-full">
                <p className="text-3xl font-semibold py-4">MongoDB</p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Skill;
