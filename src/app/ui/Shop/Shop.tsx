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
import { searchFilterCriteria } from "@/src/app/ui/Shop/SearchFilterCriteria";
import Pagination, { usePagination } from "./Pagination/Pagination";

type ShopProps = {
  isHomePage: boolean;
  limit?: number;
};

const Shop: React.FC<ShopProps> = ({ isHomePage, limit = 24 }) => {
  // --------------------------------------- //
  //             - Declarations              //
  // --------------------------------------- //
  const searchParams = useSearchParams();
  const basePath = "/database-images/ImageGallery";
  // const currentPage = Number(searchParams?.page) || 1;
  const [modalOpened, setModalOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
  const [paginationVisible, setPaginationVisible] = useState(false);
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

  // update current search queries
  useEffect(() => {
    let newSearchQuery: { [key: string]: string } = {};
    const entriesArray = Array.from(searchParams.entries());
    for (const [key, value] of entriesArray) {
      newSearchQuery[key] = value;
    }
    setSearchQuery(newSearchQuery);
  }, [searchParams]);

  // Filter the cards based on search parameters
  const filteredCards = imageCards.filter(searchFilterCriteria(searchQuery));
  const { currentPageData, setPage } = usePagination<ImageCard>(
    filteredCards,
    limit
  );

  //update pagination visiibility
  useEffect(() => {
    if (filteredCards.length <= limit) {
      setPaginationVisible(false);
      return;
    } else {
      setPaginationVisible(true);
      return;
    }
  }, [searchParams, limit, filteredCards.length]);

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
        {currentPageData.map((card, index) => (
          <GalleryCard
            key={index}
            title={card.title}
            price={card.price}
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
        <div className="shop__pagination global__box-shadow">
          <Pagination
            totalItems={filteredCards.length}
            itemsPerPage={limit}
            onPageChange={setPage}
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
