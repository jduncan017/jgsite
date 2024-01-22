"use client";
import useEscape from "@/src/hooks/useEscape";
import "./ItemModal.css";
import { useState, useEffect, useRef } from "react";
import formatCurrency from "@/src/utils/numberFormat";
import ImageLoadingWrapper from "../../PreLoader/ImageLoadingWrapper";
import Image from "next/image";
import { SelectedItem } from "@/src/contexts/selectedItemContext";
import useSwipe from "@/src/hooks/useSwipe";

type ItemModal = {
  onClose: () => void;
  selectedItem: SelectedItem;
};

const ItemModal: React.FC<ItemModal> = ({ onClose, selectedItem }) => {
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
  } = useSwipe(selectedItem.imagePaths, imageContainerRef);

  // close modal on 'esc'
  useEscape(onClose);

  const handleThumbnailInteraction = (index: number) => {
    const containerWidth = imageContainerRef.current?.offsetWidth || 0;
    const newOffset = containerWidth * index;
    setCurrentImageIndex(index);
    setCurrentOffset(newOffset);
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.offsetWidth;
      imageContainerRef.current.scrollLeft = imageWidth * currentImageIndex;
    }
  }, [currentImageIndex]);

  // sets state to reflect item stock
  useEffect(() => {
    function updateInStock(itemQuantity: number) {
      setInStock(itemQuantity > 0);
    }
    updateInStock(selectedItem.quantity);
  }, [selectedItem.quantity]);

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
            {selectedItem.imagePaths.map((imagePath, index) => (
              <div className="image-container" key={index}>
                <ImageLoadingWrapper>
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
            <h2 className="item-modal__title">{selectedItem.title}</h2>
            <p className="item-modal__price">
              {formatCurrency(selectedItem.price)}
            </p>
            <h2 className="item-modal__description">Description:</h2>
            <p className="item-modal__description-text">
              {selectedItem.description}
            </p>
            <div className="item-modal__purchase-section">
              <button className="item-modal__button global__button">
                {inStock ? `Purchase` : `Inquire`}
              </button>
              {inStock ? (
                <p className="item-modal__stock">
                  In Stock: {selectedItem.quantity}
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
            {selectedItem.imagePaths.map((imagePath, index) => (
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
