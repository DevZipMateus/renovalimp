import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Início',
    id: 'home'
  }, {
    name: 'Sobre Nós',
    id: 'about'
  }, {
    name: 'Serviços',
    id: 'services'
  }, {
    name: 'Contato',
    id: 'contact'
  }];
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", scrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-sm" : "py-4 bg-transparent")}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="font-display font-bold text-xl md:text-2xl" onClick={e => {
          e.preventDefault();
          scrollToSection('home');
        }}>
            <img alt="Renova - Higienização e Impermeabilização de Estofados" className="h-12 md:h-14" src="/lovable-uploads/82dba106-2c39-44df-8a78-e1489397d46a.png" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.id} href={`#${link.id}`} className="text-renova-blue hover:text-renova-blue/80 transition-colors duration-300 text-sm font-medium" onClick={e => {
          e.preventDefault();
          scrollToSection(link.id);
        }}>
              {link.name}
            </a>)}
        </nav>

        {/* Mobile Navigation with Sheet component */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-renova-blue p-2 rounded-md hover:bg-renova-light-gray/50 transition-colors" aria-label="Open menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] p-0 bg-gradient-to-br from-white to-renova-light-gray border-l-4 border-renova-blue">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-5 border-b border-renova-light-gray">
                <div className="font-display font-bold text-xl">
                  <img alt="Renova Logo" className="h-10" src="/lovable-uploads/39c5d01c-88f6-4e60-872a-8a766138b574.png" />
                </div>
                <SheetClose className="p-2 rounded-full hover:bg-renova-light-gray/70 transition-all">
                  <X className="text-renova-blue" size={20} />
                </SheetClose>
              </div>
              <nav className="flex flex-col items-stretch justify-start flex-1 mt-6">
                {navLinks.map((link, index) => <a key={link.id} href={`#${link.id}`} className={cn("text-renova-blue text-lg font-medium hover:bg-renova-light-gray/70 transition-all w-full text-center py-5 px-4 flex items-center justify-center", "relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-renova-blue after:transition-all after:duration-300 hover:after:w-1/4")} style={{
                animationDelay: `${index * 100}ms`
              }} onClick={e => {
                e.preventDefault();
                document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                setTimeout(() => scrollToSection(link.id), 100);
              }}>
                    {link.name}
                  </a>)}
              </nav>
              <div className="p-6 border-t border-renova-light-gray mt-auto">
                <div className="text-renova-blue text-sm text-center">
                  © 2024 Renova - Todos os direitos reservados
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>;
};
export default NavBar;