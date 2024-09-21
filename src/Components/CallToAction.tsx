import React from 'react';
import { ArrowRight } from 'lucide-react';
import journy from '../assets/img/journy.png'

const CallToAction: React.FC = () => {
  return (
    <section className="py-1 px-24 bg-white text-white">
      <div className="container mx-auto px-24 py-8 rounded-3xl bg-[#232038]">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-5xl font-bold mb-4">
              Start your journey
              <br />
              with us now
            </h2>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Contact us <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="w-full lg:w-1/3">
            <img src={journy} alt="Start your journey" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;