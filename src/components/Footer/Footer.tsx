import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <h2 className="footer__info_copyright">© 2021 John Gerrard WoodWork</h2>
        <h2 className="footer__info_location">Rochester, NY</h2>
      </div>
      <div className="footer__social">
        <h2 className="footer__social_title">Follow us:</h2>
        <h2 className="footer__social_sites">Instagram</h2>
      </div>
    </div>
  );
};

export default Footer;
