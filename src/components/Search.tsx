import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../styles/Search.css";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import {
  clearSearchTerm,
  setSearchTerm,
} from "../redux/slices/searchTermSlice";
import { useNavigate } from "react-router-dom";

function Search() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.searchTerm.searchTerm);
  const handleSearchClick = () => {
    if (isActive) {
      navigate(`/search?search_term=${searchTerm}`);
    } else {
      setIsActive(true);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchTerm(undefined));
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    if (event.key === "Enter") [navigate(`/search?search_term=${searchTerm}`)];
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
      <div className={isActive ? "search-bar-active" : "search-bar"}>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(event) => handleSearchChange(event)}
          onKeyDown={(event) => handleSearchKeyDown(event)}
        />
        {searchTerm !== "" && isActive && (
          <i
            className="uil uil-times clear-icon"
            onClick={handleClearSearch}></i>
        )}
        <i
          className="uil uil-search search-icon"
          onClick={handleSearchClick}></i>
      </div>
    </OutsideClickHandler>
  );
}

export default Search;
