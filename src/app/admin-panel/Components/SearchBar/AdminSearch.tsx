"use client";

import React, { ChangeEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import "./AdminSearch.css";

const AdminSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateUrlParams = (searchParams: URLSearchParams) => {
    router.push(`${pathname}?${searchParams.toString()}`, {
      scroll: false,
    });
  };

  // handle filters and search queries
  const handleSearchFilters = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (e.target.type === "checkbox") {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        newSearchParams.set(target.name, "true");
      } else {
        newSearchParams.delete(target.name);
      }
    } else {
      if (e.target.value) {
        newSearchParams.set(e.target.name, e.target.value);
      } else {
        newSearchParams.delete(e.target.name);
      }
    }
    updateUrlParams(newSearchParams);
  };

  return (
    <form
      id="woodworking-filters"
      className="admin-search-bar global__box-shadow global__border-radius"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="admin-search-bar__search-input">
        <label htmlFor="query" className="admin-search-bar__label">
          Search:
        </label>
        <input
          type="text"
          id="admin-search"
          name="query"
          placeholder="Coasters, Coffee Table, etc."
          className="admin-search-bar__input"
          onChange={(e) => handleSearchFilters(e)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <button type="button" className="admin-search-button global__button">
        Add Item
      </button>
    </form>
  );
};

export default AdminSearch;
