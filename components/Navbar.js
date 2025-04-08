// components/Navbar.js
import { useState, useEffect } from 'react';
import { MenuIcon, XIcon, PhoneIcon, SearchIcon } from 'lucide-react';

import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-700 font-bold text-2xl">RegisterKaro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition">Home</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-700 font-medium transition flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">Business Registration</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">Trademark</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">GST/Tax Registration</a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition">About Us</a>
            <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition">Contact</a>
          </nav>

          {/* Contact and Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-blue-700">
              <PhoneIcon size={18} />
              <span className="ml-2 font-medium">1800-889-0792</span>
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-2 px-6 transition font-medium">
              Get Started
            </button>
            <button className="text-gray-600 hover:text-blue-700 transition">
              <SearchIcon size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <a href="#" className="block text-gray-700 font-medium">Home</a>
          <a href="#" className="block text-gray-700 font-medium">Services</a>
          <a href="#" className="block text-gray-700 font-medium">About Us</a>
          <a href="#" className="block text-gray-700 font-medium">Blog</a>
          <a href="#" className="block text-gray-700 font-medium">Contact</a>
          <div className="flex items-center text-blue-700 pt-2">
            <PhoneIcon size={18} />
            <span className="ml-2 font-medium">1800-889-0792</span>
          </div>
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-full py-2 px-6 transition font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}