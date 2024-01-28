import React from "react";
import "./ImageCard.css";
import Link from "next/link";
import ImageLoadingWrapper from "../../components/PreLoader/ImageLoadingWrapper";
import Image from "next/image";

type ImageCardProps = {
  title: string;
  imagePath: string;
  link: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, imagePath, link }) => {
  return (
    <Link href={link} className="image-card global__box-shadow">
      <ImageLoadingWrapper>
        <Image
          className="image-card__image"
          src={imagePath}
          alt={title}
          width={488}
          height={323}
        />
      </ImageLoadingWrapper>
      <h2 className="image-card__title">{title}</h2>
    </Link>
  );
};

export default ImageCard;
