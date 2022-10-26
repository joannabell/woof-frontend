import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ReviewContainer from "./ReviewContainer"

function ReviewCard({ favorites, onFavoriteRestaurants, restaurant }) {
  const handleFavoriteClick = () => {
    fetch(`http://localhost:3001/restaurants/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ favorites: !favorites }),
    })
      .then((r) => r.json())
      .then(onFavoriteRestaurants);
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
          <Button variant="primary" onClick={handleFavoriteClick}>
            {favorites ? "♥" : "♡"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;
