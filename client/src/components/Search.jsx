import React, { Component } from 'react';

const Search = ({ search, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    &#x1f50e;
    <input
      type="search"
      name="search"
      placeholder="Search reviews"
      onChange={handleChange}
    />
  </form>
);

export default Search;
