'use client';

import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BsTwitterX } from 'react-icons/bs';
import { Roll, Slide } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

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
    <div className='max-w-6xl mx-auto lg:px-1 py-4 lg:py-12'>
      <section className=" dark:bg-gray-100 dark:text-gray-800">
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 sm:px-4">
          <div className="flex flex-col justify-start items-baseline  text-center rounded-sm  lg:text-left exo-2 space-y-1 w-full mt-16 ">
            <Slide duration={1500} direction="left" delay={700}>
              <h1 className="text-2xl font-semibold leading-none text-[#F86F03]">
                Hi, Its me
              </h1>
              <p className="font-bold text-2xl lg:text-5xl text-white dark:text-gray-700 ">ANUWARUL KABIR </p>
            </Slide>
            <Slide duration={1500} direction="left" delay={1000}>
              <p className="text-[22px] lg:text-[30px] w-full text-white dark:text-gray-700">
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
                      'Jr.FULL Stack Developer',
                      'MERN Developer',
                      'PostGreSQL Developer',
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
                  <TiSocialLinkedinCircular className="text-[42px] dark:text-gray-700" />
                </a>
              </Roll>


              <Roll {...rollAnimationProps2}>
                <a href="https://github.com/AKsamrat">
                  <VscGithub className="text-3xl dark:text-gray-700" />
                </a>
              </Roll>
              <Roll {...rollAnimationProps3}>
                <a href="https://www.facebook.com/ak.samrat.1">
                  <CiFacebook className="text-3xl dark:text-gray-700" />
                </a>
              </Roll>
              <Roll {...rollAnimationProps4}>
                <BsTwitterX className="text-2xl dark:text-gray-700" />
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
          <div className="flex-1 order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] ">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Anuwarul Kabir</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NextJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Redux</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Express</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NestJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">PostGreSql</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  {/* <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span> */}
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heros;

