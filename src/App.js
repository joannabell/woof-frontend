import "./App.css";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import ReviewContainer from "./ReviewContainer";
import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [listings, setListings] = useState([]);
  const [favoriteRes, setFavoriteRes] = useState([]);

  const ref = useRef(null);

  const onFavoriteRestaurants = (favoriteRestaurants) => {
    const updatedRestaurantsClick = restaurants.map((restaurant) =>
      restaurant.id === favoriteRestaurants.id
        ? favoriteRestaurants
        : restaurant
    );
    setRestaurants(updatedRestaurantsClick);
  };

  function deleteRestaurant(restaurantToDelete) {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== restaurantToDelete.id);
    setRestaurants(updatedRestaurants);
    alert("Restaurant Deleted!")
}

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((data) => data.json())
      .then((restaurants) => {
        setRestaurants(restaurants);
      });

    fetch("http://localhost:9292/users")
      .then((data) => data.json())
      .then((users) => setUsers(users));

    fetch("http://localhost:9292/reviews")
      .then((data) => data.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/favorite_restaurants")
      .then((data) => data.json())
      .then((data) => setFavoriteRes(data));
  }, [restaurants]);

  const restaurantsToDisplay = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">
      <Header
        favoriteRes={favoriteRes}
        setFavoriteRes={setFavoriteRes}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        refs={ref}
        restaurantsToDisplay={restaurantsToDisplay}
        onFavoriteRestaurants={onFavoriteRestaurants}
        deleteRestaurant={deleteRestaurant}
      />
    </div>
  );
}

export default App;
