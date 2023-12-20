import "./header.css";
import Image from "next/image";
import logoPath from "../../../public/logo.png";
import HeaderAccent from "../HeaderAccent/HeaderAccent";

const Header = ({}) => {
  return (
    <div className="header">
      <Image src={logoPath} alt="JohnGerard Logo" className="header__logo" />
      <div className="header__navigation">
        <h1 className="header__navigation_text">Home</h1>
        <h1 className="header__navigation_text">Gallery</h1>
        <h1 className="header__navigation_text">Contact</h1>
        <h1 className="header__navigation_text">Our Story</h1>
      </div>
      <HeaderAccent></HeaderAccent>
    </div>
  );
};

export default Header;
