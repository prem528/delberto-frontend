import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import ProductsPricing from './Components/ProductsPricing'
import Stores from './Components/Stores'
import Features from './Components/Features'
import ProductFeatures from './Components/ProductFeatures'
import Testimonials from './Components/Testimonials'
import PaymentMethods from './Components/PaymentMethods'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[140px]">
      <Hero />
        <About />
        <Services />
        <ProductsPricing />
        <Stores />
        <Features />
        <ProductFeatures />
        <Testimonials />
        <PaymentMethods />
        <CallToAction />
      </main>
      <Footer/>
    </div>
  )
}

export default App
