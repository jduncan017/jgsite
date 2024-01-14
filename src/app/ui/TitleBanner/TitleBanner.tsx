import React from "react";
import "./TitleBanner.css";
import { cardo } from "@/src/app/fonts";
import Image from "next/image";
import backgroundImage from "@/public/shop-banner.png";

const TitleBanner = () => {
  return (
    <>
      <div className={`title-banner global__box-shadow ${cardo.className}`}>
        <h2 className="title-banner__text">WOODSHOP GALLERY</h2>
        <Image
          src={backgroundImage}
          alt="Background image for the page"
          className="global__component-background"
          fill={true}
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default TitleBanner;
