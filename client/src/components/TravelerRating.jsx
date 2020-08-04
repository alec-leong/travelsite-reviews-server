import React from 'react';
import PropTypes from 'prop-types';
import sha256 from 'crypto-js/sha256';
import { Label, P } from '../css/style';

const TravelerRating = ({ travelerRating, handleChange }) => (
  <form>
    <P>Traveler rating</P>
    {Object.entries(travelerRating).map(([rating, isSelected]) => (
      <Label key={sha256(rating, 'traveler rating').toString()}>
        <input
          type="checkbox"
          name={rating}
          checked={isSelected}
          onChange={handleChange}
        />
        {rating}
        <br />
      </Label>
    ))}
  </form>
);

TravelerRating.propTypes = {
  travelerRating: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TravelerRating;
