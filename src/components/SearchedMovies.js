import React from "react";
import Movie from "./Movie";

const SearchedMovies = ({ moviesResults }) => {
  return (
    <>
      {moviesResults.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default SearchedMovies;
