import React from "react";
import "./Search"

function Search({handleSearchChange, searchValue}) {


    return (
        <div className="search">
            <form className="search-bar">
                <input type="text" placeholder="Search restaurants..." value={searchValue} onChange={handleSearchChange}/>
            </form>
        </div>
    )

}

export default Search
