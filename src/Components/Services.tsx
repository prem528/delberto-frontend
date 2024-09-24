import React from 'react';
import money from '../assets/img/money.png';
import friendship from '../assets/img/friendship.png';
import delivery from '../assets/img/delivery-man.png';
import global from '../assets/img/global-market.png';
import moneyloss from '../assets/img/money-loss.png';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <div className="mb-4">
        <div className="bg-[#5ca7e1] rounded p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center">
          <img src={icon} alt={title} className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-base sm:text-lg text-center flex-grow">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 sm:mb-12">
          Whether you're an artist, a local business owner, a small manufacturer, or an aspiring
          entrepreneur, Delberto is the ideal platform for your needs.
        </h2>

        <div className="flex flex-wrap justify-center -mx-4">
          <ServiceItem
            icon={moneyloss}
            title="Cost-Effective Platform"
            description="Delberto eliminates significant upfront investments, making it accessible to users with limited financial resources."
          />
          <ServiceItem
            icon={delivery}
            title="Connecting Suppliers & Sellers"
            description="Delberto bridges the gap between suppliers and sellers, enhancing visibility and business opportunities with an easy-to-use platform for expanding networks."
          />
          <ServiceItem
            icon={friendship}
            title="User-Friendly Interface"
            description="Simplifies the process of setting up and managing online stores, requiring minimal technical knowledge."
          />
          <ServiceItem
            icon={money}
            title="Unique Differentiators"
            description="Offers low commission, faster payment cycles, no seller tiering, no private labels, and focuses on low AOV (Average Order Value) products."
          />
          <ServiceItem
            icon={global}
            title="Global Market Reach"
            description="Integrates with global payment gateways and popular e-commerce platforms to expand market reach."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;