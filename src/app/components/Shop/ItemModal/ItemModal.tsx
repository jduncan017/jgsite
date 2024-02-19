"use client";
import useEscape from "@/src/hooks/useEscape";
import "./ItemModal.css";
import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import formatCurrency from "@/src/utils/numberFormat";
import ImageLoadingWrapper from "../../PreLoader/ImageLoadingWrapper";
import Image from "next/image";
import { SelectedItem } from "@/src/contexts/selectedItemContext";
import useSwipe from "@/src/hooks/useSwipe";
import { useModal } from "@/src/contexts/ModalContext";
import ContactForm from "@/src/app/components/ContactForm/ContactForm";
import closeButton from "@/public/shared/close-button.svg";

type ItemModal = {
  onClose: () => void;
  selectedItem?: SelectedItem | null;
  transferToContactModal: () => void;
};

const ItemModal: React.FC<ItemModal> = ({
  onClose,
  selectedItem,
  transferToContactModal,
}) => {
  const BASE_PATH = "/database-images/ImageGallery";
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [inStock, setInStock] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentImageIndex,
    setCurrentImageIndex,
    currentOffset,
    setCurrentOffset,
  } = useSwipe(imageContainerRef, selectedItem?.imagePaths);
  const { showModal } = useModal();

  function showContactModal(content: ReactNode) {
    transferToContactModal();
    showModal(content);
  }

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
      setSelectedThumbnail(index);
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
        <section className="item-modal__image-container">
          <div
            className="item-modal__image-wrapper"
            ref={imageContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateX(${-currentOffset}px)` }}
          >
            {selectedItem &&
              selectedItem.imagePaths.map((imagePath, index) => (
                <div className="image-container" key={index}>
                  <ImageLoadingWrapper>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                      className="item-modal__image"
                      alt={selectedItem.title}
                      src={`${BASE_PATH}${imagePath}`}
                    />
                  </ImageLoadingWrapper>
                </div>
              ))}
          </div>
        </section>

        {/* info section */}
        <section className="item-modal__info-container">
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

            {/* purchase section */}
            <section className="item-modal__purchase-section">
              <button
                className="item-modal__button global__button"
                onClick={() => showContactModal(<ContactForm />)}
                type="button"
              >
                {inStock ? `Purchase` : `Inquire`}
              </button>
              {inStock ? (
                <p className="item-modal__stock">
                  In Stock: {selectedItem?.quantity}
                </p>
              ) : (
                <p className="item-modal__stock item-modal__out-of-stock">
                  Out of Stock
                </p>
              )}
            </section>
            {!inStock && (
              <p className="out-of-stock__description">
                Inquire to request a similar or duplicate item.
              </p>
            )}
          </div>

          {/* image thumbnails */}
          <section className="item-modal__thumbnail-images">
            {selectedItem &&
              selectedItem.imagePaths.map((imagePath, index) => (
                <div key={index} className="item-modal__thumbnail-container">
                  <ImageLoadingWrapper
                    onMouseEnter={() => handleThumbnailInteraction(index)}
                    onClick={() => handleThumbnailInteraction(index)}
                  >
                    <Image
                      className={
                        selectedThumbnail === index
                          ? "item-modal__thumbnail selected-thumbnail"
                          : "item-modal__thumbnail"
                      }
                      src={`${BASE_PATH}${imagePath}`}
                      width={171.5}
                      height={171.5}
                      quality={80}
                      alt={`Image #${index}`}
                    />
                  </ImageLoadingWrapper>
                </div>
              ))}
          </section>
        </section>

        {/* close button */}
        <button className="modal__close-button" type="button" onClick={onClose}>
          <Image src={closeButton} alt="close button" height={20} width={20} />
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
