import React from "react";
import Image from "next/image";
import "./HomePageBanner.css";
import bannerImage from "../../../public/main-banner.jpg";
import fullLogoWhite from "../../../public/logo-white 1.png";
import HeaderAccent from "../HeaderAccent/HeaderAccent";

const HomePageBanner = () => {
  return (
    <div className="banner">
      <Image className="banner__image" src={bannerImage} alt="banner image" />
      <HeaderAccent reverseImage={true}></HeaderAccent>
      <div className="banner__textbox">
        <Image className="banner__logo" src={fullLogoWhite} alt="JG logo" />
        <h2 className="banner__textbox_text">
          All of our designs blend precision and quality, crafted from woods
          like oak, maple, walnut, and exotic purple heart, each selected for
          durability and beauty. We offer unique live edge and luxurious resin
          furniture, creating standout pieces that merge nature and art. We
          pride ourselves on superior craftsmanship and Beauty.
        </h2>
        <button className="banner__button">Learn More</button>
      </div>
    </div>
  );
};

export default HomePageBanner;
