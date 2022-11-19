import slide1 from "../assets/image-slide-1.jpg";
import slide2 from "../assets/image-slide-2.jpg";
import slide3 from "../assets/image-slide-3.jpg";
import slide4 from "../assets/image-slide-4.jpg";
import slide5 from "../assets/image-slide-5.jpg";
import btnLeft from "../assets/icon-arrow-left";
import btnRight from "../assets/icon-arrow-right";

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <h3 className="gallery__headline">My Work</h3>
        <div className="gallery__slides"></div>
        <div className="gallery__btns"></div>
      </div>
    </>
  );
}
