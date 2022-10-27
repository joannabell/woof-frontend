import './App.css';
import Header from "./Header";
import ImageContainer from "./ImageContainer"
import ReviewContainer from "./ReviewContainer"
import { useState, useEffect, useRef, Route, R } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ restaurants, setRestaurants ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ users, setUsers ] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [listings, setListings] = useState([])
  const [favoriteRes, setFavoriteRes] = useState([])

  const ref = useRef(null)

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(data => data.json())
    .then(restaurants => {
      setRestaurants(restaurants)
    })

    fetch("http://localhost:9292/users")
    .then(data => data.json())
    .then(users => setUsers(users))

    fetch("http://localhost:9292/reviews")
    .then(data => data.json())
    .then(reviews => setReviews(reviews))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/favorite_restaurants")
    .then(data => data.json())
    .then(data => setFavoriteRes(data))
  }, [restaurants])

  const restaurantsToDisplay = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDeleteRestaurant(restaurantToDelete) {
    const updatedRestaurants = listings.filter((listing) => listing.id !== restaurantToDelete.id);
    setListings(updatedRestaurants)
  }



  return (
    <div className="App">
      <Header  favoriteRes={favoriteRes} setFavoriteRes={setFavoriteRes} setSearchTerm={setSearchTerm} searchTerm={searchTerm} restaurants={restaurants} setRestaurants={setRestaurants} />
      <ImageContainer refs={ref}/>
      <ReviewContainer refs={ref} handleDeleteRestaurant={handleDeleteRestaurant} restaurants2={restaurants} setRestaurants={setRestaurants} restaurants={restaurantsToDisplay}/>
  
    </div>   
  )
}

export default App;
