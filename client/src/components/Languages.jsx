import React from 'react';
import PropTypes from 'prop-types';
import sha256 from 'crypto-js/sha256';
import { Label, P, Span } from '../css/style';

const Languages = ({ language, selected, handleChange }) => (
  <form>
    <P>Language</P>
    {Object.entries(language).map(([lang, count]) => (
      <Label key={sha256(lang, 'language').toString()}>
        <input
          type="radio"
          name={lang}
          checked={selected === lang}
          onChange={handleChange}
        />
        {lang}
        &nbsp;
        <Span>{count}</Span>
        <br />
      </Label>
    ))}
  </form>
);

Languages.propTypes = {
  language: PropTypes.objectOf(PropTypes.number).isRequired,
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Languages;
