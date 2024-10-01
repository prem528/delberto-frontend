import React from 'react'
import web3 from '../../../../assets/img/web3.png'
import sku from '../../../../assets/img/sku.webp'
import logistic from '../../../../assets/img/logistic.jpg'

const Features: React.FC = () => {
  const features = [
    { title: "No Minimum Order Quantity (MOQ)", description: "Buy only the quantities you need, with no requirement for bulk orders." },
    { title: "Seamless Product Integration", description: "Easily integrate with available APIs." },
    { title: "Private Labelling", description: "Tailor and personalize products to match your brand." },
    { title: "QUnlimited SKUs", description: "Access a vast range of products." },
    { title: "Logistics Support", description: "Choose from multiple logistics companies for your shipping needs." },
  ]

  const images = [web3, sku, logistic]

  return (
    <section className="py-20">
      <div className="container mx-auto px-10 md:px-32">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Why Choose Bespokify ?</h2>
        <p className="text-center mb-16 font-medium text-lg max-w-3xl mx-auto">
          Order only what you need without bulk requirements, seamlessly integrate products with available APIs, personalize and brand items, access a
          diverse range of products, and select from multiple logistics partners to handle your shipping needs efficiently.
        </p>
        <div className="space-y-16 md:space-y-24">
          {[0, 1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row items-start">
              <div className={`w-full md:w-2/3 mb-8 md:mb-0 ${groupIndex % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={images[groupIndex]} alt={`Feature ${groupIndex + 1}`} className="w-full h-auto rounded-lg  " />
              </div>
              <div className={`w-full md:w-2/3 ${groupIndex % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="space-y-8">
                  {features.slice(groupIndex * 2, groupIndex * 2 + 2).map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg  ">
                      <h4 className="text-2xl font-bold mb-2 text-blue-900">{feature.title}</h4>
                      <p className="text-gray-600 text-lg">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features