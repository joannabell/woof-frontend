import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Header({ searchTerm, setSearchTerm }) {
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
              Log In
            </a>
          </NavLink>
          <NavLink to="reviews">
            <a className="btn btn-secondary" href="#" role="button">
              Favorites
            </a>
          </NavLink>
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
