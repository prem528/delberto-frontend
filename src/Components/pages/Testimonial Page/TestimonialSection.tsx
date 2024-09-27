import React from 'react';
import pin from '../../../assets/img/pin.png';
import naveen from '../../../assets/img/naveen.png';


interface TestimonialSectionProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ quote, name, title }) => {
  return (
    <section className="relative " style={{ marginTop: '-10rem' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row mx-4 lg:mx-8 bg-blue-400 rounded-lg overflow-hidden">
          {/* Left half - Testimonial content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 p-8">
            <div className="flex flex-col items-start mb-6">
              <img src={pin} className="mb-4" alt="Pin" />
              <p className="text-left text-white">{quote}</p>
            </div>
            <div className="flex items-center justify-left">
              <div className="flex items-center space-x-4">
                <img src={naveen} className="w-16 h-16 rounded-full" alt={name} />
                <div>
                  <h4 className="font-semibold text-white">{name}</h4>
                  <h6 className="text-sm text-white">{title}</h6>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right half - Empty space */}
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default function Component() {
  return (
    <TestimonialSection
      quote="Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs 
      and work transparently across the business."
      name="Naveen Gavini"
      title="SVP of Products at Pinterest"
      imageSrc="/placeholder.svg?height=100&width=100"
    />
  );
}