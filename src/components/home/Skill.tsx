'use client';
import { Skills } from "@/types";
import { getAllSkill } from "@/util/skill";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlowCard from "../helper/glow-card";

const Skill = () => {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const pskills = await getAllSkill();
        setSkills(pskills?.data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load skills');
        // Fallback to mock data or empty array
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div id="skill" className="exo-2 relative mt-10">
        <section>
          <Image
            src="/section.svg"
            alt="skill"
            width={1572}
            height={795}
            className="absolute -top-[98px] -z-10"
          />
          <div className="max-w-6xl mx-auto pb-16">
            <div className="flex justify-center items-center">
              <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold dark:text-gray-700">
                My <span className="text-[#F86F03]">Skills</span>
              </p>
            </div>
            <div className="mt-10 pt-10 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F86F03]"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div id="skill" className="exo-2 relative mt-10">
        <section>
          <Image
            src="/section.svg"
            alt="skill"
            width={1572}
            height={795}
            className="absolute -top-[98px] -z-10"
          />
          <div className="max-w-6xl mx-auto pb-16">
            <div className="flex justify-center items-center">
              <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold dark:text-gray-700">
                My <span className="text-[#F86F03]">Skills</span>
              </p>
            </div>
            <div className="mt-10 pt-10 text-center">
              <p className="text-red-400 text-lg">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-[#F86F03] text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div id="skill" className="exo-2 relative mt-10">
      <section>
        <Image
          src="/section.svg"
          alt="skill"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />
        <div className="max-w-6xl mx-auto pb-16">
          <div className="flex justify-center items-center">
            <p className="exo-2 border-b-2 w-48 text-white text-[40px] text-center font-semibold dark:text-gray-700">
              My <span className="text-[#F86F03]">Skills</span>
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 pt-10">
            {skills.length > 0 ? (
              skills.map((skill: Skills) => (
                <GlowCard key={skill?._id} identifier={`experience-${skill._id}`}>
                  <div className="relative p-[2px]">
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
                        alt={skill?.title || "skill"}
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
            ) : (
              <div className="col-span-full text-center text-gray-400">
                No skills data available
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;