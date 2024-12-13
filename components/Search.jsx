import React from "react";

export default function Search({ setQuery }) {
  return (
    <div className="search-filter-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        onChange={(e)=> setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search for a Country..."
      />
    </div>
  );
}
