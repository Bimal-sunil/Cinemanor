import { createSlice } from "@reduxjs/toolkit";

type CurrentGenreState = {
  genreId: number;
  genreName: string;
};

const initialState: CurrentGenreState = {
  genreId: 0,
  genreName: "",
};

const currentGenreSlice = createSlice({
  name: "currentGenre",
  initialState,
  reducers: {
    updateCurrentGenre: (state, action) => {
      state.genreId = action.payload.genreId;
      state.genreName = action.payload.genreName;
    },
  },
});

export const { updateCurrentGenre } = currentGenreSlice.actions;
export default currentGenreSlice.reducer;
