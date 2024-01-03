import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/../public/logo-white 1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left-column">
        <Image
          src={logo}
          alt="John Gerard Logo"
          className="footer__logo"
        ></Image>
        <div className="footer__info">
          <h2 className="footer__text">© 2021 John Gerrard WoodWork.</h2>
          <h2 className="footer__text">Rochester, NY</h2>
        </div>
      </div>
      <div className="footer__social">
        <h2 className="footer__text">Follow us:</h2>
        <h2 className="footer__text">Instagram</h2>
      </div>
    </div>
  );
};

export default Footer;
