import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header'
import AboutPage from './Components/pages/About Pages/AboutPage';
import Contact from './Components/pages/Contact Page/Contact';
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
import Testimonial from './Components/pages/Testimonial Page/Testimonial';
import Tailorfy from './Components/pages/Product Page/Tailorfy Page/Tailorfy';
import Bespokify from './Components/pages/Product Page/Bespokify Page/Bespokify';
import Webify from './Components/pages/Product Page/Webify Page/Webify';
import Suppokify from './Components/pages/Product Page/Suppokify Page/Suppokify';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop/>
        <Header />
        <main className="flex-grow pt-[70px] md:pt-[140px]">
          <Routes>
            <Route path="/" element={
              <>
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
              </>
            } />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tailorfy" element={<Tailorfy />} />
            <Route path="/bespokify" element={<Bespokify />} />
            <Route path="/webify" element={<Webify />} />
            <Route path="/suppokify" element={<Suppokify />} />

          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
