import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <h3 className="text-xl text-blue-900 font-bold mb-4">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <button className="text-primary flex items-center">
                Read More <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;