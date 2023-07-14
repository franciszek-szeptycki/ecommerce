import React, { useState } from "react";
import { slidesObjects } from "./objSlider/objectSliderData";
import {
  FaArrowRight,
  FaArrowLeft
} from "react-icons/fa";
export default function Slider() {
  let [slide, setSlide] = useState(0);

  const nextSlide = () => {
    
    setSlide(slide === slidesObjects.length - 1 ? 0 : slide + 1)
  };

  const prevSlide = () => {
   
    setSlide(slide === 0 ? slidesObjects.length - 1 : slide - 1)
  };
  console.log(slide);
  return (
    <>
      <div className="main-slider-container">
        {<Slide slide={slide} />}
        <button id="left-arrow" className="arrow" onClick={() => nextSlide()}>
          {<FaArrowLeft/>}
        </button>
        <button id="right-arrow" className="arrow" onClick={() => prevSlide()}>
        {<FaArrowRight/>}
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
    const styles = {
      backgroundImage: `url(${obj.src})`,
    }
    return (
      <>
        <div
          key={idx}
          className={props.slide === idx ? "slide" : "hidden-slide"}
          style={styles}
          
        >
          <header>
            <h3>{obj.slideTitle}</h3>
          </header>
          
          <button>{obj.btnTitle}</button>
        </div>
      </>
    );
  });

  return <>{slidesElements}</>;
}
