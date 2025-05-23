
import React from 'react';
import { cn } from "@/lib/utils";
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-renova-blue text-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex justify-start mb-4">
              <img 
                src="/lovable-uploads/bbb735fd-1094-405b-9d5c-513f9999ba9f.png" 
                alt="Renova Logo" 
                className="h-16"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-sm">
              Higienização e impermeabilização de estofados com qualidade e excelência. Cuidando do seu lar com amor em cada detalhe.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contato
            </h3>
            <address className="not-italic text-white/80 space-y-2">
              <p>Rua Paraná 138, Bairro Nossa Senhora da Saúde</p>
              <p>Nova Bassano - RS</p>
              <p>(54) 99167-2976</p>
              <p>comunelloluan@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://instagram.com/renova_higiestofados" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://facebook.com/renovahigienizacaodeestofados" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="text-center text-white/80 text-sm">
          <p>&copy; {currentYear} Renova - Higienização e Impermeabilização de Estofados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
