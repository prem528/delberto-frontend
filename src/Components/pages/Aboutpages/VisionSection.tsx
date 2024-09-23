import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
        <p className="text-justify  mb-12  mx-auto">
          Empower marginalized communities, artisans, crafters, aspiring entrepreneurs, and local businesses in
          Canada with our SaaS-based technology platform. We foster entrepreneurship by connecting suppliers with sellers,
          enhancing visibility, and providing tools for business growth. By supporting diverse entrepreneurs, we drive economic 
          development and create an inclusive digital marketplace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Empower Business",
              description: "Empower marginalized communities, artisans, crafters, aspiring entrepreneurs, and local businesses in Canada with our SaaS-based technology platform."
            },
            {
              title: "Economic Development",
              description: "By supporting diverse entrepreneurs, we drive economic development and create an inclusive digital marketplace."
            },
            {
              title: "Enhancing Business",
              description: "We foster entrepreneurship by connecting suppliers with sellers, enhancing visibility, and providing tools for business growth."
            }
          ].map((item, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
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