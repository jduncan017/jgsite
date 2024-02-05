import React from "react";
import Image from "next/image";
import "./HeroSection.css";
import bannerImage from "@/public/homepage/hero-banner.webp";
import fullLogoWhite from "@/public/shared/logo-white.png";
import woodAccent from "@/public/shared/woodAccent.webp";
import { inter } from "@/src/app/fonts";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="banner">
      <Image
        className="banner__image"
        src={bannerImage}
        alt="banner image"
        width={1700}
        height={715}
        placeholder="blur"
        priority
      />
      <Image
        src={woodAccent}
        alt="header accent"
        className="global__wood-accent global__wood-accent_reversed"
        width={1700}
        height={53}
        placeholder="blur"
      />
      <div className="banner__textbox global__box-shadow">
        <Image
          className="banner__logo"
          src={fullLogoWhite}
          alt="JG logo"
          width={380}
          height={121}
        />
        <h2
          className={`banner__textbox-text global__text-shadow ${inter.className}`}
        >
          Quality custom woodworking designs that blend precision and quality,
          crafted from a variety of hand-selected woods to suit your needs. From
          live edge and luxurious resin furniture, we aim to create standout
          pieces that merge nature and art.
        </h2>
        <Link href={"/our-story"}>
          <button className="banner__button global__button">Learn More</button>
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
