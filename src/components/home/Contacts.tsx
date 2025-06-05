'use client';

import { AnimationProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Roll } from 'react-awesome-reveal';
import { BsTwitterX } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import emailjs from 'emailjs-com';

const Contacts = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_irjd2nu', 'template_ke6qytf',
      e.currentTarget,
      'OSmxKuqErUuwX3Iad'
    )
      .then((result) => {
        console.log('Success:', result.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error('Error:', error.text);
        alert("Failed to send message.");
      });

    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="exo-2 relative ">
      <Image
        src="/section.svg"
        alt="contact"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className=" max-w-6xl mx-auto  pb-16 ">
        <div className="flex justify-center items-center pb-6 ">
          <p className="exo-2 border-b-2 w-52 lg:w-64 text-[32px] lg:text-[40px] text-center font-semibold text-white dark:text-gray-700">
            Get in <span className="text-[#F86F03]"> Touch</span>
          </p>
        </div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
            <div className="py-6 md:py-0 md:px-6 *:text-white *:dark:text-gray-700">
              <h1 className="text-2xl lg:text-4xl font-bold">Contact</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4 *:text-[20px]">
                <Fade duration={2000}>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Sherpur,Mymensingh</span>
                  </p>

                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>+88 01683654865</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>samratuap52@gmail.com</span>
                  </p>
                </Fade>
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col py-6 space-y-6  md:py-0 md:px-6 *:dark:text-gray-700"
            >
              <Slide duration={1000} direction='right'>
                <label className="block ">
                  <span className="mb-1 text-[18px] text-white dark:text-gray-700 ">Full name</span>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Leroy Jenkins"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 bg-[#43366A] dark:bg-gray-200 py-3 pl-2"
                  />
                </label>
              </Slide>
              <Slide duration={1000} direction="right" >
                <label className="block">
                  <span className="mb-1 text-[18px] text-white dark:text-gray-700">Email address</span>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="leroy@jenkins.com"
                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-200 py-3 pl-2 bg-[#43366A] "
                    data-temp-mail-org="0"
                  />
                </label>
              </Slide>
              <Slide duration={1000} direction="right" >
                <label className="block">
                  <span className="mb-1 text-[18px] text-white dark:text-gray-700">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-200 py-3 pl-2 bg-[#43366A]"
                  ></textarea>
                </label>
              </Slide>
              <Slide duration={1000} direction="right" >
                <button
                  type="submit"
                  className=" bg-[#F86F03] px-2 py-2 rounded-2xl font-semibold text-xl w-full "
                >
                  {' '}
                  Submit
                </button>
              </Slide>
            </form>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Contacts;
