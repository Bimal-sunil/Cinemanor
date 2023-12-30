import { combineReducers } from "redux";
import currentSelectionReducer from "../slices/currentSelectionSlice";
import currentGenreReducer from "../slices/currentGenre";
import searchTermReducer from "../slices/searchTermSlice";

const rootReducer = combineReducers({
  currentSelection: currentSelectionReducer,
  currentGenre: currentGenreReducer,
  searchTerm: searchTermReducer,
});

export default rootReducer;
