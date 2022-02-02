import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
//   console.log("🚀🚀", movies);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="px-10">
        <div className="">
          <h1 className="text-2xl opacity-70 text-white text-center mb-10">
            All the information related movies.
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-5">{renderMovies}</div>
      </div>
      {/* ------------------------------------------------------------------- */}
      <div className="px-10 mt-20">
        <div className="">
          <h1 className="text-2xl opacity-70 text-white text-center mb-10">
            All the information related Web Series.
          </h1>
        </div>
        <div className="grid grid-cols-5 gap-5">{renderShows}</div>
      </div>
    </>
  );
};

export default MovieListing;
