 
import React, { useEffect, useRef } from 'react';
import homedeal from '../../../assets/img/homedeal.png';
import sampath from '../../../assets/img/sampath.png';
import part3 from '../../../assets/img/part_3.png';
import part4 from '../../../assets/img/part_4.png';
import part5 from '../../../assets/img/part_5.png';

const PartnersSection: React.FC = () => {
  const partners = [homedeal, sampath, part3, part4, part5];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1.5; // Adjust speed here
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition -= scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Meet Our Partners</h2>
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex" style={{ width: `${partners.length * 200 * 2}px` }}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-[200px]">
                <img
                  src={partner}
                  alt={`Partner ${index % partners.length + 1}`}
                  className="h-16 w-32 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
 