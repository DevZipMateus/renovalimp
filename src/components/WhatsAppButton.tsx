
import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Slight delay to show button with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    // Set up pulsing animation interval
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5554991672976?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Renova.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-500 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isPulsing ? 'animate-bounce shadow-renova-blue/40 shadow-lg scale-110' : ''}
        hover:scale-110 hover:shadow-xl`}
      style={{
        boxShadow: isPulsing ? '0 0 20px rgba(30, 144, 255, 0.6)' : 'none',
        background: '#25d366',
      }}
      aria-label="Contate-nos pelo WhatsApp"
    >
      <div className={`absolute -inset-2 bg-green-500/20 rounded-full ${isPulsing ? 'animate-ping' : 'opacity-0'}`}></div>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.3764 4.62392C17.2181 2.46561 14.3861 1.2 11.3913 1.2C5.2382 1.2 0.24313 6.19507 0.240899 12.3518C0.240028 14.4074 0.779918 16.4145 1.80548 18.1879L0.171875 23.4L5.51732 21.8078C7.22145 22.7394 9.13628 23.2334 11.0866 23.2343H11.0913C11.0913 23.2343 11.0911 23.2343 11.0913 23.2343C17.2428 23.2343 22.2385 18.2386 22.2408 12.0818C22.242 9.09399 20.9767 6.26087 19.3764 4.62392ZM11.3913 21.4171H11.0875C9.33068 21.4163 7.60996 20.9451 6.11219 20.0671L5.80113 19.8874L2.65039 20.8172L3.593 17.745L3.39236 17.4229C2.42472 15.87 1.91519 14.0591 1.91607 12.2086C1.91781 7.11756 6.09805 2.9373 11.0951 2.9373C13.5895 2.9373 15.9417 3.98947 17.7332 5.78095C19.5247 7.57243 20.5662 9.92462 20.5656 12.4242C20.5639 17.5171 16.3837 21.4171 11.3913 21.4171Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.54297 7.03519C8.35359 6.62443 8.1572 6.61334 7.97786 6.6033C7.82969 6.59445 7.65967 6.59516 7.48997 6.59516C7.32025 6.59516 7.04183 6.65069 6.80741 6.90858C6.57261 7.16675 5.818 7.87516 5.818 9.30741C5.818 10.7396 6.8316 12.1275 6.9672 12.2974C7.10278 12.467 8.96171 15.4421 11.8793 16.5902C14.3084 17.5444 14.7973 17.3746 15.319 17.3191C15.8407 17.2635 17.0191 16.6106 17.2307 15.9443C17.4423 15.2778 17.4423 14.7004 17.3748 14.5862C17.3072 14.472 17.1375 14.4022 16.883 14.2628C16.6285 14.1233 15.197 13.4149 14.9622 13.3203C14.7274 13.2258 14.5577 13.1788 14.388 13.4334C14.2182 13.6877 13.6589 14.3404 13.5083 14.5102C13.3579 14.6798 13.2073 14.7034 12.9527 14.5638C12.698 14.4244 11.7483 14.1202 10.6196 13.1198C9.74133 12.3397 9.14622 11.3776 8.99533 11.123C8.84445 10.8687 8.97808 10.7285 9.10647 10.5999C9.22133 10.4841 9.36408 10.2995 9.4906 10.149C9.61684 9.9986 9.66378 9.8935 9.75829 9.72377C9.85302 9.55405 9.80608 9.40343 9.73442 9.26397C9.66378 9.12447 9.09723 7.6825 8.54297 7.03519Z" fill="white"/>
      </svg>
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
