import React, { useState, ReactElement } from "react";
import Loader from "./PreLoader";
import errorImage from "@/public/pre-loader/image-error.png";

type LoadingImageProps = {
  children: ReactElement;
  onMouseEnter?: () => void;
  onClick?: () => void;
};

const ImageLoadingWrapper: React.FC<LoadingImageProps> = ({
  children,
  onMouseEnter,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => setIsLoading(false);
  const handleError = () => setIsError(true);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <img
          src={errorImage.src}
          alt="error image"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      {!isError &&
        children &&
        React.cloneElement(children, {
          onLoad: handleImageLoad,
          onError: handleError,
          onMouseEnter: onMouseEnter,
          onClick: onClick,
        })}
    </>
  );
};

export default ImageLoadingWrapper;
