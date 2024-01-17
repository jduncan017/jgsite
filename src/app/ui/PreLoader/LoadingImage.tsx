// LoadingImage.tsx

/* This file is a custom wrapper for the next/image 
component that provides the image Loader */

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Loader from "./PreLoader";
import errorImage from "@/public/pre-loader/image-error.png";

type LoadingImageProps = {
  className: string;
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  objectFit?: string;
  quality?: number;
  onMouseEnter?: () => void;
  onClick?: () => void;
};

const LoadingImage: React.FC<LoadingImageProps> = ({
  className,
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  objectFit,
  quality,
  onMouseEnter,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            border: "#7C7C83 solid 4px",
            boxSizing: "border-box",
          }}
        >
          <Image
            style={{ width: "45%", height: "auto" }}
            src={errorImage}
            alt="error image"
            width={540}
            height={540}
          />
        </div>
      )}

      {!isError && (
        <Image
          className={className}
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          sizes={sizes}
          objectFit={objectFit}
          onLoad={handleImageLoad}
          quality={quality}
          onError={handleError}
          onMouseEnter={onMouseEnter}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default LoadingImage;
