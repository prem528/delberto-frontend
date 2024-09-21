import React from 'react';
import { ArrowRight } from 'lucide-react';
import carousel from '../assets/img/carousel.png';

const Hero: React.FC = () => {
  return (
    <section className="mt-8 pt-12 pb-0 bg-[#5ca7e1]"> {/* Further reduced bottom padding */}
      <div className="container mx-auto px-24"> {/* Further reduced horizontal padding */}
        <div className="flex flex-wrap items-center -mx-1"> {/* Adjusted negative margin */}
          <div className="w-full lg:w-1/2 px-1 mb-6 lg:mb-0"> {/* Further reduced horizontal padding and bottom margin */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Empowering Dreams, Facilitating Entrepreneurs</h1>
            <p className="text-xl mb-6 text-white">
              Join thousands who've turned dreams into reality with Delberto.
              Start today and watch your business grow!
            </p>
            <a href="#about" className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
              Begin Now <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-1 "> {/* Further reduced horizontal padding */}
            <img src={carousel} alt="Hero" className="w-full h-auto rounded-lg mb-4 animate-[float_4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;