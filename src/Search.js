import React from "react";
import "./Search";

function Search({ searchTerm, setSearchTerm }) {
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="prompt"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
