import React from "react";
import "./GalleryCard.css";
import fillerImage from "../../../public/guitar.jpg";
import Image from "next/image";

const GalleryCard = () => {
  return (
    <div className="gallery-card">
      <div className="gallery-card__image-container">
        <Image
          className="gallery-card__image"
          src={fillerImage}
          alt="gallery image"
        ></Image>
        <h3 className="gallery-card__image-title">Image Title</h3>
      </div>
      <div className="gallery-card__info-container">
        <h3 className="gallery-card__price">$10.00</h3>
        <button className="gallery-card__button" type="button">
          View
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
