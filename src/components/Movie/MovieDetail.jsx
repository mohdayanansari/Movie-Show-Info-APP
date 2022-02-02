import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log("💗💗", data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="bg-red-800 px-10 grid grid-cols-12 text-white pt-10">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="col-span-10 flex flex-col gap-5 pr-10">
            <h1 className="text-4xl font-semibold text-red-400">
              {data.Title}
            </h1>
            <div className="flex gap-4">
              <p>Imdb Rating: {data.imdbRating}</p>
              <p>Imdb Votes: {data.imdbVotes}</p>
              <p>Total Runtime: {data.Runtime}</p>
              <p>Released: {data.Released}</p>
              <p>Rated: {data.Rated}</p>
              <p>DVD: {data.DVD}</p>
            </div>
            <p>{data.Plot}</p>
            <p>Director: {data.Director}</p>
            <p>Stars: {data.Actors}</p>
            <p>Writer: {data.Writer}</p>
            <p>Genre: {data.Genre}</p>
            <p>Language: {data.Language}</p>
            <p>Awards: {data.Awards}</p>
            <p>Metascore: {data.Metascore}</p>
            <p>Country: {data.Country}</p>
            <p>Year: {data.Year}</p>
          </div>
          <div className="col-span-2 ">
            <img src={data.Poster} alt="Poster" className="object-cover" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
