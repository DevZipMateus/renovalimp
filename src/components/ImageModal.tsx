
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
  }>;
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal = ({ isOpen, onClose, images, currentIndex, onNext, onPrevious }: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full max-h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        {/* Previous button */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image container */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="relative">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium text-renova-blue mb-2">{currentImage.title}</h3>
            <p className="text-renova-dark-gray">{currentImage.description}</p>
            <div className="mt-4 text-sm text-renova-gray">
              {currentIndex + 1} de {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Fechar modal"
      />
    </div>
  );
};

export default ImageModal;
