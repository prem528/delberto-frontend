import React from 'react'

const Advantages:React.FC = () => {
    const advantages = [
        { title: "Quick Website Setup", description: "Launch your site in just 60 seconds with our user-friendly SaaS platform" },
        { title: "Variety of Themes", description: "Choose from numerous themes to create an online store that fits your style" },
        { title: "Extensive Product Range", description: "Access a vast selection of products with no need for negotiation" },
        { title: "Automated Pricing", description: "Set default markups and pricing effortlessly for your products" },
        { title: "Local Pickup Options", description: "Facilitate local pickups with orders shipped directly from our suppliers" },
        { title: "Discreet Shipping with Custom Invoices", description: "Products arrive under your brand, while we remain behind the scenes" },
        { title: "Custom Branding", description: "Personalize your products with your brand name and logo on tags and labels" },
        { title: "Tailored Packaging", description: "Enhance the customer experience with custom pouches and poly mailers" },
      ]
  return (
    <section className="bg-blue-600 py-20 text-white">
    <div className="container mx-auto px-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Advantages of Partnering with Tailorfy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-blue-700 p-6 rounded-lg border-2 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 sm:hover:scale-110 ">
            <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Advantages
