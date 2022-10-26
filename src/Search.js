import React from "react";
import "./Search"

function Search({searchTerm, setSearchTerm}) {
    function handleSearchChange(event) {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="restaurant-search">
            <div className="search-bar">
                <input type="text" placeholder="Search restaurants..." value={searchTerm} onChange={handleSearchChange}/>
            </div>
        </div>
    )

}

export default Search
