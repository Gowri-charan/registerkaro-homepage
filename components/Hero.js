// components/Hero.js
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Start Your Business <span className="text-blue-700">Journey</span> With Confidence
            </h1>
            <p className="mt-6 text-lg text-gray-600 md:pr-12">
              Your trusted partner for business registration, compliance, and legal solutions in India with expert guidance at every step.
            </p>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-2" />
                <span className="text-gray-700">10,000+ successful registrations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-2" />
                <span className="text-gray-700">End-to-end business solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-2" />
                <span className="text-gray-700">Expert legal advisors</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full py-3 px-8 transition font-medium flex items-center justify-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 rounded-full py-3 px-8 transition font-medium">
                Explore Services
              </button>
            </div>
          </div>
          
          <div className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Business Registration</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="mt-2 text-gray-600 font-medium ">Company Registration</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-gray-600 font-medium">Trademark</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-gray-600 font-medium">GST Registration</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-gray-600 font-medium">MSME Registration</p>
                  </div>
                </div>
                
                <a href="#" className="text-blue-700 font-bold flex items-center hover:text-blue-800 transition">
                  View All Services <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-12 left-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}