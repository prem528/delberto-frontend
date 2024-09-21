import React, { useEffect, useRef } from 'react';
import part5 from '../assets/img/part_5.png';
import b2 from '../assets/img/b2.webp';
import b3 from '../assets/img/b3.webp';
import b5 from '../assets/img/b5.webp';
import n4 from '../assets/img/n4.webp';
import logonew from '../assets/img/logonew.png';
import part4 from '../assets/img/part_4.png';
import part3 from '../assets/img/part_3.png';

const Stores: React.FC = () => {
  const storeLogos = [part5, b2, b3, b5, n4, logonew, part4, part3];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-10 bg-gray-100 font">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-4xl text-primary font-bold">
              Some of our <span className="text-4xl text-[#3281bd]">Stores</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="overflow-hidden" ref={scrollRef}>
              <div className="flex" style={{ width: `${storeLogos.length * 200}px` }}>
                {storeLogos.concat(storeLogos).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Store ${index % storeLogos.length + 1}`}
                    className="h-16 w-32 object-contain mx-4"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;