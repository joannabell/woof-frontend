import './App.css';
import Header from "./Header";
import ImageContainer from "./ImageContainer"
import ReviewContainer from "./ReviewContainer"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ restaurants, setRestaurants ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")//updates on search change
  const [ addedReviews, setAddedReviews ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ users, setUsers ] = useState([])

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

   

  const restaurantsToDisplay = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()));




  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <ReviewContainer setRestaurants={setRestaurants} restaurants={restaurants}
      restaurantsToDisplay={restaurantsToDisplay}/>
    </div>   
  )
}

export default App;
