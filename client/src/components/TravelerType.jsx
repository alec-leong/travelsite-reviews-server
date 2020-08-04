import React from 'react';
import PropTypes from 'prop-types';
import sha256 from 'crypto-js/sha256';
import { Label, P } from '../css/style';

const TravelerType = ({ travelerType, handleChange }) => (
  <form>
    <P>Traveler type</P>
    {Object.entries(travelerType).map(([type, isSelected]) => (
      <Label key={sha256(type, 'traveler type').toString()}>
        <input
          type="checkbox"
          name={type}
          checked={isSelected}
          onChange={handleChange}
        />
        {type}
        <br />
      </Label>
    ))}
  </form>
);

TravelerType.propTypes = {
  travelerType: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TravelerType;
