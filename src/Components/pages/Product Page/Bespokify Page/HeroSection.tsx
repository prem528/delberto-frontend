import React from 'react'
import { ArrowRight } from 'lucide-react';
import web2 from '../../../../assets/img/web2.png'

const HeroSection: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-1 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-10 sm:pb-10 md:pb-12 lg:pb-16 bg-[#5ca7e1]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center -mx-2">
          <div className="w-full lg:w-1/2 px-2 mb-6 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-white text-center lg:text-left">
            Kickstart Your Dropshipping Business with Delberto
            </h1>
            <p className="text-lg sm:text-lg md:text-xl mb-6 text-white text-center lg:text-left">
            Sell on Multiple E-Commerce Platforms Today with Zero Inventory and No Upfront Costs.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#about" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
                Begin Now <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-2 mt-6 lg:mt-0 ml-0 lg:ml-20">  
            <img src={web2} alt="Hero" className="w-full h-auto rounded-lg mb-4 animate-[float_4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
