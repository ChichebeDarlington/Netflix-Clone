import "./Row.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MoviesRow = ({ title, fetchUrl, largeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchMovies = async () => {
    const request = await axiosInstance.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };
  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (!trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //"https://www.youtube.com/watch?v=XtMThy&0kql"
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${baseUrl}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row-poster ${largeRow && "row-poster-large"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MoviesRow;
