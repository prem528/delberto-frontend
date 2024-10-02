import  { useEffect, useRef, } from 'react';
import amazon from "../../../../assets/img/amazon.webp";
import alibaba from "../../../../assets/img/alibaba.png";
import alibaba2 from "../../../../assets/img/alibaba2.png";
import ebay from "../../../../assets/img/ebay.png";
import shopify from "../../../../assets/img/shopify.png";
import wix from "../../../../assets/img/wix.png";
import woocom from "../../../../assets/img/woocommerce.webp";

export default function Connection() {
  const storeLogos = [amazon, alibaba, alibaba2, ebay, shopify, wix, woocom];
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
    <section className="py-10 bg-blue-400 font-sans">
      <div className="w-full mb-10">
        <h2 className="text-4xl text-center text-white font-bold">
          Available Integrations
        </h2>
        <p className="text-center text-white mt-4 font-medium text-lg max-w-3xl mx-auto">
          Bespokify seamlessly connects with top e-commerce platforms, including:
        </p>
      </div>

      <div className="relative overflow-hidden mx-4 md:mx-28">
        <div 
          className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-400 to-transparent z-10"
          aria-hidden="true"
        ></div>
        <div 
          className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-400 to-transparent z-10"
          aria-hidden="true"
        ></div>
        <div 
          className="overflow-hidden px-8" 
          ref={scrollRef}
           
        >
          <div className="flex" style={{ width: `${storeLogos.length * 200}px` }}>
            {[...storeLogos, ...storeLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Store ${index % storeLogos.length + 1}`}
                className="h-38 w-40 object-contain mx-4"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10">  
        <a 
          href="#" 
          className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg inline-flex items-center md:px-6 md:py-3 hover:bg-blue-100 transition-colors duration-300"
        >
          Take my business online Now
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
}