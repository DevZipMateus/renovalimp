import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Instagram } from 'lucide-react';
const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    elementsRef.current.forEach(el => {
      if (el) observerRef.current?.observe(el);
    });
    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach(el => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const openInstagram = () => {
    window.open('https://www.instagram.com/renovahigienizacao/', '_blank');
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-renova-light-gray/80 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto pt-16">
          <div ref={el => elementsRef.current[0] = el} className="mb-8 opacity-0 flex justify-center">
            <img alt="Renova - Higienização e Impermeabilização de Estofados" className="max-w-md md:max-w-lg lg:max-w-xl" src="/lovable-uploads/b1b2f04d-8d4f-4264-b060-dbbc8faaadb3.png" />
          </div>
          
          <h1 ref={el => elementsRef.current[1] = el} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-renova-blue leading-tight mb-6 opacity-0" style={{
          animationDelay: '200ms'
        }}>
            Higienização e Impermeabilização de Estofados
          </h1>
          
          <p ref={el => elementsRef.current[2] = el} className="text-renova-dark-gray text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0" style={{
          animationDelay: '400ms'
        }}>
            Amor em cada detalhe. RENOVA, cuidando de você e do seu lar!
          </p>
          
          <div ref={el => elementsRef.current[3] = el} className="flex flex-col sm:flex-row justify-center gap-4 mb-6 opacity-0" style={{
          animationDelay: '600ms'
        }}>
            <a href="#contact" className="bg-renova-blue hover:bg-renova-blue/80 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300" onClick={e => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Fale Conosco
            </a>
            <a href="#services" className="bg-white hover:bg-renova-light-gray text-renova-blue border border-renova-blue/20 px-6 py-3 rounded-md font-medium transition-colors duration-300" onClick={e => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Nossos Serviços
            </a>
          </div>

          <div ref={el => elementsRef.current[4] = el} className="opacity-0 flex justify-center" style={{
          animationDelay: '800ms'
        }}>
            <button onClick={openInstagram} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              <Instagram size={20} />
              Visite nosso Instagram
            </button>
          </div>
        </div>
      </div>
      
      <button onClick={scrollToAbout} className="absolute bottom-4 left-1/2 -translate-x-1/2 text-renova-gray hover:text-renova-blue transition-colors duration-300 animate-float" aria-label="Scroll down">
        <ArrowDown size={28} />
      </button>
    </section>;
};
export default Hero;