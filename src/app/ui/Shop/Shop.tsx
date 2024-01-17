"use client";
import "./Shop.css";
import { enriqueta } from "@/src/app/ui/fonts";
import Link from "next/link";
import { useContext, useState } from "react";
import { imageCards } from "@/src/lib/constants";
import { ImageCard } from "@/src/lib/constants";
import GalleryCard from "./GalleryCard/GalleryCard";
import {
  SelectedItem,
  SelectedItemContext,
  setNoSelectedItem,
} from "@/src/contexts/selectedItemContext";
import ItemModal from "./ItemModal/ItemModal";

type ShopProps = {
  isHomePage: boolean;
  limit?: number;
};

const Shop: React.FC<ShopProps> = ({ isHomePage, limit }) => {
  // --------------------------------------- //
  //             - Declarations              //
  // --------------------------------------- //
  const basePath = "/database-images/ImageGallery";
  const cardsToDisplay = limit ? imageCards.slice(0, limit) : imageCards;
  const [modalOpened, setModalOpened] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);

  // --------------------------------------- //
  //         - Function Declarations -       //
  // --------------------------------------- //

  function toggleModal(card?: ImageCard) {
    if (modalOpened) {
      setModalOpened(false);
      setSelectedItem(setNoSelectedItem());
    } else if (card) {
      const updatedItem: SelectedItem = {
        ...card,
        displayImagePath: card.imagePaths[0] || "/",
      };
      setSelectedItem(updatedItem);
      setModalOpened(true);
    }
  }

  return (
    <div className="shop">
      <div
        className={
          isHomePage ? "shop__gallery shop__gallery-homepage" : "shop__gallery"
        }
      >
        {cardsToDisplay.map((card, index) => (
          <GalleryCard
            key={index}
            title={card.title}
            price={card.price}
            imagePath={`${basePath}${card.imagePaths[0]}`}
            onClick={() => toggleModal(card)}
          />
        ))}
      </div>
      <div className={isHomePage ? "shop__buttons" : "shop__buttons_hidden"}>
        <Link href="/woodshop" className="hidden__button-container">
          <button
            className={`shop__button global__button global__box-shadow ${enriqueta.className}`}
          >
            VIEW CURRENT INVENTORY
          </button>
        </Link>
        <Link href="/woodshop" className="hidden__button-container">
          <button
            className={`shop__button global__button global__box-shadow ${enriqueta.className}`}
          >
            VIEW ENTIRE GALLERY
          </button>
        </Link>
      </div>
      {modalOpened === true && (
        <ItemModal onClose={toggleModal} selectedItem={selectedItem} />
      )}
    </div>
  );
};

export default Shop;
