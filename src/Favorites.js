import ReviewCard from "./ReviewCard";

function Favorites({ deleteRestaurant, onFavoriteRestaurants, favoriteRes, setFavoriteRes }) {
  const favoriteCard = favoriteRes.map((res) => {
    return (
      <ReviewCard
        key={res.id}
        restaurant={res}
        onFavoriteRestaurants={onFavoriteRestaurants}
        deleteRestaurant={deleteRestaurant}
      />
    );
  });
  return <div>{favoriteCard}</div>;
}

export default Favorites;
