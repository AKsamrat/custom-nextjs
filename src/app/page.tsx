import AboutMe from '@/components/home/About';
import CertificateSection from '@/components/home/Certificate';
import Contacts from '@/components/home/Contacts';
import Education from '@/components/home/Education';
import Footers from '@/components/home/Footers';
import Heros from '@/components/home/Heros';
import Projects from '@/components/home/Projects';
import Skill from '@/components/home/Skill';
import React from 'react';

const page = () => {
  return (
    <div className='dark:text-black '>
      <Heros></Heros>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Education></Education>
      <CertificateSection></CertificateSection>
      <Contacts></Contacts>
      <Footers></Footers>
    </div>
  );
};

export default page;