import React from 'react';
import nav from '../../../assets/img/naveen.png';
import img1 from '../../../assets/img/app-img1.png';
import img2 from '../../../assets/img/app-img2.png';

interface TestimonialProps {
  quote: string;
  author: string;
  avatarUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  const paragraphs = quote ? quote.split('\n\n') : [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex">
        <div className="relative max-w-xl p-8 bg-white rounded-3xl border-blue-200 border-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform">
          <blockquote className="text-lg font-serif text-gray-800">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </blockquote>
          <div className="flex items-center mt-6">
            <img
              src={nav}
              alt={`Avatar of ${author}`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <cite className="font-medium text-gray-900">{author}</cite>
          </div>
        </div>
        <div className="flex flex-col ml-4 space-y-2">
          <img src={img1} className="w-32 h-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform" alt="App screenshot 1" />
          <img src={img2} className="w-32 h-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transform" alt="App screenshot 2" />
        </div>
      </div>
    </div>
  );
};

export default function TestimonialExample() {
  const testimonialData: TestimonialProps = {
    quote: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Risus commodo viverra maecenas accumsan lacus vel facilisis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Risus commodo viverra maecenas accumsan lacus vel facilisis."`,
    author: "Caroline Campbel",
    avatarUrl: "/placeholder.svg?height=48&width=48"
  };

  return <Testimonial {...testimonialData} />;
}