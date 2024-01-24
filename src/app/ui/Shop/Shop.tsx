"use client";
import "./Shop.css";
import { enriqueta } from "@/src/app/ui/fonts";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { imageCards } from "@/src/lib/constants";
import { ImageCard } from "@/src/lib/constants";
import GalleryCard from "./GalleryCard/GalleryCard";
import {
  SelectedItem,
  SelectedItemContext,
  setNoSelectedItem,
} from "@/src/contexts/selectedItemContext";
import ItemModal from "./ItemModal/ItemModal";
import SearchBar from "./SearchBar/SearchBar";

type ShopProps = {
  isHomePage: boolean;
  limit?: number;
  searchParams?: {
    query?: string;
    page?: string;
  };
};

const Shop: React.FC<ShopProps> = ({ isHomePage, limit, searchParams }) => {
  // --------------------------------------- //
  //             - Declarations              //
  // --------------------------------------- //
  const basePath = "/database-images/ImageGallery";
  const query = searchParams?.query?.toLowerCase() || "";
  const currentPage = Number(searchParams?.page) || 1;
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

  // stops bodyscroll when modal is open
  useEffect(() => {
    if (modalOpened) {
      document.body.classList.add("global__no-scroll");
    } else {
      document.body.classList.remove("global__no-scroll");
    }
  }, [modalOpened]);

  const matchesSearchCriteria = (card: ImageCard) => {
    // Ensure searchParams is defined and not empty
    if (!searchParams || Object.keys(searchParams).length === 0) {
      return true; // If no search parameters, all cards match
    }

    return Object.entries(searchParams).every(([key, value]) => {
      if (!value) return true; // Skip if search value is empty
      const lowerValue = value.toLowerCase();
      const cardValue = card[key as keyof ImageCard];

      // Handle string values
      if (typeof cardValue === "string") {
        return cardValue.toLowerCase().includes(lowerValue);
      }

      // Handle array values (e.g., woodTypes)
      if (Array.isArray(cardValue)) {
        return cardValue.some((item) =>
          item.toLowerCase().includes(lowerValue)
        );
      }

      // Handle numeric values (e.g., price, quantity)
      if (typeof cardValue === "number") {
        // Assuming numeric search is for exact match (can be adjusted as needed)
        return cardValue === Number(lowerValue);
      }

      return false; // If the key doesn't match any known type, return false
    });
  };

  // Filter the cards based on search parameters
  const filteredCards = imageCards.filter(matchesSearchCriteria);
  const cardsToDisplay = limit ? filteredCards.slice(0, limit) : filteredCards;

  return (
    <div className="shop">
      <div className={!isHomePage ? "" : "shop__buttons_hidden"}>
        <SearchBar />
      </div>
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
        <ItemModal
          onClose={toggleModal}
          selectedItem={selectedItem}
          onClick={() => setModalOpened(false)}
        />
      )}
    </div>
  );
};

export default Shop;
