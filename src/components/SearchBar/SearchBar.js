import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="searchbar-text"
          type="text"
          placeholder="What are you looking for?"
        />
        <div className="searchbar-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
