import React from 'react'
import abouttail from '../../../../assets/img/about-tail.png'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-6">
    <div className="container mx-auto px-28">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Start Your Business with Delberto</h2>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">No Upfront Investment Needed</h3>
          <p className="font-medium mb-6">
            Want to start a business with minimal initial investment? Delberto helps you begin without upfront inventory costs. We handle product delivery, cover costs, and disburse profits directly to your account. Launch your business effortlessly in just 15 minutes with Delberto!
          </p>
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center">
            Take my business online Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="md:w-2/5">
          <img src={abouttail} alt="About Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection
