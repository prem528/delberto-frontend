import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageSrc }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-[#1a1d1e] rounded-lg shadow-lg p-6 h-full flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
        <div className="content flex flex-col justify-between h-full">
          <p className="text-white mb-4 text-sm line-clamp-4">{quote}</p>
          <div className="flex items-center">
            <img src={imageSrc} className="w-12 h-12 rounded-full mr-4" alt={name} />
            <div>
              <h4 className="font-semibold text-white text-sm">{name}</h4>
              <p className="text-white text-xs">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialRow: React.FC<{ testimonials: TestimonialProps[] }> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slidesPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative overflow-hidden" data-aos="zoom-in">
      <div 
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-lg"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-lg"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

const LeadersSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"An incredible tool for content creation."',
      name: 'Jane Doe',
      title: 'CEO at TechCorp',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"Revolutionary for our marketing team."',
      name: 'John Smith',
      title: 'Marketing Director at InnovateCo',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"Streamlined our entire content process."',
      name: 'Emily Johnson',
      title: 'Content Manager at TechGiant',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"A game-changer for our social media strategy."',
      name: 'Michael Brown',
      title: 'Social Media Manager at SocialBoost',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"Increased our content output tenfold."',
      name: 'Sarah Lee',
      title: 'Content Director at ContentKing',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"The AI capabilities are mind-blowing."',
      name: 'David Chen',
      title: 'AI Researcher at TechInnovate',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"Transformed how we approach content marketing."',
      name: 'Lisa Taylor',
      title: 'Head of Marketing at GrowthGenius',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
  ];

  return (
    <section className="pt-0 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900">
            Join leaders in content, <br /> marketing, and AI
          </h2>
        </div>
        <TestimonialRow testimonials={testimonials} />
      </div>
    </section>
  );
};

export default function Component() {
  return <LeadersSection />;
}