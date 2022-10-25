import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import { useEffect } from "react"




function App() {
  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((r) => r.json())
      .then((data) => console.log(data))
  }, []);
  
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
    </div>
  )
}

export default App;
