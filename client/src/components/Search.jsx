import React  from 'react';
import { FormSearch, InputSearch } from '../css/style';

const Search = ({ handleChange, handleSubmit }) => (
  <FormSearch onSubmit={handleSubmit}>
    &#x1f50e;
    <InputSearch
      onChange={handleChange}
    />
  </FormSearch>
);

export default Search;
