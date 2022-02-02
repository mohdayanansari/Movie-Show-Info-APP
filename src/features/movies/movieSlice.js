import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    try {
      const response = await movieApi.get(
        `?apikey=${ApiKey}&s=${movieText}&type=movie`
      );
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    try {
      const response = await movieApi.get(
        `?apikey=${ApiKey}&s=${seriesText}&type=series`
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    try {
      const response = await movieApi.get(
        `?apikey=${ApiKey}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending!");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Failure!!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
