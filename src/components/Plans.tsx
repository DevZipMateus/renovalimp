
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';

const Plans = () => {
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

  const plans = [
    {
      name: "Essencial",
      price: "A partir de R$ 499/mês",
      description: "Ideal para MEIs e pequenos empreendedores que estão iniciando.",
      features: [
        "Contabilidade básica",
        "Apuração de impostos",
        "Folha de pagamento (até 5 funcionários)",
        "Emissão de guias fiscais",
        "Suporte por e-mail"
      ],
      isPopular: false,
      ctaText: "Escolher Plano"
    },
    {
      name: "Business",
      price: "A partir de R$ 899/mês",
      description: "Perfeito para empresas em crescimento com necessidades específicas.",
      features: [
        "Tudo do plano Essencial",
        "Consultoria fiscal mensal",
        "Folha de pagamento (até 15 funcionários)",
        "Relatórios gerenciais básicos",
        "Suporte por e-mail e telefone"
      ],
      isPopular: true,
      ctaText: "Escolher Plano"
    },
    {
      name: "Enterprise",
      price: "A partir de R$ 1.499/mês",
      description: "Solução completa para empresas consolidadas com demandas complexas.",
      features: [
        "Tudo do plano Business",
        "Consultoria fiscal e tributária avançada",
        "Folha de pagamento sem limite de funcionários",
        "Relatórios gerenciais personalizados",
        "Suporte prioritário e consultor dedicado"
      ],
      isPopular: false,
      ctaText: "Escolher Plano"
    }
  ];

  return (
    <section 
      id="plans" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Planos e Preços
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Escolha o plano que melhor atende às necessidades da sua empresa e comece a transformar sua contabilidade hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[2 + index] = el}
              className={cn(
                "rounded-lg p-8 opacity-0 relative shadow-sm hover:shadow-md transition-all duration-300",
                plan.isPopular ? "border-2 border-accounting-blue" : "border border-accounting-lightgray/80 bg-white"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accounting-blue text-white text-sm font-medium py-1 px-4 rounded-full">
                  Mais Popular
                </div>
              )}

              <h3 className="text-accounting-navy font-display font-bold text-2xl mb-2">
                {plan.name}
              </h3>
              
              <p className="text-accounting-gray text-sm mb-4">
                {plan.description}
              </p>
              
              <div className="text-accounting-navy font-display font-bold text-3xl mb-6">
                {plan.price}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-accounting-gold flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-accounting-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={cn(
                  "block text-center py-3 px-6 rounded-md font-medium transition-colors duration-300 w-full",
                  plan.isPopular 
                    ? "bg-accounting-navy hover:bg-accounting-blue text-white" 
                    : "bg-white hover:bg-accounting-lightgray text-accounting-navy border border-accounting-navy/20"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
