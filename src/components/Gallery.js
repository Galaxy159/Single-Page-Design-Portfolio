import slide1 from "../assets/image-slide-1.jpg";
import slide2 from "../assets/image-slide-2.jpg";
import slide3 from "../assets/image-slide-3.jpg";
import slide4 from "../assets/image-slide-4.jpg";
import slide5 from "../assets/image-slide-5.jpg";
import btnLeft from "../assets/icon-arrow-left.svg";
import btnRight from "../assets/icon-arrow-right.svg";
import { useState } from "react";

export default function Gallery() {
  const [currentSlideX, setCurrentSlideX] = useState(-1140);
  const slides = [slide1, slide2, slide3, slide4, slide5];

  const translate = {
    transform: `translateX(${currentSlideX}px)`,
  };

  function handleBtnRight() {
    setCurrentSlideX((prev) => (prev <= -2280 ? prev : prev - 570));
  }

  function handleBtnLeft() {
    setCurrentSlideX((prev) => (prev >= 0 ? prev : prev + 570));
  }

  return (
    <>
      <h3 className="gallery__headline">My Work</h3>
      <div className="gallery">
        <ul className="gallery__track" style={translate}>
          {slides.map((slide, index) => {
            return (
              <li
                key={index}
                style={{ transform: `translateX(${570 * index}px)` }}
                className="gallery__track--slide"
              >
                <img
                  src={slides[index]}
                  alt="Slide"
                  className="gallery__track--slide-img"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="gallery__btns">
        <div onClick={handleBtnLeft} className="gallery__btns--btn btnLeft">
          <img
            src={btnLeft}
            alt="Arrow left"
            className="gallery__btns--btn-img"
          />
        </div>
        <div onClick={handleBtnRight} className="gallery__btns--btn btnRight">
          <img
            src={btnRight}
            alt="Arrow right"
            className="gallery__btns--btn-img"
          />
        </div>
      </div>
    </>
  );
}

// slide width desktop: 570px (540 + 30 gap)
// slide width mobile: 285px (270 + 15 gap)
