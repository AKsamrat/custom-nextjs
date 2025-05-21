import { Skills } from "@/types";
import { getAllSkill } from "@/util/skill";
import { Slide } from "react-awesome-reveal";

const Skill = async () => {
  const pskills = await getAllSkill()
  console.log(pskills.data)
  return (
    <div id="skill" className="bg-[#31065A] exo-2  ">
      <div className="max-w-7xl mx-auto  py-24">
        <div className="flex justify-center items-center ">
          <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold ">
            My <span className="text-[#F86F03]">Skills</span>{' '}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-4 pt-10">
          {
            pskills?.data?.map((skill: Skills) => (

              <Slide key={skill?._id} direction="left" duration={1000} >
                <div className="relative  group p-[2px] rounded-xl hover:scale-105 transition-transform duration-700">
                  <div className="p-4 bg-[#ffffff8d] rounded-2xl flex justify-start items-center gap-5">
                    <img
                      className="w-16 h-16"
                      src={skill?.image}
                      alt="html"
                      width={20}
                      height={20}

                    />
                    <div className="w-full">
                      <p className="text-xl font-semibold py-4">{skill?.title}</p>
                    </div>
                  </div>
                </div>
              </Slide>


            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Skill;
