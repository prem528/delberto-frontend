import React from 'react'
import { ArrowRight } from 'lucide-react'
import web2 from '../../../../assets/img/webify2.png'

const HeroSection: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-1 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-10 sm:pb-10 md:pb-12 lg:pb-16 bg-[#5ca7e1]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center -mx-2">
          <div className="w-full lg:w-1/2 px-2 mb-6 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-white text-center lg:text-left">
              Resellers and simplify your product distribution.
            </h1>
            <p className="text-lg sm:text-lg md:text-xl mb-6 text-white text-center lg:text-left">
              At Delberto, we understand that every business is unique, and that's why we've crafted Tailorfy.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#about" 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Begin now and learn more about our services"
              >
                Begin Now <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/5 px-2 mt-6 lg:mt-10 lg:ml-40">  
            <img 
              src={web2} 
              alt="Illustration of online business transformation" 
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-full h-auto mx-auto lg:mx-0 rounded-lg mb-4 animate-[float_4s_ease-in-out_infinite]" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection