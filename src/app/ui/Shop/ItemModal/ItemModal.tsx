"use client";
import useEscape from "@/src/hooks/useEscape";
import "./ItemModal.css";
import { useContext, useState, useEffect } from "react";
import formatCurrency from "@/src/utils/numberFormat";
import LoadingImage from "../../PreLoader/LoadingImage";
import {
  SelectedItemContext,
  SelectedItem,
} from "@/src/contexts/selectedItemContext";
import useSwipe from "@/src/hooks/useSwipe";

type ItemModal = {
  onClose: () => void;
  selectedItem: SelectedItem;
};

const ItemModal: React.FC<ItemModal> = ({ onClose, selectedItem }) => {
  const basePath = "/database-images/ImageGallery";
  const { setSelectedItem } = useContext(SelectedItemContext);
  const [inStock, setInStock] = useState(false);
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentImageIndex,
    updateIndex,
  } = useSwipe(selectedItem.imagePaths);

  // close modal on 'esc'
  useEscape(onClose);

  // for onMouseEnter on image thumbnails
  function updateDisplayImage(imagePath: string, index: number) {
    updateIndex(index);
    setSelectedItem((currentItem) => ({
      ...currentItem,
      displayImagePath: imagePath,
    }));
  }

  useEffect(() => {
    updateDisplayImage(
      selectedItem.imagePaths[currentImageIndex],
      currentImageIndex
    );
  }, [currentImageIndex, selectedItem.imagePaths]);

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
        <div
          className="item-modal__image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <LoadingImage
            key={selectedItem.displayImagePath} //setting imagePath as key forces re-render when imagePath changes on Hover
            className="item-modal__image"
            alt={selectedItem.title}
            src={`${basePath}${selectedItem.displayImagePath}`}
            fill={true}
            sizes="(max-width: 1400px) 36vw, (max-width: 1200px) 44vw, (max-width: 920px) 41vw, (max-width: 750px) 70vw, (max-width: 550px) 90vw, 36vw"
          />
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
                <LoadingImage
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
                  onMouseEnter={() => updateDisplayImage(imagePath, index)}
                />
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
