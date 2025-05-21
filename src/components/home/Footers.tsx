import React from 'react';
// import logo from '../../public/port3.png';
// import { FaYoutube } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import { Roll } from 'react-awesome-reveal';
import { CiFacebook } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';
import { AnimationProps } from '@/types';

const Footers = () => {
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
    <div className="bg-[#31065A] text-[#fffff5cb]">
      <footer className="px-4  max-w-[1160px] mx-auto pt-[60px] pb-[70px]">
        <img className="size-16" src="port3.png" alt="" />
        <div className="container flex flex-col justify-between  mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <p className="pb-6">
              Sherpur <br /> Bangladesh Postal Code: 2150
            </p>
            <p>
              Support: samratuap52@gmail.com <br /> (Available : 08:00am to
              10:00pm)
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">
                Home
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Success Page
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms & Condition
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">
                Services
              </h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Frontend Web Developing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Backend Web Developing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    MARN Stack Developer
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900">Social media</div>
              <div className="flex justify-start items-center gap-4 py-4 ">
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
            </div>
          </div>
        </div>
      </footer>
      <hr className="w-[1150px] mx-auto" />
      <div className="py-6 text-sm text-center bg-[#31065A]">
        © 2024. All rights reserved by Anuwarul Kabir.
      </div>
    </div>
  );
};

export default Footers;
