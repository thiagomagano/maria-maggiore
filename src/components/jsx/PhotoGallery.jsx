import { useState } from "react";

const PhotoGallery = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPrevPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            onClick={showPrevPhoto}
            className="absolute left-5 text-white text-2xl font-bold"
          >
            &#8249;
          </button>
          <div className="relative">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-w-full max-h-[90svh] rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              &times;
            </button>
          </div>
          <button
            onClick={showNextPhoto}
            className="absolute right-5 text-white text-8xl font-bold"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
