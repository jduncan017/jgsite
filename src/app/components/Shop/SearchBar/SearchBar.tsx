import React, { ChangeEvent, useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { imageCards, ImageCard } from "@/src/lib/constants";
import "./SearchBar.css";

const SearchBar = () => {
  const [moreFiltersChecked, setMoreFiltersChecked] = useState(false);
  const [woodTypes, setWoodTypes] = useState<string[]>([]);
  const filterParams = ["category", "woodType", "minPrice", "maxPrice"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateUrlParams = (searchParams: URLSearchParams) => {
    router.push(`${pathname}?${searchParams.toString()}`, {
      scroll: false,
    });
  };

  // keeps more filters open if filters are active on page load
  useEffect(() => {
    const hasFilters = filterParams.some((param) => searchParams.has(param));
    setMoreFiltersChecked(hasFilters);
  }, []);

  // manages moreFilters checkbox and ties it to extra filter states
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMoreFiltersChecked(e.target.checked);
    if (!e.target.checked) {
      const newSearchParams = new URLSearchParams(searchParams);

      filterParams.forEach((param) => {
        if (newSearchParams.has(param)) {
          newSearchParams.delete(param);
        }
      });
      updateUrlParams(newSearchParams);
    }
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

  useEffect(() => {
    const woodTypesSet: Set<string> = new Set();

    imageCards.forEach((card: ImageCard) => {
      card.woodType?.forEach((type) => {
        woodTypesSet.add(type);
      });
    });

    const sortedWoodTypes = Array.from(woodTypesSet).sort();

    setWoodTypes(sortedWoodTypes);
  }, []);

  return (
    <form
      id="woodworking-filters"
      className="search-bar global__box-shadow global__border-radius"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="search-bar__inner-container">
        <div
          className={
            moreFiltersChecked
              ? "search-bar__main-options main-options__extra-padding"
              : "search-bar__main-options"
          }
        >
          {/* SEARCH BAR */}
          <div className="search-bar__search-input">
            <label htmlFor="search" className="search-bar__label">
              Search:
            </label>
            <input
              type="text"
              id="search"
              name="query"
              placeholder="Coasters, Coffee Table, etc."
              className="search-bar__input search-bar__search-field"
              onChange={(e) => handleSearchFilters(e)}
              defaultValue={searchParams.get("query")?.toString()}
            />
          </div>
          {/* FILTER OPTIONS */}
          <div className="search-bar__filter-options">
            <label className="search-bar__label">Filter By:</label>
            <div className="search-bar__filter-checkboxes">
              <label
                htmlFor="show-more-filters"
                className="search-bar__checkbox-label"
              >
                <input
                  type="checkbox"
                  id="show-more-filters"
                  name="moreFiltersChecked"
                  value="category"
                  onChange={handleCheckboxChange}
                  checked={moreFiltersChecked}
                />
                More Filters
              </label>

              {/* READY TO SHIP? */}
              <label className="search-bar__checkbox-label">
                <input
                  type="checkbox"
                  name="inStock"
                  className="search-bar__checkbox"
                  onChange={(e) => handleSearchFilters(e)}
                  checked={searchParams.get("inStock") === "true"}
                />
                Ready to Ship
              </label>
            </div>
          </div>
        </div>

        {/* Additional FILTER */}
        <div className="search-bar__filters">
          {/* CATEGORY FILTER */}
          {moreFiltersChecked && (
            <div className="search-bar__field item1">
              <label htmlFor="category" className="search-bar__label">
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="search-bar__select"
                onChange={(e) => handleSearchFilters(e)}
                defaultValue={searchParams.get("category")?.toString()}
              >
                <option value="">None</option>
                <option value="furniture">Furniture</option>
                <option value="housewares">Housewares</option>
                <option value="guitars">Guitars</option>
                <option value="accessories">Other</option>
              </select>
            </div>
          )}

          {/* WOOD TYPE FILTER */}
          {moreFiltersChecked && (
            <div className="search-bar__field item2">
              <label htmlFor="wood-type" className="search-bar__label">
                Type of Wood:
              </label>
              <select
                id="wood-type"
                name="woodType"
                className="search-bar__select"
                onChange={(e) => handleSearchFilters(e)}
                defaultValue={searchParams.get("woodType")?.toString()}
              >
                <option value="">None</option>
                {woodTypes.map((type: string) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* PRICE FILTERS */}
          {moreFiltersChecked && (
            <div className="search-bar__price-filters item3">
              <div className="search-bar__field">
                <label htmlFor="price-min" className="search-bar__label">
                  Min Price:
                </label>
                <select
                  id="min-price"
                  name="minPrice"
                  className="search-bar__select"
                  onChange={(e) => handleSearchFilters(e)}
                  defaultValue={searchParams.get("minPrice")?.toString()}
                >
                  <option value="">No Min</option>
                  <option value={50}>&gt; $50</option>
                  <option value={100}>&gt; $100</option>
                  <option value={250}>&gt; $250</option>
                  <option value={500}>&gt; $500</option>
                  <option value={1000}>&gt; $1000</option>
                </select>
              </div>

              <div className="search-bar__field">
                <label htmlFor="price-max" className="search-bar__label">
                  Max Price:
                </label>
                <select
                  id="max-price"
                  name="maxPrice"
                  className="search-bar__select"
                  onChange={(e) => handleSearchFilters(e)}
                  defaultValue={searchParams.get("maxPrice")?.toString()}
                >
                  <option value="">No Max</option>
                  <option value={1000}>&lt; $1000</option>
                  <option value={500}>&lt; $500</option>
                  <option value={250}>&lt; $250</option>
                  <option value={100}>&lt; $100</option>
                  <option value={50}>&lt; $50</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
