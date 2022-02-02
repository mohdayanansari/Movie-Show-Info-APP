import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ data }) => {
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div className="bg-red-800 px-5 py-6 rounded-lg  drop-shadow-lg border border-red-900 hover:z-10 transition-all transform duration-300 hover:scale-[1.05] cursor-pointer">
        <img
          src={data.Poster}
          alt="poster"
          className="rounded drop-shadow-md object-cover w-full h-[350px]"
        />

        <h1 className="mt-5 text-white font-bold">{data.Title}</h1>

        <p className="text-xs font-bold text-red-300">{data.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
