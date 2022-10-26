import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>
        <span id="header-project" className="gradient-text">
          woof 🐾
        </span>
      </h1>
      <Search />
      <div className="nav-links">
        <div class="right">
          <a class="btn btn-secondary" href="#" role="button">
            Register
          </a>
          <a class="btn btn-secondary" href="#" role="button">
            Log In
          </a>
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
