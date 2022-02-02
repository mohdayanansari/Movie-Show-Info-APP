import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import MovieListing from "../Movie/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="bg-red-900 py-10">
      {/* <form action="" className="flex justify-center">
            <input type="text" name="search" placeholder="Search for movies..." id="" />
        </form> */}
      <MovieListing />
    </div>
  );
};

export default Home;
