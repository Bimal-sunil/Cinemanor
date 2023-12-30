import { createSlice } from "@reduxjs/toolkit";

type SearchTermState = {
  searchTerm: string;
};

const initialState: SearchTermState = {
  searchTerm: "",
};

const SearchTermSlice = createSlice({
  name: "SearchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearSearchTerm: (state, action) => {
      state.searchTerm = "";
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = SearchTermSlice.actions;
export default SearchTermSlice.reducer;
