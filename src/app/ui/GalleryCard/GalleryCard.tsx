import React from "react";
import "./GalleryCard.css";
import Image from "next/image";
import { enriqueta, cardo } from "@/src/app/fonts";

interface GalleryCardProps {
  title: string;
  price: number;
  imagePath: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  price,
  imagePath,
}) => {
  return (
    <div className="gallery-card global__box_shadow">
      <div className="gallery-card__image-container">
        <Image
          className="gallery-card__image"
          src={imagePath}
          alt={title}
          width={250}
          height={250}
          // objectFit="cover"
        ></Image>
        <h3 className="gallery-card__image-title">{title}</h3>
      </div>
      <div className="gallery-card__info-container">
        <h3 className={`gallery-card__price ${cardo.className}`}>
          ${price.toFixed(2)}
        </h3>
        <button
          className={`gallery-card__button global__button ${enriqueta.className}`}
          type="button"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
