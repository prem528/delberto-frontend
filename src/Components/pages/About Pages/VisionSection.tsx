import React from 'react';
import mybusiness from '../../../assets/img/my-business.png';
import stair from '../../../assets/img/stair.png';
import money from '../../../assets/img/money.png';




const VisionSection: React.FC = () => {
  return (
    <section className="mt-2 py-4 sm:py-6 md:py-8 lg:py-12 pt-8 pb-4 bg-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Vision</h2>
        <p className=" mb-4 text-lg sm:text-xl text-justify">
          Empower marginalized communities, artisans, crafters, aspiring entrepreneurs, and local businesses in
          Canada with our SaaS-based technology platform. We foster entrepreneurship by connecting suppliers with sellers,
          enhancing visibility, and providing tools for business growth. By supporting diverse entrepreneurs, we drive economic 
          development and create an inclusive digital marketplace.
        </p>
        <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8">
          {[
            {
              icon: mybusiness,
              title: "Empower Business",
              description: "Empower marginalized communities, artisans, crafters, aspiring entrepreneurs, and local businesses in Canada with our SaaS-based technology platform."
            },
            {
              icon: money,
              title: "Economic Development",
              description: "By supporting diverse entrepreneurs, we drive economic development and create an inclusive digital marketplace."
            },
            {
              icon: stair, 
              title: "Enhancing Business",
              description: "We foster entrepreneurship by connecting suppliers with sellers, enhancing visibility, and providing tools for business growth."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {item.icon && <img src={item.icon} alt={item.title} className="mb-4 w-16 h-16 mx-auto" />}
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;