'use client';

import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BsTwitterX } from 'react-icons/bs';
import { Roll, Slide } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import img from "../../../public/Banner.png"
import { AnimationProps } from '@/types';


const Heros = () => {
  const rollAnimationProps: AnimationProps = {
    duration: 1500,
    direction: "left",
    delay: 2000,
  };
  const rollAnimationProps2: AnimationProps = {
    duration: 1500,
    direction: "left",
    delay: 1500,
  };
  const rollAnimationProps3: AnimationProps = {
    duration: 1500,
    direction: "left",
    delay: 1000,
  };
  const rollAnimationProps4: AnimationProps = {
    duration: 1500,
    direction: "left",
    delay: 500,
  };
  return (
    <div>
      <section className="bg-[#31065A] dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center  mx-auto  lg:flex-row  gap-6">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left exo-2 space-y-1 w-full">
            <Slide duration={1500} direction="left" delay={700}>
              <h1 className="text-2xl font-semibold leading-none text-[#F86F03]">
                Hi, Its me
              </h1>
              <p className="font-bold text-5xl text-white ">ANUWARUL KABIR </p>
            </Slide>
            <Slide duration={1500} direction="left" delay={1000}>
              <p className="text-[30px] w-full text-white">
                And I am A{' '}
                <span className="text-[#F86F03]">
                  {/* {text} */}
                  <Typewriter
                    cursor
                    cursorStyle="_"
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                      'Jr. MERN Stack Developer',
                      'Frontend Developer',
                      'Backend Developer',
                    ]}
                  />
                </span>
              </p>
            </Slide>
            <Slide duration={1500} direction="left" delay={1500}>
              <p className="mt-2 mb-3 text-lg sm:mb-6 text-gray-400">
                Your One-Stop Solution for Exceptional
                <br />
                Web Development Service
              </p>
            </Slide>

            <div className="flex justify-start items-center gap-4 py-4 text-white ">

              <Roll {...rollAnimationProps}>
                <a href="https://www.linkedin.com/in/anuwarul-kabir">
                  <TiSocialLinkedinCircular className="text-[42px]" />
                </a>
              </Roll>


              <Roll {...rollAnimationProps2}>
                <a href="https://github.com/AKsamrat">
                  <VscGithub className="text-3xl" />
                </a>
              </Roll>
              <Roll {...rollAnimationProps3}>
                <a href="https://www.facebook.com/ak.samrat.1">
                  <CiFacebook className="text-3xl" />
                </a>
              </Roll>
              <Roll {...rollAnimationProps4}>
                <BsTwitterX className="text-2xl" />
              </Roll>
            </div>
            <a
              target="_blank"
              href="https://drive.usercontent.google.com/download?id=1fCAUvLw0n7sam4JGAaiO5JyVE6LyKwH5&export=download&authuser=0&confirm=t&uuid=9c4af5c0-a9dc-4440-8e1d-2a92ada2bf8c&at=APZUnTWQYm1bcFl9V9OgzmbWLujY:1719209115372"
            >
              <button className="px-3 py-2 bg-[#F86F03] rounded-2xl text-[18px] font-semibold max-w-48 mt-5">
                Download CV
              </button>
            </a>
          </div>
          <div>
            <Image src={img} alt='banner' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heros;

