import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/../public/logo-white 1.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        © 2021 John Gerrard WoodWork.
        <br />
        Rochester, NY
      </p>
      <Image src={logo} alt="John Gerard Logo" className="footer__logo"></Image>
      <div className="footer__social">
        <p className="footer__text">
          Follow us:
          <br />
          Instagram
        </p>
      </div>
    </div>
  );
};

export default Footer;
