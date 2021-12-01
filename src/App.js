import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NowPlaying from "./components/NowPlaying";
import Popular from "./components/Popular";
import SearchBar from "./components/SearchBar";
import TopRated from "./components/TopRated";
import "./App.css";
import SearchedMovies from "./components/SearchedMovies";

const App = () => {
  const [moviesResults, setMoviesResults] = useState([]);

  const [search, setSearch] = useState("");

  const searchMovie = async (search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0d56c19aea29ea2e4298b121a9b5cf15&language=en-US&query=${search}&page=1&include_adult=false`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMoviesResults(responseJson.results);
    }
    if (search === "") {
      setMoviesResults([]);
    }
  };

  useEffect(() => {
    searchMovie(search);
  }, [search]);

  return (
    <div>
      <div className="container-fluid  header">
        <div className="d-flex justify-content-between">
          <h1>Movies </h1>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="container-fluid movie-app">
        <div className="col">
          <h1>
            {moviesResults.length ? `Viewing results for "${search}"` : null}
          </h1>
        </div>
        <div className="row">
          <SearchedMovies moviesResults={moviesResults} />
        </div>
        <div className="col">
          <h1>Now playing</h1>
        </div>
        <div className="row">
          <NowPlaying />
        </div>
        <div className="col">
          <h1>Popular</h1>
        </div>
        <div className="row">
          <Popular />
        </div>
        <div className="col">
          <h1>Top rated</h1>
        </div>
        <div className="row">
          <TopRated />
        </div>
      </div>
    </div>
  );
};

export default App;
