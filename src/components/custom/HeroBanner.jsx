import React, { useState, useEffect } from 'react';

export default function  ImageCarousel () {
  const images = [
    { url: "https://images.pexels.com/photos/237950/pexels-photo-237950.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Slide 1" },
    { url: "https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Slide 2" },
    { url: "https://images.pexels.com/photos/8470864/pexels-photo-8470864.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Slide 3" },
    { url: "https://images.pexels.com/photos/8961554/pexels-photo-8961554.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Slide 4" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // Manual navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto mt-3 px-2 ">
      {/* Main image container */}
      <div className="relative h-80 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 mx-3 text-white p-2 rounded-full hover:bg-black/75"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 mx-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
      >
        →
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 px-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

