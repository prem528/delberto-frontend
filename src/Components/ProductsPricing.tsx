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
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Products & Pricing</h2>
        
        <div className="flex justify-center font-sans text-xl mb-8">
          <button 
            className={`px-4 py-2 ${activePlan === 'monthly' ? 'bg-[#3281bd] text-white' : 'bg-transparent text-blue-600'}`}
            onClick={() => handlePlanChange('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 ${activePlan === 'quarterly' ? 'bg-[#3281bd] text-white' : 'bg-transparent text-blue-600'}`}
            onClick={() => handlePlanChange('quarterly')}
          >
            Quarterly
          </button>
          <button 
            className={`px-4 py-2 ${activePlan === 'annual' ? 'bg-[#3281bd] text-white' : 'bg-transparent text-blue-600'}`}
            onClick={() => handlePlanChange('annual')}
          >
            Annual
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((item, index) => (
            <div key={index} className="relative h-[400px] flex items-center justify-center p-2">
              <div 
                className={`transform h-full w-full bg-white rounded-lg shadow-md p-6 flex flex-col hover:bg-blue-100 transition-all duration-500 hover:scale-110`}
              >
                <div key={animateKey} className="animate-scaleIn flex flex-col h-full">
                  <h3 className="text-4xl font-bold text-center text-blue-900 mb-6">{item.name}</h3>
                  <p className="text-black text-lg text-center mb-4 flex-grow flex items-center justify-center">{item.description}</p>
                  <p className="text-2xl font-bold text-center mb-6">
                    ${activePlan === 'monthly' ? item.monthlyPrice : 
                      activePlan === 'quarterly' ? item.quarterlyPrice : 
                      item.annualPrice}
                    <span className="text-sm font-normal">/{activePlan === 'annual' ? 'year' : activePlan === 'quarterly' ? 'quarter' : 'month'}</span>
                  </p>
                  <div className="mt-auto">
                    <button className="w-full font-bold bg-transparent text-black py-3 rounded-full border border-black hover:bg-blue-100 transition duration-300">
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