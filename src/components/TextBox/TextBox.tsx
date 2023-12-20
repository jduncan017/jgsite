import React from "react";
import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <div className="text-box__section">
        <h2 className="text-box__section_title">Quality Materials</h2>
        <h3 className="text-box__section_description">
          Each project is created with high quality, hand selected materials
          prioritizing both durability and beauty.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Custom Projects</h2>
        <h3 className="text-box__section_description">
          Let us channel your vision into reality. An opportunity to own
          something that’s exclusively designed for you.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">Luxury Designs</h2>
        <h3 className="text-box__section_description">
          From unique live edge constructions to beautiful resin furniture - our
          passion is in merging nature and art.
        </h3>
      </div>
      <div className="text-box__divider"></div>
      <div className="text-box__section">
        <h2 className="text-box__section_title">The Little Things</h2>
        <h3 className="text-box__section_description">
          Need a smaller item in bulk? Hanging lights, coasters, check
          presenters, we can make it distinctly yours.
        </h3>
      </div>
    </div>
  );
};

export default TextBox;
