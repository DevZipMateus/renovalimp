
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Ensure smooth scroll behavior works properly
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial scroll if URL has hash
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col antialiased overflow-x-hidden">
      <NavBar />
      <Hero />
      <div className="space-y-0">
        <AboutUs />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
