import React, { useState } from 'react';

interface PricingItem {
  name: string;
  description: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  annualPrice: number;
}

const pricingData: PricingItem[] = [
  {
    name: "Tailorfy",
    description: "No upfront inventory costs, quick setup, and direct profit disbursement in just 15 minutes!",
    monthlyPrice: 20,
    quarterlyPrice: 18,
    annualPrice: 16
  },
  {
    name: "Bespokify",
    description: "Makes selling easy on your website or major e-commerce platforms.",
    monthlyPrice: 30,
    quarterlyPrice: 27,
    annualPrice: 24
  },
  {
    name: "Webify",
    description: "User-friendly eCommerce builder, setting up your store in just 30 seconds.",
    monthlyPrice: 12,
    quarterlyPrice: 10,
    annualPrice: 8
  },
  {
    name: "Suppokify",
    description: "Upload products and connect with a vast reseller network - no selling worries for small and local suppliers.",
    monthlyPrice: 15,
    quarterlyPrice: 13,
    annualPrice: 10
  }
];

const ProductsPricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');
  const [animateKey, setAnimateKey] = useState(0);

  const handlePlanChange = (plan: 'monthly' | 'quarterly' | 'annual') => {
    setActivePlan(plan);
    setAnimateKey(prev => prev + 1);
  };

  return (
    <section className="bg-gray-100 py-6 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6 sm:mb-12">Products & Pricing</h2>
        
        <div className="flex justify-center font-sans text-sm sm:text-base lg:text-xl mb-6 sm:mb-8">
          {['monthly', 'quarterly', 'annual'].map((plan) => (
            <button 
              key={plan}
              className={`px-2 sm:px-4 py-1 sm:py-2 ${activePlan === plan ? 'bg-[#3281bd] text-white' : 'bg-transparent text-blue-600'} transition-colors duration-300`}
              onClick={() => handlePlanChange(plan as 'monthly' | 'quarterly' | 'annual')}
            >
              {plan.charAt(0).toUpperCase() + plan.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pricingData.map((item, index) => (
            <div key={index} className="relative h-[350px] sm:h-[400px] flex items-center justify-center p-2">
              <div 
                className={`transform h-full w-full bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col hover:bg-blue-100 transition-all duration-500 hover:scale-105 sm:hover:scale-110`}
              >
                <div key={animateKey} className="animate-scaleIn flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-3 sm:mb-6">{item.name}</h3>
                  <p className="text-black text-sm sm:text-base lg:text-lg text-center mb-3 sm:mb-4 flex-grow flex items-center justify-center">{item.description}</p>
                  <p className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
                    ${activePlan === 'monthly' ? item.monthlyPrice : 
                      activePlan === 'quarterly' ? item.quarterlyPrice : 
                      item.annualPrice}
                    <span className="text-xs sm:text-sm font-normal">/{activePlan === 'annual' ? 'year' : activePlan === 'quarterly' ? 'quarter' : 'month'}</span>
                  </p>
                  <div className="mt-auto">
                    <button className="w-full font-bold bg-transparent text-black py-2 sm:py-3 rounded-full border border-black hover:bg-blue-100 transition duration-300 text-sm sm:text-base">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPricing;