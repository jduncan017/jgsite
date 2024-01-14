"use client";
import useEscape from "@/src/hooks/useEscape";
import "./ItemModal.css";
import Image from "next/image";
import { useContext } from "react";
import {
  SelectedItemContext,
  SelectedItem,
} from "@/src/contexts/selectedItemContext";

type ItemModal = {
  onClose: () => void;
  selectedItem: SelectedItem;
};

const ItemModal: React.FC<ItemModal> = ({ onClose, selectedItem }) => {
  const basePath = "/ImageGallery";
  const { setSelectedItem } = useContext(SelectedItemContext);
  useEscape(onClose);

  function updateDisplayImage(imagePath: string) {
    setSelectedItem((currentItem) => ({
      ...currentItem,
      displayImagePath: imagePath,
    }));
  }

  return (
    <div className="modal item-modal" id="item-modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="item-modal__container">
        {/* images section */}
        <div className="item-modal__image-container">
          <Image
            className="item-modal__image"
            alt={selectedItem.title}
            src={`${basePath}${selectedItem.displayImagePath}`}
            width={500}
            height={500}
          />
        </div>
        {/* info section */}
        <div className="item-modal__info-container">
          <div className="item-modal__info-container-info">
            <h2 className="item-modal__title">{selectedItem.title}</h2>
            <p className="item-modal__price">
              ${selectedItem.price.toFixed(2)}
            </p>
            <h2 className="item-modal__description">Description:</h2>
            <p className="item-modal__description-text">
              {selectedItem.description}
            </p>

            <div className="item-modal__stock">
              {selectedItem.quantity > 0 ? (
                <p className="item-modal__in-stock">
                  {`In Stock: ${selectedItem.quantity}`}
                </p>
              ) : (
                <>
                  <p className="item-modal__out-of-stock">Out of Stock</p>
                  <p className="out-of-stock__description">
                    Inquire below if you're interested, we can always make
                    another or similar item
                  </p>
                </>
              )}
            </div>
            <button className="item-modal__button global__button">
              {selectedItem.quantity > 0 ? `Purchase` : `Inquire`}
            </button>
          </div>
          <div className="item-modal__image-carousel">
            {selectedItem.imagePaths.map((imagePath, index) => (
              <Image
                className={
                  selectedItem.displayImagePath === imagePath
                    ? "item-modal__thumbnail selected-thumbnail"
                    : "item-modal__thumbnail"
                }
                key={index}
                src={`${basePath}${imagePath}`}
                width={150}
                height={150}
                alt={`Image #${index}`}
                onMouseEnter={() => updateDisplayImage(imagePath)}
              />
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
