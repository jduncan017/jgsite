import React from "react";
import "./ImageCard.css";
import Image from "next/image";
import imageFiller from "../../../public/guitar.jpg";

const ImageCard = () => {
  return (
    <div className="image-card">
      <Image
        className="image-card__image"
        src={imageFiller}
        alt="image"
      ></Image>
      <h2 className="image-card__title">Guitars</h2>
    </div>
  );
};

export default ImageCard;
