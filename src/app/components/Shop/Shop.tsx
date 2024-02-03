"use client";
//Imports
import "./Shop.css";
import { enriqueta } from "@/src/app/components/fonts";
import Link from "next/link";
import { useContext, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { imageCards } from "@/src/lib/constants";
import { ImageCard } from "@/src/lib/constants";
import GalleryCard from "./GalleryCard/GalleryCard";
import {
  SelectedItem,
  SelectedItemContext,
} from "@/src/contexts/selectedItemContext";
import ItemModal from "./ItemModal/ItemModal";
import SearchBar from "./SearchBar/SearchBar";
import { searchFilterCriteria } from "@/src/app/components/Shop/SearchFilterCriteria";
import Pagination from "./Pagination/Pagination";
import usePagination from "./Pagination/usePagination";

type ShopProps = {
  isHomePage: boolean;
  limit?: number;
};

// SHOP COMPONENT
const Shop: React.FC<ShopProps> = ({ isHomePage, limit = 8 }) => {
  // --------------------------------------- //
  //         - VARIABLES & STATES -          //
  // --------------------------------------- //
  const searchParams = useSearchParams();
  const basePath = "/database-images/ImageGallery";
  const [modalOpened, setModalOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
  const [paginationVisible, setPaginationVisible] = useState(false);
  const [itemLimit, setItemLimit] = useState(limit);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // --------------------------------------- //
  //               - FUNCTIONS -             //
  // --------------------------------------- //
  // Filter the cards based on search parameters
  const filteredCards = imageCards.filter(searchFilterCriteria(searchQuery));
  const { currentPageData, setPage } = usePagination<ImageCard>(
    filteredCards,
    itemLimit
  );

  function toggleModal(card?: ImageCard) {
    if (modalOpened) {
      setModalOpened(false);
      setSelectedItem(null);
    } else if (card) {
      const updatedItem: SelectedItem = {
        ...card,
        displayImagePath: card.imagePaths[0] || "/",
      };
      setSelectedItem(updatedItem);
      setModalOpened(true);
    }
  }

  const scrollToSearchBar = () => {
    searchBarRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --------------------------------------- //
  //              - USE EFFECTS -            //
  // --------------------------------------- //
  // update current search queries
  useEffect(() => {
    let newSearchQuery: { [key: string]: string } = {};
    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newSearchQuery[key] = value;
    }
    setSearchQuery(newSearchQuery);
  }, [searchParams]);

  //update pagination visiibility
  useEffect(() => {
    if (filteredCards.length <= itemLimit) {
      setPaginationVisible(false);
      return;
    } else {
      setPaginationVisible(true);
      return;
    }
  }, [searchParams, itemLimit, filteredCards.length]);

  //update items to display based on view width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 710 && window.innerWidth <= 825) {
        setItemLimit(9);
      } else {
        setItemLimit(limit);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [limit, setItemLimit]);

  // stops bodyscroll when modal is open
  useEffect(() => {
    if (modalOpened) {
      document.body.classList.add("global__no-scroll");
    } else {
      document.body.classList.remove("global__no-scroll");
    }
  }, [modalOpened]);

  // --------------------------------------- //
  //                 - HTML -                //
  // --------------------------------------- //
  return (
    <div className="shop">
      <div
        ref={searchBarRef}
        className={!isHomePage ? "" : "shop__buttons_hidden"}
      >
        <SearchBar />
      </div>
      {currentPageData.length === 0 && (
        <p className="shop__cards-empty">
          Sorry, but it seems there are no items that fit this search criteria.
        </p>
      )}
      <div
        className={
          isHomePage ? "shop__gallery shop__gallery-homepage" : "shop__gallery"
        }
      >
        {currentPageData.map((card, index) => (
          <GalleryCard
            key={index}
            title={card.title}
            price={card.price}
            qty={card.quantity}
            imagePath={`${basePath}${card.imagePaths[0]}`}
            onClick={() => toggleModal(card)}
          />
        ))}
      </div>
      {isHomePage && (
        <div className="shop__buttons">
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
      )}
      {!isHomePage && paginationVisible && (
        <div className="shop__pagination global__box-shadow global__border-radius">
          <Pagination
            totalItems={filteredCards.length}
            itemsPerPage={itemLimit}
            onPageChange={setPage}
            itemModalOpened={modalOpened}
            scrollTo={scrollToSearchBar}
          />
        </div>
      )}
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
