import React from 'react'
import chooseapp from '../../../../assets/img/choose_ap.png'
import app1 from '../../../../assets/img/app1.png'
import app2 from '../../../../assets/img/app2.png'

const Features: React.FC = () => {
  const features = [
    { title: "Webpage Speed", description: "Quick and easy online stores. Set up your store and start selling in no time—see how fast it is!." },
    { title: "Multiple Warehouses", description: "Manage one store and ship products from various locations across Canada. Enjoy seamless fulfillment from multiple warehouses." },
    { title: "Simplified Checkout", description: "Create a hassle-free shopping experience with a checkout process designed to keep customers engaged and reduce cart abandonment." },
    { title: "Staff Accounts", description: "Invite employees, colleagues, and team members to assist in growing your business while managing their access levels" },
    { title: "Advanced Data Analysis", description: "Access all your sales, traffic, regional data, and product details with just one click." },
  ]

  const images = [chooseapp, app1, app2]

  return (
    <section className="py-20">
      <div className="container mx-auto px-10 md:px-32">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Why Choose Webify ?</h2>
        <p className="text-left mb-16 font-medium text-lg   mx-auto">
        Effortlessly launch your online store and start selling quickly. Manage shipments from multiple locations across Canada, ensuring seamless fulfillment.
         Streamline the checkout process to enhance the customer experience and reduce cart abandonment. Collaborate with your team by inviting members and managing their access levels.
          Access detailed sales, traffic, and regional data with ease, helping you make informed business decisions.
        </p>
        <div className="space-y-16 md:space-y-24">
          {[0, 1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row items-start">
              <div className={`w-full md:w-2/3 mb-8 md:mb-0 ${groupIndex % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={images[groupIndex]} alt={`Feature ${groupIndex + 1}`} className="w-full h-auto rounded-lg  " />
              </div>
              <div className={`w-full md:w-2/3 ${groupIndex % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="space-y-8">
                  {features.slice(groupIndex * 2, groupIndex * 2 + 2).map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg  ">
                      <h4 className="text-2xl font-bold mb-2 text-blue-900">{feature.title}</h4>
                      <p className="text-black text-lg">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features