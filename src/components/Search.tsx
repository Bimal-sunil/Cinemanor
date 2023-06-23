import React, { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../styles/Search.css";

function Search() {
  const [isActive, setIsActive] = useState(false);
  const handleSearchClick = () => {
    if (isActive) {
      console.log("Active");
    } else {
      setIsActive(true);
    }
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
      <div className={isActive ? "search-bar-active" : "search-bar"}>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies"
        />
        <i
          className="uil uil-search search-icon"
          onClick={handleSearchClick}></i>
      </div>
    </OutsideClickHandler>
  );
}

export default Search;
