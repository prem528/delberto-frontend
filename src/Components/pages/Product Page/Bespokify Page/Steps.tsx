import React from 'react'
import earning from '../../../../assets/img/start-earnig.png'
import profit from '../../../../assets/img/profit.png'
import light from '../../../../assets/img/light.png'
import line from '../../../../assets/img/line.png'
import product from '../../../../assets/img/choose-product.png'

const Steps: React.FC = () => {
  const steps = [
    { title: "Sign Up ", description: "Finish the registration process.", image: light },
    { title: "Plug-ins Integration", description: "Seamlessly connect your store with Amazon, Shopify, and other platforms.", image: product },
    { title: "Choose Your Products", description: "Select from a wide range of high-demand products.", image: profit },
    { title: "Sell", description: "Start earning money", image: earning },
  ]

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 md:px-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Simple Steps to Start Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-500 hover:bg-blue-100 hover:scale-105 sm:hover:scale-110">
              <img src={step.image} alt={step.title} className="w-20 h-40 object-contain mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </div>
          ))}
        </div>
        <div className=" text-center">
          <img src={line} alt="Process Line" className="mx-auto w-full  max-w-4xl" />
        </div>
      </div>
    </section>
  )
}

export default Steps