import React from "react";
import "./ImageCard.css";
import Image from "next/image";
import imageFiller from "@/public/guitar.jpg";
import Link from "next/link";

type ImageCardProps = {
  title: string;
  imagePath: string;
  link: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, imagePath, link }) => {
  return (
    <Link href={link} className="image-card global__box-shadow">
      <Image
        className="image-card__image"
        src={imagePath}
        alt={title}
        width={550}
        height={350}
      ></Image>
      <h2 className="image-card__title">{title}</h2>
    </Link>
  );
};

export default ImageCard;
