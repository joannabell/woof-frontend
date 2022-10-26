import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ReviewContainer from "./ReviewContainer"

function ReviewCard({ restaurants, setRestaurants, restaurant }) {
    const [favorite, setFavorite] = useState(false)
    // const [favoriteRestaurants, setFavoriteRestaurants] = useState([])

    const onFavoriteRestaurants = (favoriteRestaurants) => {
        const updatedRestaurantsClick = restaurants.map((restaurant) =>
        restaurant.id === favoriteRestaurants.id ? favoriteRestaurants : restaurant
        );
        setRestaurants(updatedRestaurantsClick)
    }

 const handleFavoriteClick = () => {
    fetch(`http://localhost:9292/restaurants/${restaurant.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user_id: 1 }),
    })
      .then((r) => r.json())
      .then(data => {
        onFavoriteRestaurants(data)
      });
  };
    

  return (
    <div className="card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>
            <strong>{restaurant.name}</strong>
          </Card.Title>
          <Card.Text>
            <strong>Summary:</strong>
            <p>{restaurant.summary}</p>
            <strong>Type of Food:</strong>
            <p>{restaurant.food_type}</p>
            <strong>Price Rating:</strong>
            <p>{restaurant.price_rating}</p>
          </Card.Text>
          {restaurant.favorite ? (
            <button className="like-button" variant="primary" onClick={handleFavoriteClick}>♥</button>
          ) : (
            <button className="like-button" onClick={handleFavoriteClick}>♡</button>
          )
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;
