import React from "react";
import "./GalleryCard.css";
import { cardo } from "@/src/app/components/fonts";
import formatCurrency from "@/src/utils/numberFormat";
import ImageLoadingWrapper from "../../PreLoader/ImageLoadingWrapper";
import Image from "next/image";

interface GalleryCardProps {
  title: string;
  price: number;
  imagePath: string;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  price,
  imagePath,
  onClick,
}) => {
  return (
    <div className="gallery-card global__box_shadow">
      <div className="gallery-card__image-container">
        <ImageLoadingWrapper onClick={onClick}>
          <Image
            className="gallery-card__image"
            src={imagePath}
            alt={title}
            width={500}
            height={500}
          ></Image>
        </ImageLoadingWrapper>
        <h3 className={`gallery-card__image-title ${cardo.className}`}>
          {title}
        </h3>
      </div>
      <div className="gallery-card__info-container">
        <h3 className="gallery-card__price">{formatCurrency(price)}</h3>
        <button
          className={`gallery-card__button global__button ${cardo.className}`}
          type="button"
          onClick={onClick}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
