import React from "react";
import "./GalleryCard.css";
import { cardo } from "@/src/app/fonts";
import formatCurrency from "@/src/utils/numberFormat";
import ImageLoadingWrapper from "../../PreLoader/ImageLoadingWrapper";
import Image from "next/image";

interface GalleryCardProps {
  title: string;
  price: number;
  imagePath: string;
  qty: number;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  price,
  imagePath,
  qty,
  onClick,
}) => {
  return (
    <div className="gallery-card global__box-shadow global__border-radius">
      <div className="gallery-card__image-container">
        <ImageLoadingWrapper onClick={onClick}>
          <Image
            className="gallery-card__image global__border-radius"
            src={imagePath}
            alt={title}
            width={500}
            height={500}
            placeholder="empty"
          ></Image>
        </ImageLoadingWrapper>
        <h3 className={`gallery-card__image-title ${cardo.className}`}>
          {title}
        </h3>
      </div>
      <div className="gallery-card__info-container">
        <p className="gallery-card__price">
          {qty > 0 ? formatCurrency(price) : ""}
        </p>
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
