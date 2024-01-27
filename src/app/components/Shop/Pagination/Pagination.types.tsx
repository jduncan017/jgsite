export type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  itemModalOpened?: boolean;
};

export type UsePaginationReturnType<T> = {
  currentPageData: T[];
  setPage: (page: number) => void;
  totalPages: number;
};
