import React from 'react';

const About: React.FC = () => {
  return (
    <section className="mt-2 py-8 sm:py-12 pt-12 pb-0 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="">
          <p className=" text-xl text-justify tracking-wide  mb-0 ">
            Delberto aims to empower artisans, crafters, aspiring entrepreneurs
            (individuals, students, retired professionals), small businesses, and marginalized communities through
            our SaaS-based technology platform. Our goal is to facilitate entrepreneurship by connecting suppliers
            with sellers, regardless of their prior entrepreneurial or e-commerce experience, and eliminating
            upfront costs. We provide advanced tools for business growth, customization options, streamlined
            logistics, and global payment integrations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;