import React from 'react';
 
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PartnersSection from './PartnersSection';
import VisionSection from './VisionSection';
import TeamSection from './TeamSection';
import WhyUsSection from './WhyUsSection';
import CallToAction from '../../CallToAction';
 
const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
       
      <main className="flex-grow pt-40">
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <VisionSection />
        <TeamSection />
        <WhyUsSection />
        <CallToAction />
      </main>
       
    </div>
  );
};

export default AboutPage;