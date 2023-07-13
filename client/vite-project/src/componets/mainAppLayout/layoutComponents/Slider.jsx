import React, { useState } from "react";
import { slidesObjects } from "./objSlider/objectSliderData";
export default function Slider() {
  const [slide, setSlide] = useState(1);

  const nextSlide = () => {
    if (slide > 1) {
      setSlide((slide -= 1));
    }
  };

  const prevSlide = () => {
    setSlide(slide++);
  };
  return (
    <>
      <div className="main-slider-container">
        {<Slide slide={slide} />}
        <button
          id="left-arrow"
          className="arrow"
          onClick={() => nextSlide}
        ></button>
        <button
          id="right-arrow"
          className="arrow"
          onClick={() => prevSlide}
        ></button>
      </div>
    </>
  );
}

function Slide(props) {
  const slidesElements = slidesObjects.map((obj, idx) => {
    return (
      <img
        src={obj.src}
        alt={obj.alt}
        className={props.slide === idx ? "active-slide" : "hidden-slide"}
      />
    );
  });

  return <>{slidesElements}</>;
}
