import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
 
import Features from './Features'
import Steps from './Steps'
import CallToAction from '../../../CallToAction'
import PluginsSection from './PluginsSection'
 

const Bespokify:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className=" ">
            <HeroSection />
            <AboutSection/>
            <Features />
            <Steps />
             <PluginsSection/>
            
            <CallToAction/>
        </main>
    </div>
  )
}

export default Bespokify
