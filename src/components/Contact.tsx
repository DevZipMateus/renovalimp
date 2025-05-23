
import React, { useEffect, useRef } from 'react';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              elementsRef.current.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-slide-up');
                  }, index * 100);
                }
              });
            }
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-renova-light-gray/50"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Entre em Contato
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Estamos disponíveis para atendê-lo através dos nossos canais de comunicação direta. 
            Entre em contato conosco hoje mesmo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactInfo setRef={el => elementsRef.current[2] = el} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
