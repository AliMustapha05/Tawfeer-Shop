
import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="search"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search products"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
