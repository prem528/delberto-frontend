import React from 'react';
import PageTitle from './PageTitle';
import TestimonialSection from './TestimonialSection';
import FeaturesSection from './FeaturesSection';
import LeadersSection from './LeadersSection';
import SliderSection from './SliderSection';

 
const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-40">
      <PageTitle />
      <TestimonialSection/>
      <FeaturesSection/>
      <LeadersSection />
      <SliderSection />
      </main>
    </div>
  );
};

export default Testimonial;