"use client";
import "./Shop.css";
import { enriqueta } from "@/src/app/ui/fonts";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
};

const Shop: React.FC<ShopProps> = ({ isHomePage, limit }) => {
  // --------------------------------------- //
  //             - Declarations              //
  // --------------------------------------- //
  const searchParams = useSearchParams();
  const basePath = "/database-images/ImageGallery";
  // const currentPage = Number(searchParams?.page) || 1;
  const [modalOpened, setModalOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
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

  useEffect(() => {
    let newSearchQuery: { [key: string]: string } = {};

    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newSearchQuery[key] = value;
    }

    setSearchQuery(newSearchQuery);
  }, [searchParams]);

  const matchesSearchCriteria = (card: ImageCard) => {
    if (!searchQuery || Object.keys(searchQuery).length === 0) {
      return true; // If no search parameters, all cards match
    }

    return Object.entries(searchQuery).every(([key, value]) => {
      const lowerValue = (value as string).toLowerCase();

      switch (key) {
        case "minPrice": {
          const minPriceValue = Number(value);
          return !isNaN(minPriceValue) && card.price >= minPriceValue;
        }
        case "maxPrice": {
          const maxPriceValue = Number(value);
          return !isNaN(maxPriceValue) && card.price <= maxPriceValue;
        }
        case "inStock": {
          return (
            (value as string).toLowerCase() === "true" && card.quantity > 0
          );
        }
        case "query":
          return Object.entries(card).some(([cardKey, cardValue]) => {
            if (typeof cardValue === "string") {
              return cardValue.toLowerCase().includes(lowerValue);
            } else if (Array.isArray(cardValue)) {
              return cardValue.some((arrayItem) =>
                (arrayItem as string).toLowerCase().includes(lowerValue)
              );
            }
            return false;
          });
        default: {
          const cardValue = card[key as keyof ImageCard];

          // Handle string values
          if (typeof cardValue === "string") {
            return cardValue.toLowerCase().includes(lowerValue);
          }

          // Handle array values (e.g., woodTypes)
          if (Array.isArray(cardValue)) {
            return cardValue.some(
              (arrayItem) => (arrayItem as string).toLowerCase() === lowerValue
            );
          }

          // Handle numeric values (e.g., price, quantity)
          if (typeof cardValue === "number") {
            const numValue = Number(lowerValue);
            return !isNaN(numValue) && cardValue === numValue;
          }

          return false;
        }
      }
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
        <Link
          href="/woodshop?inStock=true"
          className="hidden__button-container"
        >
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
