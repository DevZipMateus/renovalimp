import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { FileText, BarChart4, Calculator, ShieldCheck, Receipt, FileSearch } from 'lucide-react';
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
    icon: <FileText className="h-8 w-8" />,
    title: "Contabilidade Empresarial",
    description: "Escrituração contábil completa, elaboração de demonstrações financeiras e relatórios gerenciais personalizados."
  }, {
    icon: <BarChart4 className="h-8 w-8" />,
    title: "Consultoria Fiscal",
    description: "Planejamento tributário estratégico, recuperação de impostos e orientação sobre obrigações fiscais."
  }, {
    icon: <Calculator className="h-8 w-8" />,
    title: "Departamento Pessoal",
    description: "Administração completa da folha de pagamento, admissões, demissões e cumprimento das obrigações trabalhistas."
  }, {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Auditoria e Compliance",
    description: "Verificação da conformidade com normas contábeis e fiscais, identificação de riscos e oportunidades."
  }, {
    icon: <Receipt className="h-8 w-8" />,
    title: "Gestão Financeira",
    description: "Controle de fluxo de caixa, projeções financeiras e análise de indicadores para tomada de decisão."
  }, {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Legalização de Empresas",
    description: "Abertura, alteração e encerramento de empresas, com assessoria em todas as etapas do processo."
  }];
  return <section id="services" ref={sectionRef} className="bg-accounting-lightgray/30 py-0">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossos Serviços
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Oferecemos soluções contábeis completas e personalizadas para apoiar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] opacity-0" ref={el => elementsRef.current[2 + index] = el}>
              <div className="w-14 h-14 bg-accounting-navy/5 rounded-full flex items-center justify-center mb-5 text-accounting-blue">
                {service.icon}
              </div>
              <h3 className="text-accounting-navy font-display font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-accounting-gray">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;