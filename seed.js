const faker = require('faker');
const _ = require('underscore');

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const tripType = [
  'Couples', 'Family (young children)', 'Family (teens)',
  'Friends', 'Business', 'Solo',
];

let index = 0;
let year = 0;

const data = _.range(0, 100).reduce((accum, value) => {
  index = _.random(0, months.length - 1);
  year = _.random(2015, 2020);

  accum.push({
    username: faker.internet.userName(),
    location: `${faker.address.city()}, ${faker.address.state()}`,
    contributions: _.random(1, 1000),
    rating: _.random(1, 5),
    title: faker.lorem.sentence(),
    review: faker.lorem.paragraph(),
    dateOfReview: `${months[index]} ${year}`,
    dateofTrip: `${months[ _.random(0, index)]} ${year}`,
    tripType: tripType[ _.random(0, tripType.length - 1)],
    helpful: _.random(1, 1000),
  });

  return accum;
}, []);

console.log(data);