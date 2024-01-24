import React, { ChangeEvent, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiltersVisible(e.target.checked);
  };

  return (
    <form
      id="woodworking-filters"
      action="/your-search-endpoint"
      method="GET"
      className="search-bar global__box-shadow"
    >
      <div className="search-bar__inner-container">
        <div
          className={
            filtersVisible
              ? "search-bar__main-options main-options__extra-padding"
              : "search-bar__main-options"
          }
        >
          {/* SEARCH BAR */}
          <div className="search-bar__field search-bar__search-input">
            <label htmlFor="search" className="search-bar__label">
              Search:
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Coasters, Coffee Table, etc."
              className="search-bar__input search-bar__search-field"
            />
          </div>
          <div className="main-options__filter-section">
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
                    name="filtersVisible"
                    value="category"
                    onChange={handleCheckboxChange}
                  />
                  More Filters
                </label>

                {/* READY TO SHIP? */}
                <label className="search-bar__checkbox-label">
                  <input
                    type="checkbox"
                    name="readyToShip"
                    value="true"
                    className="search-bar__checkbox"
                  />
                  Ready to Ship
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="search-bar__button global__button">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Additional FILTER */}
        <div className="search-bar__filters">
          {/* CATEGORY FILTER */}
          {filtersVisible && (
            <div className="search-bar__field">
              <label htmlFor="category" className="search-bar__label">
                Category:
              </label>
              <select
                id="category"
                name="category"
                className="search-bar__select"
              >
                <option value="none" selected>
                  None
                </option>
                <option value="furniture">Furniture</option>
                <option value="decor">Decor</option>
                <option value="accessories">Accessories</option>
                <option value="guitars">Guitars</option>
              </select>
            </div>
          )}

          {/* WOOD TYPE FILTER */}
          {filtersVisible && (
            <div className="search-bar__field">
              <label htmlFor="wood-type" className="search-bar__label">
                Type of Wood:
              </label>
              <select
                id="wood-type"
                name="woodType"
                className="search-bar__select"
              >
                <option value="none" selected>
                  None
                </option>
                <option value="oak">Oak</option>
                <option value="maple">Maple</option>
                <option value="cherry">Cherry</option>
              </select>
            </div>
          )}

          {/* PRICE FILTERS */}
          {filtersVisible && (
            <div className="search-bar__price-filters">
              <div className="search-bar__field">
                <label htmlFor="price-min" className="search-bar__label">
                  Min Price:
                </label>
                <select
                  id="min-price"
                  name="minPrice"
                  className="search-bar__select"
                >
                  <option value={0} selected>
                    No Min
                  </option>
                  <option value={50}>&gt; 50</option>
                  <option value={100}>&gt; 100</option>
                  <option value={250}>&gt; 250</option>
                  <option value={500}>&gt; 500</option>
                  <option value={1000}>&gt; 1000</option>
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
                >
                  <option value={100000} selected>
                    No Max
                  </option>
                  <option value={1000}>&lt; 1000</option>
                  <option value={500}>&lt; 500</option>
                  <option value={250}>&lt; 250</option>
                  <option value={100}>&lt; 100</option>
                  <option value={50}>&lt; 50</option>
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
