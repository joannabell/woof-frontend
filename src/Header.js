import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>
        <span id="header-project" className="gradient-text">
          Woof 🐾
        </span>
      </h1>
      <Search />
      <div className="nav-links">
        <NavLink className="register-link" to="/users">
          Register {" "}
        </NavLink>
        <NavLink className="reviews-link" to="/reviews">
          {" "} Reviews
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
