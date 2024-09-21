import React, { useEffect, useRef, useState } from 'react';
import image from '../assets/img/profile.png';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (!isPaused) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      if (progress < 30000) { // Run for 30 seconds
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const testimonials = [
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      image: "/assets/img/rev_1.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
    },
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      image: "/assets/img/rev_1.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
    },
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      image: "/assets/img/rev_1.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
    },
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      image: "/assets/img/rev_1.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
    },
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      image: "/assets/img/rev_1.png",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
    },
    // Add more testimonials here
  ];

  return (
    <section className="py-10 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">What Our Clients Said About Us</h2>
        <div 
          ref={scrollRef} 
          className="flex overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-[#146eb4] rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img src={image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-white ">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;