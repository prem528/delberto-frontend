import React, { useState, useEffect } from 'react';
import { Mail, Phone, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div
        className={`bg-[#4897d4] text-white transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:support@delberto.ca" className="flex items-center">
              <Mail className="mr-2" size={16} />
              <span>support@delberto.ca</span>
            </a>
            <span className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span>+1123456789</span>
            </span>
          </div>
          <span className="hidden md:flex items-center">
            <strong>Hours:</strong> &nbsp; Monday - Friday 8:30am - 4:45pm
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        <div>
          <button aria-label="Search" className="text-gray-600">
            <Search size={24} />
          </button>
        </div>
        <div>
          <a href="/" className="flex items-center justify-center">
            <img src={logo} alt="Delberto Logo" className="h-14" />
          </a>
        </div>
        <div>
          <button aria-label="Shopping Bag" className="text-gray-600">
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="/" className="font-sans text-lg text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="/about" className="font-sans text-lg text-gray-800 hover:text-blue-600">About</a></li>
          <li className="relative">
            <button 
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="font-sans text-lg text-gray-800 hover:text-blue-600 flex items-center"
              aria-expanded={isProductDropdownOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className="ml-1" size={16} />
            </button>
            {isProductDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <li><a href="/tailorfy" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Tailorfy</a></li>
                <li><a href="/bespokify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Bespokify</a></li>
                <li><a href="/webify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Webify</a></li>
                <li><a href="/suppokify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Suppokify</a></li>
              </ul>
            )}
          </li>
          <li><a href="/testimonial" className="font-sans text-lg text-gray-800 hover:text-blue-600">Testimonial</a></li>
          <li><a href="/contact" className="font-sans text-lg text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;