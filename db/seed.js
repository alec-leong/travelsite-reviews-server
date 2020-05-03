const faker = require('faker');
const _ = require('underscore');
const colors = require('colors');
const {connection, Listings} = require('./index.js');





/*================================== Faker ===================================*/

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const tripType = [
  'Couples', 'Family (young children)', 'Family (teens)',
  'Friends', 'Business', 'Solo',
];

/**
 * listings = [
 *  { reviews: [{}, {}, ..., {}] },
 *  { reviews: [{}, {}, ..., {}] }
 *  .
 *  .
 *  .
 *  { reviews: [{}, {}, ..., {}] }
 * ]
 */

let index = 0;
let year = 0;

const listings = _.range(0, 100).reduce((trips, value) => {
  trips.push({
    reviews: _.range(0, _.random(1, 100)).reduce((reviews, value) => {
      index = _.random(0, months.length - 1);
      year = _.random(2015, 2020);

      reviews.push({
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

      return reviews;
    }, [])
  });

  return trips;
}, []);





/*================================= MongoDB ==================================*/

// drop collection `listings` if exists
connection.dropCollection(Listings.modelName)
  .then(res => res ? console.log(`'${Listings.modelName.green}' ${"collection dropped".yellow}`) : null)
  .catch(({errmsg}) => console.error(`'${Listings.modelName}': ${errmsg}`.red))

// create an array of promises to save documents to collection
const promises = listings.reduce((accum, listing) => {
  accum.push(new Listings(listing).save())

  return accum;
}, []);

// save documents to collection
Promise.all(promises)
  .then(({length}) => console.log(`${length} documents saved to '${Listings.modelName}'`.green))
  .catch(console.error)
