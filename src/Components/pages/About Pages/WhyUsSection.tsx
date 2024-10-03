import React from 'react';
import why from '../../../assets/img/why.png'
const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Why Us</h2>
            <p className='text-lg'>
              Delberto, a user-friendly SaaS platform, empowers diverse entrepreneurs by providing essential tools for digital success.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={why}
              alt="Why choose Delberto"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "User-Friendly SaaS Platform",
              description: "Our Software-as-a-Service (SaaS) model ensures that users can leverage our platform without significant upfront investments or ongoing maintenance costs. Delberto handles the technical infrastructure, security, and updates allowing entrepreneurs to focus solely on growing their businesses"
            },
            {
              title: "Inclusive and Diverse Group",
              description: "We believe in fostering entrepreneurship across diverse groups. Delberto supports artists, crafters, local business owners, and small manufacturers, providing them with the tools and resources needed to succeed in the digital marketplace"
            },
            {
              title: "Connecting Suppliers and Sellers",
              description: "Delberto acts as a bridge, connecting suppliers with sellers to enhance visibility and business opportunities. Our platform makes it easy for users to find the right partners and grow their networks. Supplier benefit from having a large base of sellers, ensuring they do not need to worry about their products"
            },
            {
              title: "Tools for Business Growth",
              description: "We offer a suite of tools designed to support business growth, including marketing resources, analytics, and customer management systems. These tools help entrepreneurs optimize their operation and reach their full potential"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <h3 className="text-xl text-blue-900 font-bold mb-4">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;