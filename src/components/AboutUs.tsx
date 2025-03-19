
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { LineChart, BarChart, Trophy } from 'lucide-react';

const AboutUs = () => {
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

  const features = [
    {
      icon: <LineChart className="h-10 w-10 text-accounting-gold" />,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos de experiência atendendo empresas de diferentes portes e segmentos."
    },
    {
      icon: <BarChart className="h-10 w-10 text-accounting-gold" />,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para as necessidades específicas da sua empresa e do seu segmento."
    },
    {
      icon: <Trophy className="h-10 w-10 text-accounting-gold" />,
      title: "Equipe Qualificada",
      description: "Profissionais especializados e constantemente atualizados com as mudanças fiscais e tributárias."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Sobre Nós
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Somos um escritório de contabilidade comprometido com a excelência e a transparência nos serviços prestados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p 
              className="text-accounting-gray opacity-0" 
              ref={el => elementsRef.current[2] = el}
            >
              Fundada em 2008, a <span className="font-semibold text-accounting-navy">ContaPrecisão</span> nasceu com o propósito de transformar a relação entre empresas e a contabilidade, oferecendo um serviço que vai além dos números.
            </p>
            <p 
              className="text-accounting-gray opacity-0" 
              ref={el => elementsRef.current[3] = el}
            >
              Nossa missão é fornecer soluções contábeis claras e estratégicas, auxiliando nossos clientes a tomarem as melhores decisões para o crescimento sustentável de seus negócios.
            </p>
            <p 
              className="text-accounting-gray opacity-0" 
              ref={el => elementsRef.current[4] = el}
            >
              Trabalhamos com ética, precisão e um profundo compromisso com a satisfação dos nossos clientes, construindo relações de confiança duradouras.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-accounting-lightgray/50 p-6 rounded-lg flex items-start space-x-4 opacity-0"
                ref={el => elementsRef.current[5 + index] = el}
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-accounting-navy text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-accounting-gray">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
