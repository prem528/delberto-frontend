import React, { useState, useEffect } from 'react';
import { Mail, Phone, Search, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white  transition-all duration-300">
      <div
        className={`bg-[#4897d4] text-white transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <a href="mailto:support@delberto.ca" className="flex items-center">
              <Mail className="mr-2" size={16} />
              <span className="text-sm">support@delberto.ca</span>
            </a>
            <span className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span className="text-sm">+1123456789</span>
            </span>
          </div>
          <span className="text-sm text-center sm:text-left">
            <strong>Hours:</strong> Monday - Friday 8:30am - 4:45pm
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-24 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            aria-label="Toggle mobile menu"
            className="text-gray-600 mr-4 sm:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button aria-label="Search" className="text-gray-600">
            <Search size={24} />
          </button>
        </div>
        <div>
          <a href="/" className="flex items-center justify-center">
            <img src={logo} alt="Delberto Logo" className="h-10 sm:h-14" />
          </a>
        </div>
        <div>
          <button aria-label="Shopping Bag" className="text-gray-600">
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>

      <nav className={`container mx-auto px-4 py-4 ${isMobileMenuOpen ? 'block' : 'hidden sm:block'}`}>
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <li><Link to="/" className="font-sans text-lg text-gray-800 hover:text-blue-600 block">Home</Link></li>
          <li><Link to="/about" className="font-sans text-lg text-gray-800 hover:text-blue-600 block">About</Link></li>
          <li className="relative">
            <button 
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="font-sans text-lg text-gray-800 hover:text-blue-600 flex items-center justify-between w-full sm:w-auto"
              aria-expanded={isProductDropdownOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className="ml-1" size={16} />
            </button>
            {isProductDropdownOpen && (
              <ul className="mt-2 w-full sm:w-48 bg-white shadow-lg rounded-md py-2 sm:absolute sm:left-0">
                <li><a href="/tailorfy" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Tailorfy</a></li>
                <li><a href="/bespokify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Bespokify</a></li>
                <li><a href="/webify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Webify</a></li>
                <li><a href="/suppokify" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Suppokify</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/testimonial" className="font-sans text-lg text-gray-800 hover:text-blue-600 block">Testimonial</Link></li>
          <li><Link to="/contact" className="font-sans text-lg text-gray-800 hover:text-blue-600 block">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;