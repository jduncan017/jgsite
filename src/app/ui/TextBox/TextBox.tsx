import React from "react";
import "./TextBox.css";
import { inter } from "@/src/app/fonts";

const TextBox = () => {
  return (
    <div className="text-box global__box-shadow">
      <div className="text-box__section">
        <h2 className="text-box__section_title">Quality Materials</h2>
        <div className="title__divider"></div>
        <h3 className={`text-box__section_description ${inter.className}`}>
          Each project is created with the quality, hand-selected materials
          prioritizing both durability and beauty.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Custom Projects</h2>
        <div className="title__divider"></div>
        <h3 className={`text-box__section_description ${inter.className}`}>
          Let us channel your vision into reality. A chance to own something
          that’s uniquely yours.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Luxury Designs</h2>
        <div className="title__divider"></div>
        <h3 className={`text-box__section_description ${inter.className}`}>
          From unique live edge construction to beautiful resin finishes - our
          passion is in merging nature and art.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">The Little Things</h2>
        <div className="title__divider"></div>
        <h3 className={`text-box__section_description ${inter.className}`}>
          Need an item in bulk? Light fixtures, coasters, check presenters - we
          can make it all!
        </h3>
      </div>
    </div>
  );
};

export default TextBox;
