"use client";
import React, { Suspense } from "react";
import "./Page.css";
import AdminSearch from "./Components/SearchBar/AdminSearch";
import { useContext, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { imageCards } from "@/src/lib/constants";
import { ImageCard } from "@/src/lib/constants";
import GalleryCard from "@/src/app/components/Shop/GalleryCard/GalleryCard";
import {
  SelectedItem,
  SelectedItemContext,
  setNoSelectedItem,
} from "@/src/contexts/selectedItemContext";
import ItemModal from "@/src/app/components/Shop/ItemModal/ItemModal";
import { searchFilterCriteria } from "@/src/app/components/Shop/SearchFilterCriteria";
import Pagination from "@/src/app/components/Shop/Pagination/Pagination";
import usePagination from "@/src/app/components/Shop/Pagination/usePagination";

const AdminPanelItems = () => {
  // --------------------------------------- //
  //         - VARIABLES & STATES -          //
  // --------------------------------------- //
  const searchParams = useSearchParams();
  const basePath = "/database-images/ImageGallery";
  const [modalOpened, setModalOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
  const [paginationVisible, setPaginationVisible] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const itemLimit = 24;

  // --------------------------------------- //
  //               - FUNCTIONS -             //
  // --------------------------------------- //
  // Filter the cards based on search parameters
  const filteredCards = imageCards
    .filter(searchFilterCriteria(searchQuery))
    .sort((a, b) => a.title.localeCompare(b.title));
  const { currentPageData, setPage } = usePagination<ImageCard>(
    filteredCards,
    itemLimit
  );

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
    <div className="admin-items">
      <Suspense>
        <AdminSearch />
      </Suspense>
      <div className={"admin-items__gallery"}>
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
      {paginationVisible && (
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

export default AdminPanelItems;
