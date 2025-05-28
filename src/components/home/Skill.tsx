import { Skills } from "@/types";
import { getAllSkill } from "@/util/skill";

import Image from "next/image";

import GlowCard from "../helper/glow-card";

const Skill = async () => {
  const pskills = await getAllSkill()
  // console.log(pskills.data)
  return (
    <div id="skill" className=" exo-2  relative mt-10">
      <section>
        <Image
          src="/section.svg"
          alt="skill"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />
        <div className="max-w-6xl mx-auto  pb-16">
          <div className="flex justify-center items-center ">
            <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold  dark:text-gray-700">
              My <span className="text-[#F86F03]">Skills</span>{' '}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 first-letter gap-3 pt-10">
            {
              pskills?.data?.map((skill: Skills) => (
                <GlowCard key={skill?._id} identifier={`experience-${skill._id}`} >
                  <div className="relative   p-[2px]  ">
                    <Image
                      src="/blur-23.svg"
                      alt="skill"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="p-2 rounded-2xl flex justify-start items-center gap-5">
                      <img
                        className="w-14 h-14"
                        src={skill?.image}
                        alt="html"
                        width={20}
                        height={20}

                      />
                      <div className="w-full">
                        <p className="text-lg font-semibold py-4">{skill?.title}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>


              ))
            }

          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
