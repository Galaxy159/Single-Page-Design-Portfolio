import logo from "../assets/logo.svg";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <img src={logo} alt="Logo" className="topbar__logo" />
        <button className="topbar__btn btn">Free Consultation</button>
      </div>
    </>
  );
}
