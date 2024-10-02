import React from 'react';
import about from '../../../assets/img/about.png'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#5CA7E1] py-20 text-center mt-[-112px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${about})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-[#3180bc] opacity-80"></div>
      <div className="container mx-auto pt-24 relative z-10">
        <h1 className="text-5xl font-bold mb-24 text-white">Testimonial</h1>
      </div>
    </section>
  );
};

export default HeroSection;