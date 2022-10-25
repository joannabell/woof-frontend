import './App.css';
import Header from "./Header";
import ImageContainer from "./ImageContainer"
import ReviewContainer from "./ReviewContainer"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((data) => console.log(data))
  }, []);




  return (
    <div className="App">
      <Header />
      <ImageContainer />
      <ReviewContainer />
    </div>   
  )
}

export default App;
