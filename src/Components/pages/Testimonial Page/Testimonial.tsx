import React from 'react';
import PageTitle from './PageTitle';
import TestimonialSection from './TestimonialSection';
import FeaturesSection from './FeaturesSection';
import LeadersSection from './LeadersSection';
import SliderSection from './SliderSection';

 
const Testimonial: React.FC = () => {
  return (
    <div>
      <PageTitle  />
      <TestimonialSection/>
      <FeaturesSection/>
      <LeadersSection />
      <SliderSection />
    </div>
  );
};

export default Testimonial;