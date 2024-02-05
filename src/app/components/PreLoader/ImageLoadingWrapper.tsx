import React, { useState, ReactElement } from "react";
import Loader from "./PreLoader";
import errorImage from "@/public/pre-loader/image-error.svg";
import Image from "next/image";

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
            width={300}
            height={300}
            onLoad={handleImageLoad}
          />
        </div>
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
