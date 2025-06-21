'use client';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import img from '../../../public/portfolio.jpg';
// import types from '../../../public/typescript.webp';
import './AboutMe.css'; // for animated border
// import CirclesOrbiting from './CircleOrbiting';

const AboutMe = () => {
  return (
    <div id="about" className="exo-2  py-16">
      <div className="max-w-6xl mx-auto px-2 lg:px-4">
        <div className="flex justify-center items-center">
          <p className="exo-2 border-b-2 w-32 lg:w-48 text-[25px]  lg:text-[40px] text-center font-semibold text-white dark:text-gray-700">
            About <span className="text-[#F86F03]">Me</span>
          </p>
        </div>
        <div className="pt-16 flex flex-col lg:flex-row justify-center items-center gap-20">
          {/* Animated Border Around Image */}

          <div className="relative">
            {/* Your existing animated profile section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              <div className="animated-border">
                <div className="overflow-hidden rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative z-10">
                  <Image
                    src={img}
                    alt="about"
                    width={400}
                    height={400}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Animated Tech Badges */}
            {/* TypeScript Badge - Top Left */}
            <motion.div
              initial={{ x: -50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-12 -left-4 md:top-12 md:-left-2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            >
              <div className="text-blue-600 font-bold text-lg md:text-xl">
                <img
                  src="./typescript.webp"
                  // alt="typescript"
                  // width={50}
                  // height={50}
                  className='w-10 h-10 md:w-12 md:h-12'
                />

              </div>
            </motion.div>

            {/* MongoDB Badge - Top Right */}
            <motion.div
              initial={{ x: 50, y: -50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-12 -right-4 md:top-12 md:-right-2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <img src="./postgresql.png" alt="" />
              </div>
            </motion.div>

            {/* Next.js Badge - Bottom Left */}
            <motion.div
              initial={{ x: -50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-12 -left-6 md:bottom-12 md:-left-2 w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            >
              <div className="text-white font-bold text-lg md:text-xl">
                <img src="./next js.jpg" alt="" />
              </div>
            </motion.div>

            {/* Node.js Badge - Bottom Right */}
            {/* <motion.div
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 cursor-pointer z-20"
            >
              <div className="text-green-600 font-bold text-lg md:text-xl">JS</div>
            </motion.div> */}

            {/* Floating particles with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute -top-12 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute top-1/4 -right-12 w-1 h-1 bg-emerald-300 rounded-full animate-pulse"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 1.9 }}
              className="absolute bottom-1/4 -left-12 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 2.1 }}
              className="absolute -bottom-12 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
            ></motion.div>
          </div>


          {/* Text Section */}
          <div className="flex-1 mt-10 lg:mt-0">
            <Slide direction="right" duration={1800}>
              <p className="text-2xl lg:text-3xl font-semibold text-white dark:text-gray-700">
                Jr. Full Stack Developer
              </p>
              <p className="text-lg lg:text-xl pb-5 text-[#F86F03]">MERN & PostGreSQL</p>
              <p className="text-[16px] lg:text-[18px] pb-5 text-gray-400 leading-relaxed">
                My greatest passion is web development, which I’ve chosen as my
                career. Iam always seeking innovative organizations that value
                dedication and skill. I hold both BSc and MSc degrees in Computer
                Science & Engineering, and I’ve built strong foundations in both
                frontend and backend development (MERN stack).
                <br />
                <br />
                I am committed to continuous learning and creating exceptional
                digital experiences. If you’re looking for a passionate team
                player, I’d love to connect and contribute.
              </p>
              <button className="bg-[#F86F03] px-6 py-2 rounded-2xl font-semibold hover:bg-[#ff8930] transition">
                Read More
              </button>
            </Slide>
          </div>
        </div>
      </div>
    </div>
    // <section className="relative w-full mt-12 flex flex-col items-center justify-center bg-[#0e051a] text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] -webkit-mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden">
    //   {/* Purple Glow Effect - section center */}
    //   <div className="absolute inset-0 m-auto w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

    //   {/* Start Text Section */}
    //   <div
    //     className="flex flex-col items-center justify-center space-y-8 text-center w-full"
    //     data-aos="fade-up"
    //     data-aos-duration="1000"
    //   >
    //     {/* Dual Text Effect */}
    //     {/* <DualTextEffect
    //       largeText="POWERED BY"
    //       smallText="Powered by"
    //       largeTextColor="text-[#3a2a5e18]"
    //       smallTextColor="text-white"
    //       largeTextSize="text-[40px] md:text-[80px] lg:text-[100px]"
    //       smallTextSize="text-lg md:text-2xl lg:text-[40px]"
    //     /> */}
    //   </div>
    //   {/* End Text Section */}

    //   {/* CirclesOrbiting */}
    //   <div className="relative w-full flex items-center justify-center p-6">
    //     <CirclesOrbiting />
    //   </div>
    // </section>
  );
};

export default AboutMe;
