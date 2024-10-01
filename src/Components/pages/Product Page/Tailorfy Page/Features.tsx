import React from 'react'
import image from '../../../../assets/img/Image.png'
import tail from '../../../../assets/img/group.png'
import cartoon from '../../../../assets/img/cartoon.png'

const Features: React.FC = () => {
  const features = [
    { title: "Zero Upfront Costs", description: "Begin your business without the need for an initial investment in inventory." },
    { title: "Logistic Support", description: "We handle product delivery directly to your customers, ensuring a smooth and hassle-free process." },
    { title: "Direct Profit Transfer", description: "Your profit margin is transferred directly to your account, simplifying your financial management." },
    { title: "Quick and Easy Setup", description: "Launch your fully-fledged business in just 15 minutes with our user-friendly platform." },
    { title: "Risk-Free", description: "Minimize financial risk by eliminating the need to purchase inventory upfront." },
    { title: "Easy Return Policy", description: "Simple and convenient return options are available." },
  ]

  const images = [tail, image, cartoon]

  return (
    <section className="py-20">
      <div className="container mx-auto px-10 md:px-32">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Why Choose Tailorfy</h2>
        <p className="text-center mb-16 font-medium text-lg max-w-3xl mx-auto">
          Start your business with no upfront inventory costs. We manage product delivery, ensure direct profit transfers, and offer a quick setup in just 15 minutes. Operate with no financial risk and benefit from easy return options.
        </p>
        <div className="space-y-16 md:space-y-24">
          {[0, 1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row items-start">
              <div className={`w-full md:w-1/3 mb-8 md:mb-0 ${groupIndex % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={images[groupIndex]} alt={`Feature ${groupIndex + 1}`} className="w-full h-auto rounded-lg  " />
              </div>
              <div className={`w-full md:w-2/3 ${groupIndex % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="space-y-8">
                  {features.slice(groupIndex * 2, groupIndex * 2 + 2).map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg  ">
                      <h4 className="text-2xl font-semibold mb-2 text-blue-800">{feature.title}</h4>
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