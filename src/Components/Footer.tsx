import React from 'react';
import logo from '../assets/img/logo.png';
import { Mail, Phone } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-white text-black py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-6 space-y-3 sm:space-y-4">
              <img src={logo} alt="Delberto Logo" className="h-12 sm:h-16 mb-2 sm:mb-4" />
              <p className="mb-2 sm:mb-4 text-black text-sm sm:text-base font-medium">Build, Launch, Grow with Delberto</p>
              <p className="whitespace-nowrap text-sm sm:text-base font-medium"><strong>Hours:</strong> Mon-Fri 8:30am-4:45pm IST</p>
              <div className="mt-2 sm:mt-4">
                <p className="flex items-center font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  <Phone className="mr-2" size={16} />
                  <span>+91 8368014479</span>
                </p>
                <p className="flex items-center font-semibold text-sm sm:text-base">
                  <Mail className="mr-2" size={16} />
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold mb-4 text-blue-900">Shop</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About us</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of service</a></li>
              </ul>
            </div>
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold mb-4 text-blue-900">Products</h4>
              <ul className="space-y-4">
                <li><a href="/tailorfy" className="hover:text-gray-300">Tailorfy</a></li>
                <li><a href="/bespokify" className="hover:text-gray-300">Bespokify</a></li>
                <li><a href="/webify" className="hover:text-gray-300">Webify</a></li>
                <li><a href="/suppokify" className="hover:text-gray-300">Suppokify</a></li>
              </ul>
            </div>
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold mb-4 text-blue-900">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-gray-700 bg-[#146eb4] text-center w-full">
        <p className="py-4 text-white">&copy; {new Date().getFullYear()} Delberto. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;