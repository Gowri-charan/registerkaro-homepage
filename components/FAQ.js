import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqs = [
    {
      question: 'What is the process for company registration in India?',
      answer: 'The company registration process involves applying for a Digital Signature Certificate (DSC), obtaining Director Identification Number (DIN), reserving your company name, filing incorporation documents with MCA, and receiving the Certificate of Incorporation. Our experts handle all these steps for you efficiently.'
    },
    {
      question: 'How long does it take to register a Private Limited Company?',
      answer: 'Typically, the entire process of registering a Private Limited Company takes 10-15 working days, provided all your documents are in order. With RegisterKaro\'s expedited service, we can sometimes complete the process in as little as 7-10 working days.'
    },
    {
      question: 'What documents are required for GST registration?',
      answer: 'For GST registration, you need PAN of the business, Aadhaar of promoters/directors, address proof of the business place, bank account details, digital photograph of promoters/directors, and business constitution documents. Our team will guide you through collecting all required documents.'
    },
    {
      question: 'Can a foreign national register a company in India?',
      answer: 'Yes, foreign nationals can register a company in India. They can either set up a wholly-owned subsidiary or enter into a joint venture with an Indian partner. The process requires additional documentation and compliance requirements which our team is well-versed in handling.'
    },
    {
      question: 'What is the difference between Trademark and Copyright registration?',
      answer: 'Trademark registration protects brand identifiers like names, logos, and slogans that distinguish your goods/services from others. Copyright registration protects original creative works like literary, artistic, musical works, software code, etc. Both offer different types of intellectual property protection.'
    },
    {
      question: 'Do I need to be physically present for the registration process?',
      answer: 'No, our services are designed to be completely online. You can submit all required documents digitally, and our team handles the entire process. You only need to digitally sign documents using your DSC where required.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services and business registration processes
          </p>
          
          {/* Search */}
          <div className="mt-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for questions..."
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-md"
                >
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    <span>
                      {activeIndex === index ? (
                        <ChevronUp size={20} className="text-blue-700" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </span>
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No results found for &quot;<span className="font-medium">{searchQuery}</span>&quot;</p>
              <button 
                className="mt-4 text-blue-700 hover:text-blue-800"
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Still have questions? We&apos;re here to help.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center mt-4 text-blue-700 font-medium hover:text-blue-800"
          >
            Get in touch with our support team
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
