import React from "react";
import Image from "next/image";
import "./ImageBanner.css";
import bannerImage from "@/public/main-banner.jpg";
import fullLogoWhite from "@/public/logo-white 1.png";
import woodAccent from "@/public/headerAccent.jpg";
import { inter } from "@/src/app/fonts";
import Link from "next/link";

const HomePageBanner = () => {
  return (
    <div className="banner">
      <Image
        className="banner__image"
        src={bannerImage}
        alt="banner image"
        placeholder="blur"
      />
      <Image
        src={woodAccent}
        alt="header accent"
        className="global__wood-accent global__wood-accent_reversed"
        width={960}
        height={20}
        placeholder="blur"
      />
      <div className="banner__textbox global__box-shadow">
        <Image className="banner__logo" src={fullLogoWhite} alt="JG logo" />
        <h2 className={`banner__textbox_text ${inter.className}`}>
          Quality custom woodworking designs that blend precision and quality,
          crafted from a variety of hand-selected woods to suit your needs. From
          live edge and luxurious resin furniture, we aim to create standout
          pieces that merge nature and art.
        </h2>
        <Link href={"/our-story"}>
          <button className="banner__button global__button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageBanner;
