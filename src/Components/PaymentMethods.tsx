import React from 'react';
import pay1 from '../assets/img/pay1.svg';
import pay2 from '../assets/img/pay2.svg';

const PaymentMethods: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-24  ">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">So Many Ways To Pay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="overflow-hidden">
            <img 
              src={pay1} 
              alt="Payment methods" 
              className="w-full h-auto mb-6 transition-transform duration-300 ease-in-out hover:scale-90" 
            />
            <h3 className="text-2xl font-bold mb-4">So many ways to pay</h3>
            <p className="text-black text-lg">
              Accept Square Pay, Apple Pay, Cash App Pay, and Google Pay for faster checkout.
            </p>
          </div>
          <div className="overflow-hidden">
            <img 
              src={pay2} 
              alt="Afterpay" 
              className="w-full h-auto mb-6 transition-transform duration-300 ease-in-out hover:scale-90" 
            />
            <h3 className="text-2xl font-bold mb-4">Offer buy now, pay later with Afterpay</h3>
            <p className="text-black text-lg">
              Square Online comes with Afterpay built in. Let your customers pay in four
              interest-free installments, while you get paid in full right away. Learn more about Afterpay →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;