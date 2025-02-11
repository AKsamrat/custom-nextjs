import AboutMe from '@/components/home/About';
import Contacts from '@/components/home/Contacts';
import Heros from '@/components/home/Heros';
import Skill from '@/components/home/Skill';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Heros></Heros>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Contacts></Contacts>
    </div>
  );
};

export default HomePage;