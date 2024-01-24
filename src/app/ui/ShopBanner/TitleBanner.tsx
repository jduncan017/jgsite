import React from "react";
import "./TitleBanner.css";
import { cardo } from "@/src/app/ui/fonts";
import Image from "next/image";
import backgroundImage from "@/public/shared/shop-banner.webp";

const ShopBanner = () => {
  return (
    <>
      <div className={`title-banner global__box-shadow ${cardo.className}`}>
        <h2 className="title-banner__text global__z-index-adjust">
          WOODSHOP GALLERY
        </h2>
        <Image
          src={backgroundImage}
          alt="Background image for the page"
          className="global__component-background"
          width={1625}
          height={173}
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default ShopBanner;