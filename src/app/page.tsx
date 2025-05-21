import AboutMe from '@/components/home/About';
import Contacts from '@/components/home/Contacts';
import Footers from '@/components/home/Footers';
import Heros from '@/components/home/Heros';
import Projects from '@/components/home/Projects';
import Skill from '@/components/home/Skill';
import React from 'react';

const page = () => {
  return (
    <div>
      <Heros></Heros>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footers></Footers>
    </div>
  );
};

export default page;