import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/public/shared/logo-white.png";
import backgroundImage from "@/public/shared/footerBackground.webp";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text global__z-index-adjust">
        © 2021 John Gerrard WoodWork.
        <br />
        Rochester, NY
      </p>
      <Image
        src={logo}
        alt="John Gerard Logo"
        className="footer__logo global__z-index-adjust"
        width={380}
        height={121}
      ></Image>
      <div className="footer__social global__z-index-adjust">
        <p className="footer__text global__z-index-adjust">
          Follow us:
          <br />
          <a
            href="https://www.instagram.com/johngerardwoodwork/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link_instagram"
          >
            Instagram
          </a>
        </p>
      </div>
      <Image
        src={backgroundImage}
        alt="Background image for the footer"
        className="global__component-background"
        width={1700}
        height={131}
        placeholder="blur"
      />
    </div>
  );
};

export default Footer;
