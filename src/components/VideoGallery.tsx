
import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const VideoGallery = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const serviceVideos = [
    {
      src: "/lovable-uploads/imagens/1025207066474345.mp4",
      title: "Higienização de Estofados",
      description: "Processo completo de limpeza profunda"
    },
    {
      src: "/lovable-uploads/imagens/1029950785806873.mp4",
      title: "Limpeza Profissional",
      description: "Técnicas avançadas de higienização"
    },
    {
      src: "/lovable-uploads/imagens/1204473491151395.mp4",
      title: "Impermeabilização",
      description: "Proteção duradoura para seus estofados"
    },
    {
      src: "/lovable-uploads/imagens/1210651427130236.mp4",
      title: "Resultado Final",
      description: "Estofados renovados e protegidos"
    },
    {
      src: "/lovable-uploads/imagens/1350640076207894.mp4",
      title: "Limpeza de Tapetes",
      description: "Remoção completa de sujeiras e ácaros"
    },
    {
      src: "/lovable-uploads/imagens/1353662409250072.mp4",
      title: "Higienização Veicular",
      description: "Limpeza interna completa de veículos"
    },
    {
      src: "/lovable-uploads/imagens/676065542012432.mp4",
      title: "Técnicas Profissionais",
      description: "Equipamentos de última geração"
    },
    {
      src: "/lovable-uploads/imagens/697520649305554.mp4",
      title: "Processo de Limpeza",
      description: "Passo a passo da higienização"
    },
    {
      src: "/lovable-uploads/imagens/calcificacao.mp4",
      title: "Descalcificação",
      description: "Polimento de vidros e box de banheiro"
    },
    {
      src: "/lovable-uploads/imagens/elasabiaoqfazer.mp4",
      title: "Demonstração",
      description: "Como realizamos nossos serviços"
    }
  ];

  return (
    <section id="videos" ref={sectionRef} className="py-20 bg-renova-light-gray/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Vídeos dos Nossos Serviços
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Veja nossos profissionais em ação e a qualidade do nosso trabalho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceVideos.map((video, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[2 + index] = el}
              className="opacity-0 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="relative aspect-video overflow-hidden group">
                <video 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  controls
                  preload="metadata"
                  poster=""
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-renova-blue mb-2">{video.title}</h3>
                <p className="text-renova-dark-gray text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
