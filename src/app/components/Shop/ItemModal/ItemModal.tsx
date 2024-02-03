"use client";
import useEscape from "@/src/hooks/useEscape";
import "./ItemModal.css";
import { useState, useEffect, useRef, useCallback } from "react";
import formatCurrency from "@/src/utils/numberFormat";
import ImageLoadingWrapper from "../../PreLoader/ImageLoadingWrapper";
import Image from "next/image";
import Link from "next/link";
import { SelectedItem } from "@/src/contexts/selectedItemContext";
import useSwipe from "@/src/hooks/useSwipe";

type ItemModal = {
  onClose: () => void;
  selectedItem?: SelectedItem | null;
  onClick: () => void;
};

const ItemModal: React.FC<ItemModal> = ({ onClose, selectedItem, onClick }) => {
  const basePath = "/database-images/ImageGallery";
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [inStock, setInStock] = useState(false);
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentImageIndex,
    setCurrentImageIndex,
    currentOffset,
    setCurrentOffset,
  } = useSwipe(imageContainerRef, selectedItem?.imagePaths);

  // close modal on 'esc'
  useEscape(onClose);

  function capitalizeFirstLetter(string: string) {
    return string
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function formatWoodTypes(woodTypes?: string[]) {
    if (!woodTypes || woodTypes.length === 0) {
      return "";
    }

    switch (woodTypes.length) {
      case 1:
        return `${capitalizeFirstLetter(woodTypes[0])}.`;

      case 2:
        return `${woodTypes.map(capitalizeFirstLetter).join(" & ")}.`;

      default:
        const last = woodTypes.length - 1;
        return `${woodTypes
          .map((wood, index) => {
            return (
              capitalizeFirstLetter(wood) +
              (index === last ? "." : index === last - 1 ? ", & " : ", ")
            );
          })
          .join("")}`;
    }
  }

  // Function to handle thumbnail interaction
  const handleThumbnailInteraction = useCallback(
    (index: number) => {
      const containerWidth = imageContainerRef.current?.offsetWidth || 0;
      const newOffset = containerWidth * index;
      setCurrentOffset(newOffset);
    },
    [setCurrentOffset]
  );

  // Effect to handle arrow key navigation
  useEffect(() => {
    const handleArrowKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setCurrentImageIndex((prevIndex) => {
          if (selectedItem) {
            if (event.key === "ArrowLeft") {
              return Math.max(prevIndex - 1, 0);
            } else if (event.key === "ArrowRight") {
              return Math.min(
                prevIndex + 1,
                selectedItem.imagePaths.length - 1
              );
            }
          }
          return prevIndex;
        });
      }
    };

    window.addEventListener("keydown", handleArrowKey);
    return () => window.removeEventListener("keydown", handleArrowKey);
  }, [setCurrentImageIndex, selectedItem]);

  // Effect to handle thumbnail interaction when index changes
  useEffect(() => {
    handleThumbnailInteraction(currentImageIndex);
  }, [currentImageIndex, handleThumbnailInteraction]);

  useEffect(() => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.offsetWidth;
      imageContainerRef.current.scrollLeft = imageWidth * currentImageIndex;
    }
  }, [currentImageIndex]);

  // sets state to reflect item stock
  useEffect(() => {
    if (selectedItem) {
      function updateInStock(itemQuantity: number) {
        setInStock(itemQuantity > 0);
      }
      updateInStock(selectedItem.quantity);
    }
  }, [selectedItem]);

  return (
    <div className="modal item-modal" id="item-modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="item-modal__container">
        {/* images section */}
        <div className="item-modal__image-container">
          <div
            className="item-modal__image-wrapper"
            ref={imageContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(${-currentOffset}px)` }}
          >
            {selectedItem?.imagePaths.map((imagePath, index) => (
              <div className="image-container" key={index}>
                <ImageLoadingWrapper>
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    className="item-modal__image"
                    alt={selectedItem.title}
                    src={`${basePath}${imagePath}`}
                  />
                </ImageLoadingWrapper>
              </div>
            ))}
          </div>
        </div>

        {/* info section */}
        <div className="item-modal__info-container">
          <div className="item-modal__info-container-info">
            <h2 className="item-modal__title">{selectedItem?.title}</h2>
            {
              <p className="item-modal__price">
                {(selectedItem?.quantity ?? 0) > 0 &&
                  formatCurrency(selectedItem?.price)}
              </p>
            }
            <h2 className="item-modal__description">Description:</h2>
            <p className="item-modal__description-text">
              {selectedItem?.description}
            </p>
            <div className="item-modal__wood-types">
              <h3 className="wood-types__title">Woods Used:</h3>
              <p className="item-modal__description-text wood-types__description">
                {formatWoodTypes(selectedItem?.woodType)}
              </p>
            </div>
            <div className="item-modal__purchase-section">
              <Link href={"/contact"} className="item-modal__button-wrapper">
                <button
                  className="item-modal__button global__button"
                  onClick={onClick}
                >
                  {inStock ? `Purchase` : `Inquire`}
                </button>
              </Link>
              {inStock ? (
                <p className="item-modal__stock">
                  In Stock: {selectedItem?.quantity}
                </p>
              ) : (
                <p className="item-modal__stock item-modal__out-of-stock">
                  Out of Stock
                </p>
              )}
            </div>
            {!inStock && (
              <p className="out-of-stock__description">
                Inquire to request a similar or duplicate item.
              </p>
            )}
          </div>

          {/* image thumbnails */}
          <div className="item-modal__thumbnail-images">
            {selectedItem?.imagePaths.map((imagePath, index) => (
              <div key={index} className="item-modal__thumbnail-container">
                <ImageLoadingWrapper
                  onMouseEnter={() => handleThumbnailInteraction(index)}
                  onClick={() => handleThumbnailInteraction(index)}
                >
                  <Image
                    className={
                      selectedItem.displayImagePath === imagePath
                        ? "item-modal__thumbnail selected-thumbnail"
                        : "item-modal__thumbnail"
                    }
                    src={`${basePath}${imagePath}`}
                    width={171.5}
                    height={171.5}
                    quality={80}
                    alt={`Image #${index}`}
                  />
                </ImageLoadingWrapper>
              </div>
            ))}
          </div>
        </div>

        {/* close button */}
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default ItemModal;
