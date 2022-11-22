import slide1 from "../assets/image-slide-1.jpg";
import slide2 from "../assets/image-slide-2.jpg";
import slide3 from "../assets/image-slide-3.jpg";
import slide4 from "../assets/image-slide-4.jpg";
import slide5 from "../assets/image-slide-5.jpg";
import btnLeft from "../assets/icon-arrow-left.svg";
import btnRight from "../assets/icon-arrow-right.svg";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect } from "react";

export default function Gallery() {
  const isDesktop = useMediaQuery("(min-width: 720px)");
  const [currentSlideX, setCurrentSlideX] = useState(isDesktop ? -1140 : -570);

  useEffect(() => {
    setCurrentSlideX(isDesktop ? -1140 : -570);
  }, [isDesktop]);

  const slides = [slide1, slide2, slide3, slide4, slide5];

  const translate = {
    transform: `translateX(${currentSlideX}px)`,
  };

  function handleBtnRight() {
    setCurrentSlideX((prev) =>
      isDesktop
        ? prev <= -2280
          ? prev
          : prev - 570
        : prev <= -1140
        ? prev
        : prev - 285
    );
  }

  function handleBtnLeft() {
    setCurrentSlideX((prev) =>
      isDesktop
        ? prev >= 0
          ? prev
          : prev + 570
        : prev >= 0
        ? prev
        : prev + 285
    );
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
                style={{
                  transform: `translateX(${
                    isDesktop ? 570 * index : 285 * index
                  }px)`,
                }}
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
