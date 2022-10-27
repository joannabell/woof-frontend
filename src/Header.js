import React, { useRef } from "react";
import Search from "./Search";
import { NavLink, Route, Routes } from "react-router-dom";
import NewRestaurantForm from "./NewRestaurantForm";
import Favorites from "./Favorites";
import ImageContainer from "./ImageContainer";
import ReviewContainer from "./ReviewContainer";
import NavBar from "./NavBar";

function Header({
  handleDeleteRestaurant,
  restaurantsToDisplay,
  refs,
  searchTerm,
  setSearchTerm,
  restaurants,
  setRestaurants,
  favoriteRes,
  setFavoriteRes,
  onFavoriteRestaurants,
  deleteRestaurant
}) {
  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants([newRestaurant, ...restaurants]);
  };

  console.log(favoriteRes)

  return (
    <div>
      <h1>
        <span id="header-project" className="title-text">
          woof 🐾
        </span>
      </h1>

      <div className="nav-links">
        <div className="right">
          <Routes>
            <Route
              path="/user"
              element={
                <div>
                  <NavBar />
                  <NewRestaurantForm
                    handleAddRestaurant={handleAddRestaurant}
                  />
                </div>
              }
            />
            <Route
              path="/favorites"
              element={
                <div>
                  <NavBar />
                  <Favorites
                    favoriteRes={favoriteRes}
                    setFavoriteRes={setFavoriteRes}
                    onFavoriteRestaurants={onFavoriteRestaurants}
                    deleteRestaurant={deleteRestaurant}
                  />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div>
                  <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />
                  <NavBar />
                  <ImageContainer refs={refs} />
                  <ReviewContainer
                    refs={refs}
                    handleDeleteRestaurant={handleDeleteRestaurant}
                    restaurants2={restaurants}
                    setRestaurants={setRestaurants}
                    restaurants={restaurantsToDisplay}
                    onFavoriteRestaurants={onFavoriteRestaurants}
                    deleteRestaurant={deleteRestaurant}
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Header;
