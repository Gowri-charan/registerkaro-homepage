// components/Footer.js
import { PhoneCall, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">RegisterKaro</h3>
              <p className="mt-3 text-gray-400 max-w-md">
                Your trusted partner for business registration, compliance, and legal solutions across India.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <PhoneCall size={18} className="text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Toll Free</p>
                  <p className="font-medium">1800-889-0792</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={18} className="text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <p className="font-medium">info@registerkaro.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Head Office</p>
                  <p className="font-medium">Bengaluru, Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={18} className="text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Working Hours</p>
                  <p className="font-medium">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Company Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Trademark Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">GST Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">MSME Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Compliance Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Legal Documentation</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on business registration and compliance.
            </p>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 text-white py-3 pl-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-600 p-2 rounded-full">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RegisterKaro. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}