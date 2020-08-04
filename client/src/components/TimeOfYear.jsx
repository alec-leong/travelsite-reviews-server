import React from 'react';
import PropTypes from 'prop-types';
import sha256 from 'crypto-js/sha256';
import { Label, P } from '../css/style';

const TimeOfYear = ({ timeOfYear, handleChange }) => (
  <form>
    <P>Time of year</P>
    {Object.entries(timeOfYear).map(([rangeOfMonths, isSelected]) => (
      <Label key={sha256(rangeOfMonths, 'time of year').toString()}>
        <input
          type="checkbox"
          name={rangeOfMonths}
          checked={isSelected}
          onChange={handleChange}
        />
        {rangeOfMonths}
        <br />
      </Label>
    ))}
  </form>
);

TimeOfYear.propTypes = {
  timeOfYear: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TimeOfYear;
