import amy from "../assets/image-amy.webp";

export default function Cv() {
  return (
    <>
      <div className="cv">
        <div className="cv__avatar">
          <img src={amy} alt="Amy" className="cv__avatar--img" />
        </div>
        <div className="cv__content">
          <h2 className="cv__headline">
            I'm Amy, and I'd love to work on your next project
          </h2>
          <p className="cv__text">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="cv__btn btn">Free Consultation</button>
        </div>
      </div>
    </>
  );
}
