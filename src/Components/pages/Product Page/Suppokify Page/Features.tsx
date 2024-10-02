import React from 'react'
import chooseapp from '../../../../assets/img/choose_ap.png'
import app1 from '../../../../assets/img/app1.png'
 

const Features: React.FC = () => {
  const features = [
    { title: " Wide Reach", description: "Access Delberto’s extensive network of resellers and increase your product’s visibility." },
    { title: " Direct Resale", description: "Supply your products directly to Delberto for resale, simplifying the selling process." },
    { title: "Increased Sales Opportunities", description: "Tap into new sales channels and expand your business reach through Delberto’s network." },
    { title: "Simplified Logistics", description: "Utilize Delberto’s platform for efficient product management and distribution." },
  ]

  const images = [chooseapp, app1, ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-10 md:px-32">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Benefits of Being a Delberto Supplier</h2>
        <p className="text-left mb-16 font-medium text-lg   mx-auto">
        Gain broad exposure through Delberto’s extensive reseller network, streamline your sales by supplying directly for resale, 
        explore new growth opportunities, and benefit from efficient product management and distribution.
        </p>
        <div className="space-y-16 md:space-y-24">
          {[0, 1, ].map((groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row items-start">
              <div className={`w-full md:w-2/3 mb-8 md:mb-0 ${groupIndex % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={images[groupIndex]} alt={`Feature ${groupIndex + 1}`} className="w-full h-auto rounded-lg  " />
              </div>
              <div className={`w-full md:w-2/3 ${groupIndex % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="space-y-8">
                  {features.slice(groupIndex * 2, groupIndex * 2 + 2).map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg  ">
                      <h4 className="text-2xl font-bold mb-2 text-blue-900">{feature.title}</h4>
                      <p className="text-black text-lg">{feature.description}</p>
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