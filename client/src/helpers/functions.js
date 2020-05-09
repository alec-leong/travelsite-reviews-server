/**
 * Determine if `field` is a plural.
 * @param {Number} field - The `field`
 * @returns {String} 's' if `field` > 1, otherise ''
 */
const isPlural = (field) => field > 1 ? 's' : '';

const months = [
  { 'Mar-May': ['March', 'April', 'May'] },
  { 'Jun-Aug': ['June', 'July', 'August' ]},
  { 'Sep-Nov': ['September', 'October', 'November'] },
  { 'Dec-Feb': ['December', 'January', 'February'] },
];

/**
 * Time of year filter
 * @param {Array} times - An array of objects; each key is a month range and value is a boolean
 * @param {Array} reviews - An array of objects; each object is a review
 * @returns {Array} An array of reviews that satisfy a regular expression
 */
const filterMonths = (times, reviews) => {
  // get the months, e.g. if { 'Jun-Aug': true } then selected = [ 'June', 'July', 'August']
  const selected = times.reduce((accum, time, index) => {
    const [key] = Object.keys(time);
  
    time[key] ? accum.push(...months[index][key]) : false;
  
    return accum;
  }, []);

  // create the regular expression, e.g. /(June.*|July.*|August.*)/
  let regex; 
  if (selected.length) {
    regex = new RegExp(selected.reduce((accum, month, index) => {
      index !== selected.length - 1 ? accum += `${month}.*|` : accum += `${month}.*)`;
    
      return accum;
    }, '('));
  } else {
    return reviews;
  }

  // return reviews that satisfy the regular expression
  return reviews.filter((review) => regex.test(review.dateOfTrip));
}


export {
  isPlural,
  filterMonths,
}
