const faker = require('faker');
const _ = require('underscore');
const mongoose = require('mongoose');
const colors = require('colors');
const Promise = require('bluebird');





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

const {Schema} = mongoose;

// configuration
const SERVER = '127.0.0.1:27017';
const DB = 'tripAdvisor';
const URI = `mongodb://${SERVER}/${DB}`;
const OPTIONS =  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false};
const COLLECTION = 'listings';

// initial connection and handle initial connection errors
mongoose.connect(URI, OPTIONS)
  .then(() => console.log(`Connected to ${'mongoDB'.green} Database`))
  .catch(err => console.error(err))

// connection to database
const db = mongoose.connection;

// handle errors after initial connection was established by listening for error events on the connection
db.on('error', err => console.error(err));

const dropCollection = (collection) => {
  return new Promise((resolve, reject) => {
    // drop `listings` collection if exists
    db.db.dropCollection(collection, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  }); // end Promise
}

const populateDb = () => {
  console.log(`Collection ${COLLECTION.green} ${"created".cyan}`);

  // instance of schema 
  const reviewSchema = new Schema({
    username: String,
    location: String,
    contributions: Number,
    rating: Number,
    title: String,
    review: String,
    dateOfReview: String,
    dateofTrip: String,
    tripType: String,
    helpful: Number,
  });

  const listingsSchema = new Schema({
    reviews: [reviewSchema]
  });

  // create model(model_name, instance_of_schema, collection_name)
  const Reviews = mongoose.model(COLLECTION, listingsSchema);

  // populate database
  listings.map((listing) => {
    new Reviews(listing).save((err, reviews) => {
      err ? console.error(err) : console.log(`Document ${reviews._id.toString().green} ${"added".cyan}`)
    })
  });
}

// successful connection
db.once('open', () => {
  console.log(`Using database ${db.name.green}`);

  dropCollection(COLLECTION)
    .then(res => { // res - A Boolean
      console.log(`Collection ${COLLECTION.green} ${"dropped".yellow}`);
      populateDb();
    })
    .catch(err => {
      populateDb()
    })
});

