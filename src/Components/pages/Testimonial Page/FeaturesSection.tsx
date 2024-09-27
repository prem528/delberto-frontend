import React from 'react';
import nav from '../../../assets/img/naveen.png';
import img1 from '../../../assets/img/app-img1.png';
import img2 from '../../../assets/img/app-img2.png';

interface TestimonialProps {
  quote: string;
  author: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, avatarUrl }) => {
  const paragraphs = quote ? quote.split('\n\n') : [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row max-w-6xl w-full">
        <div className="relative w-full lg:w-2/3 p-6 sm:p-8 bg-white rounded-3xl border-blue-200 border-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform mb-6 lg:mb-0">
          <blockquote className="text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </blockquote>
          <div className="flex items-center mt-6">
            <img
              src={avatarUrl || nav}
              alt={`Avatar of ${author}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
            />
            <cite className="font-medium text-gray-900 text-sm sm:text-base">{author}</cite>
          </div>
        </div>
        <div className="flex lg:flex-col lg:ml-6 space-x-4 lg:space-x-0 lg:space-y-4 justify-center lg:justify-start">
          <img src={img1} className="w-1/2 lg:w-48 xl:w-64 h-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform rounded-lg" alt="App screenshot 1" />
          <img src={img2} className="w-1/2 lg:w-48 xl:w-64 h-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform rounded-lg" alt="App screenshot 2" />
        </div>
      </div>
    </div>
  );
};

export default function TestimonialExample() {
  const testimonialData: TestimonialProps = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Risus commodo viverra maecenas accumsan lacus vel facilisis.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    author: "Caroline Campbel",
    avatarUrl: nav
  };

  return <Testimonial {...testimonialData} />;
}