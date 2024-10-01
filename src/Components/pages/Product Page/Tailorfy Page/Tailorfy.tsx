import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Advantages from './Advantages'
import Features from './Features'
import Steps from './Steps'
import Portfolio from './Portfolio'
import CallToAction from '../../../CallToAction'

const Tailorfy: React.FC  = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className=" ">
            <HeroSection />
            <AboutSection/>
            <Advantages />
            <Features />
            <Steps />
            <Portfolio />
            <CallToAction/>
        </main>
    </div>
  )
}

export default Tailorfy
