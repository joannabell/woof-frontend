import React from "react";
import Search from "./Search";
import { NavLink, Route, Routes } from "react-router-dom";
import NewRestaurantForm from "./NewRestaurantForm"
import Favorites from "./Favorites"

function Header({ searchTerm, setSearchTerm, restaurants, setRestaurants }) {

    const handleAddRestaurant = (newRestaurant) => {
        setRestaurants([newRestaurant, ...restaurants])
      }

  return (
    <div>
      <h1>
        <span id="header-project" className="title-text">
          woof 🐾
        </span>
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="nav-links">
        <div className="right">
        <NavLink to="/">
            <a className="btn btn-secondary" href="http://localhost:3000/" role="button">
              Home
            </a>
          </NavLink>
          <NavLink to="/user">
            <a className="btn btn-secondary" href="#" role="button">
              Add New Restaurant
            </a>
          </NavLink>
          <NavLink to="favorites">
            <a className="btn btn-secondary" href="#" role="button">
              Favorites
            </a>
          </NavLink>
          <Routes>
            <Route path="/user" element={<NewRestaurantForm handleAddRestaurant={handleAddRestaurant}/>} />
            <Route path="/favorites" element={<Favorites/>} />
          </Routes>
          
        </div>
      </div>
    </div>
  );
}
export default Header;

// function Header() {
//     return (
//       <>
//       <header className="navbar">
//         <div className="container">
//           <div class="left">
//             <ul>
//               <li class="active">
//                 <NavLink exact to="/" style={{fontWeight: 'bold'}}>Home</NavLink>
//               </li>

//               <li>
//               <NavLink exact to="/reviews" style={{fontWeight: 'bold'}}>Reviews</NavLink>
//               </li>
//             </ul>
//           </div>

//           <div class="center">
//                 <NavLink exact to="/" style={{fontWeight: 'bold'}}>Woof (emoji)</NavLink>
//           </div>

//         </div>
//       </header>
//       </>
//     );
//   }

//   export default Header;
