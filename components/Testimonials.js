import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'TechStart Solutions',
      role: 'Founder & CEO',
      image: '/api/placeholder/80/80',
      content: 'RegisterKaro made setting up our company incredibly simple. From private limited registration to trademark filing, they handled everything professionally and kept us informed at every step.',
      rating: 5
    },
    {
      name: 'Rohit Mehta',
      company: 'Organic Foods Pvt Ltd',
      role: 'Managing Director',
      image: '/api/placeholder/80/80',
      content: 'Their expertise in GST registration and compliance was invaluable for our business. The team was responsive and helped us navigate complex regulations with ease.',
      rating: 5
    },
    {
      name: 'Ananya Patel',
      company: 'Design Innovations',
      role: 'Creative Director',
      image: '/api/placeholder/80/80',
      content: 'I was impressed by RegisterKaro\'s trademark registration service. They secured our brand identity quickly and provided excellent guidance throughout the process.',
      rating: 4
    },
    {
      name: 'Vikram Singh',
      company: 'FinTech Ventures',
      role: 'Co-founder',
      image: '/api/placeholder/80/80',
      content: 'The ongoing compliance support from RegisterKaro has been exceptional. They ensure we never miss any filings and keep our business fully compliant.',
      rating: 5
    }
  ];


  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            We&apos;ve helped thousands of businesses across India succeed with our registration and compliance services
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <p className="text-gray-700 text-lg mb-8 italic">&quot;{testimonial.content}&quot;</p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      {/* <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={48}
                        height={48}
                        className="rounded-full object-cover mr-4"
                      /> */}
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>


              ))}            </div>          </div>                    {/*  Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} className="text-gray-600" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-700 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
