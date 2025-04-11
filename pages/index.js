
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProcessFlow from '../components/ProcessFlow';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>RegisterKaro - Business Registration & Compliance Services in India</title>
        <meta name="description" content="RegisterKaro provides comprehensive business registration, compliance and legal services for startups and businesses in India." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
      <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <Services />
        <ProcessFlow />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
