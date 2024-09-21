import React from 'react';

interface FeatureBoxProps {
  title: string;
  items: string[];
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, items }) => (
  <div className="bg-white shadow rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105">
    <h4 className="text-2xl text-blue-900 font-bold mb-4">{title}</h4>
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Pick the model that best matches your needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBox
            title="Who is Bespokify Perfect For?"
            items={[
              "Artisans",
              "Crafters",
              "Local Businesses",
              "Aspiring Entrepreneurs: Individuals, Women, Students, Retired Professionals"
            ]}
          />
          <FeatureBox
            title="Who is Tailorfy Perfect For?"
            items={[
              "Artisans",
              "Crafters",
              "Local Businesses",
              "Aspiring Entrepreneurs: Women, Students, Retired Professionals, Anyone seeking extra income"
            ]}
          />
          <FeatureBox
            title="Who is Webify Perfect For?"
            items={[
              "Artisans",
              "Crafters",
              "Local Businesses",
              "First-Time Entrepreneurs",
              "Local Manufacturers"
            ]}
          />
          <FeatureBox
            title="Who is Suppokify Perfect For?"
            items={[
              "Artisans",
              "Crafters",
              "Local Manufacturers",
              "Wholesalers"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;