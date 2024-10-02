import React from 'react'

const Advantages:React.FC = () => {
    const advantages = [
        { title: "Browser Products", description: "Explore a wide selection of SKUs and make your purchase." },
        { title: "Fulfillment", description: "Orders are sent directly to your suppliers" },
        { title: "Shipping", description: "The supplier ships the order directly to your customer." },
        { title: "Profit", description: "ProfitYou earn profit from the difference in prices." },
  
      ]
  return (
    <section className="bg-[#3f90cf] py-10 text-white">
    <div className="container mx-auto px-24">
      <h2 className="text-5xl font-bold mb-10 text-center">What is Bespokify ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg border-2 hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 sm:hover:scale-105 ">
            <h4 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">{advantage.title}</h4>
            <p className='text-center font-medium'>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Advantages
