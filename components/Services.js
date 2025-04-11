import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('startups');
  
  const services = {
    startups: [
      {
        title: 'Private Limited Company',
        icon: '📑',
        description: 'Best suited for startups looking to raise investments and scale operations.',
        price: '₹9,999',
        popular: true
      },
      {
        title: 'Limited Liability Partnership',
        icon: '🤝',
        description: 'Combines the benefits of a partnership with limited liability protection.',
        price: '₹8,499',
        popular: false
      },
      {
        title: 'One Person Company',
        icon: '👤',
        description: 'Perfect for solo entrepreneurs who want limited liability protection.',
        price: '₹7,999',
        popular: false
      },
      {
        title: 'Trademark Registration',
        icon: '™️',
        description: 'Protect your brand name, logo, and intellectual property.',
        price: '₹6,999',
        popular: false
      }
    ],
    businesses: [
      {
        title: 'GST Registration',
        icon: '🧾',
        description: 'Mandatory for businesses with turnover exceeding ₹40 lakhs.',
        price: '₹2,999',
        popular: true
      },
      {
        title: 'MSME Registration',
        icon: '🏭',
        description: 'Get priority sector lending and other government benefits.',
        price: '₹1,999',
        popular: false
      },
      {
        title: 'Digital Signature Certificate',
        icon: '✍️',
        description: 'Essential for online filing of documents with government agencies.',
        price: '₹1,499',
        popular: false
      },
      {
        title: 'Annual Compliance',
        icon: '📊',
        description: 'Stay compliant with all statutory requirements and filings.',
        price: '₹4,999/year',
        popular: false
      }
    ],
    individuals: [
      {
        title: 'Income Tax Filing',
        icon: '💰',
        description: 'Professional assistance for filing your income tax returns.',
        price: '₹999',
        popular: true
      },
      {
        title: 'Legal Documentation',
        icon: '📝',
        description: 'Drafting and review of legal documents and agreements.',
        price: '₹3,499',
        popular: false
      },
      {
        title: 'Trademark for Individuals',
        icon: '™️',
        description: 'Protect your personal brand and creative work.',
        price: '₹5,999',
        popular: false
      },
      {
        title: 'Copyright Registration',
        icon: '©️',
        description: 'Secure your original creative works, including literary and artistic works.',
        price: '₹4,499',
        popular: false
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600">
            From startup registration to compliance management, we offer end-to-end business solutions tailored to your needs.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button 
              onClick={() => setActiveTab('startups')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === 'startups' 
                  ? 'bg-blue-700 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              For Startups
            </button>
            <button 
              onClick={() => setActiveTab('businesses')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === 'businesses' 
                  ? 'bg-blue-700 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              For Businesses
            </button>
            <button 
              onClick={() => setActiveTab('individuals')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === 'individuals' 
                  ? 'bg-blue-700 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              For Individuals
            </button>
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services[activeTab].map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition group relative ${
                service.popular ? 'border-t-4 border-blue-700' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-gray-500 text-sm">Starting from</span>
                  <p className="text-blue-700 font-bold text-xl">{service.price}</p>
                </div>
                <a 
                  href="#" 
                  className="text-blue-700 font-medium inline-flex items-center group-hover:underline"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 transition transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-3 font-medium transition">
            View All Services
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
