import './App.css';
import Header from "./Header"
import { useEffect } from "react"


function App() {
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((data) => console.log(data))

  }, []);
  
  return (
    <div className="App">
      <NavBar />
    </div>
  )
}

export default App;
