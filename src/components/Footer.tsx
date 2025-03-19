
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accounting-navy text-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Conta<span className="text-accounting-lightblue">Precisão</span>
            </h3>
            <p className="text-accounting-lightgray mb-4 max-w-sm">
              Transformamos números complexos em soluções claras. Deixe-nos cuidar da sua contabilidade enquanto você foca no crescimento do seu negócio.
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
                  className="text-accounting-lightgray hover:text-white transition-colors duration-300"
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
                  className="text-accounting-lightgray hover:text-white transition-colors duration-300"
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
                  className="text-accounting-lightgray hover:text-white transition-colors duration-300"
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
                  href="#plans" 
                  className="text-accounting-lightgray hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('plans');
                  }}
                >
                  Planos
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-accounting-lightgray hover:text-white transition-colors duration-300"
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
            <address className="not-italic text-accounting-lightgray space-y-2">
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
              <p>+55 (11) 3456-7890</p>
              <p>contato@contaprecisao.com.br</p>
            </address>
          </div>
        </div>
        
        <hr className="border-accounting-lightblue/20 mb-8" />
        
        <div className="text-center text-accounting-lightgray text-sm">
          <p>&copy; {currentYear} ContaPrecisão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
