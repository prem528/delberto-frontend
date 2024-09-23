import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <img 
              key={index}
              src={`/assets/img/partner_${index}.png`} 
              alt={`Partner ${index}`} 
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;