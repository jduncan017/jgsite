import React from "react";
import "./ImageCard.css";
import Image from "next/image";
import imageFiller from "@/public/guitar.jpg";
import Link from "next/link";

const ImageCard = () => {
  return (
    <div className="image-card global__box-shadow">
      <Link href={"/woodshop"}>
        <Image
          className="image-card__image"
          src={imageFiller}
          alt="image"
        ></Image>
      </Link>
      <h2 className="image-card__title">Guitars</h2>
    </div>
  );
};

export default ImageCard;
