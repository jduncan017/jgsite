import React, { useState, useCallback } from "react";
import "./Pagination.css";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

type UsePaginationReturnType<T> = {
  currentPageData: T[];
  setPage: (page: number) => void;
  totalPages: number;
};

// Hook for managing pagination logic
export const usePagination = <T,>(
  items: T[],
  itemsPerPage: number
): UsePaginationReturnType<T> => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentPageData = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return { currentPageData, setPage, totalPages };
};

// Pagination component
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageButtons = () => {
    let pages = [];
    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      // less than 10 total pages, show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages, calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={
            currentPage === i
              ? "pagination__button pagination__button_underlined"
              : "pagination__button"
          }
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);

  return (
    <div className="pagination__container">
      <button
        className="pagination__button pagination__button_alternate"
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>
      <button
        className="pagination__button pagination__button_alternate"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPageButtons()}
      <button
        className="pagination__button pagination__button_alternate"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        className="pagination__button pagination__button_alternate"
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
