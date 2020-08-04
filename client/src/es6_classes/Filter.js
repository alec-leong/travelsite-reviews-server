const _ = require('underscore');

/**
 * Creates a new Filter.
 * @class
 * @classdesc A class to filter reviews.
 * @static {number} `Filter.#maxRating` - The max traveler rating.
 * @static {Object} `Filter.#rangeOfMonths` - An object where each key is range of months and value is a list of months.
 */
class Filter {
  static #maxRating = 5; 
  static #rangeOfMonths = {
    'Mar-May': ['March', 'April', 'May'],
    'Jun-Aug': ['June', 'July', 'August'],
    'Sep-Nov': ['September', 'October', 'November'],
    'Dec-Feb': ['December', 'January', 'February'],
  };

  /**
   * Filter by selected traveler rating(s), traveler type(s) and time(s) of year.
   * @param {Array} reviews - An array of objects where each object is a review.
   * @param {Object} travelerRating - An object where each key is a rating and value is a boolean.
   * @param {Object} timeOfYear - An object where each key is a range of months and value is a boolean.
   * @param {Array} travelerType - An array of objects where each key is a trip type and value is a boolean.
   * @param {Array} targetString - A sequence of characters to search.
   * @returns {Array} An array of reviews filtered by selected traveler rating(s), traveler type(s) and time(s) of year.
   */
  filterAll(reviews, travelerRating, timeOfYear, travelerType, targetString) {
    reviews = this.filterMonths(timeOfYear, reviews);
    reviews = this.filterRatings(travelerRating, reviews);
    reviews = this.filterTypes(travelerType, reviews);
    reviews = this.filterSearch(targetString, reviews);
  
    return reviews;
  }

  /**
   * Time of year filter.
   * @param {Object} timeOfYear - An object where each key is a range of months and value is a boolean.
   * @param {Array} reviews - An array of objects where each object is a review.
   * @returns {Array} An array of reviews that satisfy a regular expression of selected `timeOfYear`.
   */
  filterMonths(timeOfYear, reviews) {
    // Get the months, e.g. if { 'Jun-Aug': true } then selectedMonths = [ 'June', 'July', 'August'].
    const selectedMonths = Object.entries(timeOfYear).reduce((accum, [listOfMonths, isSelected]) => {
      if (isSelected) {
        accum.push(...Filter.#rangeOfMonths[listOfMonths]);
      }

      return accum;
    }, []);

    // Create the regular expression, e.g. /(June.*|July.*|August.*)/.
    let regexMonths;
    if (selectedMonths.length) {
      regexMonths = new RegExp(selectedMonths.reduce((accum, month, index) => {
        if (index !== selectedMonths.length - 1) {
          accum += `${month}.*|`;
        } else {
          accum += `${month}.*)`;
        }

        return accum;
      }, '('));
    } else {
      return reviews;
    }

    // Return reviews that satisfy the regular expression.
    return reviews.filter(({ dateOfTrip }) => regexMonths.test(dateOfTrip));
  }

  /**
   * Traveler rating filter.
   * @param {Object} travelerRating - An object where each key is a rating and value is a boolean.
   * @param {Array} reviews - An array of objects where each object is a review.
   * @returns {Array} An array of reviews that satisfy a regular expression of selected `travelerRating` keys.
   */
  filterRatings(travelerRating, reviews) {
    // Create an array of numbers of selected `travelerRating` keys where 'Excellent' -> 5,
    // 'Very Good' -> 4, 'Average' -> 3, 'Poor' -> 2, 'Terrible' -> 1.
    // E.g. [5, 1] -> 'Excellent' was selected then 'Terrible'.
    const selectedRatings = Object.values(travelerRating).reduce((accum, isSelected, index) => {
      if (isSelected) {
        accum.push(Filter.#maxRating - index); // {number} `Filter.#maxRating` - The max traveler rating.
      }

      return accum;
    }, []);

    let regexRatings;
    if (selectedRatings.length) {
      // Create a regular expression. E.g. /(5|4|1)/ -->  'Excellent' was selected then 'Very GOod'
      // then 'Terrible'.
      regexRatings = new RegExp(selectedRatings.reduce((accum, type, index) => {
        if (index !== selectedRatings.length - 1) {
          accum += `${type}|`;
        } else {
          accum += `${type})`;
        }

        return accum;
      }, '('));
    } else {
      return reviews;
    }

    return reviews.filter(({ rating }) => regexRatings.test(rating));
  }

  /**
   * Filter an array of `reviews` by string `target`.
   * @param {string} target - A sequence of characters to search.
   * @param {Array} reviews - An array of objects where each object is a review.
   */
  filterSearch(target, reviews) {
    const uniqueWords = _.uniq(target.toLowerCase().trim().split(/\s+/));
  
    return uniqueWords.length
      ? reviews.filter((review) => {
          for (let word of uniqueWords) {
            if (review.review.toLowerCase().includes(word)) {
              return review;
            }
          }
        })
      : reviews;
  }

  /**
   * Travel type filter.
   * @param {Array} travelerType - An array of objects where each key is a trip type and value is a boolean.
   * @param {Array} reviews - An array of objects where each object is a review.
   * @returns {Array} An array of reviews that satisfy a regular expression if selected travel `travelerType`.
   */
  filterTypes(travelerType, reviews) {
    const selectedTypes = Object.entries(travelerType).reduce((accum, [type, isSelected]) => {
      if (isSelected) {
        accum.push(type);
      }

      return accum;
    }, []);

    let regexTypes;
    if (selectedTypes.length) {
      regexTypes = new RegExp(selectedTypes.reduce((accum, type, index) => {
        // handle Family (young children) or Family (teens)
        type = type === 'Families' ? 'Family.*' : type;

        index !== selectedTypes.length - 1 ? accum += `${type}|` : accum += `${type})`;

        return accum;
      }, '('));
    } else {
      return reviews;
    }

    return reviews.filter(({ tripType }) => regexTypes.test(tripType));
  }
}

const filter = new Filter();

module.exports = filter;
