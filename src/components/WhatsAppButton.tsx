
import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Slight delay to show button with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511954567890?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20contabilidade.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-500 hover:scale-110 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      aria-label="Contate-nos pelo WhatsApp"
    >
      <img 
        src="/lovable-uploads/90d99fc5-2fe3-4a3b-a15c-64bc0c7f8cef.png" 
        alt="WhatsApp" 
        className="w-full h-full"
      />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
