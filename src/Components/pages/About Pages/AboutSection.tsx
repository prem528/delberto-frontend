import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="mt-2 py-4 sm:py-6 md:py-8 lg:py-12 pt-8 pb-4 bg-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
        <p className="mb-4 text-lg sm:text-xl text-justify">
        Delberto is a cutting-edge SaaS-based technology platform transforming the world of entrepreneurship. Our
        mission is to empower marginalized communities, artists, crafters, local business owners, small manufacturers,
        and individuals—including women, students, and retired professionals—to effortlessly start their own e-commerce
        businesses, even without prior entrepreneurial skills.
        </p>
        <p className='mb-4 text-lg sm:text-xl text-justify'>
        Delberto's SaaS (Software-as-a-Service) model allows users to leverage the platform without significant upfront
        investments or ongoing maintenance costs. Suppliers benefit from having a large base of sellers, ensuring they
        do not need to worry about selling their products. Delberto manages the technical infrastructure, security, and
        updates, enabling entrepreneurs to focus solely on growing their businesses. With Delberto, anyone with a
        passion for entrepreneurship can turn their dreams into reality.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;