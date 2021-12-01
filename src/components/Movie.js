import React from "react";
import { StarFill } from "react-bootstrap-icons";

const Movie = ({ movie }) => {
  return (
    <div className="movie r-flex justify-content-start ">
      <div className="movie-img d-flex justify-content-center">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt="movie poster"
        />
      </div>
      <div className="movie-info r-flex justify-content-space-between ">
        <h2 className="movie-title">{movie.title}</h2>
        <h4 className="movie-rating">
          Rating: {movie.vote_average}{" "}
          <StarFill
            size={15}
            color="#FFD700
"
          />
        </h4>
        <div className="movie-overview">
          <h3> Overview:</h3>
          <p>{movie.overview} </p>
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            alt="link-to-site"
          >
            <h4> For more details click here</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
