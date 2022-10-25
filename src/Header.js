import React from "react";
import SearchBar from "./SearchBar"

function Header() {
  return (
    <div>
      <h1>
        <span id="header-project" className="gradient-text">
          Woof 🐾
        </span>
      </h1>
      <SearchBar />
    </div>
  );
}

export default Header;
