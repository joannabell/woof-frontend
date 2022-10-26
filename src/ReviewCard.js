import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ReviewContainer from "./ReviewContainer"

function ReviewCard({ restaurant }) {
    const [favorite, setFavorite] = useState(false)


    const handleFavoriteClick = () => {
        setFavorite((favorite) => !favorite);
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
          {favorite ? (
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
