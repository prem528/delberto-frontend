import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Why Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "User-Friendly SaaS Platform",
              description: "Our Software-as-a-Service (SaaS) model ensures that users can leverage our platform without significant upfront investments or ongoing maintenance costs."
            },
            {
              title: "Inclusive and Diverse Group",
              description: "We believe in fostering entrepreneurship across diverse groups. Delberto supports artists, crafters, local business owners, and small manufacturers."
            },
            {
              title: "Connecting Suppliers and Sellers",
              description: "Delberto acts as a bridge, connecting suppliers with sellers to enhance visibility and business opportunities."
            },
            {
              title: "Tools for Business Growth",
              description: "We offer a suite of tools designed to support business growth, including marketing resources, analytics, and customer management systems."
            }
          ].map((item, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <button className="text-primary flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;