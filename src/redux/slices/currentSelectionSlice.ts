import { createSlice } from "@reduxjs/toolkit";
import { MovieListType, TvShowListType } from "../../utils/types";

type ContentData = MovieListType | TvShowListType;

type CurrentMovieSliceState = {
  data: ContentData | null;
};

const initialState: CurrentMovieSliceState = {
  data: null,
};

const currentMovieSlice = createSlice({
  name: "currentSelection",
  initialState,
  reducers: {
    updateCurrentSelection: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateCurrentSelection } = currentMovieSlice.actions;
export default currentMovieSlice.reducer;
