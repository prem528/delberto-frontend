import React from 'react'
import HeroSection from '../Bespokify Page/HeroSection'
import AboutSection from '../Bespokify Page/AboutSection'
import Advantages from '../Bespokify Page/Advantages'
import Features from '../Bespokify Page/Features'
import Steps from '../Bespokify Page/Steps'
import CallToAction from '../../../CallToAction'
import Connection from './Connection'
 

const Bespokify:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <main className=" ">
            <HeroSection />
            <AboutSection/>
            <Advantages />
            <Features />
            <Steps />
            <Connection/>
            
            <CallToAction/>
        </main>
    </div>
  )
}

export default Bespokify
