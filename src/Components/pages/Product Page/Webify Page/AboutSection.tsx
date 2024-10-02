import React from 'react'
import digital from '../../../../assets/img/web.png'

const AboutSection: React.FC = () => {
  return (
    <section  className="bg-gray-100 py-10">
    <div className="container mx-auto px-4 md:px-24"> {/* Changed px-28 to px-4 for smaller screens */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-0 md:mb-10 md:pr-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-900"> {/* Adjusted text size for smaller screens */}
          Launch Your Online Store with Delberto
          </h2>
           
          <p className="font-medium mb-10 text-sm md:text-lg"> {/* Adjusted text size for smaller screens */}
          Whether you're a product owner or a first-time entrepreneur, Delberto makes it easy to bring your business online. Our user-friendly eCommerce builder lets small businesses set up their online store in just 30 seconds.
           Start now and elevate your business with Delberto!
          </p>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full inline-flex items-center md:px-6 md:py-3"> {/* Adjusted padding for smaller screens */}
            Take my business online Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h- w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="md:w-2/5">
          <img src={digital} alt="About Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
