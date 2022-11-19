import graphicDesign from "../assets/pattern-graphic-design.svg";
import uiux from "../assets/pattern-ui-ux.svg";
import apps from "../assets/pattern-apps.svg";
import photography from "../assets/pattern-photography.svg";
import illustrations from "../assets/pattern-illustrations.svg";
import motionGaraphics from "../assets/pattern-motion-graphics.svg";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="features__item features__item--graphicDesign">
          <img
            src={graphicDesign}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">Graphic Design</p>
        </div>
        <div className="features__item features__item--uiux">
          <img
            src={uiux}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">UI/UX</p>
        </div>
        <div className="features__item features__item--apps">
          <img
            src={apps}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">Apps</p>
        </div>
        <div className="features__item features__item--photography">
          <img
            src={photography}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">Photography</p>
        </div>
        <div className="features__item features__item--illustrations">
          <img
            src={illustrations}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">Illustrations</p>
        </div>

        <div className="features__item features__item--motionGraphics">
          <img
            src={motionGaraphics}
            alt="Design pattern"
            className="features__item--img"
          />
          <p className="features__item--name">Motion Graphics</p>
        </div>
      </div>
    </>
  );
}
