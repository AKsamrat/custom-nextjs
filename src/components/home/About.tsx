'use client';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import img from '../../../public/portfolio.jpg';
import './AboutMe.css'; // for animated border

const AboutMe = () => {
  return (
    <div id="about" className="exo-2  py-16">
      <div className="max-w-6xl mx-auto px-2 lg:px-4">
        <div className="flex justify-center items-center">
          <p className="exo-2 border-b-2 w-40 lg:w-48 text-[32px]  lg:text-[40px] text-center font-semibold text-white dark:text-gray-700">
            About <span className="text-[#F86F03]">Me</span>
          </p>
        </div>
        <div className="pt-16 flex flex-col lg:flex-row justify-center items-center gap-20">
          {/* Animated Border Around Image */}
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
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 mt-10 lg:mt-0">
            <Slide direction="right" duration={1800}>
              <p className="text-3xl font-semibold text-white dark:text-gray-700">
                Jr. Full Stack Developer
              </p>
              <p className="text-xl pb-5 text-[#F86F03]">MERN & PostGreSQL</p>
              <p className="text-[18px] pb-5 text-gray-400 leading-relaxed">
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
  );
};

export default AboutMe;
