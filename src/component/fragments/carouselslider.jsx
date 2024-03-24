import Button from "../elements/button";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/src/assets/hero-carousel/hero-1.jpg",
    "/src/assets/hero-carousel/hero-2.jpg",
    "/src/assets/hero-carousel/hero-3.jpg",
    "/src/assets/hero-carousel/hero-4.jpg",
  ];

  const nextImg = () => {
    setCurrentIndex((prev) => prev + 1);
    console.log(currentIndex);
  };

  const prevImg = () => {
    setCurrentIndex((prev) => prev - 1);
    console.log(currentIndex);
  };

  return (
    <div className="bg-gray-300 w-full mt-3 flex overflow-hidden relative">
      <Button
        type="button"
        onClick={prevImg}
        classname="absolute top-1/2 left-2 py-2 rounded-full cursor-pointer"
      >
        &lt;
      </Button>
      {images.map((image, index) => (
        <img key={index} src={image} alt="" />
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
