// Hook for managing pagination logic
import { useCallback, useState } from "react";
import { UsePaginationReturnType } from "./Pagination.types";

const usePagination = <T,>(
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

export default usePagination;
