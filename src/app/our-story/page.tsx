import React from "react";
import "./page.css";
import fags from "@/public/our-story/fags.webp";
import Image from "next/image";
import woodAccent from "@/public/shared/woodAccent.webp";
import aboutImage from "@/public/our-story/aboutNick+Ryan.jpeg";
import TitleBanner from "@/src/app/ui/ShopBanner/TitleBanner";

/* --------------------------------------- */
/*             Our Story Route             */
/* --------------------------------------- */

const OurStory = () => {
  return (
    <div className="about__main global__page-background">
      <Image
        src={aboutImage}
        alt="picture of the owners"
        className="about__header-image global__box-shadow"
        width={1740}
        height={1074}
        placeholder="blur"
        priority
      />
      <Image
        src={woodAccent}
        alt="header accent"
        className="global__wood-accent global__wood-accent_reversed"
        width={960}
        height={20}
      />
      <div className="about">
        <div className="about__description global__box-shadow">
          <h1 className="about__description-title">Our Story</h1>
          <h2 className="about__description-text">
            Founded by two best friends and passionate woodworkers, Nick
            Pasquarella and Ryan Fly; John Gerard is more than just a
            woodworking company. It&apos;s a celebration of creativity,
            friendship, and a shared passion for craftsmanship.
            <br />
            <br />
            As a proud gay-owned business, we bring our unique perspectives to
            every project, crafting pieces that are not only beautiful but also
            tell a story. Our journey in woodworking is driven by a commitment
            to quality and sustainability, ensuring each creation respects the
            environment as much as our customers.
            <br />
            <br />
            Specializing in handcrafted, bespoke wooden items, we believe in
            turning simple wood into functional art. Whether it&apos;s custom
            furniture or intricate decor, our pieces are a testament to our
            dedication to the art of woodworking. Join us in our journey of
            creating sustainable, unique wooden masterpieces that celebrate the
            beauty of natural materials and the bond of friendship.
          </h2>
        </div>
        <Image
          src={fags}
          alt="picture of the owners"
          className="about__image global__box-shadow"
          width={603}
          height={804}
          placeholder="blur"
        ></Image>
        <div className="about__title-banner">
          <TitleBanner title={"Our Story"} />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
