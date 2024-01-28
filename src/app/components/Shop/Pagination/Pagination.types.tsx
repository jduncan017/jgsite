export type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  itemModalOpened?: boolean;
  scrollTo?: () => void;
};

export type UsePaginationReturnType<T> = {
  currentPageData: T[];
  setPage: (page: number) => void;
  totalPages: number;
};
