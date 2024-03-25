import Button from "../elements/button";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/src/assets/hero-carousel/hero-1.jpg",
    "/src/assets/hero-carousel/hero-2.jpg",
    "/src/assets/hero-carousel/hero-3.jpg",
    "/src/assets/hero-carousel/hero-4.jpg",
  ];

  const nextImg = () => {
    if (currentIndex !== 3) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImg = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(3);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="bg-gray-300 w-full mt-3 flex relative overflow-hidden">
      <Button
        type="button"
        onClick={prevImg}
        classname="absolute top-1/2 z-30 left-2 py-2 rounded-full cursor-pointer"
      >
        &lt;
      </Button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`transition-transform duration-300 translate-x-[-${
            currentIndex * 100
          }%]`}
        />
      ))}
      <Button
        type="button"
        onClick={nextImg}
        classname="absolute top-1/2 right-2 py-2 rounded-full cursor-pointer"
      >
        &gt;
      </Button>
    </div>
  );
};

export default Carousel;
