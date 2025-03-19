
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setRef }) => {
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
    <div 
      className="space-y-8 opacity-0"
      ref={setRef}
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
  );
};

export default ContactInfo;
