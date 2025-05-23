
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, Award, ThumbsUp } from 'lucide-react';

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
      icon: <CheckCircle className="h-10 w-10 text-renova-blue" />,
      title: "Qualidade Garantida",
      description: "Trabalhamos com os melhores produtos, máquinas e técnicas, garantindo resultados excepcionais."
    },
    {
      icon: <Award className="h-10 w-10 text-renova-blue" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência na região nos tornam líderes no segmento, com clientes satisfeitos."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-renova-blue" />,
      title: "Equipe Especializada",
      description: "Nossos colaboradores são treinados para oferecer um serviço seguro e de alta qualidade."
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
            Nossa empresa é focada em trazer ao seu lar saúde, tranquilidade, segurança, conforto, bem-estar e aconchego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p 
              className="text-renova-dark-gray opacity-0" 
              ref={el => elementsRef.current[2] = el}
            >
              Com anos de experiência na região, nossa empresa trabalha com a melhor qualidade, tanto em produtos, máquinas e técnicas que nos faz ser líder por anos no segmento na região.
            </p>
            <p 
              className="text-renova-dark-gray opacity-0" 
              ref={el => elementsRef.current[3] = el}
            >
              Colaboradores treinados para levar ao seu lar a tranquilidade para deixar seus estofados em boas mãos e com segurança.
            </p>
            <p 
              className="text-renova-dark-gray opacity-0" 
              ref={el => elementsRef.current[4] = el}
            >
              Na <span className="font-semibold text-renova-blue">Renova</span>, entendemos que seus estofados são mais do que apenas móveis - são parte do seu lar, onde você e sua família passam momentos importantes. É por isso que nos dedicamos a oferecer serviços de higienização e impermeabilização com o mais alto padrão de qualidade.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-renova-light-gray/50 p-6 rounded-lg flex items-start space-x-4 opacity-0"
                ref={el => elementsRef.current[5 + index] = el}
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-renova-blue text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-renova-dark-gray">
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
