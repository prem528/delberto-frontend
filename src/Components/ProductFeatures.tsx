import React from 'react';

const ProductFeatures: React.FC = () => {
  const features = [
    {
      product: "Tailorfy",
      features: [
        "Free SSL",
        "Connect custom domain",
        "Unlimited Storage",
        "Password Protection",
        "Shopping Cart",
        "Unlimited Items",
        "Item Badges",
        "Inventory Management",
        "Automatic markup calculation",
        "Coupons",
        "Shipping Calculator",
        "Accept payments through PayPal",
        "Item Reviews",
        "Shipping Labels",
        "Abandoned Cart Emails",
        "SEO",
        "Lead Capture",
        "Instagram feed",
        "Advanced eCommerce Insights",
        "Chat & Email Support",
        "Phone Support",
        "Priority Support",
        "Custom description",
        "Price markup rules",
        "24/7 Customer Support",
        "Product customisation",
        "Winning products suggestions",
        "One click product addition",
        "5 lakh plus products",
        "Private label",
        "Artisans and crafter products available"
      ]
    },
    {
      product: "Bespokify",
      features: [
        "Import unlimited products from our supported website",
        "Semi-automatic order fulfillment with Aliexpress, Amazon and Dhgate",
        "Import product videos",
        "Custom description",
        "Price markup rules",
        "24/7 Customer Support",
        "Product customisation",
        "Winning products suggestions",
        "One click product addition",
        "5 lakh plus products",
        "Private label",
        "Artisans and crafter products available"
      ]
    },
    {
      product: "Webify",
      features: [
        "Free SSL",
        "Connect custom domain",
        "Unlimited Storage",
        "Password Protection",
        "Shopping Cart",
        "Unlimited Items",
        "Item Badges",
        "Inventory Management",
        "Automatic Tax Calculator",
        "Coupons",
        "Shipping Calculator",
        "Accept payments through PayPal",
        "Item Reviews",
        "Shipping Labels",
        "Abandoned Cart Emails",
        "SEO",
        "Lead Capture",
        "Instagram feed",
        "Advanced eCommerce Insights",
        "Chat & Email Support",
        "Phone Support",
        "Priority Support"
      ]
    },
    {
      product: "Suppokify",
      features: [
        "Lakh of resellers around globe",
        "Low commission",
        "Wide market reach",
        "Advanced analytics",
        "Logistics and fulfillment",
        "Marketing and advertising",
        "Trust and credibility",
        "Global expansion",
        "Customer service 24*7",
        "Scalability"
      ]
    }
  ];

  return (
    <section className="py-2 bg-gray-100">
      <div className="container mx-auto px-24">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Products Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white">
            <thead>
              <tr>
                {features.map(({ product }, index) => (
                  <th key={product} className={`bg-[#3281bd] text-white p-3 text-center  ${index !== 0 ? 'border-l border-white' : ''}`}>
                    {product}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(...features.map(f => f.features.length)) }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {features.map(({ product, features }, columnIndex) => (
                    <td 
                      key={`${product}-${rowIndex}`} 
                      className={`p-1 bg-[#e6f3ff] ${columnIndex !== 0 ? 'border-l border-black' : ''}`}
                    >
                      <div className="h-full w-full flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">
                        {features[rowIndex] || ''}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;