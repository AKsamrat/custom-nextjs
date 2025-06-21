"use client";

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
        console.error("Error fetching skills:", err);
        setError("Failed to load skills");
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const renderHeader = () => (
    <div className="flex justify-center items-center">
      <p className="exo-2 border-b-2 w-28 lg:w-48 text-white text-[25px] lg:text-[40px] text-center font-semibold dark:text-gray-700">
        My <span className="text-[#F86F03]">Skills</span>
      </p>
    </div>
  );

  const backgroundImage = (
    <Image
      src="/section.svg"
      alt="skill"
      width={1572}
      height={795}
      className="absolute -top-[98px] -z-10 w-full"
    />
  );

  const renderMarquee = (reverse = false) => (
    <div
      className={`overflow-hidden whitespace-nowrap ${reverse ? "[--direction:reverse]" : ""
        }`}
    >
      <div
        className="inline-flex animate-slide gap-6 [animation-duration:30s]"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {skills.map((skill) => (
          <GlowCard key={skill._id} identifier={`skill-${skill._id}`}>
            <div className="p-4 rounded-2xl flex flex-col items-center gap-4 dark:bg-gray-800 w-40">
              <img
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                src={skill.image}
                alt={skill.title || "skill"}
              />
              <p className="text-base sm:text-lg font-semibold">
                {skill.title}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div id="skill" className="exo-2 relative mt-10">
        <section>
          {backgroundImage}
          <div className="max-w-6xl mx-auto pb-16 px-4 sm:px-6">
            {renderHeader()}
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
          {backgroundImage}
          <div className="max-w-6xl mx-auto pb-16 px-4 sm:px-6">
            {renderHeader()}
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
    <div id="skill" className="relative mt-10">
      <section>
        {backgroundImage}
        <div className="max-w-6xl mx-auto pb-16 px-4 sm:px-4">
          {renderHeader()}

          <div className="mt-10 space-y-10">
            {renderMarquee(false)}
            {renderMarquee(true)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
