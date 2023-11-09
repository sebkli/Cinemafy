import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="col col-sm-2">
      <form className="form-control ">
        <input
          type="search"
          placeholder="Search for movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
