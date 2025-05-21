import { Skills } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';

const SkillCard = (skill: Skills) => {
  console.log(skill)
  return (
    <div>
      <Slide direction="left" duration={1000} >
        <div className="relative animated-border group p-[2px] rounded-xl hover:scale-105 transition-transform duration-700">
          <div className="p-4 bg-[#ffffff8d] rounded-xl flex justify-start items-center gap-5">
            <Image
              quality={100}
              className="w-20 h-20"
              src={skill?.image}
              alt="html"
              width={20}
              height={20}
            />
            <div className="w-full">
              <p className="text-3xl font-semibold py-4">{skill?.title}</p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SkillCard;