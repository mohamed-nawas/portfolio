import React, { useState } from "react";
// import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, platform }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
        size={20}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
        size={20}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && platform === "Mobile" && (
              <img
                src={slide.image}
                alt="travel image"
                className="image-mobile"
              />
            )}
            {index === current && platform === "Web" && (
              <img src={slide.image} alt="travel image" className="image-web" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
