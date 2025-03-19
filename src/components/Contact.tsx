
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      details: "+55 (11) 3456-7890",
      href: "tel:+551134567890"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "contato@contaprecisao.com.br",
      href: "mailto:contato@contaprecisao.com.br"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      details: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-accounting-lightgray/30"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Entre em Contato
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Estamos prontos para ajudar a transformar a contabilidade da sua empresa. Fale conosco agora mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div 
            className="space-y-8 opacity-0"
            ref={el => elementsRef.current[2] = el}
          >
            <div>
              <h3 className="text-accounting-navy font-display font-semibold text-xl mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    href={info.href}
                    key={index}
                    className="flex items-start hover:text-accounting-blue transition-colors duration-300"
                    target={info.icon.type === MapPin ? "_blank" : undefined}
                    rel={info.icon.type === MapPin ? "noopener noreferrer" : undefined}
                  >
                    <div className="text-accounting-gold mt-1 mr-3">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-accounting-navy">{info.title}</h4>
                      <p className="text-accounting-gray">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-accounting-navy font-display font-semibold text-xl mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-accounting-gray">
                Segunda a Sexta: 9h às 18h<br />
                Sábados: 9h às 13h
              </p>
            </div>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm opacity-0"
            ref={el => elementsRef.current[3] = el}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-accounting-navy font-medium mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-accounting-navy font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-accounting-navy font-medium mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-accounting-navy font-medium mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-accounting-lightgray rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue/20 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full flex items-center justify-center bg-accounting-navy text-white rounded-md py-3 px-6 font-medium transition-colors duration-300",
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-accounting-blue"
                )}
              >
                {loading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
