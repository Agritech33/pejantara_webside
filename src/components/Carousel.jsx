import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ width = "full" }) => {
  const images = [
    "./carousel1.png",
    "./carousel2.png",
    "./carousel3.png",
    "./carousel4.png",
    "./carousel5.png",
    "./carousel6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative mx-auto overflow-hidden max-w-${width}`}>
      <div
        className="flex transition-transform duration-700 ease-in-out h-[91vh]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  width: PropTypes.string,
};

export default Carousel;
