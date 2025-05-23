
import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

interface ContactInfoProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ setRef }) => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      details: "(54) 99167-2976",
      href: "tel:+5554991672976"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "comunelloluan@gmail.com",
      href: "mailto:comunelloluan@gmail.com"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      details: "(54) 99167-2976",
      href: "https://wa.me/5554991672976?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Renova."
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      details: "Rua Paraná 138, Bairro Nossa Senhora da Saúde, Nova Bassano - RS",
      href: "https://maps.google.com/?q=Rua+Paraná+138,+Bairro+Nossa+Senhora+da+Saúde,+Nova+Bassano+-+RS"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      title: "Instagram",
      details: "@renova_higiestofados",
      href: "https://instagram.com/renova_higiestofados"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      title: "Facebook",
      details: "Renova higienização de estofados",
      href: "https://facebook.com/renovahigienizacaodeestofados"
    }
  ];

  return (
    <div 
      className="space-y-8 opacity-0 bg-white p-8 rounded-lg shadow-sm"
      ref={setRef}
    >
      <div className="text-center mb-6">
        <p className="text-renova-blue font-medium">
          Para sua comodidade, disponibilizamos atendimento através dos seguintes canais de comunicação:
        </p>
      </div>
      
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <a 
              href={info.href}
              key={index}
              className="flex items-start hover:text-renova-blue transition-colors duration-300"
              target={info.icon.type === MapPin || info.icon.type === Instagram || info.icon.type === Facebook ? "_blank" : undefined}
              rel={info.icon.type === MapPin || info.icon.type === Instagram || info.icon.type === Facebook ? "noopener noreferrer" : undefined}
            >
              <div className="text-renova-blue mt-1 mr-3">
                {info.icon}
              </div>
              <div>
                <h4 className="font-medium text-renova-blue">{info.title}</h4>
                <p className="text-renova-dark-gray">{info.details}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="border-t pt-6 mt-6">
        <h3 className="text-renova-blue font-display font-semibold text-center text-xl mb-4">
          Responsável: LUAN COMUNELLO
        </h3>
        <p className="text-center text-renova-dark-gray font-medium">
          "Amor em cada detalhe. RENOVA, cuidando de você e do seu lar!"
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
