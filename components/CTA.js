import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
            <p className="text-blue-100 max-w-xl">
              Join thousands of satisfied clients who have successfully registered their businesses with RegisterKaro. Our experts are ready to guide you through every step.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-800 hover:bg-blue-50 rounded-full py-3 px-8 font-medium transition flex items-center justify-center">
              Get Started Now <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="bg-transparent hover:bg-blue-800 border border-white text-white rounded-full py-3 px-8 font-medium transition">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
