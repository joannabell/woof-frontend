import Card from "react-bootstrap/Card";

function ReviewCard({ deleteRestaurant, onFavoriteRestaurants, restaurant }) {


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

  function handleDeleteClick() {
    fetch(`http://localhost:9292/restaurants/${restaurant.id}`, {
    method: "DELETE"
  })
    .then((response) => response.json())
    .then(() => {
        deleteRestaurant(restaurant)
  })
  }
    

  return (
    <div className="card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>
            <strong>{restaurant?.name}</strong>
          </Card.Title>
          <Card.Text>
            <strong>Summary:</strong>
            <p>{restaurant?.summary.substr(0, restaurant.summary.indexOf('.', 1))}.</p>
            <strong>Type of Food:</strong>
            <p>{restaurant?.food_type}</p>
            <strong>Price Rating:</strong>
            <p>{restaurant?.price_rating}</p>
          </Card.Text>
          {restaurant?.favorite ? (
            <button className="like-button" variant="primary" onClick={handleFavoriteClick}>♥</button>
          ) : (
            <button className="like-button" onClick={handleFavoriteClick}>♡</button>
          )
          }
          <button onClick={handleDeleteClick} className="delete-button">🗑</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewCard;
