import React from 'react'

const Supplier:React.FC = () => {
    const advantages = [
        { title: "Product Quality", description: "Your products must be ready for market with high-quality photography and detailed descriptions." },
        { title: "Distribution Capabilities", description: "You must either manufacture your products or maintain inventory in your own warehouses. Resellers without their own inventory are not eligible." },
        { title: "Shipping Fees", description: " You must offer the same shipping fees as you do for your other retail customers." },
      ]
  return (
    <section className="bg-[#146eb4] py-10 text-white">
    <div className="container mx-auto px-12 lg:px-24">
      <h2 className="text-4xl font-bold mb-4  text-center"> How to Become Supplier on Delberto </h2>
      <p className="text-lg sm:text-lg md:text-lg mb-2 text-white text-justify  lg:text-left">
       Joining Suppokify as a supplier allows you to connect with thousands of aspiring entrepreneurs eager to expand their businesses with new products. By partnering with Suppokify, you can contribute to the growth of both your business and theirs.
       To qualify as a supplier, you must meet the following requirements
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {advantages.map((advantage, index) => (
          <div key={index} className="bg-[#146eb4]  p-6 rounded-lg border-2  transition-all duration-500  hover:scale-105 sm:hover:scale-105 ">
            <h4 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">{advantage.title}</h4>
            <p className='text-center text-white font-medium'>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Supplier;
