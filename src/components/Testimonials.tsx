
import React, { useEffect, useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageModal from './ImageModal';

const Testimonials = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  const serviceImages = [
    {
      src: "/lovable-uploads/80bc2775-d069-4ccb-8251-ca87b592a2ca.png",
      alt: "Lavagem de Tapete",
      title: "Lavagem de Tapete",
      description: "Já agendou a sua?"
    },
    {
      src: "/lovable-uploads/93ac14f6-0d40-49ac-ba11-dfa003f40ce0.png",
      alt: "Limpeza de Sofá",
      title: "Lembrete",
      description: "O custo de limpar seu sofá é bem menor que comprar um novo!"
    },
    {
      src: "/lovable-uploads/94248c89-8d00-4fb3-9425-9cd4dd50146c.png",
      alt: "Tranquilidade com estofados limpos",
      title: "Tranquilidade",
      description: "Deixe-nos cuidar dos seus estofados para que você possa descansar com tranquilidade"
    },
    {
      src: "/lovable-uploads/d9dfd555-cd73-4d65-bd32-3510218cfe24.png",
      alt: "Antes e depois da limpeza",
      title: "Transformação",
      description: "Está esperando o que? Faça já o seu orçamento!"
    },
    {
      src: "/lovable-uploads/244bdd02-15c7-4fe6-82cc-e1e35e92395b.png",
      alt: "Benefícios da limpeza",
      title: "4 Benefícios",
      description: "Da limpeza profunda em seu sofá"
    },
    {
      src: "/lovable-uploads/685c691c-100f-4969-ae55-921ba1a94f59.png",
      alt: "Higienização de estofados",
      title: "Higienização não é luxo",
      description: "É necessidade!"
    },
    {
      src: "/lovable-uploads/fe37c16f-ec21-417c-9f2e-90e5bb2563d7.png",
      alt: "Quarto limpo e aconchegante",
      title: "Seu cantinho limpo",
      description: "E aconchegante"
    },
    {
      src: "/lovable-uploads/0ce542a7-d08d-4b05-a3d1-d2d5a3602f8d.png",
      alt: "Lavagem de tapete",
      title: "Não troque, renove!",
      description: "Lavagem e Higienização de Tapete"
    },
    {
      src: "/lovable-uploads/3e1c917e-25a0-4796-ba15-3b90053f7542.png",
      alt: "Limpeza de tapetes",
      title: "Beleza e Higiene",
      description: "Limpe seus tapetes com uma empresa especializada"
    },
    {
      src: "/lovable-uploads/fe9f928d-27be-4398-84b5-53fb1ba2f66f.png",
      alt: "Serviços de limpeza e conforto",
      title: "Conforto e bem-estar",
      description: "Nossos serviços são feitos para você!"
    },
    {
      src: "/lovable-uploads/136b6e2f-3dee-4ea7-ab30-524d2d84924c.png",
      alt: "Serviços completos de higienização",
      title: "Serviços Completos",
      description: "Mais saúde, segurança e aconchego para sua família e empresa!"
    },
    {
      src: "/lovable-uploads/1035a0c6-c28b-4b5f-9bfd-10cb5cbd3edc.png",
      alt: "Sinais de limpeza para estofados",
      title: "5 Sinais",
      description: "De que um estofado precisa de limpeza"
    }
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
              Galeria de Serviços
            </h2>
            <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
              Conheça nosso trabalho através de imagens reais dos nossos serviços
            </p>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="opacity-0 mx-auto"
          >
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {serviceImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-2 h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(index)}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-medium text-renova-blue mb-2">{image.title}</h3>
                          <p className="text-renova-dark-gray text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-2 mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceImages.map((image, index) => (
              <div 
                key={index}
                ref={el => elementsRef.current[3 + index] = el}
                className="opacity-0 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-renova-blue mb-2">{image.title}</h3>
                  <p className="text-renova-dark-gray text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={serviceImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
};

export default Testimonials;
