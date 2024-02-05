import React from "react";
import "./TextBox.css";
import { inter } from "@/src/app/fonts";

const TextBox = () => {
  return (
    <section className="text-box global__box-shadow global__border-radius">
      <div className="text-box__section">
        <h2 className="text-box__section_title">Quality Materials</h2>
        <div className="title__divider"></div>
        <p className={`text-box__section_description ${inter.className}`}>
          Each project is created with the quality, hand-selected materials
          prioritizing both durability and beauty.
        </p>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Custom Projects</h2>
        <div className="title__divider"></div>
        <p className={`text-box__section_description ${inter.className}`}>
          Let us channel your vision into reality. A chance to own something
          that’s uniquely yours.
        </p>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Luxury Designs</h2>
        <div className="title__divider"></div>
        <p className={`text-box__section_description ${inter.className}`}>
          From unique live edge construction to beautiful resin finishes - our
          passion is in merging nature and art.
        </p>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">The Little Things</h2>
        <div className="title__divider"></div>
        <p className={`text-box__section_description ${inter.className}`}>
          Need an item in bulk? Light fixtures, coasters, check presenters - we
          can make it all!
        </p>
      </div>
    </section>
  );
};

export default TextBox;
