// components/ProcessFlow.js
import { useState, useEffect } from 'react';

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: 'Submit Requirements',
      description: 'Share your business details and requirements with our team',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Document Verification',
      description: 'Our experts verify all documents ensuring compliance',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Application Filing',
      description: 'We prepare and file all necessary applications with authorities',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      title: 'Track Progress',
      description: 'Monitor your application status in real-time through our portal',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Receive Approval',
      description: 'Get your certificates and documents delivered digitally',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  //  demo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600">
            Our streamlined process makes business registration simple and hassle-free
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200">
            <div 
              className="h-full bg-blue-700 transition-all duration-500" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center ${
                  index <= activeStep ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {/* Step Circle */}
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-blue-700 text-white scale-110 shadow-lg' 
                      : index < activeStep 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-gray-500 border-2 border-gray-200'
                  }`}
                >
                  {index < activeStep ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.icon
                  )}
                </div>
                
                {/* Step Content */}
                <div className={`mt-6 text-center transition-all duration-300 ${
                  index === activeStep ? 'scale-105' : 'scale-100'
                }`}>
                  <h3 className={`font-semibold mb-2 ${
                    index <= activeStep ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
