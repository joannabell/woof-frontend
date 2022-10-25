import './App.css';
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function App() {
  const [ searchValue, setSearchValue ] = useState("")//updates on search change

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) => console.log(data))

  }, []);

  // search restaurants
  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  const searchedRestaurants = restaurants.filter((restaurant) => {})
  const restaurantName = restaurant.name.toLowerCase()
  const search = searchValue.toLowerCase()

  return (
    <div className="App">
      <NavBar />
    </div>
  )
  }

export default App;
