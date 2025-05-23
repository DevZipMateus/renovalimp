
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Sofa, Umbrella, Briefcase, Tablet, Car, Paintbrush, Droplets } from 'lucide-react';

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
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
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [{
    icon: <Sofa className="h-8 w-8" />,
    title: "Limpeza e Higienização de Estofados",
    description: "Remoção profunda de sujeiras, ácaros e bactérias dos seus sofás, poltronas e cadeiras, deixando-os como novos."
  }, {
    icon: <Umbrella className="h-8 w-8" />,
    title: "Impermeabilização de Estofados",
    description: "Proteção contra líquidos e manchas, prolongando a vida útil dos seus móveis estofados."
  }, {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Limpeza de Tapetes",
    description: "Higienização profunda que remove sujeiras, manchas e ácaros dos seus tapetes e carpetes."
  }, {
    icon: <Tablet className="h-8 w-8" />,
    title: "Limpeza de Persianas",
    description: "Remoção de poeira e sujeira acumulada nas suas persianas, melhorando a qualidade do ar em sua casa."
  }, {
    icon: <Car className="h-8 w-8" />,
    title: "Limpeza e Higienização Interna de Veículos",
    description: "Limpeza profissional dos bancos, carpetes e painéis do seu veículo, eliminando odores e bactérias."
  }, {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Limpeza de Vidros e Fachadas",
    description: "Serviços residenciais e comerciais para manter vidros e fachadas impecáveis e brilhantes."
  }, {
    icon: <Droplets className="h-8 w-8" />,
    title: "Polimento de Vidros e Box de Banheiro",
    description: "Descalcificação e polimento que deixa os vidros do seu banheiro transparentes como novos."
  }];

  return <section id="services" ref={sectionRef} className="bg-renova-light-gray/30 py-10">
      <div className="section-container py-10">
        <div className="text-center mb-8">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossos Serviços
          </h2>
          <p className="section-subtitle mb-6" ref={el => elementsRef.current[1] = el}>
            Oferecemos soluções completas de higienização e limpeza para seu lar e escritório.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] opacity-0" ref={el => elementsRef.current[2 + index] = el}>
              <div className="w-12 h-12 bg-renova-blue/5 rounded-full flex items-center justify-center mb-4 text-renova-blue">
                {service.icon}
              </div>
              <h3 className="text-renova-blue font-display font-semibold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-renova-dark-gray">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Services;
