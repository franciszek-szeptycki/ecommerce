import React, { useState } from "react";
import { slidesObjects } from "./objSlider/objectSliderData";
export default function Slider() {
  let [slide, setSlide] = useState(1);

  const nextSlide = () => {
    if (slide === 3) {
      setSlide(1);
    } else {
      setSlide((slide += 1));
    }
  };

  const prevSlide = () => {
    if (slide === 1) {
      setSlide(3);
    } else {
      setSlide((slide -= 1));
    }
  };
  console.log(slide);
  return (
    <>
      <div className="main-slider-container">
        {<Slide slide={slide} />}
        <button id="left-arrow" className="arrow" onClick={() => nextSlide()}>
          next
        </button>
        <button id="right-arrow" className="arrow" onClick={() => prevSlide()}>
          prev
        </button>
        <span className="dot-box">
          {slidesObjects.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setSlide(idx);
                }}
                className={`dot ${slide === idx ? "active-dot" : ""}`}
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
}

function Slide(props) {
  const slidesElements = slidesObjects.map((obj, idx) => {
    return (
      <>
        <div
          key={idx}
          className={props.slide === idx ? "active-slide" : "hidden-slide"}
        >
          <header>
            <h3>{obj.slideTitle}</h3>
          </header>
          <img src={obj.src} alt={obj.alt} />
          <button>{obj.btnTitle}</button>
        </div>
      </>
    );
  });

  return <>{slidesElements}</>;
}
