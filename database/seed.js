require('dotenv').config();
const _ = require('underscore');
const AES = require('crypto-js/aes');
const colors = require('colors');
const faker = require('faker');
const db = require('./index.js');
const Listings = require('./model.js');

const key = process.env.REVIEW_LIST_KEY || '';

/* =========================================== Faker ============================================ */

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

const listings = _.range(0, 100).reduce((trips, listingId) => {
  const publicListingId = AES.encrypt(`${listingId}`, key).toString();

  trips.push({
    _id: listingId, // Override ObjectId - the SHA.
    publicListingId,
    reviews: _.range(0, _.random(1, 100)).reduce((reviews, reviewId) => {
      index = _.random(0, months.length - 1);
      year = _.random(2015, 2020);

      reviews.push({
        _id: reviewId,
        publicReviewId: AES.encrypt(`${listingId},${reviewId}`, key).toString(),
        publicListingId,
        username: faker.internet.userName(),
        location: `${faker.address.city()}, ${faker.address.state()}`,
        contributions: _.random(1, 1000),
        rating: _.random(1, 5),
        title: faker.lorem.sentence(),
        review: faker.lorem.paragraph(5),
        dateOfReview: `${months[index]} ${year}`,
        dateOfTrip: `${months[_.random(0, index)]} ${year}`,
        tripType: tripType[_.random(0, tripType.length - 1)],
        helpful: _.random(1, 1000),
      });

      return reviews;
    }, []),
  });

  return trips;
}, []);

/* ========================================== MongoDB =========================================== */

// Drop collection `listings` if exists.
Listings.collection.drop()
  .then((res) => (res ? console.log(`'${Listings.modelName.green}' ${'collection dropped'.yellow}`) : null))
  .catch(({ errmsg }) => console.error(colors.red(`'${Listings.modelName}': ${errmsg}`)));

// Create an array of promises to save documents to collection.
const promises = listings.reduce((accum, listing) => {
  accum.push(new Listings(listing).save());

  return accum;
}, []);

// Save documents to collection.
Promise.all(promises)
  .then(({ length }) => console.log(`${length.toString().cyan} documents saved to '${Listings.modelName.green}'`))
  .catch(console.error)
  .finally(() => db.close());
