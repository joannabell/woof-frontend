import React from "react";
import Header from "./Header";
import ReviewCard from "./ReviewCard";
import SearchBar from "./SearchBar"

function Search({
    restaurants,
    searchValue,
    handleSearchChange,
    searchQuery,
    updateSearchQuery,
    handleCardClick,
}) {
  const showRestaurants = restaurants.map((restaurant) => (
    <ReviewCard handleCardClick={handleCardClick} restaurant={restaurant} />
  ));

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        updateSearchQuery={updateSearchQuery}
      />
      <p style={{ marginTop: "20px" }}>
        {searchQuery.length === 0
          ? ""
          : `showing results for ${searchQuery}...`}
      </p>
      <div className="reviews-container">{showRestaurants}</div>
    </div>
  );
}

export default Search;
