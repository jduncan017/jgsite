import React, { useState, useEffect, useCallback } from "react";
import "./Pagination.css";
import { PaginationProps } from "./Pagination.types";
import TipModal from "./TipModal/TipModal";

// Pagination component
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  itemModalOpened,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  //save modal data in local storage so it doesn't re-appear for user
  const showTipModal = useCallback(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (modalShown !== "true") {
      setShowModal(true);
      localStorage.setItem("modalShown", "true");
      setTimeout(() => {
        setShowModal(false);
      }, 6000);
    }
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      if (!showModal) {
        showTipModal();
      }

      setCurrentPage(page);
      onPageChange(page);
    },
    [showTipModal, onPageChange, showModal]
  );

  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);

  const handleArrowKey = useCallback(
    (event: KeyboardEvent) => {
      if (!itemModalOpened) {
        if (event.key === "ArrowLeft" && currentPage > 1) {
          handlePageChange(currentPage - 1);
        } else if (event.key === "ArrowRight" && currentPage < totalPages) {
          handlePageChange(currentPage + 1);
        }
      }
    },
    [itemModalOpened, currentPage, totalPages, handlePageChange]
  );

  // navigation with arrow keys
  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleArrowKey);
    };
  }, [currentPage, totalPages, handleArrowKey]);

  const renderPageButtons = () => {
    const pages = [];
    const range = 2; // Number of pages to display before and after the current page
    const startPage = Math.max(1, currentPage - range);
    const endPage = Math.min(totalPages, currentPage + range);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination__button ${
            currentPage === i ? "pagination__button_underlined" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination__container">
      {showModal && <TipModal />}
      <button
        className="pagination__button pagination__button_alternate"
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        aria-label="Go to first page"
      >
        &lt;&lt;
      </button>
      <button
        className="pagination__button pagination__button_alternate"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        &lt;
      </button>
      {renderPageButtons()}
      <button
        className="pagination__button pagination__button_alternate"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        &gt;
      </button>
      <button
        className="pagination__button pagination__button_alternate"
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
