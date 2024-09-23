import React from 'react';
import { ArrowRight } from 'lucide-react';
import journy from '../assets/img/journy.png'

const CallToAction: React.FC = () => {
  return (
    <section className="py-4 px-4 sm:px-6 md:px-8 lg:px-24 bg-white text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 py-8 rounded-3xl bg-[#232038]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start your journey
              <br />
              with us now
            </h2>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Contact us <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="w-full lg:w-1/3">
            <img src={journy} alt="Start your journey" className="w-full h-auto max-w-xs mx-auto lg:max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;