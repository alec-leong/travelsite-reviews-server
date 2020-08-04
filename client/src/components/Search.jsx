import React from 'react';
import PropTypes from 'prop-types';
import { FormSearch, InputSearch, LabelSearch } from '../css/style';

const Search = ({ handleChange, handleSubmit }) => (
  <FormSearch onSubmit={handleSubmit}>
    <LabelSearch>
      <InputSearch
        onChange={handleChange}
      />
    </LabelSearch>
  </FormSearch>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
